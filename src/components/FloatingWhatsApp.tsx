
import { Whatsapp } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919593537711" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <Whatsapp className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;
