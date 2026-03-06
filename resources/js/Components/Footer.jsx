import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                

                {/* Main Footer Content */}
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div>
                            <div className="mb-4 sm:mb-6">
                                <img
                                    src="/assets/images/logo/logo.png"
                                    alt="Stoon Events"
                                    className="h-16 sm:h-20 w-auto mb-4"
                                />
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                                Avec stoon events zéro stress <br />
                                100%  événement magique
                            </p>
                            <Link
                                href="/devis"
                                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold rounded-lg transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
                            >
                                <span>Demandez votre Devis</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                      
                        {/* Contact Info */}
                        <div>
                            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full" />
                                Contactez-nous
                            </h4>
                            <ul className="space-y-3 sm:space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Téléphone</p>
                                        <a href="tel:0701170027" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                                            0701170027
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Email</p>
                                        <a
                                            href="mailto:contact@stoonevents.com"
                                            className="text-gray-300 hover:text-yellow-400 transition-colors break-all text-sm sm:text-base"
                                        >
                                            contact@stoonevents.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Adresse</p>
                                        <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                            Etage 1 N°2, 53 Rue de Grenoble,<br />
                                            Casablanca 20303, Maroc
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="border-t border-gray-800">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-6 sm:py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                            {/* Social Links */}
                            <div className="flex items-center gap-4 order-2 md:order-1">
                                <span className="text-gray-500 text-xs sm:text-sm hidden sm:inline">Suivez-nous:</span>
                                <div className="flex gap-3">
                                    <a
                                        href="https://web.facebook.com/stoon.events/?locale=fr_FR&_rdc=1&_rdr#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/stoon.events/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/stoon-events/?originalSubdomain=ma"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                   
                                </div>
                            </div>

                            {/* Copyright */}
                            <div className="text-gray-500 text-xs sm:text-sm text-center md:text-left order-1 md:order-2">
                                <p>© {new Date().getFullYear()} <span className="text-white font-semibold">Stoon Events</span>. Tous droits réservés.</p>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
