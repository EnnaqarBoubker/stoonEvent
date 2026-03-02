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

// Prestation Routes
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
