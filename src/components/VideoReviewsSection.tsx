
import { Youtube } from "lucide-react";

const VideoReviewsSection = () => {
  // Placeholder for video reviews
  const videoPlaceholders = Array(6).fill(null);

  return (
    <section id="reviews" className="py-20 bg-midnight-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">
            Real Experiences, Real Transformations
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Hear directly from people whose lives have been transformed through Upadesha consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoPlaceholders.map((_, index) => (
            <div 
              key={index} 
              className="aspect-video bg-midnight-100 rounded-lg overflow-hidden relative group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Youtube className="w-16 h-16 text-saffron opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">Client Testimonial {index + 1}</p>
                <p className="text-cream/60 text-sm">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReviewsSection;
