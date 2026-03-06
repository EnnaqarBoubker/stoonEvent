import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);
    const [isMobilePrestationsOpen, setIsMobilePrestationsOpen] = useState(false);

    const prestations = [
        { title: 'Family day', slug: 'family-day' },
        { title: 'Événement d\'entreprise', slug: 'evenement-entreprise' },
        { title: 'Animation commerciale', slug: 'animation-commerciale' },
        { title: 'Images & son', slug: 'images-son' },
        { title: 'Inauguration', slug: 'inauguration' },
        { title: 'Séminaire et conférence', slug: 'seminaire-conference' },
        { title: 'Street marketing and publicité', slug: 'street-marketing' },
        { title: 'Kermesse', slug: 'kermesse' },
        { title: 'Festival', slug: 'festival' },
        { title: 'Anniversaires', slug: 'anniversaires' },
        { title: 'Atelier créatif', slug: 'atelier-creatif' },
        { title: 'Soirée à thème', slug: 'soiree-theme' },
        { title: 'Événement familiaux', slug: 'evenements-familiaux' },
        { title: 'Fête d\'école', slug: 'fete-ecole' },
        { title: 'Colonie de vacances', slug: 'colonies-vacances' },
        { title: 'Compagnie de sensibilisation', slug: 'sensibilisation' },
        { title: 'Traiteurs', slug: 'traiteurs' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/assets/images/logo/logo.png"
                            alt="Stoon Events"
                            className="h-[5rem] w-auto transition-transform duration-300 group-hover:scale-105 "
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`font-medium transition-colors ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'
                            }`}
                        >
                            Accueil
                        </Link>

                        <Link
                            href="/about"
                            className={`font-medium transition-colors ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'
                            }`}
                        >
                            Pourquoi Stoon Events
                        </Link>
                        
                        {/* Prestations Dropdown */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => setIsPrestationsOpen(true)}
                            onMouseLeave={() => setIsPrestationsOpen(false)}
                        >
                            <button
                                className={`font-medium transition-colors flex items-center gap-1 ${
                                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'
                                }`}
                            >
                                Nos Prestations
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-300 ${isPrestationsOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Dropdown Menu */}
                            <div 
                                className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl py-3 z-50 max-h-96 overflow-y-auto border border-gray-100 transition-all duration-300 ease-out origin-top ${
                                    isPrestationsOpen 
                                        ? 'opacity-100 visible translate-y-0' 
                                        : 'opacity-0 invisible -translate-y-2'
                                }`}
                                style={{
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#CBD5E0 #F7FAFC'
                                }}
                            >
                                {prestations.map((prestation, index) => (
                                    <Link
                                        key={index}
                                        href={`/prestations/${prestation.slug}`}
                                        className="block px-5 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-blue-500"
                                        style={{
                                            transitionDelay: isPrestationsOpen ? `${index * 20}ms` : '0ms'
                                        }}
                                    >
                                        {prestation.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/references"
                            className={`font-medium transition-colors ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'
                            }`}
                        >
                            Nos Références
                        </Link>
                        
                        <Link
                            href="/contact"
                            className={`font-medium transition-colors ${
                                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'
                            }`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/devis"
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Demandez votre Devis
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`xl:hidden focus:outline-none ${
                            isScrolled ? 'text-gray-700' : 'text-white'
                        }`}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`xl:hidden border-t border-white/20 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out ${
                        isMobileMenuOpen ? 'max-h-[600px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                    }`}
                >
                    <div className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                Accueil
                            </Link>
                            
                            {/* Mobile Prestations Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobilePrestationsOpen(!isMobilePrestationsOpen)}
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                >
                                    Nos Prestations
                                    <svg 
                                        className={`w-4 h-4 transition-transform duration-300 ${isMobilePrestationsOpen ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isMobilePrestationsOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="ml-4 space-y-2 overflow-y-auto max-h-60 pr-2" style={{
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#CBD5E0 #F7FAFC'
                                    }}>
                                        {prestations.map((prestation, index) => (
                                            <Link
                                                key={index}
                                                href={`/prestations/${prestation.slug}`}
                                                className="block text-gray-600 hover:text-blue-600 text-sm transition-all duration-200 py-1.5 hover:pl-2 border-l-2 border-transparent hover:border-blue-500"
                                            >
                                                {prestation.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <Link
                                href="/services"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                À Propos
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/devis"
                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-6 py-2.5 rounded-full font-bold transition-colors text-center"
                            >
                                Demande de Devis
                            </Link>
                        </div>
                    </div>
            </div>
        </nav>
    );
}
