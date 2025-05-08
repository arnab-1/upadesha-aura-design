
import { CircleDot, User, Users } from 'lucide-react';

const WhyUpadeshaSection = () => {
  const reasons = [
    {
      title: "Rooted in Vedic Science",
      description: "Our approach combines ancient Vedic wisdom with modern numerical analysis.",
      icon: <CircleDot className="w-8 h-8 text-saffron" />,
      count: "5,000+",
      label: "Years of Wisdom",
    },
    {
      title: "1-on-1 Guidance",
      description: "Personal consultations with Raajeshh A Keshri for tailored solutions.",
      icon: <User className="w-8 h-8 text-saffron" />,
      count: "100%",
      label: "Personal Attention",
    },
    {
      title: "Lives Transformed",
      description: "Join our growing community of individuals experiencing profound life changes.",
      icon: <Users className="w-8 h-8 text-saffron" />,
      count: "1,000+",
      label: "Success Stories",
    },
  ];

  return (
    <section id="why-upadesha" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-yantra-pattern bg-center opacity-5"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Why Upadesha Works</h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Our unique approach has helped thousands achieve remarkable transformations in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-midnight-50 border border-saffron/30">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-saffron">{reason.title}</h3>
              <p className="text-cream/70 mb-6">{reason.description}</p>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-gold">{reason.count}</div>
                <div className="text-cream/60 text-sm">{reason.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUpadeshaSection;
