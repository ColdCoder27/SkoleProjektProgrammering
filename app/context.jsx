"use client"
import React, {createContext, useState, useContext} from "react";

export const Context = createContext()

export const MyContext = ({children}) => {
    const [rerender, setRerender] = useState(false)

    return(
        <Context.Provider value={{rerender, setRerender}}>
            {children}
        </Context.Provider>
    )
}