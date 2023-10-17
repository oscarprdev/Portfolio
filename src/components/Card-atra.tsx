import { IconBrandTailwind, IconBrandNodejs, IconBrandVue } from '@tabler/icons-react';
import { AstroIcon } from '../utils/icons';

export const CardAtra = () => {
    return (
        <>
            <article
                data-atropos-offset="10"
                className="absolute bottom-[3rem] right-[-9.5rem] z-[10] h-[40%] w-[90%] md:bottom-[8rem] md:right-[7rem] md:h-[25vh] md:w-[25vw]"
            >
                <img
                    src="../assets/images/atra-image.png"
                    className="w-[35%] md:h-full md:w-full"
                />
                <p className="absolute left-[-40%] top-[1%] font-cormorant text-sm text-black md:left-[-52%] md:top-[5%] md:text-2xl">
                    ATRA
                </p>
                <p className="absolute left-[-40%] top-[14%] w-[39%] font-cormorant text-[0.8rem] text-black md:left-[-52%] md:top-[18%] md:w-[18vw] md:text-lg">
                    Asistència tècnica en rehabilitació i arquitectura
                </p>
                <p className="absolute left-[-40%] top-[48%] font-cormorant text-sm text-black md:left-[-52%] md:top-[50%] md:text-lg">
                    Jaume Perez Llopis
                </p>
            </article>
            <article className="absolute right-5 top-2 flex scale-75 flex-col justify-center gap-1 md:right-10 md:top-10 md:scale-100">
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
