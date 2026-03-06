import { useEffect, useRef, useState } from "react";

export default function ClientReviews() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const reviews = [
        {
            name: "Anass mountassir",
            image: "/assets/images/reviews/mountassir.jpeg",
            review: "Bravo stoon events vraiment je recommande 👍",
            rating: 5,
        },
        {
            name: "Redouan Hameddine",
            image: "/assets/images/reviews/Hameddine.jpeg",
            review: "Un travail vraiment remarquable",
            rating: 5,
        },
        {
            name: "Soufiane Antari",
            image: "/assets/images/reviews/antari.jpeg",
            review: "Services toppp!! Bonne continuation 🙏",
            rating: 5,
        },
        {
            name: "Settat Print",
            image: "/assets/images/reviews/print.jpeg",
            review: "Vraiment vous etes professionnel dans le service d'animation et merci pour votre prestation",
            rating: 5,
        },
        {
            name: "Yahya Majd",
            image: "/assets/images/reviews/majd.jpeg",
            review: "Bravo équipe !!!!. Je vous souhaite une bonne continuation.",
            rating: 5,
        },
        {
            name: "Nourrine Jawhar",
            image: "/assets/images/reviews/jawhar.jpeg",
            review: "Très bon équipe , je recommande 👍",
            rating: 5,
        },
        {
            name: "Sara Matboud",
            image: "/assets/images/reviews/matboud.jpeg",
            review: "Un immense merci à Stoun Events pour leur professionnalisme exemplaire. L'organisation était tout simplement parfaite, avec un sens du détail qui fait toute la différence. Je recommande vivement cette agence à quiconque souhaite transformer son événement en une réussite inoubliable !",
            rating: 5,
        },
        {
            name: "Ibtissam Azimani",
            image: "/assets/images/reviews/azimani.jpeg",
            review: "Nous avons fait appel à Stoon Events pour l'organisation de notre événement et nous avons été entièrement satisfaits. Une équipe professionnelle, créative et à l'écoute, avec une excellente gestion du temps et des détails. Nous recommandons vivement leurs services.",
            rating: 5,
        },
        {
            name: "Mounia Elhamdouni",
            image: "/assets/images/reviews/elhamdouni.jpeg",
            review: "Un service événementiel au top ! Professionnalisme, créativité et excellente ambiance. Merci Stoon Events",
            rating: 5,
        },
        {
            name: "Fatima Mohsal",
            image: "/assets/images/reviews/mohsal.jpeg",
            review: "Grâce à Stoon Events, notre événement a été un véritable succès. De la conception à la réalisation, tout a été géré avec professionnalisme et passion. Un partenaire de confiance que nous recommandons sans hésitation.",
            rating: 5,
        },
        {
            name: "Ando Oidih",
            image: "/assets/images/reviews/Oidih.jpeg",
            review: "Le succès de mon événement a commencé ici ! 🌟 Un immense merci à l'équipe de Stoon Events. Vous avez transformé mon moment en un souvenir vraiment inoubliable. Grâce à votre expertise et votre sens du détail exemplaire, j'ai eu droit à une organisation sur mesure et une animation d'exception. Je confirme ce que disent tous les clients : Un professionnalisme exemplaire et une équipe au top ! Faites confiance à l'expérience, faites confiance à Stoon Events. 🎬✨",
            rating: 5,
        },
    ];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container || isPaused || isDragging) return;

        const autoScroll = setInterval(() => {
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScroll) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 1;
            }
            const cardWidth = container.scrollWidth / reviews.length;
            setActiveIndex(Math.round(container.scrollLeft / cardWidth) % reviews.length);
        }, 20);

        return () => clearInterval(autoScroll);
    }, [isPaused, isDragging]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setIsPaused(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeftState(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setTimeout(() => setIsPaused(false), 2000);
        }
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 400;
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };

    const goToReview = (index) => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.scrollWidth / reviews.length;
        container.scrollLeft = cardWidth * index;
        setActiveIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
                        Avis Clients
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f9c11a" }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f9c11a" }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f9c11a" }} />
                        <div className="w-24 sm:w-32 h-1 rounded-full" style={{ backgroundColor: "#f9c11a" }} />
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Ce que nos clients disent de nous
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                        style={{ color: "#f9c11a" }}
                        aria-label="Previous review"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                        style={{ color: "#f9c11a" }}
                        aria-label="Next review"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div
                        ref={scrollRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto cursor-grab active:cursor-grabbing scroll-smooth px-4"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => {
                            if (!isDragging) setIsPaused(false);
                            handleMouseUp();
                        }}
                        onMouseMove={handleMouseMove}
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className="flex-shrink-0 w-72 sm:w-80 md:w-96">
                                <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col justify-between" style={{ minHeight: "220px" }}>
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-10">
                                        <svg className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#f9c11a" }} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex gap-1 mb-3 sm:mb-4">
                                            {[...Array(review.rating)].map((_, starIndex) => (
                                                <svg key={starIndex} className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#f9c11a" }} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                                            "{review.review}"
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 shadow-md flex-shrink-0"
                                            style={{ borderColor: "#f9c11a" }}
                                            onError={(e) => {
                                                e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(review.name) + "&background=f9c11a&color=fff";
                                            }}
                                        />
                                        <h4 className="font-bold text-gray-800 text-xs sm:text-sm truncate">{review.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToReview(index)}
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: index === activeIndex ? "2rem" : "0.625rem",
                                height: index === activeIndex ? "0.75rem" : "0.625rem",
                                backgroundColor: index === activeIndex ? "#f9c11a" : "#cbd5e1",
                            }}
                            aria-label={"Go to review " + (index + 1)}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-8 sm:mt-10">
                    <a
                        href="https://g.page/r/CXQwx2Rx4OirEAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-sm sm:text-base">Laisser un Avis sur Google</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
