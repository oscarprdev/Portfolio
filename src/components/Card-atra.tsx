import { IconBrandTailwind, IconBrandNodejs, IconBrandVue } from '@tabler/icons-react';
import { AstroIcon } from '../utils/icons';

export const CardAtra = () => {
    return (
        <>
            <article
                data-atropos-offset="10"
                className="absolute bottom-[8rem] right-[7rem] z-[10] h-[25vh] w-[25vw]"
            >
                <img
                    src="../assets/atra-image.png"
                    className="h-full w-full"
                />
                <p className="absolute left-[-52%] top-[5%] font-cormorant text-2xl text-black">
                    ATRA
                </p>
                <p className="absolute left-[-52%] top-[18%] w-[18vw] font-cormorant text-lg text-black">
                    Asistència tècnica en rehabilitació i arquitectura
                </p>
                <p className="absolute left-[-52%] top-[50%] font-cormorant text-lg text-black">
                    Jaume Perez Llopis
                </p>
            </article>
            <article className="absolute right-10 top-10 flex flex-col justify-center gap-1">
                <AstroIcon />
                <IconBrandNodejs
                    className="text-gray-400"
                    size="32"
                />
                <IconBrandVue
                    className="text-gray-400"
                    size="32"
                />
                <IconBrandTailwind
                    className="text-gray-400"
                    size="32"
                />
            </article>
        </>
    );
};
