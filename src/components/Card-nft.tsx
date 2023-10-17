import { IconBrandTailwind, IconBrandVue } from '@tabler/icons-react';
import { AstroIcon } from '../utils/icons';

const images = [
    '../assets/images/nft-ape-1.png',
    '../assets/images/nft-ape-2.png',
    '../assets/images/nft-ape-3.png',
    '../assets/images/nft-ape-4.png'
];

export const CardNft = () => {
    return (
        <>
            <article
                data-atropos-offset="10"
                className="absolute bottom-[3rem] left-[3rem] z-[10] flex h-[25vh] w-[25vw] md:bottom-[25%] md:left-[22.5%]"
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="h-full w-[70%] rounded-lg md:w-full"
                    />
                ))}
                <p className="absolute left-[5.5rem] top-[1.5rem] w-[50vw] font-kaushan text-xl text-white md:left-[42%] md:top-[-3rem] md:w-[30vw] md:text-4xl">
                    NFT Market
                </p>
            </article>
            <article className="absolute right-5 top-2 flex scale-75 flex-col justify-center gap-1 md:right-10 md:top-10 md:scale-100">
                <AstroIcon />
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
