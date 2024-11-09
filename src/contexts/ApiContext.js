import { createContext, useState } from "react";

export const ApiContext=createContext("");

export const ApiProvider=({children})=>{

    const [tLista, setTLista]=useState([]);

    return <ApiContext.Provider value={{tLista}}>
        {children}
    </ApiContext.Provider>

}