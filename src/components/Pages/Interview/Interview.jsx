import { Lightbulb, Mic, MoreHorizontal, PhoneOff, Video } from "lucide-react";

const Interview = () => {
    const skills = ["Leadership", "Architecture", "Conflict Res.", "Scale"];
    return (
        <div className="w-full  py-4 bg-[#F8F9FD] min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 flex flex-col justify-between space-y-4">
                <div className="relative flex-1 w-full rounded-3xl overflow-hidden bg-gray-900 shadow-xl min-h-[460px]">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                        alt="Interviewer"
                        className="w-full h-full object-cover object-center absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute top-4 right-4 w-28 sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg bg-gray-800">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
                            alt="Candidate Mini"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-2xl">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 bg-[#6366F1] rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">DR. VANCE (INTERVIEWER)</span>
                        </div>
                        <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
                            "That's a fascinating perspective on collaborative ecosystems. How would you specifically approach a situation where your team's objective conflicts with the broader company roadmap?"
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-center gap-4 shrink-0">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                        <Video size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                        <Mic size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                        <MoreHorizontal size={18} />
                    </button>
                    <div className="h-6 w-px bg-gray-200 mx-1" />
                    <button className="flex items-center gap-2 bg-[#EF4444] text-white px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-md shadow-red-500/20 hover:bg-red-600 transition-colors">
                        <PhoneOff size={16} />
                        <span>End Session</span>
                    </button>
                </div>
            </div>

            <div className="space-y-6 flex flex-col">
                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-base font-bold text-[#1E2640]">Live AI Metrics</h3>
                            <p className="text-[11px] text-gray-400 font-medium">Real-time performance feedback</p>
                        </div>

                        <div className="bg-[#F8F9FD] rounded-2xl p-4 border border-gray-100">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sentiment</span>
                                <span className="text-xs font-bold text-[#6366F1] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full">Positive</span>
                            </div>
                            <div className="flex items-end gap-1.5 h-10 px-2 justify-between">
                                <div className="w-full bg-[#6366F1]/20 h-4 rounded-sm" />
                                <div className="w-full bg-[#6366F1]/40 h-6 rounded-sm" />
                                <div className="w-full bg-[#6366F1]/60 h-9 rounded-sm" />
                                <div className="w-full bg-[#6366F1]/30 h-5 rounded-sm" />
                                <div className="w-full bg-[#6366F1]/40 h-6 rounded-sm" />
                                <div className="w-full bg-[#6366F1]/50 h-7 rounded-sm" />
                                <div className="w-full bg-[#6366F1] h-10 rounded-sm shadow-sm" />
                            </div>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#1E2640]">
                                    <span>Confidence Tone</span>
                                    <span>88%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="bg-[#6366F1] h-full rounded-full" style={{ width: '88%' }} />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#1E2640]">
                                    <span>Clarity</span>
                                    <span>92%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="bg-[#6366F1] h-full rounded-full" style={{ width: '92%' }} />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#1E2640]">
                                    <span>Pacing</span>
                                    <span className="text-[#6366F1]">145 wpm</span>
                                </div>
                                <div className="grid grid-cols-4 gap-1">
                                    <div className="h-1.5 bg-[#6366F1] rounded-full" />
                                    <div className="h-1.5 bg-[#6366F1] rounded-full" />
                                    <div className="h-1.5 bg-[#6366F1] rounded-full" />
                                    <div className="h-1.5 bg-gray-100 rounded-full" />
                                </div>
                                <p className="text-[10px] text-gray-400 font-medium leading-relaxed italic pt-0.5">
                                    Tip: You're speaking slightly fast. Slow down for emphasis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Target Skills Tracked</span>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#E0E7FF]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#1E2640] rounded-3xl p-4 border border-[#2A3454] shadow-md flex items-start gap-4 shrink-0">
                    <div className="bg-white/10 p-2.5 rounded-xl text-[#818CF8] shrink-0 flex items-center justify-center border border-white/5">
                        <Lightbulb size={18} />
                    </div>
                    <div className="min-w-0">
                        <span className="text-[10px] font-bold text-[#818CF8] uppercase tracking-wider block">AI Insight</span>
                        <p className="text-gray-300 font-medium text-xs sm:text-sm mt-0.5 leading-relaxed">
                            Excellent use of the STAR method for your previous answer. Keep it up!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Interview;