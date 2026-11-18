import { Link } from "react-router";
import { Bot, ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FD] text-[#1E2640]">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#EEF2FF] p-2.5 rounded-xl">
            <Bot className="text-[#6366F1]" size={24} />
          </div>
          <span className="text-xl font-bold">InterviewAI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold text-gray-600 hover:text-[#6366F1] transition-colors px-4 py-2"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="bg-[#6366F1] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#4F46E5] transition-colors"
          >
            Try for Free
          </Link>
        </div>
      </nav>

      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#EEF2FF] border border-indigo-100 px-4 py-2 rounded-full text-xs font-semibold text-[#6366F1]">
          <Sparkles size={14} /> AI Powered Mock Interviews & Evaluation
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
          Master Your Job Interviews with{" "}
          <span className="text-[#6366F1]">AI Intelligence</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg font-normal">
          Practice real-time technical and behavioral AI interviews, get instant
          scorecards, and accelerate your career growth with our advanced
          platform.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/login"
            className="bg-[#6366F1] text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-[#4F46E5] transition-colors shadow-lg shadow-indigo-100"
          >
            Try for Free <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-4">
          <div className="bg-[#EEF2FF] w-12 h-12 rounded-xl flex items-center justify-center text-[#6366F1]">
            <Bot size={24} />
          </div>
          <h3 className="text-lg font-bold">AI Mock Interview</h3>
          <p className="text-sm text-gray-500 font-normal leading-relaxed">
            Dynamic interview sessions tailored to your target job role,
            difficulty, and preferred language.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-4">
          <div className="bg-[#EEF2FF] w-12 h-12 rounded-xl flex items-center justify-center text-[#6366F1]">
            <Zap size={24} />
          </div>
          <h3 className="text-lg font-bold">Speech & Camera Support</h3>
          <p className="text-sm text-gray-500 font-normal leading-relaxed">
            Speak your answers with real-time speech recognition and practice
            professional video interview environments.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs space-y-4">
          <div className="bg-[#EEF2FF] w-12 h-12 rounded-xl flex items-center justify-center text-[#6366F1]">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-lg font-bold">Detailed Evaluation</h3>
          <p className="text-sm text-gray-500 font-normal leading-relaxed">
            Receive comprehensive scores, feedback, strengths, and improvement
            insights instantly.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-200/80 py-8 text-center text-xs text-gray-400">
        © 2026 InterviewAI. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
