
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8",
      scrolled ? "py-2 bg-cream/90 backdrop-blur-lg shadow-lg" : "py-4 bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className={cn(
          "text-saffron text-xl md:text-2xl font-bold transition-all duration-300", 
          scrolled ? "scale-90" : ""
        )}>
          UPADESHA
        </a>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#why-upadesha">Why Us</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <a 
          href="#consult" 
          className="rounded-full bg-saffron hover:bg-saffron/90 px-5 py-2 text-sm font-medium text-[#333333] shadow transition-all hover:scale-105"
        >
          Consult Now
        </a>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-[#444444] hover:text-saffron transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

export default Navbar;
