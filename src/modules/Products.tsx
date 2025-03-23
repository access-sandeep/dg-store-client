import Storecontext from "../contexts/storeContext";
import { useContext, useEffect, useState } from "react";
import { fetchProduct } from "../store/products";
import { ActionProduct, CartDetails } from "../shared/types";
import ProductCard from "./common/ProductCard";
import { postCart } from "../store/cart";
import MainContentHead from "./inner/main-content-components/MainContentHead";
import MainContentCard from "./inner/main-content-components/MainContentCard";
import { Product } from '../types/product';
import CategoriesContext from "../contexts/categoriesContext";
import { Category } from "../types/categories";
import useProductFetchData from "../hooks/useProductFetchData";


export default function Products() {
    const store = useContext(Storecontext);
    const categories = useContext(CategoriesContext);
    const products = useProductFetchData();

    const [cart, setCart] = useState(store.getState().cart as Array<CartDetails>);

   
    const addToCartAction = (event: any, product:ActionProduct)=>{
        store.dispatch(postCart({
            url: "cart/add", 
            method: "POST", 
            data: { 
                product_id: product.id,
                user_id: store.getState().login[0].user_id
            }, 
            onSuccess: "cart/successActions", 
            onError: "cart/errorActions"
        }));

        setCart(store.getState().cart);
        console.log("Product selected >>> ", product);
    };

    return (<div className="main-content">
        <MainContentHead categories={categories} />
        <div className="cards-section">
            {products.map((prod:any) => {
                return <MainContentCard data={prod} />
            })}
        </div>
    </div>
    )
}