import { IconBrandTailwind, IconBrandVue } from '@tabler/icons-react';
import { AstroIcon } from '../utils/icons';

const images = [
    '../assets/nft-ape-1.png',
    '../assets/nft-ape-2.png',
    '../assets/nft-ape-3.png',
    '../assets/nft-ape-4.png'
];

export const CardNft = () => {
    return (
        <>
            <article
                data-atropos-offset="10"
                className="absolute bottom-[8rem] left-[12.5rem] z-[10] flex h-[25vh] w-[25vw]"
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="h-full w-full rounded-lg"
                    />
                ))}
                <p className="absolute left-[9rem] top-[-3rem] w-[30vw] font-kaushan text-4xl text-white">
                    NFT Market
                </p>
            </article>
            <article className="absolute right-10 top-10 flex flex-col justify-center gap-1">
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
