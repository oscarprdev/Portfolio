import 'atropos/css';
import Atropos from 'atropos/react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconWorldWww } from '@tabler/icons-react';

interface Props {
    children: any;
    title: string;
    date: string;
    mainImage: string;
    description: string;
    githubUrl: string;
    appUrl: string;
}

export const Card = ({
    children,
    title,
    date,
    mainImage,
    description,
    githubUrl,
    appUrl
}: Props) => {
    return (
        <Atropos className="atropos-banner">
            <section
                id="card-brackground"
                data-atropos-offset="0"
                className="border-grad absolute top-0 grid h-full w-full place-items-center "
            >
                <span className="border-glare h-[1.5px] w-full" />
                <span className="bg-glow absolute h-full w-full rounded-[1rem]" />
                <div className="border-grad-small absolute h-[98%] w-[98.5%]">
                    <span className="border-glare h-[1.5px] w-full" />
                </div>
                <span className="noise z-[-10] h-full w-full rounded-[1rem] content-none" />
            </section>
            <section
                id="card-project"
                data-atropos-offset="2"
                className="absolute top-0 grid h-full w-full place-items-center"
            >
                <h2 className="absolute left-10 top-10 text-2xl text-white">{title}</h2>
                <div className="absolute left-10 top-20 flex items-center gap-3">
                    <p className=" text-lg text-slate-200">
                        <i>{date}</i>
                    </p>
                    <span className=" h-[1px] w-[30px] bg-slate-200 content-none" />
                    <p className=" text-lg text-gray-400">
                        <i>{description}</i>
                    </p>
                </div>
                <img
                    src={mainImage}
                    className="absolute bottom-[-0.5rem] w-[60vw]"
                />
                <span className="absolute h-[56vh] w-[49vw] rounded-lg border border-[#ffffff32] bg-[#ffffff12]" />
            </section>
            {children}
            <section
                data-atropos-offset="10"
                id="card-buttons"
                className="absolute bottom-10 left-[12%] flex items-center gap-3 p-2"
            >
                <a
                    href={githubUrl}
                    target="_blank"
                    className="hover:bg-glow-hover group relative flex cursor-pointer items-center justify-center gap-3 rounded-full border border-gray-500 px-8  py-4 text-gray-200 backdrop-blur-2xl transition-all duration-75 ease-in"
                >
                    Code
                    <IconBrandGithub size="24" />
                    <span className="border-glare left-[15%] hidden h-[1px] w-[70%] transition-opacity duration-300 ease-in group-hover:inline-block" />
                </a>
                <a
                    href={appUrl}
                    target="_blank"
                    className="hover:bg-glow-hover group relative flex cursor-pointer items-center justify-center gap-3 rounded-full border border-gray-500 px-8  py-4 text-gray-200 backdrop-blur-2xl transition-all duration-75 ease-in"
                >
                    App
                    <IconWorldWww size="24" />
                    <span className="border-glare left-[15%] hidden h-[1px] w-[70%] transition-opacity duration-300 ease-in group-hover:inline-block" />
                </a>
            </section>
        </Atropos>
    );
};
