
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919593537711" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-stone-300 to-stone-200 hover:from-stone-400 hover:to-stone-300 text-stone-800 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;
