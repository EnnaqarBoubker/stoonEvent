<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="google-site-verification" content="sXEQ2MoeRWIJTKUo6N5JWsjkBIg7yK0wvU5U0nnT0sk" />

        <!-- SEO Meta Tags -->
        <meta name="description" content="Stoon Events – Agence événementielle à Casablanca spécialisée dans l'organisation d'événements sur mesure : séminaires, conférences, team building, anniversaires, kermesses, festivals, inaugurations, soirées d'entreprise, animations commerciales et street marketing. Créateur d'expériences mémorables au Maroc." />
        <meta name="keywords" content="agence événementielle Casablanca, organisation événements Maroc, séminaire conférence Maroc, team building Casablanca, anniversaire kermesse Maroc, inauguration entreprise, soirée corporate Casablanca, animation commerciale, street marketing Maroc, festival organisateur Maroc, traiteur événement, image et son Casablanca, location sono éclairage Maroc, événement sur mesure Maroc, Stoon Events" />
        <meta name="author" content="Stoon Events" />
        <meta name="robots" content="index, follow" />

        <!-- Open Graph / Social Media -->
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stoon Events – Agence Événementielle à Casablanca" />
        <meta property="og:description" content="Stoon Events crée des expériences événementielles uniques et mémorables au Maroc. Séminaires, team building, anniversaires, festivals, inaugurations et bien plus encore." />
        <meta property="og:image" content="/assets/images/logo/logo.png" />
        <meta property="og:url" content="https://stoonevents.com" />
        <meta property="og:locale" content="fr_MA" />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stoon Events – Agence Événementielle à Casablanca" />
        <meta name="twitter:description" content="Stoon Events crée des expériences événementielles uniques et mémorables au Maroc. Séminaires, team building, anniversaires, festivals, inaugurations et bien plus encore." />
        <meta name="twitter:image" content="/assets/images/logo/logo.png" />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="icon" type="image/png" href="/assets/images/logo/logo.png">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
