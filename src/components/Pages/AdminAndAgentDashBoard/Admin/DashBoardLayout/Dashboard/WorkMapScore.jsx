import { Info } from "lucide-react";

const WorkMapScore = () => {
    const scores = [
        { label: "Presentation", value: 90, color: "bg-[#6366F1]" },
        { label: "Opportunistic", value: 60, color: "bg-[#4B5563]" },
        { label: "Business Acument", value: 85, color: "bg-[#6366F1]" },
        { label: "Closing Technique", value: 40, color: "bg-[#EF4444]" },
    ];
    return (
        <div className="w-full  bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-base font-bold text-[#1E2640]">Workmap Score</h3>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">See the workmap in one sheet</p>
                </div>
                <button className="text-gray-300 hover:text-gray-500 transition-colors">
                    <Info size={18} />
                </button>
            </div>

            <div className="space-y-5">
                {scores.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                            <span className="text-[#1E2640]">{item.label}</span>
                            <span
                                className={
                                    item.color === "bg-[#6366F1]" ? "text-[#6366F1]" :
                                        item.color === "bg-[#4B5563]" ? "text-[#4B5563]" : "text-[#EF4444]"
                                }
                            >
                                {item.value}%
                            </span>
                        </div>
                        <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                            <div
                                className={`h-full ${item.color} rounded-full transition-all duration-500`}
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