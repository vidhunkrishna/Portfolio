// Service module for fetching live LeetCode statistics dynamically
// Prioritizes CORS-compliant primary endpoints to avoid browser console warnings.

const DEFAULT_USERNAME = "jdHyOpae0h";

// Array of API adapters ordered by reliability and CORS compliance
const ADAPTERS = [
  // Adapter 1: Alfa LeetCode API /userProfile (Returns full profile + submissions + solved counts with Access-Control-Allow-Origin: *)
  async (username) => {
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    
    if (data && typeof data.totalSolved === 'number') {
      const easyObj = data.totalSubmissions?.find(x => x.difficulty === 'Easy') || {};
      const medObj = data.totalSubmissions?.find(x => x.difficulty === 'Medium') || {};
      const hardObj = data.totalSubmissions?.find(x => x.difficulty === 'Hard') || {};
      const allObj = data.totalSubmissions?.find(x => x.difficulty === 'All') || {};

      const easy = Number(easyObj.count) || Number(data.easySolved) || 0;
      const medium = Number(medObj.count) || Number(data.mediumSolved) || 0;
      const hard = Number(hardObj.count) || Number(data.hardSolved) || 0;

      return {
        totalSolved: Number(data.totalSolved),
        totalQuestions: 3000,
        easySolved: easy,
        totalEasy: 800,
        mediumSolved: medium,
        totalMedium: 1600,
        hardSolved: hard,
        totalHard: 700,
        acceptanceRate: data.acceptanceRate != null ? Number(data.acceptanceRate) : null,
        ranking: data.ranking != null ? Number(data.ranking) : null,
        totalSubmissions: allObj.submissions != null ? Number(allObj.submissions) : null,
      };
    }
    throw new Error('Invalid payload from Alfa UserProfile API');
  },

  // Adapter 2: Alfa LeetCode API /solved (Returns solvedProblem, easySolved, mediumSolved, hardSolved with Access-Control-Allow-Origin: *)
  async (username) => {
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    
    if (data && (typeof data.solvedProblem === 'number' || typeof data.easySolved === 'number')) {
      const easy = Number(data.easySolved) || 0;
      const medium = Number(data.mediumSolved) || 0;
      const hard = Number(data.hardSolved) || 0;
      const total = Number(data.solvedProblem) || (easy + medium + hard);

      const allSub = data.totalSubmissionNum?.find(x => x.difficulty === 'All')?.submissions || null;

      return {
        totalSolved: total,
        totalQuestions: 3000,
        easySolved: easy,
        totalEasy: 800,
        mediumSolved: medium,
        totalMedium: 1600,
        hardSolved: hard,
        totalHard: 700,
        acceptanceRate: null,
        ranking: null,
        totalSubmissions: allSub != null ? Number(allSub) : null,
      };
    }
    throw new Error('Invalid payload from Alfa Solved API');
  },

  // Adapter 3: Backup LeetCode Stats API
  async (username) => {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data && (data.status === 'success' || typeof data.totalSolved === 'number')) {
      return {
        totalSolved: Number(data.totalSolved),
        totalQuestions: Number(data.totalQuestions) || 3000,
        easySolved: Number(data.easySolved) || 0,
        totalEasy: Number(data.totalEasy) || 800,
        mediumSolved: Number(data.mediumSolved) || 0,
        totalMedium: Number(data.totalMedium) || 1600,
        hardSolved: Number(data.hardSolved) || 0,
        totalHard: Number(data.totalHard) || 700,
        acceptanceRate: data.acceptanceRate != null ? Number(data.acceptanceRate) : null,
        ranking: data.ranking != null ? Number(data.ranking) : null,
        totalSubmissions: data.totalSubmissions != null ? Number(data.totalSubmissions) : null,
      };
    }
    throw new Error('Invalid payload from Heroku API');
  }
];

export async function fetchLeetCodeStats(username = DEFAULT_USERNAME) {
  let lastError = null;

  for (const adapter of ADAPTERS) {
    try {
      const stats = await adapter(username);
      if (stats && typeof stats.totalSolved === 'number') {
        return stats;
      }
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error('Unable to fetch LeetCode stats right now.');
}
