import { useEffect, useRef } from "react";

export default function ReferencesCarousel() {
    const scrollRef = useRef(null);

    const references = [
        "/assets/images/references/1.png",
        "/assets/images/references/2.png",
        "/assets/images/references/3.png",
        "/assets/images/references/4.png",
        "/assets/images/references/5.png",
        "/assets/images/references/6.png",
        "/assets/images/references/7.png",
        "/assets/images/references/8.png",
        "/assets/images/references/9.png",
        "/assets/images/references/10.png",
        "/assets/images/references/11.png",
        "/assets/images/references/12.png",
        "/assets/images/references/13.png",
    ];

    // Triple duplicate for seamless loop
    const duplicatedReferences = [...references, ...references, ...references];

    return (
        <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <style jsx>{`
                @keyframes slideInfinite {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
                .animate-slide {
                    animation: slideInfinite 6s linear infinite;
                }
                .animate-slide:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
                        Nos Références
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#548291' }} />
                        <div className="w-24 sm:w-32 h-1 rounded-full" style={{ backgroundColor: '#548291' }} />
                    </div>
                </div>

                {/* Main Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Left Side - Creative Text with Video Clipping Mask */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative w-full py-8 sm:py-10 md:py-12 overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center justify-center">
                            <style jsx>{`
                                .town {
                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                                    overflow: hidden;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                }

                                .town video {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }

                                .town h1 {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: #fff;
                                    font-size: clamp(2rem, 5vw, 4.5rem);
                                    text-align: start;
                                    text-transform: uppercase;
                                    color: #000;
                                    mix-blend-mode: screen;
                                    font-family: "Inter", sans-serif;
                                    font-weight: 900;
                                    padding: 0 1rem;
                                }
                                
                                @media (max-width: 640px) {
                                    .town h1 {
                                        font-size: 3rem;
                                        line-height: 1.2;
                                    }
                                }
                                
                                @media (min-width: 641px) and (max-width: 1023px) {
                                    .town h1 {
                                        font-size: 3rem;
                                        line-height: 1.2;
                                    }
                                }
                            `}</style>

                            <div className="town">
                                <video autoPlay muted loop playsInline>
                                    <source
                                        src="/assets/video/stoonevents.mp4"
                                        type="video/mp4"
                                    />
                                </video>

                                <h1>Ils nous ont fait confiance</h1>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Carousel */}
                    <div className="lg:col-span-7">
                        {/* Carousel Container */}
                        <div className="relative">
                            {/* Gradient Overlays */}
                            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                            {/* Sliding Content */}
                            <div className="overflow-hidden">
                                <div
                                    ref={scrollRef}
                                    className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 animate-slide"
                                >
                                    {duplicatedReferences.map((ref, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 w-[42vw] sm:w-[38vw] md:w-[35vw] lg:w-[30%] max-w-md"
                                        >
                                            <div className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-32 sm:h-36 md:h-44 lg:h-56 flex items-center justify-center p-4 sm:p-5 md:p-6 group hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 hover:border-yellow-300">
                                                <img
                                                    src={ref}
                                                    alt={`Client ${(index % references.length) + 1}`}
                                                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
