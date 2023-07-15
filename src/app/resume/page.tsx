"use client";

import { useEffect } from "react"
import { useGlobalContext } from "../Context/store"

export default function Resume() {
    const { page, setPage, setMenuExpanded} = useGlobalContext()

    useEffect(() => {
        setPage('resume')
        setMenuExpanded(false)
    }, [])

    return <h1>Resume</h1>
}