"use client";

import React, { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type PageType = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'

interface ContextProps {
    page: PageType
    setPage: Dispatch<SetStateAction<PageType>>

    menuExpanded: boolean
    setMenuExpanded: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    page: 'about',
    setPage: (): string => '',

    menuExpanded: false,
    setMenuExpanded: (): boolean => false
})

export const GlobalContextProvider = ({ children } : { children : React.ReactNode }) => {
    const [page, setPage] = useState<PageType>('about')
    const [menuExpanded, setMenuExpanded] = useState<boolean>(false)

    return (
        <GlobalContext.Provider value={{page, setPage, menuExpanded, setMenuExpanded}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)