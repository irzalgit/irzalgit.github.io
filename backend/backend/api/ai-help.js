// ============================================================
// backend/api/ai-help.js
// ============================================================

import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { evaluate } from "mathjs";

const router = express.Router();

// ============================================================
// KONFIGURASI
// ============================================================

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ GEMINI_API_KEY tidak ditemukan di environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const MODEL_NAME =
  process.env.GEMINI_MODEL || "gemini-2.5-flash";

// ============================================================
// DEKLARASI TOOL (Calculator)
// ============================================================

const calculatorFunction = {
  name: "calculator",
  description:
    "Menghitung ekspresi matematika. Gunakan tool ini untuk perhitungan yang membutuhkan akurasi tinggi atau angka besar.",

  parameters: {
    type: "object",

    properties: {
      expression: {
        type: "string",
        description:
          "Ekspresi matematika yang valid, misal: '4!', 'sqrt(25)', 'comb(10,4)', '5*3+2'",
      },
    },

    required: ["expression"],
  },
};

// ============================================================
// ROUTER POST
// ============================================================

router.post("/", async (req, res) => {
  try {
    const {
      action,
      questionData,
      generateRequest,
      userId,
      feedback,
    } = req.body;

    // ========================================================
    // ACTION : TEST
    // ========================================================

    if (action === "test") {
      return res.status(200).json({
        success: true,
        message:
          "API Gemini berjalan dengan 2 tools (calculator & generate_questions)",
        model: MODEL_NAME,
        timestamp: new Date().toISOString(),
      });
    }

    // ========================================================
    // ACTION : RECORD ANSWER
    // ========================================================

    if (action === "record_answer") {
      console.log(
        `📝 [Record Answer] User: ${userId}, Kategori: ${feedback?.skill}, Benar: ${feedback?.correct}`
      );

      return res.status(200).json({
        success: true,
        message: "Jawaban siswa berhasil dicatat sistem.",
        timestamp: new Date().toISOString(),
      });
    }

    // ========================================================
    // ACTION : EXPLAIN
    // (lanjut pada Bagian 2)
    // ========================================================

// ==========================================================
// ACTION: explain (dengan tool calculator)
// ==========================================================
if (action === 'explain') {
  const { question, options, topic, correct_answer } = questionData || {};

  if (!question) {
    return res.status(400).json({
      success: false,
      error: 'Question is required.'
    });
  }

  const userPrompt = `
Anda adalah tutor matematika yang sabar dan teliti. Berikan penjelasan langkah demi langkah untuk soal berikut.

**Soal:** ${question}

**Pilihan jawaban:**
${options?.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join('\n') || 'Tidak tersedia'}

**Kategori:** ${topic || 'Matematika'}

**Jawaban yang benar adalah:** ${correct_answer || 'Belum ditentukan'}

**Instruksi tambahan:**
- Jelaskan konsep dasar yang digunakan.
- Tunjukkan langkah-langkah perhitungan secara rinci dan sistematis.
- Untuk perhitungan numerik yang rumit, gunakan tool calculator yang tersedia.
- Berikan alasan mengapa jawaban tersebut benar dan mengapa opsi lain salah (jika ada).
- Gunakan format Markdown untuk struktur yang rapi.
- Jika ada rumus matematika, tulis dalam format LaTeX.
- Pastikan penjelasan mudah dipahami oleh siswa SMA.
`;

  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    systemInstruction:
      'Anda adalah asisten AI yang ahli dalam matematika dan siap membantu siswa. Gunakan tool calculator jika diperlukan untuk perhitungan yang presisi.',
    tools: [
      {
        functionDeclarations: [calculatorFunction]
      }
    ],
    toolConfig: {
      functionCallingConfig: {
        mode: 'AUTO'
      }
    }
  });

  const chat = model.startChat();

  let result = await chat.sendMessage(userPrompt);

  let functionCalls = result.response.functionCalls();

  if (functionCalls && functionCalls.length > 0) {

    const functionResponses = functionCalls.map((call) => {

      let output = '';

      if (call.name === 'calculator') {

        const expr = call.args?.expression || '';

        try {
          output = evaluate(expr).toString();
        } catch (e) {
          output = `Error: ${e.message}`;
        }

      } else {

        output = `Unknown function: ${call.name}`;

      }

      return {
        functionResponse: {
          name: call.name,
          response: {
            result: output
          }
        }
      };

    });

    const result2 = await chat.sendMessage(functionResponses);

    return res.status(200).json({
      success: true,
      explanation: result2.response.text(),
      model: MODEL_NAME,
      toolCalled: true
    });

  }

  return res.status(200).json({
    success: true,
    explanation: result.response.text(),
    model: MODEL_NAME,
    toolCalled: false
  });

}