
import React, { createContext, useState } from "react";

const SharedProducts = createContext();

export const SharedProvider = ({ children }) => {
    const [sharedValue, setSharedValue] = useState(null);

    return (
        <SharedProducts.Provider value={{ sharedValue, setSharedValue }}>
            {children}
        </SharedProducts.Provider>
    );
};

export const useSharedValue = ()=>{
    return React.useContext(SharedProducts);
};