
import { Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#dceefc] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-[#1f3a5f] text-xl font-bold mb-4">UPADESHA</h3>
            <p className="text-[#2b2b2b] mb-4">
              Your gateway to powerful life transformation through the science of numerology.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919593537711" target="_blank" rel="noopener noreferrer" 
                 className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#1f3a5f] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">Services</a></li>
              <li><a href="#why-upadesha" className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">Why Upadesha</a></li>
              <li><a href="#reviews" className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#1f3a5f] font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#2b2b2b] hover:text-[#1f3a5f] transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#1f3a5f] font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-[#2b2b2b]">
              <p>📞 Call: +91 9593537711</p>
              <p>📧 Email: care@upadesha.co.in</p>
              <p>📍 Address: Newtown, Kolkata, West Bengal – 700156</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#8fbde9]/20 text-center text-[#2b2b2b] text-sm">
          <p>&copy; {new Date().getFullYear()} UPADESHA by Raajeshh A Keshri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
