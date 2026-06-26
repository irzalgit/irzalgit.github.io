import express from "express";
import cors from "cors";

import aiHelp from "./api/ai-help.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai-help", aiHelp);

app.get("/", (req, res) => {
    res.json({
        status: "OK",
        service: "AI Backend"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});