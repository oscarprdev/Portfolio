import {
    IconBrandTailwind,
    IconBrandNodejs,
    IconBrandNextjs,
    IconSql
} from '@tabler/icons-react';
import { TwitterIcon } from './icons/twitter.icon';

export const CardTwitter = () => {
    return (
        <>
            <article
                data-atropos-offset="10"
                className="absolute bottom-[3rem] right-[-9.5rem] z-[10] h-[40%] w-[90%] md:bottom-[25%] md:right-[15%] md:h-[25vh] md:w-[25vw]"
            >
                <div className="absolute left-[-40%] top-2 grid w-[40%] place-items-center">
                    <TwitterIcon />
                </div>
            </article>
            <article className="absolute right-5 top-2 flex scale-75 flex-col justify-center gap-1 md:right-10 md:top-10 md:scale-100">
                <IconBrandNextjs
                    className="text-gray-400"
                    size="32"
                />
                <IconSql
                    className="text-gray-400"
                    size="32"
                />
                <IconBrandNodejs
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
