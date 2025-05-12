
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
      scrolled ? "py-2 bg-stone-200/90 backdrop-blur-lg shadow-lg" : "py-4 bg-stone-200/80"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className={cn(
          "text-stone-800 text-xl md:text-2xl font-bold transition-all duration-300", 
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
          className="rounded-full bg-gradient-to-r from-stone-300 to-stone-200 hover:bg-gradient-to-r hover:from-stone-400 hover:to-stone-300 px-5 py-2 text-sm font-medium text-stone-800 shadow transition-all hover:scale-105"
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
    className="text-stone-700 hover:text-stone-900 transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

export default Navbar;
