<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PrestationController;
use App\Models\Blog;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $blogs = Blog::where('is_published', true)
        ->latest('published_at')
        ->take(3)
        ->get();
    
    return Inertia::render('Home', [
        'blogs' => $blogs
    ]);
});

// Main Pages
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/references', function () {
    return Inertia::render('References');
})->name('references');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/devis', function () {
    return Inertia::render('Devis');
})->name('devis');

// Prestation Routes
Route::get('/prestations/family-day', function () {
    return Inertia::render('Prestations/FamilyDay');
})->name('prestations.family-day');

Route::get('/prestations/evenement-entreprise', function () {
    return Inertia::render('Prestations/EvenementEntreprise');
})->name('prestations.evenement-entreprise');

Route::get('/prestations/animation-commerciale', function () {
    return Inertia::render('Prestations/AnimationCommerciale');
})->name('prestations.animation-commerciale');

Route::get('/prestations/images-son', function () {
    return Inertia::render('Prestations/ImagesSon');
})->name('prestations.images-son');

Route::get('/prestations/inauguration', function () {
    return Inertia::render('Prestations/Inauguration');
})->name('prestations.inauguration');

Route::get('/prestations/seminaire-conference', function () {
    return Inertia::render('Prestations/SeminaireConference');
})->name('prestations.seminaire-conference');

Route::get('/prestations/street-marketing', function () {
    return Inertia::render('Prestations/StreetMarketing');
})->name('prestations.street-marketing');

Route::get('/prestations/kermesse', function () {
    return Inertia::render('Prestations/Kermesse');
})->name('prestations.kermesse');

Route::get('/prestations/festival', function () {
    return Inertia::render('Prestations/Festival');
})->name('prestations.festival');

Route::get('/prestations/anniversaires', function () {
    return Inertia::render('Prestations/Anniversaires');
})->name('prestations.anniversaires');

Route::get('/prestations/atelier-creatif', function () {
    return Inertia::render('Prestations/AtelierCreatif');
})->name('prestations.atelier-creatif');

Route::get('/prestations/soiree-theme', function () {
    return Inertia::render('Prestations/SoireeTheme');
})->name('prestations.soiree-theme');

Route::get('/prestations/evenements-familiaux', function () {
    return Inertia::render('Prestations/EvenementsFamiliaux');
})->name('prestations.evenements-familiaux');

Route::get('/prestations/fete-ecole', function () {
    return Inertia::render('Prestations/FeteEcole');
})->name('prestations.fete-ecole');

Route::get('/prestations/colonies-vacances', function () {
    return Inertia::render('Prestations/ColoniesVacances');
})->name('prestations.colonies-vacances');

Route::get('/prestations/sensibilisation', function () {
    return Inertia::render('Prestations/Sensibilisation');
})->name('prestations.sensibilisation');

Route::get('/prestations/traiteurs', function () {
    return Inertia::render('Prestations/Traiteurs');
})->name('prestations.traiteurs');

// Generic prestation route (fallback)
Route::get('/prestations/{slug}', [PrestationController::class, 'show'])->name('prestations.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Blog Routes
    Route::resource('blogs', BlogController::class);
});

require __DIR__.'/auth.php';
