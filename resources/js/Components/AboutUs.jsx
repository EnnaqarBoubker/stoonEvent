export default function AboutUs() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            POURQUOI STOON EVENTS ?
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "#548291" }}
                            />
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "#548291" }}
                            />
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "#548291" }}
                            />
                            <div
                                className="w-32 h-1 rounded-full"
                                style={{ backgroundColor: "#548291" }}
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                        {/* Right Side - Text Content */}
                        <div className="space-y-6">
                            <p className="text-lg text-white leading-relaxed">
                                <span
                                    className="font-semibold"
                                    style={{ color: "#548291" }}
                                >
                                    Stoon events
                                </span>
                                , vous propose des prestations techniques et des
                                animations artistiques personnalisées. Nous vous
                                accompagnons afin de vous apporter des services
                                sur mesure avec des prestations variées
                                correspondant à vos objectifs et à vos besoins :
                                sonorisation, éclairage, vidéo, DJ
                                professionnels, artistes…
                            </p>
                            <p className="text-lg text-white leading-relaxed">
                                Vous organisez un événement professionnel,
                                familial ou privé : nous prenons en charge
                                l'animation de vos événements au niveau national
                                et international.
                            </p>
                            <p className="text-lg text-white leading-relaxed">
                                Chez Stoon Events, nous transformons chaque
                                événement en une expérience mémorable. Notre
                                mission est de donner vie à vos idées en créant
                                des événements uniques, créatifs et parfaitement
                                organisés, qui marquent durablement vos invités.
                                Nous proposons des prestations événementielles
                                clés en main, adaptées à tous vos besoins :
                                événements d’entreprise, animations pour
                                enfants, soirées thématiques, lancements de
                                produits, kermesses, carnavals, fêtes de fin
                                d’année et événements grand public. Grâce à une
                                approche personnalisée, une équipe expérimentée
                                et une attention particulière aux détails, nous
                                garantissons des événements à forte valeur
                                émotionnelle et visuelle. Avec Stoon Events,
                                offrez à votre public bien plus qu’un événement
                                : une véritable expérience.{" "}
                            </p>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            style={{ color: "#548291" }}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Services sur mesure
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            Adaptés à vos besoins
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            style={{ color: "#548291" }}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Équipe experte
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            Professionnels qualifiés
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            style={{ color: "#548291" }}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Portée internationale
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            Service national & international
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            style={{ color: "#548291" }}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Équipement professionnel
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            Technologie de pointe
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
