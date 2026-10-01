import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw, AlertCircle, Trophy, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { fetchLeetCodeStats } from '../services/leetcodeService';

const LEETCODE_USERNAME = "jdHyOpae0h";
const PROFILE_URL = PERSONAL_INFO.socials.leetcode;

export default function LeetCodeStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchLeetCodeStats(LEETCODE_USERNAME);
      setStats(data);
      setIsLive(true);
      setError(null);
    } catch (err) {
      console.warn("LeetCode API fetch error:", err);
      setStats(null);
      setIsLive(false);
      setError("Unable to fetch LeetCode stats right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Calculate percentages from fetched values if present
  const easyPct = stats ? Math.min(100, Math.round((stats.easySolved / (stats.totalEasy || 800)) * 100)) : 0;
  const mediumPct = stats ? Math.min(100, Math.round((stats.mediumSolved / (stats.totalMedium || 1600)) * 100)) : 0;
  const hardPct = stats ? Math.min(100, Math.round((stats.hardSolved / (stats.totalHard || 700)) * 100)) : 0;

  return (
    <section id="leetcode" className="py-24 bg-[#070709] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            ALGORITHMIC PRACTICE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            PROBLEM <span className="text-orange-500">SOLVING</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Consistently practicing Data Structures and Algorithms through problem solving.
          </p>
        </div>

        {/* Dashboard Box */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f14] border border-neutral-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top Status Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    LEETCODE LIVE STATUS
                  </h3>
                  <span className="text-xs font-mono-code text-neutral-400">
                    Profile: <span className="text-orange-400 font-semibold">Vidhun Krishna S</span>
                  </span>
                </div>
              </div>

              {/* Status Indicator & Refresh Button */}
              <div className="flex items-center gap-3">
                {isLive ? (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE
                  </span>
                ) : loading ? (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono-code font-bold">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    FETCHING...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono-code font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    FETCH FAILED
                  </span>
                )}

                <button
                  onClick={loadData}
                  disabled={loading}
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500 disabled:opacity-50 transition-all active:scale-95"
                  title="Refresh LeetCode Statistics"
                  aria-label="Refresh LeetCode Statistics"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-orange-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Dynamic Content Views */}
            {loading ? (
              /* Loading State */
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-sm font-mono-code text-neutral-400">Fetching LeetCode stats...</p>
              </div>
            ) : error || !stats ? (
              /* Error State (No hardcoded fallback stats) */
              <div className="py-12 px-4 text-center space-y-5 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl animate-fadeIn">
                <div className="w-14 h-14 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-center justify-center mx-auto text-rose-400">
                  <AlertCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Unable to fetch LeetCode stats right now.</h4>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto mt-1">
                    The external LeetCode API endpoint timed out or rate-limited. Click below to retry or view live profile directly.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={loadData}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    RETRY FETCH
                  </button>
                  <a
                    href={PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
                  >
                    <span>LEETCODE PROFILE</span>
                    <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                  </a>
                </div>
              </div>
            ) : (
              /* Success State: Dynamic Data Displayed */
              <div className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                  {/* Circular Radial Total Solved Visualizer */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl relative">
                    <div className="relative w-44 h-44 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="stroke-neutral-800"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="stroke-orange-500 transition-all duration-1000 ease-out"
                          strokeWidth="8"
                          strokeDasharray={264}
                          strokeDashoffset={264 - (264 * Math.min(100, (stats.totalSolved / (stats.totalQuestions || 3000)) * 100)) / 100}
                          strokeLinecap="round"
                          fill="transparent"
                        />
                      </svg>

                      {/* Center Solved Count */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-extrabold text-white font-mono-code tracking-tight">
                          {stats.totalSolved}
                        </span>
                        <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-neutral-400 mt-0.5">
                          TOTAL SOLVED
                        </span>
                      </div>
                    </div>

                    {/* Metadata chips */}
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono-code">
                      {stats.acceptanceRate != null && (
                        <span className="text-neutral-400">
                          Acceptance: <span className="text-orange-400 font-bold">{stats.acceptanceRate}%</span>
                        </span>
                      )}
                      {stats.totalSubmissions != null && (
                        <span className="text-neutral-400">
                          Submissions: <span className="text-white font-bold">{stats.totalSubmissions}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Horizontal Difficulty Breakdown Progress Bars */}
                  <div className="md:col-span-7 space-y-5">

                    {/* EASY */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-emerald-400 font-mono-code font-bold">EASY</span>
                        <span className="text-neutral-300 font-mono-code">
                          {stats.easySolved} <span className="text-neutral-500">/ {stats.totalEasy || 800}</span>
                        </span>
                      </div>
                      <div className="w-full h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.max(4, easyPct)}%` }}
                        />
                      </div>
                    </div>

                    {/* MEDIUM */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-amber-400 font-mono-code font-bold">MEDIUM</span>
                        <span className="text-neutral-300 font-mono-code">
                          {stats.mediumSolved} <span className="text-neutral-500">/ {stats.totalMedium || 1600}</span>
                        </span>
                      </div>
                      <div className="w-full h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                        <div
                          className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.max(4, mediumPct)}%` }}
                        />
                      </div>
                    </div>

                    {/* HARD */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-rose-500 font-mono-code font-bold">HARD</span>
                        <span className="text-neutral-300 font-mono-code">
                          {stats.hardSolved} <span className="text-neutral-500">/ {stats.totalHard || 700}</span>
                        </span>
                      </div>
                      <div className="w-full h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                        <div
                          className="h-full bg-rose-500 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.max(4, hardPct)}%` }}
                        />
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* Bottom Full-Width CTA Button */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80">
              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-[0.99]"
              >
                <span>LEETCODE PROFILE</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
