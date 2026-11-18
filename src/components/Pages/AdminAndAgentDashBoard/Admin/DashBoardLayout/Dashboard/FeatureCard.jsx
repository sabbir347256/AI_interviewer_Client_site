import { BrainCircuit, HelpCircle, Zap } from "lucide-react";

const FeatureCard = () => {
  const features = [
    {
      title: "Realistic Simulation",
      description:
        "Practice with our advanced AI personas that mimic real behavioral interviewing techniques.",
      icon: BrainCircuit,
    },
    {
      title: "Tailored Questions",
      description:
        "Dynamic question generation based on your target role, seniority level, and company culture.",
      icon: HelpCircle,
    },
    {
      title: "Instant Feedback",
      description:
        "Get immediate metrics on eye contact, sentiment, pacing, and keyword optimization after every answer.",
      icon: Zap,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-6 bg-[#F8F9FD]">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-200/80 flex flex-col items-start transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
          >
            <div className="bg-[#EEF2FF] text-[#6366F1] p-3 rounded-xl mb-6 flex items-center justify-center shrink-0">
              <IconComponent size={22} className="stroke-[2]" />
            </div>

            <h3 className="text-base font-semibold text-[#1E2640] mb-2 tracking-tight">
              {feature.title}
            </h3>

            <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;
