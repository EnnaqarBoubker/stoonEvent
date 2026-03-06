import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <div className="relative h-[50vh] md:h-[70vh] lg:h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="/assets/video/stoonevents.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
            </div>

            {/* Animated Overlay Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
                {/* Logo */}
                
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <svg
                        className="w-8 h-8 text-white drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
