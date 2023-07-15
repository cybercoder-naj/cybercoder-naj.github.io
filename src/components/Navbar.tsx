'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/Context/store";
import './Navbar.css'

export default function Navbar() {
    const { page, setPage, menuExpanded, setMenuExpanded} = useGlobalContext();

    function handleMenuClick() {
        setMenuExpanded(!menuExpanded);
    }

    return <nav className="flex justify-between p-3 relative sm:static">
        <h1 className="text-xl">
            <Link href="/">Nishant Aanjaney Jalan</Link>
        </h1>
        <span className="sm:hidden" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={faBars} className="w-5"/>
        </span>
        <ul className={`absolute sm:static ${!menuExpanded ? '-right-full' : '-right-1/20'} transition-[right] duration-500 ease-in-out top-10 bg-nero w-screen pl-10 text-nav-unselected sm:flex sm:w-auto text-sm`}>
            <li className={`navbar-item sm:my-1 sm:mx-3 hover:text-nav-selected ${page === 'about' ? 'text-nav-selected' : ''}`}><Link href="/">About Me</Link></li>
            <li className={`navbar-item sm:my-1 sm:mx-3 hover:text-nav-selected ${page === 'resume' ? 'text-nav-selected' : ''}`}><Link href="resume">Resume</Link></li>
            <li className={`navbar-item sm:my-1 sm:mx-3 hover:text-nav-selected ${page === 'portfolio' ? 'text-nav-selected' : ''}`}><Link href="portfolio">Portfolio</Link></li>
            <li className={`navbar-item sm:my-1 sm:mx-3 hover:text-nav-selected ${page === 'blog' ? 'text-nav-selected' : ''}`}><Link href="blog">Blog</Link></li>
            <li className={`navbar-item sm:my-1 sm:mx-3 hover:text-nav-selected ${page === 'contact' ? 'text-nav-selected' : ''}`}><Link href="contact">Contact</Link></li>
        </ul>
    </nav>
}