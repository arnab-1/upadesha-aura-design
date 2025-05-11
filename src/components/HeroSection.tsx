
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const count = Math.floor(window.innerWidth * window.innerHeight / 10000);
      
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-skyblue-50">
      {/* Star Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>
      
      {/* Yantra overlay */}
      <div 
        className="absolute inset-0 bg-yantra-pattern bg-center opacity-5 animate-float"
        style={{ animationDelay: '1s' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <img 
              src="/placeholder.svg" 
              alt="Upadesha Symbol" 
              className="w-20 h-20 mx-auto mb-4 opacity-85 animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-[#1f3a5f]">
            Discover everything yourself with Upadesha
          </h1>
          
          <p className="text-lg md:text-xl text-[#444444] mb-6">
            UPADESHA by Raajeshh A Keshri is your gateway to powerful 180° life 
            transformation through the science of numerology.
          </p>
          
          <p className="text-base md:text-lg text-[#555555] mb-8 max-w-2xl mx-auto">
            We decode your unique numbers to unlock hidden potential, clear blockages, 
            and attract abundance in health, wealth, and relationships. Real change 
            starts here — experience clarity, purpose, and unstoppable growth with 
            Upadesha today.
          </p>
          
          <a 
            href="#consult" 
            className="inline-block rounded-full bg-gradient-to-r from-skyblue-300 to-skyblue-200 hover:from-[#8fbde9] hover:to-skyblue-300 px-8 py-3 text-lg font-medium text-[#333333] shadow-lg transition-all hover:scale-105 animate-glow"
          >
            Consult Now
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-skyblue-50 to-transparent" />
    </section>
  );
};

export default HeroSection;
