import {
  BarChart2,
  Layout,
  Mic,
  PhoneOff,
  Plus,
  Send,
  Settings,
  Smile,
  User,
  Users,
  Video,
  Volume2,
} from "lucide-react";

const CHAT_MESSAGES = [
  {
    id: 1,
    sender: "Richard Gomez",
    time: "09:30 AM",
    text: "Hello everyone, Good Morning! 👋",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=40",
    isSelf: false,
  },
  {
    id: 2,
    sender: "You",
    time: "09:31 AM",
    text: "Good morning Richard, now you can start introduce yourself",
    isSelf: true,
  },
  {
    id: 3,
    sender: "Selena Gomez",
    time: "09:40 AM",
    text: "Why you choose this company?",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=40",
    isSelf: false,
  },
];

const SCORE_METRICS = [
  {
    label: "AI Video Score",
    value: 80,
    strokeColor: "text-[#6366F1]",
    iconColor: "text-[#6366F1]",
    icon: User,
  },
  {
    label: "Workmap Score",
    value: 75,
    strokeColor: "text-gray-500",
    iconColor: "text-gray-500",
    icon: BarChart2,
  },
];

const InterviewDashboard = () => {
  return (
    <div className="w-full py-4 min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xs border border-gray-200/80 hover:border-gray-300 transition-colors flex-1 flex flex-col justify-between min-h-[450px]">
          <div className="flex items-center justify-between mb-4 shrink-0">
            <div className="flex items-center gap-2 text-[#1E2640] font-semibold text-sm sm:text-base">
              <Users size={18} className="text-[#6366F1]" />
              <span>People attending the call</span>
            </div>
            <button
              type="button"
              className="flex items-center gap-1 text-[#6366F1] font-medium text-xs sm:text-sm hover:text-[#4F46E5] transition-colors"
            >
              <Plus size={16} />
              <span>Add person to the call</span>
            </button>
          </div>

          <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
              alt="Richard Gomez on video call"
              className="w-full h-full object-cover object-top absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

            <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/15">
              <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=50"
                  alt="Richard Gomez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-xs font-semibold text-white leading-none">
                  Richard Gomez
                </span>
                <span className="text-[10px] text-[#A5B4FC] font-medium mt-0.5 uppercase tracking-wider">
                  Candidate
                </span>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-red-600/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Recording
            </div>

            <div className="absolute top-16 right-4 flex flex-col gap-3 z-10">
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-white/40 shadow-md bg-gray-800 hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150"
                  alt="Participant Selena"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border border-white/40 shadow-md bg-gray-800 hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150"
                  alt="Participant Alex"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-gray-900/75 backdrop-blur-md px-4 py-2.5 rounded-xl flex items-center gap-3 sm:gap-4 border border-white/15 shadow-lg z-20">
              <button
                type="button"
                aria-label="Toggle microphone"
                className="p-2 rounded-xl text-white hover:bg-white/15 transition-colors"
              >
                <Mic size={18} />
              </button>
              <button
                type="button"
                aria-label="Toggle camera"
                className="p-2 rounded-xl text-white hover:bg-white/15 transition-colors"
              >
                <Video size={18} />
              </button>
              <button
                type="button"
                aria-label="End call"
                className="p-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <PhoneOff size={18} />
              </button>
              <button
                type="button"
                aria-label="Change layout"
                className="p-2 rounded-xl text-white hover:bg-white/15 transition-colors"
              >
                <Layout size={18} />
              </button>
              <button
                type="button"
                aria-label="Call settings"
                className="p-2 rounded-xl text-white hover:bg-white/15 transition-colors"
              >
                <Settings size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#EEF2FF] rounded-2xl p-4 flex items-start gap-4 border border-[#E0E7FF] hover:border-[#C7D2FE] transition-colors shrink-0">
          <div className="bg-white p-2.5 rounded-xl text-[#6366F1] shadow-2xs shrink-0 flex items-center justify-center">
            <Volume2 size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#4F46E5] uppercase tracking-wider">
                Conversation Insight
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                Real-time Analysis
              </span>
            </div>
            <p className="text-[#1E2640] font-normal text-sm mt-1 leading-relaxed">
              &ldquo;Your resume is amazing Richard, next tell me why you choose
              this company?&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4 shrink-0">
          {SCORE_METRICS.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.label}
                className="bg-white p-5 rounded-2xl shadow-xs border border-gray-200/80 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={metric.strokeColor}
                      strokeWidth="3"
                      strokeDasharray={`${metric.value}, 100`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className={`absolute ${metric.iconColor}`}>
                    <IconComponent size={18} />
                  </div>
                </div>
                <span className="text-xl font-bold text-[#1E2640]">
                  {metric.value}%
                </span>
                <span className="text-[11px] text-gray-500 font-semibold tracking-wider uppercase mt-1">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xs border border-gray-200/80 hover:border-gray-300 transition-colors flex-1 flex flex-col overflow-hidden min-h-[380px]">
          <div className="flex border-b border-gray-200/80 shrink-0">
            <button
              type="button"
              className="flex-1 py-3.5 text-center text-sm font-semibold text-[#6366F1] border-b-2 border-[#6366F1] bg-[#EEF2FF]/30"
            >
              Chat
            </button>
            <button
              type="button"
              className="flex-1 py-3.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
            >
              Participant
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white">
            {CHAT_MESSAGES.map((msg) =>
              msg.isSelf ? (
                <div
                  key={msg.id}
                  className="flex flex-col items-end gap-1 ml-auto max-w-[85%]"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] text-gray-400 font-medium">
                      {msg.time}
                    </span>
                    <span className="text-xs font-semibold text-[#6366F1]">
                      {msg.sender}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center text-[9px] text-white font-bold">
                      YOU
                    </div>
                  </div>
                  <div className="bg-[#6366F1] text-white text-xs sm:text-sm p-3 rounded-xl rounded-tr-none font-normal leading-relaxed text-right">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div
                  key={msg.id}
                  className="flex flex-col items-start gap-1 max-w-[85%]"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={msg.avatar}
                        alt={msg.sender}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-800">
                      {msg.sender}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {msg.time}
                    </span>
                  </div>
                  <div className="bg-[#F1F5F9] text-gray-800 text-xs sm:text-sm p-3 rounded-xl rounded-tl-none font-normal leading-relaxed">
                    {msg.text}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="p-3 border-t border-gray-200/80 shrink-0 bg-white">
            <div className="bg-[#F1F5F9] rounded-xl px-3 py-2 flex items-center gap-2 focus-within:ring-1 focus-within:ring-[#6366F1]/40 transition-shadow">
              <input
                type="text"
                placeholder="Send your message..."
                className="w-full bg-transparent border-none outline-none text-xs sm:text-sm placeholder-gray-400 text-gray-700"
              />
              <button
                type="button"
                aria-label="Insert emoji"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Smile size={18} />
              </button>
              <button
                type="button"
                aria-label="Send message"
                className="text-[#6366F1] hover:text-[#4F46E5] transition-colors p-1.5 bg-white rounded-xl shadow-2xs"
              >
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
