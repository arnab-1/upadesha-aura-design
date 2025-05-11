
import { Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-skyblue-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-skyblue-300 text-xl font-bold mb-4">UPADESHA</h3>
            <p className="text-[#555555] mb-4">
              Your gateway to powerful life transformation through the science of numerology.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-[#666666] hover:text-skyblue-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="text-[#666666] hover:text-skyblue-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919593537711" target="_blank" rel="noopener noreferrer" 
                 className="text-[#666666] hover:text-skyblue-300 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-skyblue-300 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-[#555555] hover:text-skyblue-300 transition-colors">Services</a></li>
              <li><a href="#why-upadesha" className="text-[#555555] hover:text-skyblue-300 transition-colors">Why Upadesha</a></li>
              <li><a href="#reviews" className="text-[#555555] hover:text-skyblue-300 transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-skyblue-300 font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#555555] hover:text-skyblue-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#555555] hover:text-skyblue-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#555555] hover:text-skyblue-300 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-skyblue-300 font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-[#555555]">
              <p>📞 Call: +91 9593537711</p>
              <p>📧 Email: care@upadesha.co.in</p>
              <p>📍 Address: Newtown, Kolkata, West Bengal – 700156</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-skyblue-300/20 text-center text-[#777777] text-sm">
          <p>&copy; {new Date().getFullYear()} UPADESHA by Raajeshh A Keshri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
