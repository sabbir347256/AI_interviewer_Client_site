import { Globe, Heart, MessageSquare, Share2 } from "lucide-react";

const DashBoardFooter = () => {
  return (
    <footer className="w-full bg-[#F4F6FA] border-t border-gray-200 py-10 px-6 lg:px-12 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-16">
        <div className="flex flex-col items-start max-w-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-[#6366F1] p-2 rounded-lg flex items-center justify-center shadow-sm">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-[#1E2640] tracking-wide">
              InterviewAI
            </span>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
            The world&apos;s most advanced AI interview preparation platform.
            Empowering candidates and recruiters with data-driven insights.
          </p>
          <div className="flex items-center gap-2.5 pt-1">
            <button
              type="button"
              aria-label="Global site"
              className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#6366F1] hover:border-[#6366F1]/30 transition-all shadow-2xs"
            >
              <Globe size={16} />
            </button>
            <button
              type="button"
              aria-label="Share platform"
              className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#6366F1] hover:border-[#6366F1]/30 transition-all shadow-2xs"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-16 sm:gap-24 shrink-0">
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-bold text-[#1E2640] tracking-wider uppercase">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-gray-500">
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Talent Pool
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-bold text-[#1E2640] tracking-wider uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-gray-500">
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6366F1] transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-medium text-gray-500">
          &copy; 2026 InterviewAI. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <span>Designed with</span>
          <Heart size={14} className="text-red-500 fill-red-500 mx-0.5" />
          <span>for modern professionals</span>
        </div>
      </div>
    </footer>
  );
};

export default DashBoardFooter;
