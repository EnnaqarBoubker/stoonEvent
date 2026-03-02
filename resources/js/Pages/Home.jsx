import { Head } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import ServiceCard from '@/Components/ServiceCard';
import ReferencesCarousel from '@/Components/ReferencesCarousel';
import AboutUs from '@/Components/AboutUs';
import PrestationsCarousel from '@/Components/PrestationsCarousel';
import ClientReviews from '@/Components/ClientReviews';
import ExperiencesBanner from '@/Components/ExperiencesBanner';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function Home({ blogs = [] }) {
    const [counters, setCounters] = useState({ stat1: 0, stat2: 0, stat3: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        
                        // Animate stat1 (10)
                        let count1 = 0;
                        const interval1 = setInterval(() => {
                            count1 += 1;
                            setCounters(prev => ({ ...prev, stat1: count1 }));
                            if (count1 >= 5) clearInterval(interval1);
                        }, 100);

                        // Animate stat2 (200)
                        let count2 = 0;
                        const interval2 = setInterval(() => {
                            count2 += 8;
                            if (count2 >= 100) {
                                count2 = 100;
                                clearInterval(interval2);
                            }
                            setCounters(prev => ({ ...prev, stat2: count2 }));
                        }, 30);

                        // Animate stat3 (7000)
                        let count3 = 0;
                        const interval3 = setInterval(() => {
                            count3 += 280;
                            if (count3 >= 15000) {
                                count3 = 15000;
                                clearInterval(interval3);
                            }
                            setCounters(prev => ({ ...prev, stat3: count3 }));
                        }, 30);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    const services = [
        {
            title: 'Team Building',
            description:
                'Renforcez la cohésion de vos équipes à travers des activités créatives et engageantes qui favorisent la collaboration et la communication.',
            icon: (
                <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
            link: '/services/team-building',
        },
        {
            title: 'Séminaires',
            description:
                'Organisez vos séminaires professionnels dans des lieux exceptionnels avec une logistique impeccable et un accompagnement personnalisé.',
            icon: (
                <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            link: '/services/seminaires',
        },
        {
            title: 'Incentive',
            description:
                'Récompensez et motivez vos collaborateurs avec des expériences uniques et mémorables qui renforcent leur engagement envers votre entreprise.',
            icon: (
                <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                </svg>
            ),
            link: '/services/incentive',
        },
        {
            title: 'Brand Activation',
            description:
                'Créez des activations de marque innovantes qui captivent votre audience et génèrent un impact fort pour votre entreprise.',
            icon: (
                <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                </svg>
            ),
            link: '/services/brand-activation',
        },
    ];

    const experiences = [
        {
            title: 'Trail of Ibn Battouta',
            image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070',
        },
        {
            title: 'Survivor Challenge',
            image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070',
        },
        {
            title: 'Bike Builders',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071',
        },
        {
            title: 'Corporate Family Day',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069',
        },
    ];

    return (
        <>
            <Head>
                <title>Stoon Events - Corporate & Team Building Experiences au Maroc</title>
                <meta
                    name="description"
                    content="Agence événementielle spécialisée dans les événements corporate, team building, séminaires et activations de marque au Maroc. Casablanca."
                />
                <meta
                    name="keywords"
                    content="événements corporate, team building, séminaires, incentive, brand activation, Maroc, Casablanca"
                />
            </Head>

            <div className="min-h-screen bg-gray-50">
                {/* Fixed Social Media Sidebar */}
                <SocialSidebar />
                
                {/* Fixed WhatsApp Button */}
                <WhatsAppButton />
                
                <Navbar />

                {/* Hero Section */}
                <Hero />

                {/* References Carousel */}
                <ReferencesCarousel />
{/* Statistics Section */}
                <section ref={statsRef} className="relative py-20 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Statistics Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    {/* Content */}
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                            {/* Stat 1 */}
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3">
                                    {counters.stat1}
                                </div>
                                <div className="text-base md:text-lg lg:text-xl font-bold text-white tracking-wider uppercase">
                                    ANS D'EXPÉRIENCE
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3">
                                   + {counters.stat2}
                                </div>
                                <div className="text-base md:text-lg lg:text-xl font-bold text-white tracking-wider uppercase">
                                    ÉVÉNEMENTS PAR AN
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3">
                                   + {counters.stat3.toLocaleString('fr-FR')}
                                </div>
                                <div className="text-base md:text-lg lg:text-xl font-bold text-white tracking-wider uppercase">
                                    Visiteurs annuels – site web
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Us Section */}
                <AboutUs />

                {/* Prestations Carousel */}
                <PrestationsCarousel />

                {/* Client Reviews */}
                <ClientReviews />

                {/* Experiences Banner */}
                <ExperiencesBanner />

                {/* Blog Section */}
                {blogs && blogs.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                    Actualités & Conseils
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4 rounded-full" />
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Découvrez nos derniers articles et conseils pour réussir vos événements
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogs.map((blog) => (
                                    <article
                                        key={blog.id}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                                    >
                                        {blog.image && (
                                            <div className="relative h-56 overflow-hidden">
                                                <img
                                                    src={`/storage/${blog.image}`}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            </div>
                                        )}
                                        
                                        <div className="p-6">
                                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(blog.published_at).toLocaleDateString('fr-FR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </h3>
                                            
                                            {blog.excerpt && (
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {blog.excerpt}
                                                </p>
                                            )}
                                            
                                            <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                                Lire la suite
                                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <Footer />
            </div>
        </>
    );
}
