import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

// Google G Icon Component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            
            {/* Left Side: Compact Score Badge (The Anchor) */}
            <div className="shrink-0 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-1 min-w-[180px]">
                <div className="flex items-center gap-2">
                    <GoogleIcon />
                    <span className="font-bold text-gray-600 text-sm">Google Reviews</span>
                </div>
                <div className="flex items-center gap-3 lg:gap-0 lg:flex-col lg:items-start">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-serif text-pousada-green font-bold leading-none">4.8</span>
                        <span className="text-xs text-gray-400">/ 5.0</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex text-yellow-400 my-0.5">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" strokeWidth={0} />)}
                        </div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide hidden lg:block">1.200+ Avaliações</span>
                    </div>
                </div>
            </div>

            {/* Vertical Divider for Desktop */}
            <div className="hidden lg:block w-px h-16 bg-gray-200"></div>

            {/* Right Side: Ultra Compact Slider */}
            <div className="w-full overflow-hidden min-w-0">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {REVIEWS.map((review) => (
                        <SwiperSlide key={review.id} className="h-auto">
                            <div className="bg-gray-50/80 border border-gray-100 p-4 rounded-lg hover:border-gray-200 transition-colors h-full flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-gray-800 text-xs">{review.name}</h4>
                                        <div className="flex text-yellow-400 mt-0.5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={8} fill="currentColor" strokeWidth={0} />
                                            ))}
                                        </div>
                                    </div>
                                    <Quote className="text-gray-200 shrink-0 transform -scale-x-100" size={16} />
                                </div>
                                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                                    "{review.text}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;