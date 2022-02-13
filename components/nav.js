import Link from 'next/link'
import { useEffect } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'

// const links = [
//    { label: "Home", href: "./pages/index.js" },
//    { label: "Page 2", href: "/pages/photogallery.js" },
//    { label: "Page 3", href: "/" },
// ]

export default function Nav() {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        console.log('Made by Abby!')
    })
    return (
        <nav className="dark:text-white dark:bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <ul className="flex flex-wrap justify-between items-center p-8 pt-6 sm:mt-0">
                <li className="text-white">Charlotte Coding Club</li>
                <ul className={`flex flex-row space-x-5 items-center`}>
                    {/* {links.map(({ href, label }) => (
                        <li className="items-center content-center" key={`${href}${label}`}>
                            <Link href={href}>
                                <a className={`font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}>
                                    {label}
                                </a>
                            </Link>
                        </li>
                    ))} */}
                    <li>
                        <button
                            onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                                document.querySelector("#theme_toggle").classList.toggle("rotate-180");
                            }}
                            className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200" id="theme_toggle">
                            <CgDarkMode size={24} />
                        </button>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}