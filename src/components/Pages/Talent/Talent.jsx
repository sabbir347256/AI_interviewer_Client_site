import { ArrowRight, Calendar, Download, Plus, SlidersHorizontal, Sparkles } from "lucide-react";

const Talent = () => {
    const stats = [
        { label: "Total Candidates", value: "1,284", change: "+12%", changeType: "positive" },
        { label: "Interviews Today", value: "42", isIcon: true },
        { label: "Avg. Score", value: "84%", hasLine: true },
        { label: "Pending Reviews", value: "18", badge: "Action Required" },
    ];

    const candidates = [
        {
            name: "Elena Rodriguez",
            role: "Senior UI/UX Designer",
            status: "Highly Recommended",
            statusColor: "bg-[#E0E7FF] text-[#4F46E5]",
            score: 86,
            tags: ["figma", "prototyping", "systems"],
            images: [
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=50",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=50"
            ]
        },
        {
            name: "Marcus Chen",
            role: "Frontend Developer",
            status: "In Review",
            statusColor: "bg-[#FEF3C7] text-[#D97706]",
            score: 82,
            tags: ["react", "tailwind", "typescript"],
            images: [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=50"
            ]
        },
        {
            name: "Sarah Jenkins",
            role: "Product Manager",
            status: "Highly Recommended",
            statusColor: "bg-[#E0E7FF] text-[#4F46E5]",
            score: 91,
            tags: ["agile", "roadmapping", "strategy"],
            images: [
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=50",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=50"
            ]
        },
        {
            name: "David Okeke",
            role: "Backend Engineer",
            status: "New Application",
            statusColor: "bg-gray-100 text-gray-600",
            score: null,
            tags: ["go", "kubernetes", "postgres"],
            images: [
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=50"
            ]
        },
        {
            name: "Aria Moon",
            role: "Data Scientist",
            status: "Highly Recommended",
            statusColor: "bg-[#E0E7FF] text-[#4F46E5]",
            score: 84,
            tags: ["python", "pytorch", "mlops"],
            images: [
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=50"
            ]
        }
    ];
    return (
        <div className="w-full  py-4 bg-[#F8F9FD] min-h-screen space-y-6">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-[#1E2640]">Talent Pool</h1>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">
                        Manage and evaluate your candidates based on AI-driven interview metrics, sentiment analysis, and technical proficiency scores.
                    </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                    <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-3 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-wider">
                        <SlidersHorizontal size={14} />
                        <span>Filters</span>
                    </button>
                    <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-3 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-wider">
                        <Download size={14} />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[90px]">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">{stat.label}</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-xl sm:text-2xl font-extrabold text-[#1E2640]">{stat.value}</span>
                            {stat.change && (
                                <span className="text-[10px] font-bold text-[#6366F1] bg-[#EEF2FF] px-1.5 py-0.5 rounded-md">{stat.change}</span>
                            )}
                            {stat.badge && (
                                <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full uppercase tracking-wider">{stat.badge}</span>
                            )}
                            {stat.hasLine && (
                                <div className="w-10 h-1 bg-gray-200 rounded-full ml-1 self-center" />
                            )}
                        </div>
                        {stat.isIcon && (
                            <Calendar size={16} className="absolute bottom-4 right-4 text-[#6366F1]" />
                        )}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {candidates.map((candidate, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[220px]">
                        <div className="space-y-4">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                                        <img src={candidate.images[0]} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-[#1E2640] text-sm sm:text-base truncate">{candidate.name}</h3>
                                        <p className="text-xs text-gray-400 font-medium truncate">{candidate.role}</p>
                                    </div>
                                </div>
                                <span className={`${candidate.statusColor} text-[9px] font-bold px-2.5 py-1 rounded-full shrink-0 uppercase tracking-wider`}>
                                    {candidate.status}
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs font-bold">
                                    <span className="text-gray-400">AI Proficiency Score</span>
                                    <span className="text-[#6366F1]">{candidate.score !== null ? `${candidate.score}/100` : '-- / 100'}</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="bg-[#6366F1] h-full rounded-full transition-all" style={{ width: `${candidate.score || 0}%` }} />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {candidate.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="bg-[#F8F9FD] border border-gray-200/60 text-gray-500 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                            <div className="flex -space-x-2 overflow-hidden">
                                {candidate.images.map((img, iIdx) => (
                                    <img key={iIdx} className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src={img} alt="" />
                                ))}
                            </div>
                            <button className="text-[#6366F1] hover:text-[#4F46E5] text-xs font-bold flex items-center gap-1 transition-colors">
                                <span>View Report</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}

                <div className="border-2 border-dashed border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-[#F8F9FD]/40 min-h-[220px]">
                    <div className="bg-[#6366F1] p-2.5 rounded-2xl text-white shadow-lg shadow-[#6366F1]/20 mb-3">
                        <Plus size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-[#1E2640]">Invite Candidate</h3>
                    <p className="text-xs text-gray-400 font-medium max-w-[180px] mt-1 leading-relaxed">
                        Add active candidates manually or sync from your ATS.
                    </p>
                    <button className="mt-4 bg-white border border-gray-200 text-gray-700 text-xs font-bold px-4 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                        Add New
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[#1E2640] text-white rounded-3xl p-5 sm:p-6 shadow-md border border-[#2A3454] flex flex-col justify-between min-h-[180px]">
                    <div>
                        <h3 className="text-base font-bold tracking-tight">Talent Retention Insights</h3>
                        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1 leading-relaxed max-w-xl">
                            AI analysis suggests your current talent pool has a <span className="text-[#818CF8] font-bold">75% cultural fit score</span> based on existing team sentiment. Highly recommended candidates show <span className="text-white font-bold">45% faster onboarding potential</span>.
                        </p>
                    </div>
                    <div className="flex items-end gap-2 h-12 mt-4 max-w-xs">
                        <div className="w-full bg-white/5 h-4 rounded-sm" />
                        <div className="w-full bg-white/5 h-6 rounded-sm" />
                        <div className="w-full bg-[#6366F1] h-12 rounded-sm shadow-sm" />
                        <div className="w-full bg-white/5 h-7 rounded-sm" />
                        <div className="w-full bg-white/5 h-8 rounded-sm" />
                        <div className="w-full bg-white/5 h-3 rounded-sm" />
                    </div>
                </div>

                <div className="bg-[#6366F1] text-white rounded-3xl p-5 sm:p-6 shadow-md shadow-[#6366F1]/10 flex flex-col justify-between min-h-[180px]">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[#E0E7FF]">
                            <Sparkles size={16} className="fill-current" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Automated Sourcing</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium leading-relaxed pt-1">
                            Let InterviewAI find candidates across LinkedIn and GitHub that match your top 10% performance profiles.
                        </p>
                    </div>
                    <button className="w-full bg-white text-[#6366F1] text-xs font-bold py-2.5 rounded-xl shadow-md hover:bg-gray-50 active:scale-[0.99] transition-all">
                        Enable Auto-Source
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Talent;