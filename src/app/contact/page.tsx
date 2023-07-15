"use client";

import { useEffect } from "react"
import { useGlobalContext } from "../Context/store"

export default function Contact() {
    const { page, setPage } = useGlobalContext()

    useEffect(() => {
        setPage('contact')
    }, [])

    return <h1>Contact</h1>
}