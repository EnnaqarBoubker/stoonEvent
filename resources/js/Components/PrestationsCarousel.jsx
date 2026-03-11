import { useRef, useState, useEffect } from "react";
import { Link } from '@inertiajs/react';

export default function PrestationsCarousel() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Auto-scroll effect
    useEffect(() => {
        const container = scrollRef.current;
        if (!container || isPaused || isDragging) return;

        const autoScroll = setInterval(() => {
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            if (container.scrollLeft >= maxScroll) {
                // Reset to beginning when reaching the end
                container.scrollLeft = 0;
            } else {
                // Scroll smoothly to the right
                container.scrollLeft += 1;
            }
        }, 20);

        return () => clearInterval(autoScroll);
    }, [isPaused, isDragging]);

    const prestations = [
        {
            title: "Family day",
            image: "/assets/images/nosPrestations/family_day/1.jpeg",
            link: "/prestations/family-day",
        },
        {
            title: "Événement d'entreprise",
            image: "/assets/images/nosPrestations/evenement_entreprises/6.jpeg",
            link: "/prestations/evenement-entreprise",
        },
        {
            title: "Animation commerciale",
            image: "/assets/images/nosPrestations/animation_commerciale/1.jpeg",
            link: "/prestations/animation-commerciale",
        },
        {
            title: "Images & son",
            image: "/assets/images/nosPrestations/image_et_son/1.jpeg",
            link: "/prestations/images-son",
        },
        {
            title: "Inauguration",
            image: "/assets/images/nosPrestations/inauguration/1.jpeg",
            link: "/prestations/inauguration",
        },
        {
            title: "Séminaire et conférence",
            image: "/assets/images/nosPrestations/seminaire_conferences/1.jpeg",
            link: "/prestations/seminaire-conference",
        },
        {
            title: "Street marketing and publicité",
            image: "/assets/images/nosPrestations/street_marketing_publicite/1.jpeg",
            link: "/prestations/street-marketing",
        },
        {
            title: "Kermesse",
            image: "/assets/images/nosPrestations/kermesse/1.jpeg",
            link: "/prestations/kermesse",
        },
        {
            title: "Festival",
            image: "/assets/images/nosPrestations/festival/1.jpeg",
            link: "/prestations/festival",
        },
        {
            title: "Anniversaires",
            image: "/assets/images/nosPrestations/anniversaire/5.jpeg",
            link: "/prestations/anniversaires",
        },
        {
            title: "Atelier créatif",
            image: "/assets/images/nosPrestations/atelier_creatifs/2.jpeg",
            link: "/prestations/atelier-creatif",
        },
        {
            title: "Soirée à thème",
            image: "/assets/images/nosPrestations/soiree_a_theme/1.jpeg",
            link: "/prestations/soiree-theme",
        },
        {
            title: "Événement familiaux",
            image: "/assets/images/nosPrestations/evenements_familiaux/3.jpeg",
            link: "/prestations/evenements-familiaux",
        },
        {
            title: "Fête d'école",
            image: "/assets/images/nosPrestations/fete_ecole/4.jpeg",
            link: "/prestations/fete-ecole",
        },
        {
            title: "Colonie de vacances",
            image: "/assets/images/nosPrestations/colonies_de_vacances/2.jpeg",
            link: "/prestations/colonies-vacances",
        },
        {
            title: "Compagnie de sensibilisation",
            image: "/assets/images/nosPrestations/campagne_de_sensibilisation/2.jpeg",
            link: "/prestations/sensibilisation",
        },
        {
            title: "Traiteurs",
            image: "/assets/images/nosPrestations/traiteur/2.jpeg",
            link: "/prestations/traiteurs",
        },
    ];

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setIsPaused(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        if (isDragging) {
            // Resume auto-scroll after a short delay when dragging stops
            setTimeout(() => setIsPaused(false), 2000);
        }
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scroll = (direction) => {
        const container = scrollRef.current;
        // Scroll by one card width for proper snapping
        const card = container.querySelector('a');
        const cardWidth = card ? card.offsetWidth + 24 : 340; // card width + gap
        
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
        
        if (direction === 'left') {
            container.scrollLeft -= cardWidth;
        } else {
            container.scrollLeft += cardWidth;
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Nos Prestations
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-32 h-1 rounded-full" style={{ backgroundColor: '#548291' }} />
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <p className={`text-gray-600 text-lg ${!isExpanded ? 'line-clamp-2' : ''}`}>
                            Chez Stoon Events, nous transformons chaque événement en une expérience mémorable.
Notre mission est de donner vie à vos idées en créant des événements uniques, créatifs et parfaitement organisés, qui marquent durablement vos invités.

Nous proposons des prestations événementielles clés en main, adaptées à tous vos besoins : événements d’entreprise, animations pour enfants, soirées thématiques, lancements de produits, kermesses, carnavals, fêtes de fin d’année et événements grand public.
Grâce à une approche personnalisée, une équipe expérimentée et une attention particulière aux détails, nous garantissons des événements à forte valeur émotionnelle et visuelle.

Avec Stoon Events, offrez à votre public bien plus qu’un événement : une véritable expérience.
                        </p>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-3 text-sm font-semibold hover:underline transition-all duration-200"
                            style={{ color: '#548291' }}
                        >
                            {isExpanded ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons - outside overflow, always visible */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 -translate-x-1 sm:-translate-x-2"
                        style={{ color: '#548291' }}
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 translate-x-1 sm:translate-x-2"
                        style={{ color: '#548291' }}
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrollable Content */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-8 sm:px-4"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => {
                            if (!isDragging) {
                                setIsPaused(false);
                            }
                            handleMouseUp();
                        }}
                        onMouseMove={handleMouseMove}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            scrollSnapType: 'x mandatory',
                        }}
                    >
                        {prestations.map((prestation, index) => (
                            <Link
                                key={index}
                                href={prestation.link}
                                className="flex-shrink-0 w-[calc(100vw-5rem)] sm:w-80 group"
                                style={{ scrollSnapAlign: 'center' }}
                            >
                                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Image */}
                                    <img
                                        src={prestation.image}
                                        alt={prestation.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop';
                                        }}
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    
                                    {/* Title */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white text-2xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                                            {prestation.title}
                                        </h3>
                                        <div 
                                            className="w-16 h-1 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300"
                                            style={{ backgroundColor: '#548291' }}
                                        />
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div 
                                        className="absolute inset-0 border-4 border-transparent group-hover:border-opacity-100 transition-all duration-300 rounded-2xl pointer-events-none"
                                        style={{ borderColor: 'rgba(84, 130, 145, 0.3)' }}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Faites défiler pour voir toutes nos prestations
                        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </p>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
