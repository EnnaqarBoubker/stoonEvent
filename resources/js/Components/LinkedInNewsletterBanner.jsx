export default function LinkedInNewsletterBanner() {
    const handleLinkedInSubscribe = () => {
        window.open('https://www.linkedin.com/company/stoon-events', '_blank');
    };

    return (
        <section className="w-full relative overflow-hidden border-t border-b border-gray-700">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/linkdin.jpg"
                    alt="LinkedIn Network"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center py-6 sm:py-8 md:py-10 gap-4 sm:gap-6">
                    {/* Text Content */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide uppercase">
                            S'abonner à la newsletter LinkedIn
                        </h3>
                    </div>

                    {/* LinkedIn Button */}
                    <button
                        onClick={handleLinkedInSubscribe}
                        className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 rounded-lg px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                        aria-label="S'abonner sur LinkedIn"
                    >
                        <svg
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform group-hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
