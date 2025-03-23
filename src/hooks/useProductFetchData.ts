import { useContext, useEffect, useState } from "react";
import { fetchProduct } from "../store/products";
import Storecontext from "../contexts/storeContext";
import { Product } from "../types/product";

const useProductFetchData = ()=> {
    const store = useContext(Storecontext);
    const [products, setProducts] = useState(store.getState().products as Array<Product>);
    
    
    store.subscribe(()=>{
        setProducts(store.getState().products);
    });

    useEffect(()=>{
        const fetchProducts = async () => {
            store.dispatch(fetchProduct({
                url: "products", 
                method: "GET", 
                token: store.getState().login[0].access_token,
                data: {
                    id: "N/A",
                    name: "N/A",
                    sku: "N/A", 
                    description: "N/A", 
                    short_description: "N/A"
                }, 
                onSuccess: "products/successActions", 
                onError: "products/errorActions"
            }));
        }

        if (store.getState().products.length===0) {
            fetchProducts();   
        }
    }, [products, store]);

    return products;
};

export default useProductFetchData;