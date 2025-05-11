
import { Calendar, User, Briefcase, Heart, Activity, CircleDot } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Numerology Consultation",
      description: "Discover your life path and personal year numbers to understand your journey.",
      icon: <CircleDot className="w-10 h-10 text-saffron" />,
    },
    {
      title: "Name Correction",
      description: "Align your name's vibration with your destiny for improved life outcomes.",
      icon: <User className="w-10 h-10 text-saffron" />,
    },
    {
      title: "Career & Wealth Guidance",
      description: "Unlock your financial potential and find the career path meant for you.",
      icon: <Briefcase className="w-10 h-10 text-saffron" />,
    },
    {
      title: "Relationship Alignment",
      description: "Harmonize your relationships through numerical compatibility assessment.",
      icon: <Heart className="w-10 h-10 text-saffron" />,
    },
    {
      title: "Health Remedies",
      description: "Discover numerical solutions to improve your physical and mental wellbeing.",
      icon: <Activity className="w-10 h-10 text-saffron" />,
    },
    {
      title: "Personalized Yantras",
      description: "Custom sacred geometry to amplify your intentions and manifestations.",
      icon: <Calendar className="w-10 h-10 text-saffron" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-cream-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-saffron">Our Services</h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Transform every aspect of your life with our specialized numerological services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-cream-50 border border-saffron/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-saffron">{service.title}</h3>
              <p className="text-[#555555]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
