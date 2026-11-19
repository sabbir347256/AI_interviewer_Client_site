import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Bot,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
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
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 size={30} className="animate-spin text-slate-700" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto mt-10 max-w-lg rounded-lg bg-white p-6 text-center text-sm text-rose-600">
        Failed to load dashboard summary. Please try again.
      </div>
    );
  }

  const score = Math.min(100, Math.max(0, Number(data?.averageScore) || 0));
  const recentInterviews = Array.isArray(data?.recentInterviews)
    ? data.recentInterviews
    : [];

  const stats = [
    {
      label: "Total Interviews",
      value: data?.totalInterviews || 0,
      detail: "All sessions",
      icon: Bot,
      iconClass: "bg-slate-100 text-slate-700",
    },
    {
      label: "Completed",
      value: data?.completedInterviews || 0,
      detail: "Finished sessions",
      icon: CheckCircle2,
      iconClass: "bg-emerald-50 text-emerald-700",
    },
    {
      label: "In Progress",
      value: data?.inProgressInterviews || 0,
      detail: "Pending sessions",
      icon: Clock,
      iconClass: "bg-amber-50 text-amber-700",
    },
    {
      label: "Average Score",
      value: `${score}%`,
      detail: "Performance grade",
      icon: Award,
      iconClass: "bg-blue-50 text-blue-700",
    },
  ];

  return (
    <main className="min-h-screen space-y-7 bg-slate-50">
      <section className="flex flex-col justify-between gap-6 rounded-lg bg-slate-900 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-slate-300">
            <Sparkles size={15} className="text-amber-400" />
            Active Workspace
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Master Technical Interviews
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Practice AI-powered mock interviews, review your performance, and
            improve your skills for your next career opportunity.
          </p>
        </div>

        <Link
          to="/ai-interview"
          className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900"
        >
          <Bot size={18} />
          Start New Interview
          <ArrowRight size={16} />
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 rounded-lg bg-white p-5"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.label}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
              </div>

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${item.iconClass}`}
              >
                <Icon size={21} />
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-lg bg-white p-5 sm:p-6 xl:col-span-2">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Interview Sessions
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your latest interview activity
              </p>
            </div>

            <Link
              to="/ai-interview"
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700"
            >
              View All
              <ArrowRight size={15} />
            </Link>
          </div>

          {recentInterviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Zap size={28} className="text-slate-400" />
              <p className="mt-3 text-sm font-semibold text-slate-700">
                No interviews recorded yet.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Complete a mock interview to see your activity here.
              </p>
            </div>
          ) : (
            <div>
              {recentInterviews.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col justify-between gap-4 border-b border-slate-100 py-4 last:border-b-0 sm:flex-row sm:items-center"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {item.jobRole || "Untitled Interview"}
                      </h3>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
                      <span className="uppercase">
                        {item.language || "N/A"}
                      </span>
                      <span className="uppercase">
                        {item.difficulty || "N/A"}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={13} />
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "Date unavailable"}
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center justify-between gap-5 sm:justify-end">
                    <span
                      className={`text-xs font-semibold ${
                        item.status === "COMPLETED"
                          ? "text-emerald-700"
                          : "text-amber-700"
                      }`}
                    >
                      {item.status || "PENDING"}
                    </span>

                    {item.finalScore !== undefined &&
                      item.finalScore !== null && (
                        <div className="text-right">
                          <span className="text-base font-bold text-slate-900">
                            {item.finalScore}
                          </span>
                          <span className="text-xs text-slate-500">/100</span>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-slate-900 p-6 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200">
              <Award size={20} />
            </div>

            <h3 className="mt-5 text-base font-bold">Expert Evaluation Tip</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Structure your answers with clear definitions and practical
              engineering examples. Explain your approach step by step.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900">
              Quick Navigation
            </h3>

            <div className="mt-4 space-y-1">
              <Link
                to="/ai-interview"
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700"
              >
                Start New Mock Interview
                <ArrowRight size={15} className="text-slate-400" />
              </Link>

              <Link
                to="/insight"
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700"
              >
                View Performance Insights
                <ArrowRight size={15} className="text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashBoardroot;
