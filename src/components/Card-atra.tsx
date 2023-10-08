import { IconBrandTailwind, IconBrandNodejs, IconBrandVue } from '@tabler/icons-react';

export const CardAtra = () => {
    return (
        <>
            <section
                id="card-project-details"
                data-atropos-offset="10"
                className="absolute bottom-[12rem] right-[5rem] h-[30vh] w-[30vw]"
            >
                <img
                    src="public/assets/atra-image.png"
                    className="h-full w-full"
                />
                <p className="absolute left-[-50%] top-0 font-cormorant text-2xl text-black">
                    ATRA
                </p>
                <p className="absolute left-[-50%] top-[15%] w-[18vw] font-cormorant text-xl text-black">
                    Asistència tècnica en rehabilitació i arquitectura
                </p>
                <p className="absolute left-[-50%] top-[50%] font-cormorant text-lg text-black">
                    Jaume Perez Llopis
                </p>
            </section>
            <section className="absolute right-10 top-10 flex flex-col justify-center">
                <IconBrandNodejs
                    className="text-gray-400"
                    size="32"
                />
                <IconBrandTailwind
                    className="text-gray-400"
                    size="32"
                />
                <IconBrandVue
                    className="text-gray-400"
                    size="32"
                />
            </section>
        </>
    );
};
