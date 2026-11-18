import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Flame,
  Layers,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import axiosInstance from "../../../lib/axiosInstance";

const PerformerInsight = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["performerInsights"],
    queryFn: async () => {
      const response = await axiosInstance.get("/insights");
      return response.data.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F9FAFB]">
        <Loader2 className="animate-spin text-indigo-600" size={36} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-rose-600 font-medium bg-rose-50 rounded-2xl max-w-md mx-auto mt-12 border border-rose-100">
        Failed to load insights data. Please try again.
      </div>
    );
  }

  const skills = data?.skills || [];
  const improvements = data?.improvements || [];

  const getIcon = (iconType) => {
    if (iconType === "Layers") return Layers;
    if (iconType === "MessageSquare") return MessageSquare;
    return Target;
  };

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/60 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Performance Analytics
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
            Granular evaluation of your mock interview metrics over the last 90
            days
          </p>
        </div>
        <div className="flex bg-white border border-gray-200/80 rounded-xl p-1.5 shadow-xs shrink-0">
          <button className="px-4 py-2 text-xs font-bold text-indigo-600 bg-indigo-50/80 rounded-lg tracking-wider uppercase transition-all">
            Quarterly
          </button>
          <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-900 rounded-lg tracking-wider uppercase transition-all">
            Monthly
          </button>
          <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-900 rounded-lg tracking-wider uppercase transition-all">
            Weekly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-200/70 flex flex-col justify-between min-h-[340px]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Growth Trajectory
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                Readiness Score Over Time
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full text-xs font-extrabold border border-emerald-100">
              <TrendingUp size={14} />
              <span>+12% vs last month</span>
            </div>
          </div>

          <div className="relative flex-1 w-full min-h-[200px] mt-6 flex items-end">
            <svg
              className="w-full h-full min-h-[170px]"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 10,120 Q 120,100 240,75 T 480,45 L 480,150 L 10,150 Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M 10,120 Q 120,100 240,75 T 480,45"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="10" cy="120" r="4.5" fill="#4f46e5" />
              <circle cx="125" cy="101" r="4.5" fill="#4f46e5" />
              <circle cx="240" cy="75" r="4.5" fill="#4f46e5" />
              <circle cx="360" cy="55" r="4.5" fill="#4f46e5" />
              <circle cx="480" cy="45" r="4.5" fill="#4f46e5" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-200/70 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Competency
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-6">
              Skill Breakdown
            </h3>
          </div>
          <div className="space-y-5 flex-1 flex flex-col justify-center">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-gray-600">{skill.name}</span>
                  <span className="text-indigo-600">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200/50">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-200/70 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Actionable Focus
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-0.5">
              Top Improvement Areas
            </h3>
          </div>
          <div className="space-y-4">
            {improvements.map((item, idx) => {
              const IconComponent = getIcon(item.iconType);
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-gray-200/60 bg-gray-50/60 flex items-start gap-4"
                >
                  <div className="bg-white text-indigo-600 p-3 rounded-xl shadow-xs shrink-0 border border-gray-200/60">
                    <IconComponent size={20} />
                  </div>
                  <div className="space-y-2 min-w-0 flex-1">
                    <h4 className="text-sm font-extrabold text-gray-900 truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-normal leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white text-gray-700 border border-gray-200 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide"
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-200/70 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Evaluation Feed
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-0.5">
              Recent AI Insights
            </h3>
          </div>

          <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-xs text-white font-extrabold shadow-sm">
                AI
              </div>
              <span className="text-xs font-bold text-indigo-900">
                Latest Observation &bull; 2h ago
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
              "{data?.latestObservation}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50/80 border border-gray-200/70 p-5 rounded-2xl text-center">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Last Interview Score
              </span>
              <div className="flex items-center justify-center gap-1 text-gray-900 font-extrabold text-xl sm:text-2xl">
                <span>{data?.lastScore}</span>
                <span className="text-xs text-gray-400 font-medium">/10</span>
              </div>
            </div>
            <div className="bg-gray-50/80 border border-gray-200/70 p-5 rounded-2xl text-center flex flex-col items-center justify-center">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Practice Streak
              </span>
              <div className="flex items-center gap-1.5 text-gray-900 font-extrabold text-xl sm:text-2xl">
                <Flame size={20} className="text-amber-500 fill-amber-500" />
                <span>{data?.streakDays} Days</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="bg-gray-800 p-2.5 rounded-xl text-indigo-400 shrink-0 border border-gray-700">
                <Sparkles size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                  Personalized Roadmap
                </span>
                <p className="text-xs font-bold text-gray-200 truncate mt-0.5">
                  Next recommended: "System Design Masterclass"
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-gray-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformerInsight;
