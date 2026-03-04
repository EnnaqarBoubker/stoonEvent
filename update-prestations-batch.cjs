const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\Aba Baker\\StoonEvents\\resources\\js\\Pages\\Prestations';

const prestations = [
    {
        file: 'SoireeTheme.jsx',
        component: 'SoireeTheme',
        title: 'Soirées à Thème',
        emoji: '🎭',
        folder: 'soiree_a_theme',
        images: 6,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Choisissez parmi nos animations participatives ou l'une de nos thématiques complètes de soirée, et optez pour la clé en main assurée par notre équipe expérimentée !
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Thèmes populaires :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🕺 Soirées années 80/90</li>
                                <li>🌙 Soirées orientales</li>
                                <li>⚪ Soirées blanches/noires</li>
                                <li>🌴 Soirées tropicales</li>
                                <li>✨ Et bien d'autres concepts sur mesure !</li>
                            </ul>`,
        cta: 'Prêt à Vivre une Soirée Extraordinaire ?',
        ctaDesc: 'Contactez-nous pour créer une soirée à thème immersive et spectaculaire'
    },
    {
        file: 'EvenementsFamiliaux.jsx',
        component: 'EvenementsFamiliaux',
        title: 'Événements Familiaux',
        emoji: '💒',
        folder: 'evenements_familiaux',
        images: 5,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Stoon Events organise tous types d'événements familiaux avec professionnalisme et attention aux détails :
                            </p>
                            
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>💍 <strong>Mariages</strong></li>
                                <li>💎 <strong>Fiançailles</strong></li>
                                <li>👶 <strong>Baptêmes</strong></li>
                                <li>🍼 <strong>Fêtes prénatales</strong> (Baby Shower)</li>
                                <li>👨‍👩‍👧‍👦 Et tous vos moments familiaux précieux</li>
                            </ul>`,
        cta: 'Prêt à Célébrer en Famille ?',
        ctaDesc: 'Contactez-nous pour organiser un événement familial chaleureux et mémorable'
    },
    {
        file: 'AtelierCreatif.jsx',
        component:'AtelierCreatif',
        title: 'Ateliers Créatifs',
        emoji: '🎨',
        folder: 'atelier_creatifs',
        images: 5,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Découvrez des ateliers spéciaux conçus pour développer les capacités sensorielles et artistiques de votre enfant et révéler ses talents cachés.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Activités proposées :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🖌️ Arts plastiques</li>
                                <li>🎨 Peinture et dessin</li>
                                <li>🏺 Poterie et modelage</li>
                                <li>✂️ Bricolage créatif</li>
                                <li>🧶 Activités manuelles diverses</li>
                            </ul>`,
        cta: 'Prêt à Créer Ensemble ?',
        ctaDesc: 'Contactez-nous pour organiser votre atelier créatif sur mesure'
    },
    {
        file: 'SeminaireConference.jsx',
        component: 'SeminaireConference',
        title: 'Séminaire & Conférence',
        emoji: '🎓',
        folder: 'seminaire_conferences',
        images: 3,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Chez Stoon Events, nous accompagnons les entreprises et institutions dans l'organisation de séminaires et conférences parfaitement structurés, alliant professionnalisme, fluidité et excellence technique.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Notre prise en charge complète :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>📋 Gestion logistique</li>
                                <li>🎤 Coordination des intervenants</li>
                                <li>🎭 Scénographie</li>
                                <li>🔊 Sonorisation et éclairage professionnels</li>
                                <li>📊 Supports visuels</li>
                                <li>👥 Accueil des participants</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                <strong>Notre approche :</strong> organisation rigoureuse, attention aux détails et maîtrise technique complète pour des événements à fort impact, favorisant l'échange, la communication et la transmission des messages clés.
                            </p>`,
        cta: 'Prêt à Organiser votre Événement ?',
        ctaDesc: 'Contactez-nous pour un séminaire ou une conférence réussi'
    },
    {
        file: 'FeteEcole.jsx',
        component: 'FeteEcole',
        title: "Fête d'École",
        emoji: '🎒',
        folder: 'fete_ecole',
        images: 5,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Chaque année, de nombreuses écoles organisent une fête en plein air. Ces festivités sont souvent l'occasion de réunir tous les acteurs de l'école pour un moment d'échange convivial.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Participants :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>👦 Enfants</li>
                                <li>👨‍🏫 Équipe pédagogique</li>
                                <li>👨‍👩‍👧‍👦 Parents</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                <strong>Formats :</strong> animations, stands, jeux, spectacles et activités ludiques adaptés au milieu scolaire.
                            </p>`,
        cta: "Prêt à Organiser votre Fête d'École ?",
        ctaDesc: 'Contactez-nous pour créer une fête scolaire festive et conviviale'
    },
    {
        file: 'Festival.jsx',
        component: 'Festival',
        title: 'Festival',
        emoji: '🎶',
        folder: 'festival',
        images: 4,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Stoon Events s'occupe de l'organisation complète de festivals de toute envergure.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Services techniques :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>💡 Éclairage professionnel</li>
                                <li>🔊 Sonorisation haute qualité</li>
                                <li>🎭 Scène avec structure</li>
                                <li>📺 Écrans géants</li>
                                <li>🎨 Décoration et aménagement</li>
                                <li>🎤 Communication avec les artistes</li>
                            </ul>`,
        cta: 'Prêt à Lancer votre Festival ?',
        ctaDesc: "Contactez-nous pour organiser un festival d'envergure qui marquera les esprits"
    },
    {
        file: 'Sensibilisation.jsx',
        component: 'Sensibilisation',
        title: 'Campagne de Sensibilisation',
        emoji: '📢',
        folder: 'campagne_de_sensibilisation',
        images: 5,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Il s'agit de communiquer dans le but de faire prendre conscience d'un problème et dont l'objectif est d'impulser une action ou de changer les comportements.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Domaines d'intervention :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🏥 Santé publique</li>
                                <li>🌍 Environnement</li>
                                <li>🚸 Sécurité routière</li>
                                <li>📚 Éducation</li>
                                <li>🤝 Causes sociales</li>
                            </ul>`,
        cta: 'Prêt à Lancer votre Campagne ?',
        ctaDesc: 'Contactez-nous pour organiser une campagne de sensibilisation impactante'
    },
    {
        file: 'Traiteurs.jsx',
        component: 'Traiteurs',
        title: 'Traiteur',
        emoji: '🍽️',
        folder: 'traiteur',
        images: 13,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Nous répondons avec empressement aux demandes privées et corporatives, quelle que soit l'importance de votre événement.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Notre engagement :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🍴 Des mets savoureux</li>
                                <li>🎨 Une présentation impeccable</li>
                                <li>👨‍🍳 Un service parfait</li>
                                <li>✨ Un événement mémorable</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Types d'événements :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🎊 Inaugurations</li>
                                <li>🎂 Anniversaires</li>
                                <li>👶 Baptêmes</li>
                                <li>🍼 Fêtes prénatales</li>
                                <li>🏢 Événements corporatifs</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                Stoon Events vous offre un service à la hauteur de vos attentes. Chaque petit détail compte et vous êtes en droit d'exiger ce qu'il se fait de mieux.
                            </p>`,
        cta: 'Prêt à Régaler vos Invités ?',
        ctaDesc: 'Contactez-nous pour un menu traiteur personnalisé et gourmand'
},
    {
        file: 'ImagesSon.jsx',
        component: 'ImagesSon',
        title: 'Image & Son',
        emoji: '🎥📢',
        folder: 'image_et_son',
        images: 5,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Chez Stoon Events, nous mettons à votre disposition des solutions <strong>Image & Son</strong> complètes et professionnelles pour garantir la réussite de tous vos événements.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Services Audio :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🔊 Sonorisation haute qualité</li>
                                <li>🎤 Systèmes de microphonie</li>
                                <li>🎧 Systèmes d'écoute</li>
                                <li>📡 Diffusion sonore adaptée</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Services Vidéo :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>📺 Écrans LED</li>
                                <li>📽️ Vidéoprojecteurs</li>
                                <li>🖥️ Écrans géants</li>
                                <li>📊 Solutions de projection et diffusion visuelle</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Types d'événements couverts :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>📊 Conférences et séminaires</li>
                                <li>💍 Mariages</li>
                                <li>🎉 Soirées privées</li>
                                <li>🚀 Lancements de produits</li>
                                <li>🏛️ Événements institutionnels et culturels</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                Notre équipe technique qualifiée assure un accompagnement personnalisé, de la conception à la réalisation, avec une présence sur site pour garantir un déroulement fluide et sans imprévus.
                            </p>`,
        cta: "Besoin d'une Solution Audiovisuelle ?",
        ctaDesc: 'Contactez-nous pour un devis technique adapté à votre événement'
    },
    {
        file: 'Inauguration.jsx',
        component: 'Inauguration',
        title: 'Inauguration',
        emoji: '🎊',
        folder: 'inauguration',
        images: 5,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Stoon Events accompagne les entreprises, institutions et marques dans l'organisation d'inaugurations sur mesure, conçues pour marquer les esprits et valoriser votre image dès le premier instant.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Services complets :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🎨 Scénographie</li>
                                <li>🔊 Sonorisation et éclairage</li>
                                <li>👥 Accueil des invités</li>
                                <li>🎭 Animations</li>
                                <li>🎬 Protocole officiel</li>
                                <li>✂️ Coupure de ruban</li>
                                <li>📋 Gestion technique et logistique</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Types d'inaugurations :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🏪 Locaux commerciaux</li>
                                <li>🏭 Usines</li>
                                <li>🚗 Showrooms</li>
                                <li>🏨 Hôtels</li>
                                <li>🏢 Sièges sociaux</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                <strong>Notre engagement :</strong> faire de votre inauguration un événement fort, à la hauteur de votre image, qui laisse une impression durable et positive.
                            </p>`,
        cta: 'Prêt à Inaugurer en Grand ?',
        ctaDesc: 'Contactez-nous pour organiser une inauguration mémorable'
    },
    {
        file: 'EvenementEntreprise.jsx',
        component: 'EvenementEntreprise',
        title: "Événement d'Entreprise",
        emoji: '🏢',
        folder: 'evenement_entreprises',
        images: 3,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Stoon Events conçoit et organise des événements d'entreprise sur mesure, pensés pour renforcer votre image de marque, fédérer vos équipes et marquer durablement vos partenaires et collaborateurs.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Types d'événements :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>📊 Séminaires</li>
                                <li>🎤 Conférences</li>
                                <li>🤝 Team building</li>
                                <li>🌟 Soirées corporate</li>
                                <li>🚀 Lancements de produits</li>
                                <li>📋 Conventions</li>
                                <li>🎯 Journées institutionnelles</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Notre expertise :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>📋 Logistique complète</li>
                                <li>🎨 Scénographie</li>
                                <li>🔊 Sonorisation et image</li>
                                <li>🎤 Gestion des intervenants</li>
                                <li>👥 Accueil des invités</li>
                                <li>🎭 Animations professionnelles</li>
                                <li>📅 Coordination globale le jour J</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                <strong>Notre mission :</strong> transformer votre événement d'entreprise en une expérience unique, porteuse de sens, de cohésion et de performance.
                            </p>`,
        cta: 'Prêt à Marquer les Esprits ?',
        ctaDesc: "Contactez-nous pour organiser un événement d'entreprise exceptionnel"
    },
    {
        file: 'AnimationCommerciale.jsx',
        component: 'AnimationCommerciale',
        title: 'Animation Commerciale',
        emoji: '🛍️',
        folder: 'animation_commerciale',
        images: 3,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Stoon Events conçoit et réalise des animations commerciales sur mesure, pensées pour attirer l'attention, dynamiser vos espaces de vente et stimuler l'engagement de votre clientèle.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contextes d'intervention :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>🏪 En magasin</li>
                                <li>🏬 En centre commercial</li>
                                <li>🎊 Ouvertures</li>
                                <li>📣 Opérations promotionnelles</li>
                                <li>🚀 Lancements de produit</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Types d'animations :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>👥 Animateurs professionnels</li>
                                <li>🎮 Jeux interactifs</li>
                                <li>🎤 Animations micro</li>
                                <li>🍽️ Dégustations</li>
                                <li>⚡ Activations de marque</li>
                                <li>👶 Animations pour enfants</li>
                                <li>🔊 Solutions image & son adaptées</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                <strong>Notre objectif :</strong> transformer votre action commerciale en une expérience attractive et mémorable, capable de générer du trafic, de renforcer la notoriété de votre marque et d'augmenter vos performances commerciales.
                            </p>`,
        cta: 'Prêt à Dynamiser vos Ventes ?',
        ctaDesc: 'Contactez-nous pour créer une animation commerciale percutante'
    },
    {
        file: 'ColoniesVacances.jsx',
        component: 'ColoniesVacances',
        title: 'Colonies de Vacances',
        emoji: '🏕️',
        folder: 'colonies_de_vacances',
        images: 5,
        content: `                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Chez Stoon Events, nous organisons des colonies de vacances éducatives, ludiques et sécurisées, pensées pour offrir aux enfants une expérience inoubliable, riche en découvertes, en apprentissages et en moments de joie.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Nos programmes incluent :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                            <li>🎨 <strong>Activités créatives :</strong> arts plastiques, bricolage, théâtre, expression artistique</li>
                                <li>⚽ <strong>Activités sportives</strong> et jeux de plein air</li>
                                <li>🎶 <strong>Animations ludiques et culturelles</strong></li>
                                <li>🌱 <strong>Ateliers éducatifs</strong> et de développement personnel</li>
                                <li>🤝 <strong>Apprentissage</strong> de la vie en groupe, du respect et du partage</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Nos priorités :</h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                <li>✅ Bien-être des enfants</li>
                                <li>🛡️ Sécurité maximale</li>
                                <li>😊 Confort et épanouissement</li>
                                <li>🎯 Encadrement qualifié et bienveillant</li>
                            </ul>
                            
                            <p className="text-xl text-gray-700 leading-relaxed mt-8">
                                Avec Stoon Events, les colonies de vacances deviennent bien plus qu'un simple séjour : <strong>une expérience enrichissante qui laisse de beaux souvenirs et participe à la construction de l'enfant.</strong>
                            </p>`,
        cta: 'Prêt à Offrir des Vacances Inoubliables ?',
        ctaDesc: 'Contactez-nous pour organiser une colonie de vacances enrichissante'
    }
];

const template = (data) => `import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SocialSidebar from '@/Components/SocialSidebar';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function ${data.component}() {
    const images = [${Array.from({length: data.images}, (_, i) => i + 1).join(', ')}];

    return (
        <>
            <Head title="${data.title} - Stoon Events" />
            <Navbar />
            <SocialSidebar />
            <WhatsAppButton />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                    <img 
                        src="/assets/images/nosPrestations/${data.folder}/1.jpeg" 
                        alt="${data.title}" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                                ${data.emoji} ${data.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Description */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
                        <div className="prose prose-lg max-w-none">
${data.content}
                        </div>
                    </div>
                </section>

                {/* Image Gallery */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
                            Nos Réalisations
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((num) => (
                                <div key={num} className="relative overflow-hidden rounded-lg shadow-lg group">
                                    <img 
                                        src={\`/assets/images/nosPrestations/${data.folder}/\${num}.jpeg\`}
                                        alt={\`${data.title} \${num}\`}
                                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-400 to-yellow-600">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ${data.cta}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                            ${data.ctaDesc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/devis"
                                className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Demander un Devis
                            </a>
                            <a 
                                href="/contact"
                                className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Nous Contacter
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
`;

console.log(`Processing ${prestations.length} files...`);

prestations.forEach(prestation => {
    const filePath = path.join(basePath, prestation.file);
    const content = template(prestation);
    
    try {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated ${prestation.file}`);
    } catch (error) {
        console.error(`✗ Error updating ${prestation.file}:`, error.message);
    }
});

console.log('\nAll files updated successfully!');
