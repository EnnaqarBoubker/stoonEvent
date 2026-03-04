export default function ExperiencesBanner() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Mobile version */}
            <div className="relative h-48 sm:h-56 md:hidden">
                <img
                    src="/assets/images/experiencestoonevents.png"
                    alt="Créateur d'expériences - Stoon Events"
                    className="w-full h-full object-contain object-center"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Tablet version */}
            <div className="relative hidden md:block md:h-72 lg:hidden">
                <img
                    src="/assets/images/experiencestoonevents.png"
                    alt="Créateur d'expériences - Stoon Events"
                    className="w-full h-full object-contain object-center"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Desktop version */}
            <div className="relative hidden lg:block lg:h-96 xl:h-[28rem]">
                <img
                    src="/assets/images/experiencestoonevents.png"
                    alt="Créateur d'expériences - Stoon Events"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>
        </section>
    );
}
