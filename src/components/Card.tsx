import 'atropos/css';
import Atropos from 'atropos/react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconWorldWww, IconMedal } from '@tabler/icons-react';

interface Props {
    children: any;
    title: string;
    date: string;
    mainImage: string;
    description: string;
    githubUrl: string;
    appUrl?: string;
    deployed?: boolean;
}

export const Card = ({
    children,
    title,
    date,
    mainImage,
    description,
    githubUrl,
    appUrl,
    deployed
}: Props) => {
    return (
        <Atropos className="atropos-banner show-animation">
            <article
                data-atropos-offset="0"
                className="border-grad absolute top-0 grid h-full w-full place-items-center "
            >
                <span className="border-glare h-[1.5px] w-full" />
                <span className="bg-glow opacity-1 absolute h-full w-full rounded-[1rem]" />
                <span className="bg-card-glow-hover absolute h-full w-full rounded-[1rem] opacity-0" />
                <div className="border-grad-small absolute h-[98%] w-[98.5%]">
                    <span className="border-glare h-[1.5px] w-full" />
                </div>
                <span className="noise z-[-10] h-full w-full rounded-[1rem] content-none" />
            </article>
            <article
                data-atropos-offset="2"
                className="absolute top-0 grid h-full w-full place-items-center"
            >
                <div className="absolute left-5 top-5 flex items-center gap-2 md:left-10 md:top-9">
                    <h2 className=" text-2xl text-white ">{title}</h2>
                    {deployed && (
                        <>
                            <IconMedal
                                size={24}
                                color="gold"
                            />
                        </>
                    )}
                </div>

                <div className="absolute left-5 top-[4rem] flex flex-col items-start gap-3 md:left-10 md:top-[4.6rem] md:flex-row md:items-center">
                    <p className="text-sm text-slate-200 md:text-lg">
                        <i>{date}</i>
                    </p>
                    <span className=" h-[1px] w-[30px] bg-slate-200 content-none" />
                    <p className="text-sm text-gray-400 md:text-lg">
                        <i>{description}</i>
                    </p>
                </div>
                <img
                    src={mainImage}
                    className="absolute bottom-[2.4rem] w-full md:bottom-[-3.6%] md:w-[48vw]"
                />
                <span className="absolute top-[37%] h-[42%] w-[85%] rounded-lg border border-[#ffffff32] bg-[#ffffff12] md:top-[22%] md:h-[45vh] md:w-[39.4vw]" />
            </article>
            {children}
            <article
                data-atropos-offset="10"
                className="absolute bottom-[0.4rem] left-[5%] z-20 flex items-center gap-3 p-2 md:bottom-[0.8rem] md:left-[16%]"
            >
                <a
                    href={githubUrl}
                    target="_blank"
                    className="hover:bg-glow-hover group relative flex cursor-pointer items-center justify-center gap-3 rounded-full border border-gray-500 px-10 py-4 text-[var(--white-color-nav)]  backdrop-blur-2xl transition-all duration-75 ease-in hover:text-[var(--text-social)] md:px-6 md:py-3"
                >
                    Code
                    <IconBrandGithub size="24" />
                    <span className="border-glare left-[15%] hidden h-[1px] w-[70%] transition-opacity duration-300 ease-in group-hover:inline-block" />
                </a>
                {appUrl && (
                    <a
                        href={appUrl}
                        target="_blank"
                        className="hover:bg-glow-hover group relative flex cursor-pointer items-center justify-center gap-3 rounded-full border border-gray-500 px-10 py-4 text-[var(--white-color-nav)]  backdrop-blur-2xl transition-all duration-75 ease-in hover:text-[var(--text-social)] md:px-6 md:py-3"
                    >
                        App
                        <IconWorldWww size="24" />
                        <span className="border-glare left-[15%] hidden h-[1px] w-[70%] transition-opacity duration-300 ease-in group-hover:inline-block" />
                    </a>
                )}
            </article>
        </Atropos>
    );
};
