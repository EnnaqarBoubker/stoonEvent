import { useEffect, useRef, useState } from "react";

export default function ClientReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const reviews = [
        {
            name: "Sophie Martin",
            company: "Directrice Marketing, TechCorp",
            image: "https://i.pravatar.cc/150?img=1",
            review: "Stoon Events a organisé notre séminaire d'entreprise avec un professionnalisme exceptionnel. L'équipe a été attentive à tous nos besoins et a su créer une ambiance parfaite. Nos employés étaient ravis !",
            rating: 5,
        },
        {
            name: "Jean Dubois",
            company: "CEO, Innovation Plus",
            image: "https://i.pravatar.cc/150?img=3",
            review: "Une expérience mémorable ! L'animation de notre événement corporate était parfaitement orchestrée. La créativité et le professionnalisme de l'équipe ont dépassé toutes nos attentes. Je recommande vivement !",
            rating: 5,
        },
        {
            name: "Marie Lefevre",
            company: "Responsable RH, Solutions Global",
            image: "https://i.pravatar.cc/150?img=5",
            review: "Pour notre Family Day annuel, Stoon Events a su créer une atmosphère chaleureuse et conviviale. Les animations pour enfants étaient fantastiques et les adultes ont adoré l'organisation. Service impeccable !",
            rating: 5,
        },
        {
            name: "Ahmed Benali",
            company: "Fondateur, StartupHub",
            image: "https://i.pravatar.cc/150?img=12",
            review: "L'inauguration de nos nouveaux locaux a été un véritable succès grâce à Stoon Events. Du matériel audio-visuel de qualité, une équipe réactive et des prestations sur mesure. Exactement ce dont nous avions besoin !",
            rating: 5,
        },
        {
            name: "Claire Rousseau",
            company: "Directrice Communication, MediaGroup",
            image: "https://i.pravatar.cc/150?img=9",
            review: "Nous avons fait appel à Stoon Events pour plusieurs événements et nous n'avons jamais été déçus. Leur créativité, leur ponctualité et leur sens du détail font toute la différence. Une équipe au top !",
            rating: 5,
        },
    ];

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToReview = (index) => {
        setCurrentIndex(index);
    };

    const nextReview = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    // Get visible reviews (3 at a time, wrapping around)
    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < itemsPerPage; i++) {
            visible.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return visible;
    };

    const visibleReviews = getVisibleReviews();

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Témoignages Clients
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-32 h-1 rounded-full" style={{ backgroundColor: '#548291' }} />
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Ce que nos clients disent de nous
                    </p>
                </div>

                {/* Reviews Carousel */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
                        style={{ color: '#548291' }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
                        style={{ color: '#548291' }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Review Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {visibleReviews.map((review, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col justify-between">
                                    {/* Quote Icon */}
                                    <div className="absolute top-4 right-4 opacity-10">
                                        <svg className="w-12 h-12" style={{ color: '#548291' }} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, starIndex) => (
                                                <svg
                                                    key={starIndex}
                                                    className="w-5 h-5"
                                                    style={{ color: '#548291' }}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                                            "{review.review}"
                                        </p>
                                    </div>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 shadow-md"
                                            style={{ borderColor: '#548291' }}
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm">
                                                {review.name}
                                            </h4>
                                            <p className="text-gray-600 text-xs">
                                                {review.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-3 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToReview(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex 
                                        ? 'w-12 h-3' 
                                        : 'w-3 h-3 hover:opacity-80'
                                }`}
                                style={{ 
                                    backgroundColor: index === currentIndex ? '#548291' : '#cbd5e1' 
                                }}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
