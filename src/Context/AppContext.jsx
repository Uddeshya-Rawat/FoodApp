// create context 
// make context provider 
// use context

import { createContext, useContext, useState } from "react";
import { categories } from "../assets/Categories";


export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    
    const [user,setUser]=useState(null);

    const [showUserLogin,setShowUserLogin]=useState(false)

    const value={user,setUser,showUserLogin,setShowUserLogin,categories}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext=()=>{
    // retun the context 
    return useContext(AppContext);
}