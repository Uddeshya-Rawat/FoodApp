// create context 
// make context provider 
// use context

import { createContext, useContext, useEffect, useState } from "react";
import { categories } from "../assets/Categories";


export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    
   
    const [items,setItems]=useState(()=>{
        // checks if there is cartItems 
        // helps to store data after refresh 
        const storedItems=localStorage.getItem('cartItems')
        return storedItems?JSON.parse(storedItems):[]
    });

    useEffect(()=>{
           // store  cart items in localstorage
           localStorage.setItem('cartItems',JSON.stringify(items));
    },[items])

    

    const value={categories,items,setItems}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext=()=>{
    // retun the context 
    return useContext(AppContext);
}