
import { Calendar, User, Briefcase, Heart, Activity, CircleDot } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Numerology Consultation",
      description: "Discover your life path and personal year numbers to understand your journey.",
      icon: <CircleDot className="w-10 h-10 text-[#1f3a5f]" />,
    },
    {
      title: "Name Correction",
      description: "Align your name's vibration with your destiny for improved life outcomes.",
      icon: <User className="w-10 h-10 text-[#1f3a5f]" />,
    },
    {
      title: "Career & Wealth Guidance",
      description: "Unlock your financial potential and find the career path meant for you.",
      icon: <Briefcase className="w-10 h-10 text-[#1f3a5f]" />,
    },
    {
      title: "Relationship Alignment",
      description: "Harmonize your relationships through numerical compatibility assessment.",
      icon: <Heart className="w-10 h-10 text-[#1f3a5f]" />,
    },
    {
      title: "Health Remedies",
      description: "Discover numerical solutions to improve your physical and mental wellbeing.",
      icon: <Activity className="w-10 h-10 text-[#1f3a5f]" />,
    },
    {
      title: "Personalized Yantras",
      description: "Custom sacred geometry to amplify your intentions and manifestations.",
      icon: <Calendar className="w-10 h-10 text-[#1f3a5f]" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-pearl-100 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f3a5f]">Our Services</h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Transform every aspect of your life with our specialized numerological services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-pearl-50 border border-skyblue-300/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1f3a5f]">{service.title}</h3>
              <p className="text-[#555555]">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-[#d0e8f2] rounded-2xl shadow-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#1f3a5f]">Ready to Transform Your Life?</h3>
          <p className="text-[#444444] mb-6">Schedule your personalized numerology consultation today.</p>
          <a 
            href="#consult" 
            className="inline-block rounded-full bg-gradient-to-r from-skyblue-300 to-skyblue-200 hover:from-[#8fbde9] hover:to-skyblue-300 px-8 py-3 text-lg font-medium text-[#333333] shadow transition-all hover:scale-105"
          >
            Consult Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
