<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class PrestationController extends Controller
{
    private function getPrestationsData()
    {
        return [
            'family-day' => [
                'title' => 'Family day',
                'folder' => 'familyday',
                'description' => 'Créez des moments inoubliables avec nos événements Family Day ! Nous organisons des journées conviviales et ludiques où employés et leurs familles se retrouvent pour partager des activités enrichissantes. Renforcez la cohésion et l\'esprit d\'équipe tout en offrant un moment de détente à vos collaborateurs.',
                'benefits' => [
                    'Activités ludiques et adaptées à tous les âges',
                    'Renforcement de la cohésion d\'équipe et du sentiment d\'appartenance',
                    'Organisation clé en main avec animations personnalisées',
                    'Création de souvenirs mémorables pour vos équipes',
                    'Amélioration de la qualité de vie au travail'
                ]
            ],
            'evenement-entreprise' => [
                'title' => 'Événement d\'entreprise',
                'folder' => 'evenemententreprise',
                'description' => 'Confiez-nous l\'organisation de vos événements d\'entreprise ! Que ce soit pour un lancement de produit, une célébration d\'anniversaire ou une soirée de networking, nous créons des expériences professionnelles marquantes qui reflètent votre image de marque et vos valeurs.',
                'benefits' => [
                    'Concept sur mesure adapté à vos objectifs',
                    'Gestion complète de A à Z',
                    'Mise en valeur de votre image de marque',
                    'Solutions innovantes et créatives',
                    'Respect du budget et des délais'
                ]
            ],
            'animation-commerciale' => [
                'title' => 'Animation commerciale',
                'folder' => 'animationcommerciale',
                'description' => 'Boostez vos ventes avec nos animations commerciales percutantes ! Nous créons des expériences uniques qui attirent l\'attention, engagent votre clientèle et augmentent votre visibilité. Que ce soit en magasin, en centre commercial ou lors d\'événements spéciaux, nous dynamisons votre point de vente.',
                'benefits' => [
                    'Augmentation du trafic et des ventes',
                    'Animations créatives et engageantes',
                    'Équipe professionnelle et dynamique',
                    'Personnalisation selon votre secteur d\'activité',
                    'Mesure des résultats et retour sur investissement'
                ]
            ],
            'images-son' => [
                'title' => 'Images & son',
                'folder' => 'imageetson',
                'description' => 'Des prestations techniques audio-visuelles de haute qualité pour tous vos événements ! Notre équipe d\'experts met à votre disposition du matériel professionnel de sonorisation, d\'éclairage et de projection pour garantir une expérience immersive et réussie.',
                'benefits' => [
                    'Matériel professionnel dernière génération',
                    'Techniciens expérimentés sur place',
                    'Solutions adaptées à tous types d\'événements',
                    'Conseil technique personnalisé',
                    'Installation et assistance complète'
                ]
            ],
            'inauguration' => [
                'title' => 'Inauguration',
                'folder' => 'inauguration',
                'description' => 'Marquez le lancement de votre projet avec une inauguration mémorable ! Nous orchestrons des cérémonies d\'ouverture élégantes et impactantes qui mettent en valeur votre nouveau lieu, produit ou service. Créez une première impression forte auprès de vos invités et partenaires.',
                'benefits' => [
                    'Cérémonie protocolaire et professionnelle',
                    'Gestion des invitations et de la logistique',
                    'Animations et spectacles sur mesure',
                    'Couverture médiatique et communication',
                    'Traiteur et services haut de gamme'
                ]
            ],
            'seminaire-conference' => [
                'title' => 'Séminaire et conférence',
                'folder' => 'seminaireetconference',
                'description' => 'Organisez des séminaires et conférences professionnels qui inspirent et fédèrent ! Nous prenons en charge tous les aspects logistiques et techniques pour que vous puissiez vous concentrer sur votre contenu. De l\'accueil des participants à la gestion technique, nous assurons le succès de votre événement.',
                'benefits' => [
                    'Choix du lieu adapté à vos besoins',
                    'Équipements techniques professionnels',
                    'Organisation logistique complète',
                    'Services de restauration et pauses-café',
                    'Support technique et coordination sur place'
                ]
            ],
            'street-marketing' => [
                'title' => 'Street marketing and publicité',
                'folder' => 'streetmarketing',
                'description' => 'Sortez du cadre et allez à la rencontre de votre public ! Nos campagnes de street marketing créent du buzz et génèrent de l\'engagement directement sur le terrain. Nous concevons des actions originales et impactantes qui marquent les esprits et amplifient votre visibilité.',
                'benefits' => [
                    'Actions créatives et mémorables',
                    'Ciblage géographique précis',
                    'Interaction directe avec votre cible',
                    'Génération de bouche-à-oreille',
                    'Campagnes mesurables et ROI optimisé'
                ]
            ],
            'kermesse' => [
                'title' => 'Kermesse',
                'folder' => 'kermesse',
                'description' => 'Organisez une kermesse festive et conviviale pour petits et grands ! Nous créons des événements joyeux avec stands de jeux, animations, restauration et spectacles. Que ce soit pour une école, une association ou une entreprise, nous apportons joie et divertissement à votre communauté.',
                'benefits' => [
                    'Variété de jeux et animations pour tous les âges',
                    'Organisation complète de A à Z',
                    'Stands de restauration et buvette',
                    'Animations musicales et spectacles',
                    'Ambiance festive et familiale garantie'
                ]
            ],
            'festival' => [
                'title' => 'Festival',
                'folder' => 'festival',
                'description' => 'Donnez vie à votre festival avec notre expertise événementielle ! De la conception à la réalisation, nous orchestrons des festivals culturels, musicaux ou thématiques qui rassemblent et émerveillent. Gestion technique, programmation artistique, sécurité et logistique : nous maîtrisons tous les aspects.',
                'benefits' => [
                    'Gestion complète multi-sites',
                    'Programmation artistique et scénique',
                    'Infrastructures et logistique événementielle',
                    'Sécurité et gestion des flux',
                    'Communication et promotion de l\'événement'
                ]
            ],
            'anniversaires' => [
                'title' => 'Anniversaires',
                'folder' => 'anniversaire',
                'description' => 'Célébrez vos anniversaires de manière mémorable ! Qu\'il s\'agisse d\'un anniversaire personnel, d\'entreprise ou associatif, nous créons des célébrations uniques et personnalisées. Animations, décoration, traiteur et divertissement : nous transformons votre fête en un moment inoubliable.',
                'benefits' => [
                    'Thématiques personnalisées selon vos envies',
                    'Animations adaptées à tous les âges',
                    'Décoration sur mesure et originale',
                    'Services traiteur de qualité',
                    'Coordination complète le jour J'
                ]
            ],
            'atelier-creatif' => [
                'title' => 'Atelier créatif',
                'folder' => 'ateliercreatif',
                'description' => 'Stimulez la créativité avec nos ateliers participatifs ! Nous proposons des activités artistiques et créatives variées qui favorisent l\'expression, le team building et le développement personnel. Peinture, sculpture, arts plastiques ou DIY : éveillez les talents de vos participants.',
                'benefits' => [
                    'Activités créatives variées et enrichissantes',
                    'Animateurs qualifiés et passionnés',
                    'Matériel fourni et inclus',
                    'Développement de compétences et cohésion',
                    'Moments de partage et de détente'
                ]
            ],
            'soiree-theme' => [
                'title' => 'Soirée à thème',
                'folder' => 'soireeatheme',
                'description' => 'Plongez dans un univers unique avec nos soirées à thème sur mesure ! Années 80, casino, tropical, mascarade ou toute autre thématique : nous créons une ambiance immersive totale. Décoration, costumes, animations et spectacles s\'accordent pour une expérience inoubliable.',
                'benefits' => [
                    'Décoration immersive et détaillée',
                    'Animations cohérentes avec le thème',
                    'Conseils en costumes et accessoires',
                    'Musique et ambiance sur mesure',
                    'Expérience complète et mémorable'
                ]
            ],
            'evenements-familiaux' => [
                'title' => 'Événement familiaux',
                'folder' => 'evenementsfamiliaux',
                'description' => 'Créez des souvenirs précieux lors de vos événements familiaux ! Mariages, baptêmes, communions ou réunions familiales : nous orchestrons vos célébrations avec soin et attention. Chaque détail est pensé pour que vous puissiez profiter pleinement de ces moments privilégiés.',
                'benefits' => [
                    'Organisation personnalisée et sur mesure',
                    'Respect de vos traditions et valeurs',
                    'Coordination de tous les prestataires',
                    'Attention aux détails et finitions',
                    'Accompagnement bienveillant tout au long'
                ]
            ],
            'fete-ecole' => [
                'title' => 'Fête d\'école',
                'folder' => 'fêtedécole',
                'description' => 'Organisez une fête d\'école joyeuse et sécurisée ! Nous proposons des animations ludiques et éducatives adaptées aux enfants. Stands de jeux, spectacles, ateliers créatifs et restauration : tout est prévu pour le bonheur des élèves, parents et enseignants.',
                'benefits' => [
                    'Animations sécurisées et encadrées',
                    'Jeux et activités adaptés par âge',
                    'Respect des normes de sécurité',
                    'Coordination avec l\'équipe pédagogique',
                    'Ambiance festive et éducative'
                ]
            ],
            'colonies-vacances' => [
                'title' => 'Colonie de vacances',
                'folder' => 'coloniesdevacances',
                'description' => 'Offrez des vacances enrichissantes et amusantes aux enfants ! Nos colonies de vacances proposent un programme complet d\'activités sportives, culturelles et créatives dans un cadre sécurisé. Développement personnel, nouvelles amitiés et souvenirs inoubliables garantis.',
                'benefits' => [
                    'Encadrement qualifié et diplômé',
                    'Programme varié et équilibré',
                    'Hébergement confortable et sécurisé',
                    'Activités sportives et découvertes culturelles',
                    'Suivi et communication avec les familles'
                ]
            ],
            'sensibilisation' => [
                'title' => 'Compagnie de sensibilisation',
                'folder' => 'compagniedesensibilisation',
                'description' => 'Sensibilisez votre public avec impact et créativité ! Nous créons des campagnes de sensibilisation originales sur des sujets sociaux, environnementaux ou de santé publique. Théâtre, animations interactives et supports pédagogiques : nous transmettons vos messages avec efficacité.',
                'benefits' => [
                    'Approche pédagogique et engageante',
                    'Contenus adaptés à votre cible',
                    'Outils interactifs et participatifs',
                    'Mesure de l\'impact et du message',
                    'Équipe experte en communication sociale'
                ]
            ],
            'traiteurs' => [
                'title' => 'Traiteurs',
                'folder' => 'traiteurs',
                'description' => 'Régalez vos invités avec nos services traiteur haut de gamme ! Nous proposons une cuisine raffinée et des prestations sur mesure adaptées à tous types d\'événements. Buffets, cocktails, repas assis ou formules originales : nos chefs créent des expériences gustatives mémorables.',
                'benefits' => [
                    'Cuisine de qualité avec produits frais',
                    'Menus personnalisés selon vos envies',
                    'Service professionnel et discret',
                    'Présentation soignée et élégante',
                    'Adaptation aux régimes et allergies'
                ]
            ]
        ];
    }

    public function show($slug)
    {
        $prestations = $this->getPrestationsData();
        
        if (!isset($prestations[$slug])) {
            abort(404);
        }
        
        $prestation = $prestations[$slug];
        
        // Get all images from the prestation folder
        $folderPath = public_path('assets/images/nosPrestations/' . $prestation['folder']);
        $images = [];
        
        if (File::exists($folderPath)) {
            $files = File::files($folderPath);
            
            foreach ($files as $file) {
                if (in_array($file->getExtension(), ['jpg', 'jpeg', 'png', 'gif', 'webp'])) {
                    $images[] = '/assets/images/nosPrestations/' . $prestation['folder'] . '/' . $file->getFilename();
                }
            }
            
            // Sort images naturally (1.jpeg, 2.jpeg, etc.)
            usort($images, function($a, $b) {
                return strnatcmp($a, $b);
            });
        }
        
        // If no images found, use a default placeholder
        if (empty($images)) {
            $images[] = '/assets/images/placeholder.jpg';
        }
        
        return Inertia::render('Prestations/Show', [
            'prestation' => [
                'title' => $prestation['title'],
                'description' => $prestation['description'],
                'benefits' => $prestation['benefits'],
                'images' => $images,
                'slug' => $slug
            ]
        ]);
    }
}
