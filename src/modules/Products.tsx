import Storecontext from "../contexts/storeContext";
import { useContext, useEffect, useState } from "react";
import { fetchProduct } from "../store/products";
import { ActionProduct, CartDetails } from "../shared/types";
import ProductCard from "./common/ProductCard";
import { postCart } from "../store/cart";

export default function Products() {
    const store = useContext(Storecontext);
    const [products, setProducts] = useState(store.getState().products as Array<ActionProduct>);
    const [cart, setCart] = useState(store.getState().cart as Array<CartDetails>);
     
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
   
    const addToCartAction = (product:ActionProduct)=>{
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
    };
    return (
        <>
            <div className="row">
                {products.map((p,k)=>{
                    return <ProductCard product={p} onAddToCart={addToCartAction} key={p.id} />
                })}
            </div>
            <ul>{cart.map((crt:any)=>{
                return <li key={crt.unique_cart_item_id}>
                    {crt.unique_cart_item_id}  &copy; {crt.product_details.name}
                </li>
            })}</ul>
        </>
    )
}