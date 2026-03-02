import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Vérification email - Stoon Events" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    {/* Logo and Header */}
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-block">
                            <img
                                src="/assets/images/logo/logo.jpeg"
                                alt="Stoon Events"
                                className="h-20 w-auto mx-auto mb-4"
                            />
                        </Link>
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Vérifiez votre email
                        </h2>
                        <p className="text-gray-600">
                            Merci de votre inscription! Avant de commencer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer?
                        </p>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        {status === 'verification-link-sent' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                                Un nouveau lien de vérification a été envoyé à votre adresse e-mail.
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Envoi...' : "Renvoyer l'email de vérification"}
                            </button>
                        </form>

                        {/* Logout */}
                        <div className="mt-6 text-center">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Se déconnecter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
