"use client";

import { useEffect } from "react"
import { useGlobalContext } from "../Context/store"

export default function Blog() {
    const { page, setPage, setMenuExpanded} = useGlobalContext()

    useEffect(() => {
        setPage('blog')
        setMenuExpanded(false)
    }, [])

    return <h1>Blog</h1>
}