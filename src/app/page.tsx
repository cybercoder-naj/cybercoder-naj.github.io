"use client";

import { useEffect } from "react";
import { useGlobalContext } from "./Context/store";

export default function About() {
  const { page, setPage, setMenuExpanded} = useGlobalContext();

  useEffect(() => {
    setPage('about')
    setMenuExpanded(false)
  }, [])

  return <div id="about" className="flex flex-column justify-center mt-10">
    <img src="favicon.ico" alt="Nishant Aanjaney Jalan" className="rounded-full w-3/6 border-10 border-neutral-700 border-solid shadow-img-bg" />
  </div>
}