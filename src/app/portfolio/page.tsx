"use client";

import { useEffect } from "react"
import { useGlobalContext } from "../Context/store"

export default function Portfolio() {
    const { page, setPage, setMenuExpanded} = useGlobalContext()

    useEffect(() => {
        setPage('portfolio')
        setMenuExpanded(false)
    }, [])

    return <h1>Portfolio</h1>
}