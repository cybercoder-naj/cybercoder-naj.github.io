import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    'use client';

    function handleMenuClick() {
        console.log("Menu clicked!");
    }

    return <nav className="flex justify-between p-3 relative sm:static">
        <h1 className="text-xl">
            <Link href="/">Nishant Aanjaney Jalan</Link>
        </h1>
        <span className="sm:hidden">
            <FontAwesomeIcon icon={faBars} className="w-5"/>
        </span>
        <ul className="absolute sm:static -right-full bg-nero w-screen pl-10 text-nav-unselected sm:flex sm:w-auto text-sm">
            <li className="my-4 sm:my-1 sm:mx-3 hover:text-nav-selected transition duration-300 ease-in-out text-nav-selected"><Link href="about-me">About Me</Link></li>
            <li className="my-4 sm:my-1 sm:mx-3 hover:text-nav-selected transition duration-300 ease-in-out"><Link href="resume">Resume</Link></li>
            <li className="my-4 sm:my-1 sm:mx-3 hover:text-nav-selected transition duration-300 ease-in-out"><Link href="portfolio">Portfolio</Link></li>
            <li className="my-4 sm:my-1 sm:mx-3 hover:text-nav-selected transition duration-300 ease-in-out"><Link href="blog">Blog</Link></li>
            <li className="my-4 sm:my-1 sm:mx-3 hover:text-nav-selected transition duration-300 ease-in-out"><Link href="contact">Contact</Link></li>
        </ul>
    </nav>
}