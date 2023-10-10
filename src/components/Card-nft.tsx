import { IconBrandTailwind, IconBrandVue } from '@tabler/icons-react';
import { AstroIcon } from '../utils/icons';

const images = [
    'public/assets/nft-ape-1.png',
    'public/assets/nft-ape-2.png',
    'public/assets/nft-ape-3.png',
    'public/assets/nft-ape-4.png'
];

export const CardNft = () => {
    return (
        <>
            <article
                data-atropos-offset="10"
                className="absolute bottom-[12rem] left-[12rem] flex h-[30vh] w-[30vw]"
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="h-full w-full rounded-lg"
                    />
                ))}
                <p className="absolute left-[12rem] top-[-3rem] font-kaushan text-4xl text-white">
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
