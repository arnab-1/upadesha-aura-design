
import { Youtube } from "lucide-react";

const VideoReviewsSection = () => {
  // Placeholder for video reviews
  const videoPlaceholders = Array(6).fill(null);

  return (
    <section id="reviews" className="py-20 bg-skyblue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f3a5f]">
            Real Experiences, Real Transformations
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Hear directly from people whose lives have been transformed through Upadesha consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoPlaceholders.map((_, index) => (
            <div 
              key={index} 
              className="aspect-video bg-pearl-50 border border-[#8fbde9]/20 rounded-lg overflow-hidden relative group shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Youtube className="w-16 h-16 text-[#1f3a5f] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-pearl-50/90 to-transparent">
                <p className="text-[#444444] font-medium">Client Testimonial {index + 1}</p>
                <p className="text-[#777777] text-sm">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReviewsSection;
