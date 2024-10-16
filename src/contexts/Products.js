import { createContext, useContext } from "react";

export const ProductContext = createContext({
    items: [{
        name: 'orange',
        email: 'orange@gmail.com'
    },
    {
        name: 'apple',
        email: 'apple@gamil.com',
    },
    {
        name: 'banana',
        email: 'banan@gmail.com',
    },
    {
        name: 'watermelon',
        email: 'watermelon@gmail.com'
    }
    ],

    addItems: (items) => { }
});

export const ProductContextProvider = ProductContext.Provider;

export const useProduct = () => {
    return useContext(ProductContext);
}