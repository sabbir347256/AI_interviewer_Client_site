const DashboardHeroPart = () => {
    return (
        <div className="w-full bg-[#0B1528] rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl flex flex-col items-center justify-center border border-gray-800/45">
            <div className="mb-6">
                <span className="bg-[#1E1B4B] text-[#818CF8] text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full border border-[#312E81] uppercase">
                    Introducing v2.0
                </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl leading-[1.15] mb-6">
                Master Your Next <br className="sm:hidden" /> Interview with AI
            </h1>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mb-10">
                Elevate your career trajectory with our high-fidelity interview simulator.
                Get real-time behavioral insights, tailored technical challenges, and
                expert-level feedback.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#6366F1] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-[#6366F1]/20 hover:bg-[#4F46E5] active:scale-[0.98] transition-all duration-200">
                    Start Preparation Now
                </button>
                <button className="w-full sm:w-auto bg-[#1E293B] text-gray-300 font-semibold text-sm px-8 py-3.5 rounded-xl border border-gray-700/50 hover:bg-[#334155] hover:text-white active:scale-[0.98] transition-all duration-200">
                    View Demo Session
                </button>
            </div>
        </div>
    );
};

export default DashboardHeroPart;