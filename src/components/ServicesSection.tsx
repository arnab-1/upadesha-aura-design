
import { Calendar, User, Briefcase, Heart, Health, CircleDot } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Numerology Consultation",
      description: "Discover your life path and personal year numbers to understand your journey.",
      icon: <CircleDot className="w-10 h-10 text-gold" />,
    },
    {
      title: "Name Correction",
      description: "Align your name's vibration with your destiny for improved life outcomes.",
      icon: <User className="w-10 h-10 text-gold" />,
    },
    {
      title: "Career & Wealth Guidance",
      description: "Unlock your financial potential and find the career path meant for you.",
      icon: <Briefcase className="w-10 h-10 text-gold" />,
    },
    {
      title: "Relationship Alignment",
      description: "Harmonize your relationships through numerical compatibility assessment.",
      icon: <Heart className="w-10 h-10 text-gold" />,
    },
    {
      title: "Health Remedies",
      description: "Discover numerical solutions to improve your physical and mental wellbeing.",
      icon: <Health className="w-10 h-10 text-gold" />,
    },
    {
      title: "Personalized Yantras",
      description: "Custom sacred geometry to amplify your intentions and manifestations.",
      icon: <Calendar className="w-10 h-10 text-gold" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-midnight-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Our Services</h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Transform every aspect of your life with our specialized numerological services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-midnight-50 border border-gold/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold">{service.title}</h3>
              <p className="text-cream/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
