import { Info } from "lucide-react";

const SCORE_ITEMS = [
  {
    label: "Presentation",
    value: 90,
    barColor: "bg-[#6366F1]",
    textColor: "text-[#6366F1]",
  },
  {
    label: "Opportunistic",
    value: 60,
    barColor: "bg-[#4B5563]",
    textColor: "text-[#4B5563]",
  },
  {
    label: "Business Acumen",
    value: 85,
    barColor: "bg-[#6366F1]",
    textColor: "text-[#6366F1]",
  },
  {
    label: "Closing Technique",
    value: 40,
    barColor: "bg-[#EF4444]",
    textColor: "text-[#EF4444]",
  },
];

const WorkMapScore = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-xs border border-gray-200/80 hover:border-gray-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-[#1E2640]">
            Workmap Score
          </h3>
          <p className="text-xs text-gray-500 font-normal mt-0.5">
            See the workmap in one sheet
          </p>
        </div>
        <button
          type="button"
          aria-label="Workmap score details"
          className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
        >
          <Info size={18} />
        </button>
      </div>

      <div className="space-y-5">
        {SCORE_ITEMS.map((item) => (
          <div key={item.label} className="space-y-2 group">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span className="text-[#1E2640] group-hover:text-[#6366F1] transition-colors">
                {item.label}
              </span>
              <span className={item.textColor}>{item.value}%</span>
            </div>
            <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div
                className={`h-full ${item.barColor} rounded-full transition-all duration-300`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkMapScore;
