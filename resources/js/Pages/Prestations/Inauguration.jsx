import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function Inauguration() {
    const images = [1, 2, 3, 4, 5];

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
            <Head title="Inauguration - Stoon Events" />
            <Navbar />
            <SocialSidebar />
            <WhatsAppButton />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                    <img 
                        src="/assets/images/nosPrestations/inauguration/1.jpeg" 
                        alt="Inauguration" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                                Inauguration
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Description */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                <strong className="text-gray-900 font-bold">Stoon Events</strong> accompagne les entreprises, institutions et marques dans l'organisation d'<strong className="text-gray-900">inaugurations sur mesure</strong>, conçues pour marquer les esprits et valoriser votre image dès le premier instant.
                            </p>

                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                De la conception du concept à la coordination le jour J, nous prenons en charge chaque détail : <strong className=" px-1">scénographie</strong>, <strong className=" px-1">sonorisation et éclairage</strong>, <strong className=" px-1">accueil des invités</strong>, <strong className=" px-1">animations</strong>, <strong className=" px-1">protocole officiel</strong>, <strong className=" px-1">coupure de ruban</strong>, ainsi que la <strong className="text-gray-900">gestion technique et logistique</strong> de l'événement.
                            </p>

                            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 my-10 border-l-4 border-yellow-400">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <span className="text-3xl"></span>
                                    Types d'inaugurations
                                </h3>
                                <ul className="space-y-3 text-lg text-gray-700 list-none">
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Locaux commerciaux</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Usines</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Showrooms</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Hôtels</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <span><strong className="text-gray-900">Sièges sociaux</strong></span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Nous créons des inaugurations <strong className="text-gray-900">élégantes</strong>, <strong className="text-gray-900">dynamiques</strong> et <strong className="text-gray-900">parfaitement orchestrées</strong>, adaptées à votre secteur d'activité et à vos objectifs de communication. Qu'il s'agisse de l'ouverture d'un local commercial, d'une usine, d'un showroom, d'un hôtel ou d'un siège social, notre équipe veille à offrir une expérience fluide, professionnelle et mémorable à vos invités et partenaires.
                            </p>

                            <div className="bg-yellow-50 rounded-xl p-8 mt-10 border-2 border-yellow-200">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <span className="text-3xl">🎯</span>
                                    Notre engagement :
                                </h3>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    faire de votre inauguration un <strong className="text-gray-900">événement fort</strong>, à la hauteur de votre image, qui laisse une <strong className="text-gray-900">impression durable et positive</strong>.
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
                                                src={`/assets/images/nosPrestations/inauguration/${num}.jpeg`}
                                                alt={`Inauguration ${num}`}
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
