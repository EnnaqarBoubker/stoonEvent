import { Link } from '@inertiajs/react';

export default function ServiceCard({ icon, title, description, link = '#' }) {
    return (
        <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            <div className="p-8">
                {/* Icon */}
                <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

                {/* Link */}
                <Link
                    href={link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                    En savoir plus
                    <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>

            {/* Decorative Bottom Border */}
            <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>
    );
}
