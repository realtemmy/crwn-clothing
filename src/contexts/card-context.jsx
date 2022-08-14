import { createContext, useState } from "react";

export const CardContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>{}
});


export const CardProvider = ({children}) =>{
    const [isCartOpen, setCartOpen] = useState(false);

    const value = {isCartOpen, setCartOpen}

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

