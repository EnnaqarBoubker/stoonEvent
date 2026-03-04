import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function Devis() {
    const [clientType, setClientType] = useState('particulier');
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        prestation: '',
        message: ''
    });

    const prestationsParticulier = [
        'Traiteur',
        'Événement Familiaux',
        'Soirée à Thème',
        'Atelier Créatif',
        'Anniversaire',
        'Inauguration'
    ];

    const prestationsEntreprise = [
        'Family Day',
        'Événement d\'Entreprise',
        'Animation Commerciale',
        'Images & Son',
        'Inauguration',
        'Séminaire et Conférence',
        'Street Marketing',
        'Kermesse',
        'Festival',
        'Anniversaire',
        'Atelier Créatif',
        'Soirée à Thème',
        'Fête d\'École',
        'Colonie de Vacances',
        'Sensibilisation',
        'Traiteur',
        'Show'
    ];

    useEffect(() => {
        // Load reCAPTCHA script
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Expose callback to window
        window.onRecaptchaVerify = () => {
            setCaptchaVerified(true);
        };

        return () => {
            document.body.removeChild(script);
            delete window.onRecaptchaVerify;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            alert('Veuillez vérifier le captcha');
            return;
        }
        console.log('Devis submitted:', { clientType, ...formData });
        // Handle form submission
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <Head title="Demande de Devis - Stoon Events" />
            <Navbar />
            <SocialSidebar />
            <WhatsAppButton />
            
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
                {/* Hero Section */}
                <section className="relative h-[45vh] md:h-[55vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black to-indigo-950 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[url('/assets/images/nosPrestations/evenement_entreprises/1.jpeg')] bg-cover bg-center"></div>
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                            Demande de
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mt-2">
                                Devis Gratuit
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                            Créons ensemble votre événement sur mesure
                        </p>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-16 md:py-20 -mt-16 relative z-10">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Client Type Selector */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
                                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                                    Vous êtes ?
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <button
                                        type="button"
                                        onClick={() => setClientType('particulier')}
                                        className={`relative overflow-hidden p-8 rounded-xl border-2 transition-all duration-300 ${
                                            clientType === 'particulier'
                                                ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg scale-105'
                                                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                        }`}
                                    >
                                        <div className="flex flex-col items-center gap-4">
                                            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                                                clientType === 'particulier'
                                                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                                                    : 'bg-gray-200'
                                            }`}>
                                                <svg className={`w-10 h-10 ${clientType === 'particulier' ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div className="text-center">
                                                <h3 className={`text-2xl font-bold mb-2 ${clientType === 'particulier' ? 'text-gray-900' : 'text-gray-700'}`}>
                                                    Particulier
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    Événements personnels et familiaux
                                                </p>
                                            </div>
                                        </div>
                                        {clientType === 'particulier' && (
                                            <div className="absolute top-2 right-2">
                                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setClientType('entreprise')}
                                        className={`relative overflow-hidden p-8 rounded-xl border-2 transition-all duration-300 ${
                                            clientType === 'entreprise'
                                                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg scale-105'
                                                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                        }`}
                                    >
                                        <div className="flex flex-col items-center gap-4">
                                            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                                                clientType === 'entreprise'
                                                    ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                                                    : 'bg-gray-200'
                                            }`}>
                                                <svg className={`w-10 h-10 ${clientType === 'entreprise' ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <div className="text-center">
                                                <h3 className={`text-2xl font-bold mb-2 ${clientType === 'entreprise' ? 'text-gray-900' : 'text-gray-700'}`}>
                                                    Entreprise
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    Événements professionnels et corporatifs
                                                </p>
                                            </div>
                                        </div>
                                        {clientType === 'entreprise' && (
                                            <div className="absolute top-2 right-2">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Particulier Form */}
                                    {clientType === 'particulier' && (
                                        <div className="space-y-6 animate-fade-in">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-yellow-200">
                                                Informations Personnelles
                                            </h3>
                                            
                                            <div>
                                                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                                                    Nom Complet <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                                                    placeholder="Votre nom complet"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                                    Téléphone <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                                                    placeholder="+212 6XX XXX XXX"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                                    Email <span className="text-gray-400 text-sm">(Optionnel)</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                                                    placeholder="votre@email.com"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="prestation" className="block text-gray-700 font-semibold mb-2">
                                                    Choisir Prestation <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    id="prestation"
                                                    name="prestation"
                                                    value={formData.prestation}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                                                >
                                                    <option value="">Sélectionnez une prestation</option>
                                                    {prestationsParticulier.map((prestation, index) => (
                                                        <option key={index} value={prestation}>{prestation}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                                    Parlez-nous de votre demande <span className="text-red-500">*</span>
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="6"
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all resize-none"
                                                    placeholder="Décrivez votre événement, vos attentes, le nombre d'invités, la date souhaitée..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    )}

                                    {/* Entreprise Form */}
                                    {clientType === 'entreprise' && (
                                        <div className="space-y-6 animate-fade-in">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-blue-200">
                                                Informations Professionnelles
                                            </h3>
                                            
                                            <div>
                                                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                                                    Nom Complet <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="Votre nom complet"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                                                    Société <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="Nom de votre société"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="votre@email.com"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                                    Téléphone <span className="text-gray-400 text-sm">(Optionnel)</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="+212 6XX XXX XXX"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="prestation" className="block text-gray-700 font-semibold mb-2">
                                                    Type de Prestation <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    id="prestation"
                                                    name="prestation"
                                                    value={formData.prestation}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                >
                                                    <option value="">Sélectionnez une prestation</option>
                                                    {prestationsEntreprise.map((prestation, index) => (
                                                        <option key={index} value={prestation}>{prestation}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                                    Parlez-nous de votre projet <span className="text-red-500">*</span>
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="6"
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                                                    placeholder="Décrivez votre projet, vos objectifs, le nombre de participants, la date souhaitée, le budget estimé..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    )}

                                    {/* Captcha */}
                                    <div className="flex justify-center py-4">
                                        <div 
                                            className="g-recaptcha" 
                                            data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                            data-callback="onRecaptchaVerify"
                                        ></div>
                                    </div>

                                    {/* Privacy Notice */}
                                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-blue-500 rounded-lg p-6">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-2">Confidentialité et Protection des Données</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    <strong className="text-gray-800">NB :</strong> Vos informations personnelles ne seront jamais partagées avec des tiers. 
                                                    Nous les utilisons uniquement pour traiter votre demande de devis et vous contacter. 
                                                    Vos données sont sécurisées et traitées conformément au RGPD.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={!captchaVerified}
                                            className={`w-full font-bold py-4  px-8 rounded-xl transition-all shadow-lg text-lg ${
                                                captchaVerified
                                                    ? clientType === 'particulier'
                                                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 hover:shadow-2xl hover:scale-105'
                                                        : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white hover:shadow-2xl hover:scale-105'
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                        >
                                            {captchaVerified ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Envoyer ma Demande de Devis
                                                </span>
                                            ) : (
                                                'Veuillez vérifier le captcha'
                                            )}
                                        </button>
                                        <p className="text-center text-gray-600 text-sm mt-4">
                                            En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. Réponse sous 24h.
                                        </p>
                                    </div>
                                </form>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-12 grid sm:grid-cols-3 gap-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Réponse Rapide</h4>
                                    <p className="text-gray-600 text-sm">Devis sous 24h ouvrées</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Sans Engagement</h4>
                                    <p className="text-gray-600 text-sm">Devis gratuit et personnalisé</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Accompagnement</h4>
                                    <p className="text-gray-600 text-sm">Conseils d'experts gratuits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
