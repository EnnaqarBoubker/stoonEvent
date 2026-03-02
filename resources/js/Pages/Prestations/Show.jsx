import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function PrestationDetail({ prestation }) {
    return (
        <>
            <Head title={prestation.title} />
            
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <SocialSidebar />
                <WhatsAppButton />

                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                    <img
                        src={prestation.images[0]}
                        alt={prestation.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                {prestation.title}
                            </h1>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-32 h-1 rounded-full bg-yellow-400" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                {prestation.description}
                            </p>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Pourquoi choisir cette prestation ?
                                </h3>
                                <ul className="space-y-3">
                                    {prestation.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg 
                                                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            Galerie Photos
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {prestation.images.map((image, index) => (
                                <div 
                                    key={index} 
                                    className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <img
                                        src={image}
                                        alt={`${prestation.title} ${index + 1}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
                    <div className="container mx-auto px-4 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Intéressé par cette prestation ?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Notre équipe est prête à vous accompagner pour créer un événement mémorable et sur mesure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/devis"
                                className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-2xl"
                            >
                                Demander un devis
                            </a>
                            <a
                                href="/contact"
                                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                            >
                                Nous contacter
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
