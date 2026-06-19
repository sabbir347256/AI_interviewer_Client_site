import { BrainCircuit, HelpCircle, Zap } from "lucide-react";

const FeatureCard = () => {
    const features = [
        {
            title: "Realistic Simulation",
            description: "Practice with our advanced AI personas that mimic real behavioral interviewing techniques.",
            icon: BrainCircuit,
        },
        {
            title: "Tailored Questions",
            description: "Dynamic question generation based on your target role, seniority level, and company culture.",
            icon: HelpCircle,
        },
        {
            title: "Instant Feedback",
            description: "Get immediate metrics on eye contact, sentiment, pacing, and keyword optimization after every answer.",
            icon: Zap,
        }
    ];
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-4 bg-[#F8F9FD]">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-start transition-all duration-300 hover:shadow-md"
                >
                    <div className="bg-[#EEF2FF] text-[#6366F1] p-3 rounded-2xl mb-6 flex items-center justify-center shrink-0">
                        <feature.icon size={22} className="stroke-[2.25]" />
                    </div>

                    <h3 className="text-base font-bold text-[#1E2640] mb-3 tracking-tight">
                        {feature.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FeatureCard;