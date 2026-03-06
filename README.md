🗂 Cahier de Charge – Stoon Events

Version : 1.0
Date : (À compléter)

📌 1. Présentation du Projet

Ce document décrit les besoins techniques et fonctionnels pour la création du site web Stoon Events, inspiré du site lfp.ma, entreprise marocaine spécialisée dans les événements corporate, team building, incentives, séminaires et activations de marque.

L’objectif principal est de développer un site moderne, responsive et optimisé SEO, basé sur :


Le site doit permettre la présentation des services, l’envoi de formulaires (contact, demandes de devis), l’affichage dynamique des activités et la gestion du contenu via une interface d’administration.

📌 2. Description de l’Entreprise (Stoon Events)

Stoon Events est une agence spécialisée dans l’organisation d’événements d’entreprise et d’activités de cohésion d’équipe.
Coordonnées :

📞 Téléphone : 0701170027

✉️ Email : contact@stoonevents.com

📍 Adresse : Etage 1 N°2, 53 Rue de Grenoble, Casablanca 20303

🌐 Site web : www.stoonevents.com

📌 3. Objectifs du Site Web
🟢 Objectifs Généraux

Présenter visuellement les services et activités proposés.

Faciliter la prise de contact et la demande de devis.

Proposer une navigation agréable et fluide sur mobile et desktop.

Offrir une gestion facile du contenu via un backend Laravel.

📌 4. Architecture Technique
🧩 Tech Stack
Étage	Technologie

SEO	Meta tags dynamiques
📌 5. Fonctionnalités Principales
🟡 5.1 Pages Frontend
🏠 Page d’Accueil

Section Hero (image + titre + CTA)

Présentation des services

Aperçu des activités (ex : Team Building, Incentives, Séminaires…)

Témoignages clients

CTA pour contact / devis

📋 Services

Page liste des services (dynamique)

Page detail par service (contenu + images)

Chaque service reprend les catégories comme :

Team Building

Incentive

Séminaire

Brand Activation

Corporate Family Day
(comme dans l’offre lfp.ma)

📞 Page Contact

Formulaire simple :

Nom

Email

Téléphone

Message

📄 Formulaire Demande de Devis

Champs :

Type d’événement

Date souhaitée

Nombre de participants

Détails

Upload (optionnel)

📚 Page À Propos

Histoire de l’entreprise

Valeurs

Équipe

fusionné avec le style contenu de lfp.ma

📊 5.2 Dashboard Administrateur (Back Office)

L’administrateur peut :

Gérer les services (CRUD)

Gérer les projets / événements

Visualiser les demandes de contact

Visualiser les demandes de devis



📈 9. SEO & Référencement

Chaque page doit contenir :

Title

Meta Description

OpenGraph tags

Canonical

📦 10. Déploiement & CI/CD

Hébergement sur DigitalOcean ou Vercel (Front) / Forge (Back)

SSL Let’s Encrypt

GitHub Actions pour automatisation

🧪 11. Tests

Tests unitaires Laravel :

Contrôleurs

Modèles

Form Request

UI Tests :

Composants React

🧾 12. Annexes

Exemples d’activités inspirées de lfp.ma :

Team Building : Trail of Ibn Battouta, Survivor Challenge, Bike Builders…

Incentive & Events personnalisés (mariage, activation produit)

RSE / Activités écoresponsables