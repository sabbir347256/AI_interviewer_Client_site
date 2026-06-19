import { Flame, Layers, MessageSquare, Sparkles, Target, TrendingUp } from "lucide-react";

const PerformerInsight = () => {
    const skills = [
        { name: "Technical Proficiency", percentage: 92, color: "bg-[#6366F1]" },
        { name: "Communication", percentage: 78, color: "bg-[#6366F1]" },
        { name: "Soft Skills", percentage: 85, color: "bg-[#6366F1]" },
        { name: "Problem Solving", percentage: 64, color: "bg-[#4B5563]" },
    ];

    const improvements = [
        {
            title: "System Architecture Deep-Dive",
            description: "Focus on scalability patterns and distributed consensus mechanisms.",
            icon: Layers,
            tags: [
                { label: "PRIORITY HIGH", bg: "bg-[#FEE2E2]", text: "text-[#EF4444]" },
                { label: "TECH SKILL", bg: "bg-[#EEF2FF]", text: "text-[#6366F1]" }
            ]
        },
        {
            title: "Concise Articulation",
            description: "Practice reducing 2-minute answers down to impactful 45-second responses.",
            icon: MessageSquare,
            tags: [
                { label: "PRIORITY MID", bg: "bg-[#FEF3C7]", text: "text-[#D97706]" },
                { label: "COMM SKILL", bg: "bg-[#EEF2FF]", text: "text-[#6366F1]" }
            ]
        },
        {
            title: "Conflict Resolution Examples",
            description: "Identify more specific STAR-method scenarios for difficult team interactions.",
            icon: Target,
            tags: [
                { label: "PRIORITY MID", bg: "bg-[#FEF3C7]", text: "text-[#D97706]" },
                { label: "SOFT SKILL", bg: "bg-[#EEF2FF]", text: "text-[#6366F1]" }
            ]
        }
    ];

    return (
        <div className="w-full py-4 bg-[#F8F9FD] min-h-screen space-y-6">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-[#1E2640]">Performance Insights</h1>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">Visualizing your growth over the last 90 days</p>
                </div>
                <div className="flex bg-white border border-gray-200 rounded-xl p-1 shrink-0 self-start sm:self-center shadow-sm">
                    <button className="px-3 py-1.5 text-[10px] font-bold text-[#6366F1] bg-[#EEF2FF] rounded-lg tracking-wider uppercase">Quarterly</button>
                    <button className="px-3 py-1.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 rounded-lg tracking-wider uppercase transition-colors">Monthly</button>
                    <button className="px-3 py-1.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 rounded-lg tracking-wider uppercase transition-colors">Weekly</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[300px]">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-bold text-[#1E2640]">Readiness Score Over Time</h3>
                        <div className="flex items-center gap-1 text-[#10B981] bg-[#E6F4EA] px-2.5 py-1 rounded-full text-[11px] font-bold">
                            <TrendingUp size={12} />
                            <span>+12% vs last month</span>
                        </div>
                    </div>

                    <div className="relative flex-1 w-full min-h-[180px] mt-4 flex items-end">
                        <svg className="w-full h-full min-h-[160px]" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15" />
                                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 10,120 Q 120,100 240,75 T 480,45 L 480,150 L 10,150 Z"
                                fill="url(#chartGradient)"
                            />
                            <path
                                d="M 10,120 Q 120,100 240,75 T 480,45"
                                fill="none"
                                stroke="#6366F1"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            <circle cx="10" cy="120" r="4" fill="#6366F1" />
                            <circle cx="125" cy="101" r="4" fill="#6366F1" />
                            <circle cx="240" cy="75" r="4" fill="#6366F1" />
                            <circle cx="360" cy="55" r="4" fill="#6366F1" />
                            <circle cx="480" cy="45" r="4" fill="#6366F1" />
                        </svg>
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#1E2640] mb-4">Skill Breakdown</h3>
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                                    <span className="text-gray-500">{skill.name}</span>
                                    <span className={skill.color === "bg-[#6366F1]" ? "text-[#6366F1]" : "text-gray-700"}>{skill.percentage}%</span>
                                </div>
                                <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                                    <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.percentage}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#1E2640]">Top Improvement Areas</h3>
                    <div className="space-y-3">
                        {improvements.map((item, idx) => (
                            <div key={idx} className="p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors bg-[#F8F9FD]/50 flex items-start gap-4">
                                <div className="bg-[#EEF2FF] text-[#6366F1] p-2.5 rounded-xl shrink-0">
                                    <item.icon size={18} />
                                </div>
                                <div className="space-y-2 min-w-0">
                                    <h4 className="text-sm font-bold text-[#1E2640] truncate">{item.title}</h4>
                                    <p className="text-xs text-gray-400 font-medium leading-relaxed">{item.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-0.5">
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className={`${tag.bg} ${tag.text} text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wide`}>
                                                {tag.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between space-y-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#1E2640]">Recent AI Insights</h3>

                    <div className="bg-[#EEF2FF]/60 border border-[#E0E7FF] rounded-2xl p-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                            <span className="text-[11px] font-bold text-gray-400">Latest Observation &bull; 2h ago</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#1E2640] font-medium leading-relaxed">
                            "You've shown a consistent <span className="text-[#6366F1] font-bold">15% improvement</span> in technical precision. However, you tend to over-explain simple concepts which can detract from executive presence."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Last Interview Score</span>
                            <div className="flex items-center justify-center gap-1 text-[#1E2640] font-bold text-base sm:text-lg">
                                <span>8.4</span>
                                <span className="text-xs text-gray-400 font-medium">/10</span>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Practice Streak</span>
                            <div className="flex items-center gap-1.5 text-[#1E2640] font-bold text-base sm:text-lg">
                                <Flame size={18} className="text-orange-500 fill-orange-500" />
                                <span>12 Days</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#818CF8]/5 border border-[#6366F1]/10 rounded-2xl p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="bg-white p-2 rounded-xl text-[#6366F1] shadow-sm shrink-0">
                                <Sparkles size={16} />
                            </div>
                            <div className="min-w-0">
                                <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-wider block">Personalized Roadmap</span>
                                <p className="text-xs font-bold text-[#1E2640] truncate mt-0.5">Next recommended: "System Design Masterclass"</p>
                            </div>
                        </div>
                        <Sparkles size={16} className="text-[#6366F1]/40 shrink-0 hidden sm:block" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PerformerInsight;