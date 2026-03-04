import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function Traiteurs() {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <Head title="Traiteur - Stoon Events" />
            <Navbar />
            <SocialSidebar />
            <WhatsAppButton />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                    <img 
                        src="/assets/images/nosPrestations/traiteur/1.jpeg" 
                        alt="Traiteur" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                                Traiteur
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Description */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Nous répondons avec empressement aux demandes <strong className="text-gray-900">privées et corporatives</strong>, quelle que soit <strong className="text-gray-900">l'importance de votre événement</strong>.
                            </p>

                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Des mets savoureux, une <strong className=" px-1">présentation impeccable</strong>, un <strong className=" px-1">service parfait</strong> pour un <strong className=" px-1">événement mémorable</strong>, voilà ce à quoi nous nous engageons.
                            </p>

                            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 my-10 border-l-4 border-yellow-400">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <span className="text-3xl"></span>
                                    Types d'événements
                                </h3>
                                <ul className="space-y-3 text-lg text-gray-700 list-none">
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Inaugurations</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Anniversaires</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Baptêmes</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Fêtes prénatales</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Événements corporatifs</strong></span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                <strong className="text-gray-900 font-bold">Stoon Events</strong> vous offre un service à la hauteur de vos attentes.
                            </p>

                            <div className="bg-yellow-50 rounded-xl p-8 mt-10 border-2 border-yellow-200">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <span className="text-3xl">🎯</span>
                                    Notre philosophie :
                                </h3>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    <strong className="text-gray-900">Chaque petit détail compte</strong> et vous êtes en droit d'exiger <strong className="text-gray-900">ce qu'il se fait de mieux</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Gallery Slider */}
                <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
                            Nos Réalisations
                        </h2>
                        
                        <div className="relative max-w-5xl mx-auto">
                            {/* Main Slider */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <div 
                                    className="flex transition-transform duration-700 ease-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {images.map((num) => (
                                        <div key={num} className="w-full flex-shrink-0">
                                            <img 
                                                src={`/assets/images/nosPrestations/traiteur/${num}.jpeg`}
                                                alt={`Traiteur ${num}`}
                                                className="w-full h-[500px] object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                                    aria-label="Previous slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                                    aria-label="Next slide"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-3 mt-8">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all duration-300 rounded-full ${
                                            currentSlide === index
                                                ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-blue-600'
                                                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Slide Counter */}
                            <div className="text-center mt-4 text-gray-600 font-medium">
                                {currentSlide + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
