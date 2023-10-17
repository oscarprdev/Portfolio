import { useEffect, useState } from 'react';

interface Props {
    to: string;
    text: string;
}

export const NavItem = ({ to, text }: Props) => {
    const [currentHash, setCurrentHash] = useState<string | null>();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 300) {
                    setCurrentHash(`#${section.id}`);
                }
            });
        };

        if (window.location.hash === '') {
            setCurrentHash('#home');
        } else {
            setCurrentHash(window.location.hash);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <li
            className={`${
                currentHash === to && 'bg-white-blur'
            } relative px-2 py-1 md:px-4 md:py-2`}
        >
            <a
                href={to}
                className={`text-${
                    currentHash === to ? 'white' : '[var(--white-color-nav)]'
                } transition-colors duration-200 ease-out hover:text-[var(--text-social)]`}
            >
                {text}
                <span
                    className={`${
                        currentHash === to && 'border-glare'
                    } bottom-[10%] left-[10%] top-[auto] h-[1px] w-[80%]`}
                />
            </a>
        </li>
    );
};
