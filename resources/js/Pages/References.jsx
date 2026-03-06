import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';
import ReferencesCarousel from '@/Components/ReferencesCarousel';

export default function References() {
    const references = [
        "/assets/images/references/5.png",
        "/assets/images/references/8.png",
        "/assets/images/references/6.png",
        "/assets/images/references/4.png",
        "/assets/images/references/2.png",
        "/assets/images/references/3.png",
        "/assets/images/references/12.png",
        "/assets/images/references/10.png",
        "/assets/images/references/11.png",
        "/assets/images/references/9.png",
        "/assets/images/references/1.png",
        "/assets/images/references/7.png",
    ];

    return (
        <>
            <Head title="Nos Références - Stoon Events" />
            <Navbar />
            <SocialSidebar />
            <WhatsAppButton />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[url('/assets/images/nosPrestations/evenement_entreprises/1.jpeg')] bg-cover bg-center"></div>
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                            Nos &nbsp;
                            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2">
                                Références
                            </span>
                        </h1>
                       
                    </div>
                </section>


                {/* References Grid */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
                                Ils Nous Font Confiance
                            </h2>
                            
                            {/* Grid: 2 columns mobile, 2 tablet, 3 desktop */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {references.map((ref, index) => (
                                    <div 
                                        key={index}
                                        className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
                                    >
                                        <img 
                                            src={ref} 
                                            alt={`Référence ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

              

            

              
            </div>

            <Footer />
        </>
    );
}
