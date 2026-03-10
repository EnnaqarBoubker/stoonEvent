import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function About() {
    return (
        <>
            <Head title="Pourquoi Stoon Events - Votre Partenaire Événementiel" />
            <Navbar />
            <SocialSidebar />
            <WhatsAppButton />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[url('/assets/images/about.jpeg')] bg-cover bg-center"></div>
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                            Pourquoi Choisir
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2">
                                Stoon Events ?
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Votre partenaire de confiance pour des événements mémorables
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            
                            <p className="text-lg text-black leading-relaxed">
                                <span
                                    className="font-semibold"
                                    style={{ color: "#548291" }}
                                >
                                    Stoon events
                                </span>
                                , vous propose des prestations techniques et des
                                animations artistiques personnalisées. Nous vous
                                accompagnons afin de vous apporter des services
                                sur mesure avec des prestations variées
                                correspondant à vos objectifs et à vos besoins :
                                sonorisation, éclairage, vidéo, DJ
                                professionnels, artistes…
                            </p> <br />
                            <p className="text-lg text-black leading-relaxed">
                                Vous organisez un événement professionnel,
                                familial ou privé : nous prenons en charge
                                l'animation de vos événements au niveau national
                                et international.
                            </p><br />
                            <p className="text-lg text-black leading-relaxed">
                                Chez Stoon Events, nous transformons chaque
                                événement en une expérience mémorable. Notre
                                mission est de donner vie à vos idées en créant
                                des événements uniques, créatifs et parfaitement
                                organisés, qui marquent durablement vos invités.
                                Nous proposons des prestations événementielles
                                clés en main, adaptées à tous vos besoins :
                                événements d’entreprise, animations pour
                                enfants, soirées thématiques, lancements de
                                produits, kermesses, carnavals, fêtes de fin
                                d’année et événements grand public. Grâce à une
                                approche personnalisée, une équipe expérimentée
                                et une attention particulière aux détails, nous
                                garantissons des événements à forte valeur
                                émotionnelle et visuelle. Avec Stoon Events,
                                offrez à votre public bien plus qu’un événement
                                : une véritable expérience.{" "}
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: "Excellence",
                                    description: "Nous visons l'excellence dans chaque détail, de la planification à l'exécution, pour garantir le succès de votre événement."
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    title: "Créativité",
                                    description: "Notre équipe créative conçoit des concepts innovants et originaux qui marquent les esprits et créent des moments uniques."
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: "Ponctualité",
                                    description: "Nous respectons vos délais et vos contraintes, assurant une organisation fluide et sans stress de A à Z."
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    title: "Professionnalisme",
                                    description: "Une équipe expérimentée et professionnelle à votre service pour un accompagnement personnalisé tout au long de votre projet."
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                    ),
                                    title: "Satisfaction Client",
                                    description: "Votre satisfaction est notre priorité. Nous travaillons main dans la main avec vous pour réaliser vos rêves événementiels."
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    ),
                                    title: "Innovation",
                                    description: "Nous utilisons les dernières technologies et tendances pour créer des expériences modernes et immersives."
                                }
                            ].map((value, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-yellow-500 mb-4">{value.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
