import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Bot,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  TrendingUp,
  Calendar,
  Zap,
  Loader2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import axiosInstance from "../../../../../../lib/axiosInstance";

const DashBoardroot = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboardSummary"],
    queryFn: async () => {
      const response = await axiosInstance.get("/dashboard/summary");
      return response.data.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-slate-900" size={36} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-rose-600 font-medium bg-rose-50 rounded-2xl border border-rose-200 max-w-lg mx-auto mt-10">
        Failed to load dashboard summary. Please try again.
      </div>
    );
  }

  const score = data?.averageScore || 0;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="space-y-8 bg-[#FAFAFC] min-h-screen">
      <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-md text-xs font-medium text-slate-300 border border-slate-700">
            <Sparkles size={13} className="text-amber-400" /> Active Workspace
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Master Technical Interviews
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            Simulate rigorous AI mock interviews, review granular performance
            metrics, and build confidence for your career growth.
          </p>
        </div>
        <div>
          <Link
            to="/ai-interview"
            className="bg-white text-slate-900 px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-slate-100 transition-colors shadow-sm"
          >
            <Bot size={18} className="text-slate-900" /> Start New Interview{" "}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Interviews
            </span>
            <div className="bg-slate-100 p-2.5 rounded-xl text-slate-700">
              <Bot size={20} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-extrabold text-slate-900">
              {data?.totalInterviews || 0}
            </h3>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1">
              <TrendingUp size={12} /> Live
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Completed
            </span>
            <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-700">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-extrabold text-slate-900">
              {data?.completedInterviews || 0}
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Sessions
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              In Progress
            </span>
            <div className="bg-amber-50 p-2.5 rounded-xl text-amber-700">
              <Clock size={20} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-extrabold text-slate-900">
              {data?.inProgressInterviews || 0}
            </h3>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
              Pending
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Average Score
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900">{score}%</h3>
            <p className="text-xs text-slate-500 font-medium">
              Performance Grade
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="currentColor"
                strokeWidth="6"
                className="text-slate-100 fill-none"
              />
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="text-slate-900 fill-none"
              />
            </svg>
            <div className="absolute text-xs font-extrabold text-slate-900">
              {score}%
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-slate-900">
              Recent Interview Sessions
            </h3>
            <Link
              to="/ai-interview"
              className="text-xs font-semibold text-slate-700 hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          {data?.recentInterviews?.length === 0 ? (
            <div className="text-center py-12 space-y-2 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <Zap className="mx-auto text-slate-400" size={28} />
              <p className="text-sm font-semibold text-slate-700">
                No interviews recorded yet.
              </p>
              <p className="text-xs text-slate-400">
                Complete a mock session to populate analytics.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {data?.recentInterviews?.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/60 gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-900" />
                      <h4 className="font-bold text-sm text-slate-900">
                        {item.jobRole}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium pt-0.5">
                      <span className="uppercase bg-white px-2 py-0.5 rounded border border-slate-200">
                        {item.language}
                      </span>
                      <span className="uppercase bg-white px-2 py-0.5 rounded border border-slate-200">
                        {item.difficulty}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />{" "}
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}
                    >
                      {item.status}
                    </span>
                    {item.finalScore !== undefined &&
                      item.finalScore !== null && (
                        <div className="text-right">
                          <span className="text-base font-extrabold text-slate-900">
                            {item.finalScore}
                          </span>
                          <span className="text-xs text-slate-400">/100</span>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="bg-slate-800 w-10 h-10 rounded-xl flex items-center justify-center text-slate-200">
              <Award size={20} />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-extrabold">
                Expert Evaluation Tip
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                Structure your responses using clear definitions followed by
                hands-on engineering examples to improve AI score accuracy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Quick Navigation
            </h3>
            <div className="space-y-2.5">
              <Link
                to="/ai-interview"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 transition-colors"
              >
                <span>Start New Mock Interview</span>
                <ArrowRight size={14} className="text-slate-400" />
              </Link>
              <Link
                to="/insight"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 transition-colors"
              >
                <span>View Performer Insight</span>
                <ArrowRight size={14} className="text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardroot;
