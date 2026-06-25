// ============================================================
//  LANGKAH 1: AGENT GOAL SETTING SYSTEM
//  Purpose: AI secara otomatis menetapkan target pembelajaran
//  Membuat aplikasi menjadi 30% Agentic AI
// ============================================================

class LearningAgent {
  constructor() {
    this.goals = {};
    this.performance = {};
    this.sessionStart = new Date();
    this.initialized = false;
  }

  /**
   * LANGKAH 1A: Inisialisasi Learning Goals secara OTOMATIS
   * Agent menganalisis topik dan membuat target yang realistis
   */
  initializeLearningGoals(kelasType) {
    const topics = this.extractTopics(kelasType);
    
    this.goals = {};
    this.performance = {};

    topics.forEach(topic => {
      // Agent membuat keputusan: target apa untuk setiap topik
      const targetAccuracy = this.calculateTargetAccuracy(topic);
      
      this.goals[topic] = {
        name: topic,
        targetAccuracy: targetAccuracy,      // Misal: 85%
        targetQuestionsPerTopic: 5,           // Minimum soal per topik
        priority: this.calculatePriority(topic), // HIGH, MEDIUM, LOW
        createdAt: new Date(),
        status: 'ACTIVE'
      };

      this.performance[topic] = {
        correct: 0,
        total: 0,
        accuracy: 0,
        currentStreak: 0,
        maxStreak: 0,
        timeSpent: 0
      };
    });

    this.initialized = true;
    console.log('🤖 Agent Learning Goals Initialized:', this.goals);
    this.displayAgentInitializationMessage();
    return this.goals;
  }

  /**
   * LANGKAH 1B: Agent memutuskan target accuracy untuk setiap topik
   * Ini adalah autonomous decision making
   */
  calculateTargetAccuracy(topic) {
    // Kategori sulit: Deret, Trigonometri, Fungsi
    const hardTopics = ['Deret', 'Trigonometri', 'Fungsi'];
    
    // Kategori mudah: Statistik dasar, Peluang
    const easyTopics = ['Statistik', 'Peluang'];
    
    // Agent logic: set target lebih tinggi untuk topik mudah
    if (hardTopics.some(t => topic.includes(t))) {
      return 75; // Target 75% untuk topik sulit
    } else if (easyTopics.some(t => topic.includes(t))) {
      return 85; // Target 85% untuk topik mudah
    } else {
      return 80; // Target default 80%
    }
  }

  /**
   * LANGKAH 1C: Agent menentukan prioritas topik
   * HIGH = perlu fokus, MEDIUM = normal, LOW = sudah dikuasai
   */
  calculatePriority(topic) {
    // Ini adalah autonomous prioritization
    if (topic.includes('Deret')) {
      return 'HIGH'; // Deret adalah kunci untuk banyak topik
    } else if (topic.includes('Peluang')) {
      return 'HIGH'; // Peluang penting
    } else if (topic.includes('Statistik')) {
      return 'MEDIUM';
    } else {
      return 'MEDIUM';
    }
  }

  /**
   * LANGKAH 1D: Extract semua topik unik dari data soal
   */
  extractTopics(kelasType) {
    let soal = kelasType === 'x' ? soalKelasX : soalKelasXI;
    
    // Agent mengumpulkan semua topik unik
    const topicsSet = new Set();
    soal.forEach(s => {
      if (s.kategori) {
        topicsSet.add(s.kategori);
      }
    });

    return Array.from(topicsSet).sort();
  }

  /**
   * LANGKAH 1E: Update performa real-time
   * Dipanggil setiap kali user menjawab soal
   */
  updatePerformance(topic, isCorrect, timeSpent = 0) {
    if (!this.performance[topic]) {
      this.performance[topic] = {
        correct: 0,
        total: 0,
        accuracy: 0,
        currentStreak: 0,
        maxStreak: 0,
        timeSpent: 0
      };
    }

    const perf = this.performance[topic];
    perf.total++;
    perf.timeSpent += timeSpent;

    if (isCorrect) {
      perf.correct++;
      perf.currentStreak++;
      perf.maxStreak = Math.max(perf.maxStreak, perf.currentStreak);
    } else {
      perf.currentStreak = 0;
    }

    perf.accuracy = (perf.correct / perf.total) * 100;

    console.log(`📊 Agent Updated - ${topic}: ${perf.accuracy.toFixed(1)}% (${perf.correct}/${perf.total})`);

    return perf;
  }

  /**
   * LANGKAH 1F: Agent memberikan rekomendasi berdasarkan goals
   * Ini adalah autonomous recommendation
   */
  getAgentRecommendation() {
    const recommendations = [];

    Object.keys(this.goals).forEach(topic => {
      const goal = this.goals[topic];
      const perf = this.performance[topic];

      if (!perf || perf.total === 0) {
        recommendations.push({
          type: 'START',
          topic: topic,
          message: `🎯 Mulai ${topic}`,
          priority: goal.priority,
          actionable: true
        });
      } else if (perf.accuracy < goal.targetAccuracy - 10) {
        recommendations.push({
          type: 'URGENT',
          topic: topic,
          message: `⚠️ ${topic}: ${perf.accuracy.toFixed(0)}% < ${goal.targetAccuracy}%`,
          priority: 'HIGH',
          gap: goal.targetAccuracy - perf.accuracy,
          actionable: true
        });
      } else if (perf.accuracy < goal.targetAccuracy) {
        recommendations.push({
          type: 'CLOSE',
          topic: topic,
          message: `📈 ${topic}: ${perf.accuracy.toFixed(0)}% → ${goal.targetAccuracy}%`,
          priority: 'MEDIUM',
          gap: goal.targetAccuracy - perf.accuracy,
          actionable: true
        });
      } else {
        recommendations.push({
          type: 'ACHIEVED',
          topic: topic,
          message: `✅ ${topic}: ${perf.accuracy.toFixed(0)}%`,
          priority: 'LOW',
          actionable: false
        });
      }
    });

    // Sort by priority dan actionable
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    recommendations.sort((a, b) => {
      if (a.actionable && !b.actionable) return -1;
      if (!a.actionable && b.actionable) return 1;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return recommendations;
  }

  /**
   * LANGKAH 1G: Cek apakah semua goals sudah tercapai
   */
  areAllGoalsAchieved() {
    const totalGoals = Object.keys(this.goals).length;
    if (totalGoals === 0) return false;

    return Object.keys(this.goals).every(topic => {
      const perf = this.performance[topic];
      if (!perf || perf.total === 0) return false;
      return perf.accuracy >= this.goals[topic].targetAccuracy;
    });
  }

  /**
   * LANGKAH 1H: Get learning progress summary
   */
  getLearningProgressSummary() {
    const summary = {
      totalGoals: Object.keys(this.goals).length,
      achievedGoals: 0,
      inProgressGoals: 0,
      notStartedGoals: 0,
      overallAccuracy: 0,
      totalQuestionsAnswered: 0,
      allAchieved: false
    };

    let totalCorrect = 0;
    let totalQuestions = 0;

    Object.keys(this.goals).forEach(topic => {
      const goal = this.goals[topic];
      const perf = this.performance[topic];

      if (!perf || perf.total === 0) {
        summary.notStartedGoals++;
      } else if (perf.accuracy >= goal.targetAccuracy) {
        summary.achievedGoals++;
      } else {
        summary.inProgressGoals++;
      }

      totalCorrect += perf?.correct || 0;
      totalQuestions += perf?.total || 0;
    });

    summary.overallAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions * 100).toFixed(2) : 0;
    summary.totalQuestionsAnswered = totalQuestions;
    summary.allAchieved = this.areAllGoalsAchieved();
    
    return summary;
  }

  /**
   * LANGKAH 1I: Get learning goals display data
   * Format untuk UI
   */
  getGoalsForDisplay() {
    return Object.keys(this.goals).map(topic => {
      const goal = this.goals[topic];
      const perf = this.performance[topic];

      return {
        topic: topic,
        target: goal.targetAccuracy,
        current: perf?.accuracy || 0,
        progress: perf?.total || 0,
        correct: perf?.correct || 0,
        status: !perf || perf.total === 0 
          ? 'NOT_STARTED' 
          : perf.accuracy >= goal.targetAccuracy 
          ? 'ACHIEVED' 
          : 'IN_PROGRESS',
        priority: goal.priority,
        gap: goal.targetAccuracy - (perf?.accuracy || 0)
      };
    });
  }

  /**
   * LANGKAH 1J: Get next recommended topic (Agent autonomous decision)
   */
  getNextRecommendedTopic() {
    const goalsDisplay = this.getGoalsForDisplay();
    
    // Sort by: not started → in progress (dengan gap besar) → achieved
    const prioritized = goalsDisplay.sort((a, b) => {
      const statusOrder = {
        'NOT_STARTED': 0,
        'IN_PROGRESS': 1,
        'ACHIEVED': 2
      };

      if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
      }

      // Untuk IN_PROGRESS, sort by priority
      const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return prioritized[0] || null;
  }

  /**
   * LANGKAH 1K: Get statistics untuk agent insights
   */
  getAgentInsights() {
    const summary = this.getLearningProgressSummary();
    const recommendations = this.getAgentRecommendation();
    const nextTopic = this.getNextRecommendedTopic();

    return {
      summary,
      recommendations,
      nextTopic,
      timestamp: new Date()
    };
  }

  /**
   * Display agent initialization message
   */
  displayAgentInitializationMessage() {
    const insights = this.getAgentInsights();
    const nextTopic = insights.nextTopic;
    
    if (nextTopic) {
      console.log(`\n🤖 AGENT INITIALIZED - Recommended Start: ${nextTopic.topic}`);
      console.log(`   Priority: ${nextTopic.priority}`);
      console.log(`   Target: ${nextTopic.target}%\n`);
    }
  }

  /**
   * Reset agent state (untuk testing)
   */
  reset() {
    this.goals = {};
    this.performance = {};
    this.initialized = false;
  }
}

// ============================================================
//  INISIALISASI GLOBAL AGENT
// ============================================================
const agentLearner = new LearningAgent();

console.log('✅ Agent Learning System Loaded - Ready for Agentic AI (30%)');
