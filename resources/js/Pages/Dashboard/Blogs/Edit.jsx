import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ auth, blog }) {
    const { data, setData, post, processing, errors } = useForm({
        title: blog.title || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        image: null,
        is_published: blog.is_published || false,
        _method: 'PUT',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('blogs.update', blog.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Modifier l'Article</h2>
                    <Link
                        href={route('blogs.index')}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        ← Retour
                    </Link>
                </div>
            }
        >
            <Head title="Modifier l'Article - Dashboard" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Title */}
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                    Titre *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                            </div>

                            {/* Excerpt */}
                            <div>
                                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                                    Extrait
                                </label>
                                <textarea
                                    id="excerpt"
                                    value={data.excerpt}
                                    onChange={(e) => setData('excerpt', e.target.value)}
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Courte description de l'article..."
                                />
                                {errors.excerpt && <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>}
                            </div>

                            {/* Content */}
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                                    Contenu *
                                </label>
                                <textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    rows="12"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
                            </div>

                            {/* Current Image */}
                            {blog.image && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Image actuelle
                                    </label>
                                    <img
                                        src={`/storage/${blog.image}`}
                                        alt={blog.title}
                                        className="h-32 w-auto rounded-lg object-cover"
                                    />
                                </div>
                            )}

                            {/* New Image */}
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nouvelle Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                    accept="image/*"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
                            </div>

                            {/* Publish */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="is_published"
                                    checked={data.is_published}
                                    onChange={(e) => setData('is_published', e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="is_published" className="ml-2 text-sm text-gray-700">
                                    Publier l'article
                                </label>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-4">
                                <Link
                                    href={route('blogs.index')}
                                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    Annuler
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                                >
                                    {processing ? 'Mise à jour...' : 'Mettre à jour'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
