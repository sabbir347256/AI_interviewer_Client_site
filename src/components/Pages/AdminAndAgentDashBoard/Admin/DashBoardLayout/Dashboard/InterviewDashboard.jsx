import { BarChart2, Layout, Mic, PhoneOff, Plus, Send, Settings, Smile, User, Users, Video, Volume2 } from "lucide-react";

const InterviewDashboard = () => {
    return (
        <div className="w-full py-4 min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
                <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between min-h-[450px]">
                    <div className="flex items-center justify-between mb-4 flex-shrink-0">
                        <div className="flex items-center gap-2 text-[#1E2640] font-semibold text-sm sm:text-base">
                            <Users size={18} className="text-[#6366F1]" />
                            <span>People attending the call</span>
                        </div>
                        <button className="flex items-center gap-1 text-[#6366F1] font-medium text-xs sm:text-sm hover:underline">
                            <Plus size={16} />
                            <span>Add person to the call</span>
                        </button>
                    </div>

                    <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-gray-900 shadow-inner group">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                            alt="Main Call Speaker"
                            className="w-full h-full object-cover object-top absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/15">
                            <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=50" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col pr-2">
                                <span className="text-xs font-bold text-white leading-none">Richard Gomez</span>
                                <span className="text-[9px] text-[#A5B4FC] font-semibold mt-0.5 uppercase tracking-wider">Candidate</span>
                            </div>
                        </div>

                        <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md tracking-wider uppercase animate-pulse">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            Recording
                        </div>

                        <div className="absolute top-16 right-4 flex flex-col gap-3 z-10">
                            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 border-white/40 shadow-lg bg-gray-800 relative">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 border-white/40 shadow-lg bg-gray-800 relative">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150" alt="" className="w-full h-full object-cover object-top" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl flex items-center gap-4 sm:gap-5 border border-white/20 shadow-xl z-20">
                            <button className="p-2 rounded-xl text-white hover:bg-white/20 transition-colors">
                                <Mic size={18} />
                            </button>
                            <button className="p-2 rounded-xl text-white hover:bg-white/20 transition-colors">
                                <Video size={18} />
                            </button>
                            <button className="p-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
                                <PhoneOff size={18} />
                            </button>
                            <button className="p-2 rounded-xl text-white hover:bg-white/20 transition-colors">
                                <Layout size={18} />
                            </button>
                            <button className="p-2 rounded-xl text-white hover:bg-white/20 transition-colors">
                                <Settings size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#EEF2FF] rounded-2xl p-4 flex items-start gap-4 border border-[#E0E7FF] shadow-sm flex-shrink-0">
                    <div className="bg-white p-2.5 rounded-xl text-[#6366F1] shadow-sm shrink-0 flex items-center justify-center">
                        <Volume2 size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-[#4F46E5] uppercase tracking-wider">Conversation Insight</span>
                            <span className="text-[10px] text-gray-400 font-medium">Real-time Analysis</span>
                        </div>
                        <p className="text-[#1E2640] font-medium text-sm mt-1 leading-relaxed italic">
                            "Your resume is amazing Richard, next tell me why you choose this company?"
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                    <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-[#6366F1]" strokeWidth="3" strokeDasharray="80, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute text-[#6366F1]">
                                <User size={18} />
                            </div>
                        </div>
                        <span className="text-xl font-bold text-[#1E2640]">80%</span>
                        <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">AI Video Score</span>
                    </div>

                    <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-gray-500" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute text-gray-500">
                                <BarChart2 size={18} />
                            </div>
                        </div>
                        <span className="text-xl font-bold text-[#1E2640]">75%</span>
                        <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">Workmap Score</span>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden min-h-[380px]">
                    <div className="flex border-b border-gray-100 flex-shrink-0">
                        <button className="flex-1 py-4 text-center text-sm font-bold text-[#6366F1] border-b-2 border-[#6366F1] bg-gradient-to-t from-[#EEF2FF]/40 to-transparent">
                            Chat
                        </button>
                        <button className="flex-1 py-4 text-center text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                            Participant
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white">
                        <div className="flex flex-col items-start gap-1 max-w-[85%]">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200">
                                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=40" alt="" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs font-bold text-gray-800">Richard Gomez</span>
                                <span className="text-[9px] text-gray-400 font-medium">09:30 AM</span>
                            </div>
                            <div className="bg-[#F1F5F9] text-gray-800 text-xs sm:text-sm p-3 rounded-2xl rounded-tl-none font-medium leading-relaxed">
                                Hello everyone, Good Morning! 👋
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 ml-auto max-w-[85%]">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[9px] text-gray-400 font-medium">09:31 AM</span>
                                <span className="text-xs font-bold text-[#6366F1]">You</span>
                                <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center text-[9px] text-white font-black">
                                    YOU
                                </div>
                            </div>
                            <div className="bg-[#6366F1] text-white text-xs sm:text-sm p-3 rounded-2xl rounded-tr-none font-medium leading-relaxed text-right">
                                Good morning Richard, now you can start introduce yourself
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-1 max-w-[85%]">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=40" alt="" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs font-bold text-gray-800">Selena Gomez</span>
                                <span className="text-[9px] text-gray-400 font-medium">09:40 AM</span>
                            </div>
                            <div className="bg-[#F1F5F9] text-gray-800 text-xs sm:text-sm p-3 rounded-2xl rounded-tl-none font-medium leading-relaxed">
                                Why you choose this company?
                            </div>
                        </div>
                    </div>

                    <div className="p-3 border-t border-gray-100 flex-shrink-0 bg-white">
                        <div className="bg-[#F1F5F9] rounded-xl px-3 py-2.5 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Send your message..."
                                className="w-full bg-transparent border-none outline-none text-xs sm:text-sm placeholder-gray-400 text-gray-700"
                            />
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Smile size={18} />
                            </button>
                            <button className="text-[#6366F1] hover:text-[#4F46E5] transition-colors p-1 bg-white rounded-lg shadow-sm">
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InterviewDashboard;