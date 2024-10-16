import { createContext, useContext } from "react";

export const ProductContext = createContext({
    name: 'orange',
    email: 'orange@gmail.com',
});

export const ProductContextProvider = ProductContext.Provider;

export const useProduct = () => {
    return useContext(ProductContext);
}