import { IconBrandTailwind, IconBrandVue } from '@tabler/icons-react';

const images = [
    'public/assets/nft-ape-1.png',
    'public/assets/nft-ape-2.png',
    'public/assets/nft-ape-3.png',
    'public/assets/nft-ape-4.png'
];

export const CardNft = () => {
    return (
        <>
            <section
                id="card-project-details"
                data-atropos-offset="10"
                className="absolute bottom-[11rem] left-[12rem] flex h-[30vh] w-[30vw]"
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="h-full w-full"
                    />
                ))}
            </section>
            <section className="absolute right-10 top-10 flex flex-col justify-center">
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
