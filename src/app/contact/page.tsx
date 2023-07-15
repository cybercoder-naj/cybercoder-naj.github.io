"use client";

import { useEffect } from "react"
import { useGlobalContext } from "../Context/store"

export default function Contact() {
    const { page, setPage, setMenuExpanded } = useGlobalContext()

    useEffect(() => {
        setPage('contact')
        setMenuExpanded(false)
    }, [])

    return <h1>Contact</h1>
}