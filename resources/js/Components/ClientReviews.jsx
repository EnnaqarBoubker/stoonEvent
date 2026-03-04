import { useEffect, useRef, useState } from "react";

export default function ClientReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const reviews = [
        {
            name: "Anass mountassir",
            image: "../assets/images/reviews/mountassir.jpeg",
            review: "Bravo stoon events vraiment je recommande 👍",
            rating: 5,
        },
        {
            name: "Redouan Hameddine",
            image: "../assets/images/reviews/Hameddine.jpeg",
            review: "Un travail vraiment remarquable",
            rating: 5,
        },
        {
            name: "Soufiane Antari",
            image: "../assets/images/reviews/antari.jpeg",
            review: "Services toppp!! Bonne continuation 🙏",
            rating: 5,
        },
        {
            name: "Bouri Mohamed",
            image: "../assets/images/reviews/bouri.jpeg",
            review: "Bravo Stoon Events ! Une organisation au top et une équipe exceptionnelle 👏👏👏👏👏",
            rating: 5,
        },
        {
            name: "Oussama Jabir",
            image: "../assets/images/reviews/jabir.jpeg",
            review: "Professionnelle 😍",
            rating: 5,
        },
        {
            name: "Settat Print",
            image: "../assets/images/reviews/print.jpeg",
            review: "Vraiment vous etes professionnel dans le service d'animation et merci pour votre prestation",
            rating: 5,
        },
        {
            name: "Yahya Majd",
            image: "../assets/images/reviews/majd.jpeg",
            review: "Bravo équipe !!!!. Je vous souhaite une bonne continuation.",
            rating: 5,
        },
        {
            name: "Nourrine Jawhar",
            image: "../assets/images/reviews/jawhar.jpeg",
            review: "Très bon équipe , je recommande 👍",
            rating: 5,
        },
        {
            name: "Sara Matboud",
            image: "../assets/images/reviews/matboud.jpeg",
            review: "Un immense merci à Stoun Events pour leur professionnalisme exemplaire. L'organisation était tout simplement parfaite, avec un sens du détail qui fait toute la différence. Je recommande vivement cette agence à quiconque souhaite transformer son événement en une réussite inoubliable !",
            rating: 5,
        },
        {
            name: "Ibtissam Azimani",
            image: "../assets/images/reviews/azimani.jpeg",
            review: "Nous avons fait appel à Stoon Events pour l’organisation de notre événement et nous avons été entièrement satisfaits. Une équipe professionnelle, créative et à l’écoute, avec une excellente gestion du temps et des détails. Nous recommandons vivement leurs services.",
            rating: 5,
        },
        {
            name: "Mounia Elhamdouni",
            image: "../assets/images/reviews/elhamdouni.jpeg",
            review: "Un service événementiel au top ! Professionnalisme, créativité et excellente ambiance. Merci Stoon Events",
            rating: 5,
        },
        {
            name: "Fatima Mohsal",
            image: "../assets/images/reviews/mohsal.jpeg",
            review: "Grâce à Stoon Events, notre événement a été un véritable succès. De la conception à la réalisation, tout a été géré avec professionnalisme et passion. Un partenaire de confiance que nous recommandons sans hésitation.",
            rating: 5,
        },
        {
            name: " Ando Oidih",
            image: "../assets/images/reviews/Oidih.jpeg",
            review: "Le succès de mon événement a commencé ici ! 🌟​Un immense merci à l’équipe de Stoon Events. Vous avez transformé mon moment en un souvenir vraiment inoubliable. Grâce à votre expertise et votre sens du détail exemplaire, j'ai eu droit à une organisation sur mesure et une animation d'exception. ​Je confirme ce que disent tous les clients : « Un professionnalisme exemplaire et une équipe au top ! » ​Faites confiance à l'expérience, faites confiance à Stoon Events. 🎬✨​",
            rating: 5,
        },
  
    ];

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1,
            );
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToReview = (index) => {
        setCurrentIndex(index);
    };

    const nextReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
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
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
                       Reviews Clients
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#f9c11a" }}
                        />
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#f9c11a" }}
                        />
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#f9c11a" }}
                        />
                        <div
                            className="w-24 sm:w-32 h-1 rounded-full"
                            style={{ backgroundColor: "#f9c11a" }}
                        />
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Ce que nos clients disent de nous
                    </p>
                </div>

                {/* Reviews Carousel */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                        style={{ color: "#f9c11a" }}
                        aria-label="Previous review"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                        style={{ color: "#f9c11a" }}
                        aria-label="Next review"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Review Cards Grid - 1 on mobile, 2 on tablet, 3 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {visibleReviews.map((review, index) => (
                            <div
                                key={index}
                                className={`relative ${
                                    index >= 1 ? "hidden sm:block" : ""
                                } ${index >= 2 ? "hidden lg:block" : ""}`}
                            >
                                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between">
                                    {/* Quote Icon */}
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-10">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12"
                                            style={{ color: "#f9c11a" }}
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-3 sm:mb-4">
                                            {[...Array(review.rating)].map(
                                                (_, starIndex) => (
                                                    <svg
                                                        key={starIndex}
                                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                                        style={{
                                                            color: "#f9c11a",
                                                        }}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ),
                                            )}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                                            "{review.review}"
                                        </p>
                                    </div>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 shadow-md flex-shrink-0"
                                            style={{ borderColor: "#f9c11a" }}
                                        />
                                        <div className="min-w-0">
                                            <h4 className="font-bold text-gray-800 text-xs sm:text-sm truncate">
                                                {review.name}
                                            </h4>
                                            <p className="text-gray-600 text-xs line-clamp-2">
                                                {review.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToReview(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? "w-8 sm:w-12 h-2 sm:h-3"
                                        : "w-2 sm:w-3 h-2 sm:h-3 hover:opacity-80"
                                }`}
                                style={{
                                    backgroundColor:
                                        index === currentIndex
                                            ? "#f9c11a"
                                            : "#cbd5e1",
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
