import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Error({ status }) {
    const canvasRef = useRef(null);

    const messages = {
        404: {
            title: 'Page Introuvable',
            description: "La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil pour continuer votre navigation.",
        },
        403: {
            title: 'Accès Refusé',
            description: "Vous n'avez pas les permissions nécessaires pour accéder à cette page.",
        },
        500: {
            title: 'Erreur Serveur',
            description: 'Une erreur interne est survenue. Notre équipe a été notifiée. Veuillez réessayer dans quelques instants.',
        },
        503: {
            title: 'Service Indisponible',
            description: 'Le site est temporairement en maintenance. Revenez dans quelques minutes.',
        },
    };

    const { title, description } = messages[status] || messages[404];

    // Floating particles animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const particles = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            alpha: Math.random() * 0.4 + 0.1,
        }));

        let animId;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(249, 193, 26, ${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <>
            <Head title={`${status} - ${title} | Stoon Events`} />
            <Navbar />

            <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden px-4">
                {/* Animated canvas background */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                />

                {/* Glow blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: '#f9c11a' }} />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: '#f9c11a' }} />

                {/* Content */}
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    {/* Big status number */}
                    <div className="relative mb-6 select-none">
                        <span
                            className="text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter"
                            style={{
                                background: 'linear-gradient(135deg, #f9c11a 0%, #f59e0b 50%, #d97706 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0 0 40px rgba(249,193,26,0.4))',
                            }}
                        >
                            {status || 404}
                        </span>
                        {/* Reflection */}
                        <span
                            className="absolute inset-x-0 bottom-0 text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter opacity-10 scale-y-[-1] blur-sm"
                            style={{
                                background: 'linear-gradient(135deg, #f9c11a, #d97706)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                transformOrigin: 'bottom',
                            }}
                            aria-hidden
                        >
                            {status || 404}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400" />
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                        {description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-gray-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #f9c11a, #d97706)' }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Retour à l'accueil
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 hover:border-yellow-400/60 hover:text-yellow-300 transition-all duration-300 hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Nous contacter
                        </Link>
                    </div>

                    {/* Quick nav links */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-sm mb-4">Pages populaires</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { label: 'Prestations', href: '/#prestations' },
                                { label: 'À propos', href: '/about' },
                                { label: 'Références', href: '/references' },
                                { label: 'Devis gratuit', href: '/devis' },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 rounded-full text-sm text-gray-400 hover:text-yellow-300 border border-white/10 hover:border-yellow-400/40 transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
