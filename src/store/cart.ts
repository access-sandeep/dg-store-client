import { createSlice } from "@reduxjs/toolkit";
import { CartDetails, DispatchCart, FetchCartDetails } from "../shared/types";

const cartSlice = createSlice({
    name: "cart",
    initialState: [] as Array<CartDetails>,
    reducers: {
        //  Action functions
        postCart: (state:Array<CartDetails>, action:DispatchCart) => {
            console.log(`Adding to cart...`)
        },
        successActions: (state:Array<CartDetails>, action:FetchCartDetails) => {
            state.push(cartAddedResponse(action));
        },
        errorActions: () => {
            return console.log("Error on success from cart");
        }
    }
});

function cartAddedResponse(action: FetchCartDetails): CartDetails {
    return {
        common_cart_id: action.payload.common_cart_id,
        common_user_id: action.payload.common_user_id,
        unique_cart_item_id: action.payload.unique_cart_item_id,
        cart: {
            id: action.payload.cart.id,
            cart_type: action.payload.cart.cart_type,
            expiry_number: action.payload.cart.expiry_number,
            expiry_unit: action.payload.cart.expiry_unit,
            active: action.payload.cart.active,
            createddate: action.payload.cart.createddate
        },
        user: {
            id: action.payload.user.id,
            usergroup_id: action.payload.user.usergroup_id,
            usergroup: {
                id: action.payload.user.usergroup.id,
                groupname: action.payload.user.usergroup.groupname,
                full_admin_access: action.payload.user.usergroup.full_admin_access,
                product_update_admin_access: action.payload.user.usergroup.product_update_admin_access,
                transaction_details_previledge: action.payload.user.usergroup.transaction_details_previledge,
                disacount_update_access: action.payload.user.usergroup.disacount_update_access,
                full_customer_access: action.payload.user.usergroup.full_customer_access,
                partial_blocked_customer: action.payload.user.usergroup.partial_blocked_customer,
                fully_blocked_customer: action.payload.user.usergroup.fully_blocked_customer,
            },
            address_id: action.payload.user.address_id,
            address: {
                id: action.payload.user.address.id,
                address_line1: action.payload.user.address.address_line1,
                address_line2: action.payload.user.address.address_line2,
                country: action.payload.user.address.country,
                state: action.payload.user.address.state,
                city: action.payload.user.address.city,
                postcode: action.payload.user.address.postcode,
            },
            email: action.payload.user.email,
            full_name: action.payload.user.full_name,
            createddate: action.payload.user.createddate,
        },
        product_details: {
            id: action.payload.product_details.id,
            name: action.payload.product_details.name,
            sku: action.payload.product_details.sku,
            description: action.payload.product_details.description,
            short_description: action.payload.product_details.short_description,
            stock_left: action.payload.product_details.stock_left,
            price: action.payload.product_details.price,
            discount: action.payload.product_details.discount,
            max_order_units: action.payload.product_details.max_order_units,
            createddate: action.payload.product_details.createddate,
            updatedate: action.payload.product_details.updatedate,
        },
        quantity: action.payload.quantity,
        total_price: action.payload.total_price
    };
}

export const {postCart, successActions, errorActions} = cartSlice.actions;
export default cartSlice.reducer;
