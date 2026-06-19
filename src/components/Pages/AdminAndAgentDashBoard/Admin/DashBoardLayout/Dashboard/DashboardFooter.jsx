import { Globe, Heart, MessageSquare, Share2 } from "lucide-react";

const DashBoardFooter = () => {
    return (
        <footer className="w-full bg-[#F4F6FA] border-t border-gray-200/60  py-4 mt-10">
            <div className=" flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-12">

                <div className="flex flex-col items-start max-w-sm space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#6366F1] p-2 rounded-xl flex items-center justify-center shadow-md">
                            <MessageSquare className="size-4 text-white" />
                        </div>
                        <span className="text-base font-bold text-[#1E2640] tracking-wide">InterviewAI</span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                        The world's most advanced AI interview preparation platform. Empowering candidates and recruiters with data-driven insights.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                        <button className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors shadow-sm">
                            <Globe size={16} />
                        </button>
                        <button className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors shadow-sm">
                            <Share2 size={16} />
                        </button>
                    </div>
                </div>

                <div className="flex gap-16 sm:gap-24 lg:gap-32 shrink-0">
                    <div className="flex flex-col space-y-3">
                        <h4 className="text-xs font-bold text-[#1E2640] tracking-wider uppercase">Platform</h4>
                        <ul className="space-y-2 text-xs sm:text-sm font-semibold text-gray-400">
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Dashboard</a></li>
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Interview Prep</a></li>
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Talent Pool</a></li>
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="text-xs font-bold text-[#1E2640] tracking-wider uppercase">Legal</h4>
                        <ul className="space-y-2 text-xs sm:text-sm font-semibold text-gray-400">
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Contact Support</a></li>
                            <li><a href="#" className="hover:text-[#6366F1] transition-colors">Compliance</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] sm:text-xs font-semibold text-gray-400">
                    &copy; 2026 InterviewAI. All rights reserved.
                </p>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-gray-400">
                    <span>Designed with</span>
                    <Heart size={12} className="text-red-500 fill-red-500 mx-0.5" />
                    <span>for modern professionals</span>
                </div>
            </div>
        </footer>
    );
};

export default DashBoardFooter;