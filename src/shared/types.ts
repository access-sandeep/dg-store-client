import { Tracing } from "trace_events";

export type CheckboxType = {
    value:string; 
    isChecked?:boolean; 
    checkboxLabel:string;
}

export type PriceInputType = {
    label: string;
    labelId?: string;
    id?:string;
    name: string;
    ariaLabel?: string;
    onChangeValue?:Function;
    value?:number;
}

export type SubmitType = {
    name:string; 
    label:string;
}

export type ActionProduct = {
    id: string;
    name: string;
    sku: string;
    description: string;
    short_description: string;
    createddate: Date;
    updatedate: Date
}

export type PayloadProduct = {
    url: string; 
    method: string; 
    token?: string;
    data: {
        id: string;
        name: string;
        sku: string;
        description: string;
        short_description: string;
    };
    onSuccess: string; 
    onError: string;
}

export type DispatchProduct = {
    type: string;
    payload: PayloadProduct;
}

export type DispatchProducts = {
    type: string;
    payload: Array<PayloadProduct>;
}

export type PayloadLogin = {
    url: string; 
    method: string; 
    data: ActionLoginDto;
    onSuccess: string; 
    onError: string;
}

export type PayloadCart = {
    url: string; 
    method: string; 
    data: ActionCartDto;
    onSuccess: string; 
    onError: string;
}

export type ActionLoginDto = {
    email: string;
    password: string;
    keepLogin: boolean;
}

export type ActionCartDto = {
    product_id: string;
    user_id: string;
}

export type AccessToken = {
    access_token: string;
    user_id: string;
}

export type ProductDetails = {
    id: string;
    name: string;
    sku: string;
    description: string;
    short_description: string;
    stock_left: number;
    price: number;
    discount: number;
    max_order_units: number;
    createddate: string;
    updatedate: string;        
}

export type Address = {
    id: number;
    address_line1: string;
    address_line2: string;
    country: string;
    state: string;
    city: string;
    postcode: string;
};

export type userGroup = {
    id: number;
    groupname: string;
    full_admin_access: number;
    product_update_admin_access: number;
    transaction_details_previledge: number;
    disacount_update_access: number;
    full_customer_access: number;
    partial_blocked_customer: number;
    fully_blocked_customer: number;
};

export type User = {
    id: number;
    usergroup_id: number;
    usergroup: userGroup;
    address_id: number;
    address: Address;
    email: string;
    full_name: string;
    createddate: string;
};

export type Cart = {
    id: string;
    cart_type: string;
    expiry_number: number;
    expiry_unit: string;
    active: string;
    createddate: string;
}

export type CartDetails = {
    common_cart_id: string;
    common_user_id: string;
    unique_cart_item_id: string;
    cart: Cart;
    user: User;
    product_details: ProductDetails;
    quantity: number;
    total_price: number;
}

export type DispatchLogin = {
    type: string;
    payload: PayloadLogin;
}

export type DispatchCart= {
    type: string;
    payload: PayloadCart;
}

export type FetchLoginAction = {
    type: string;
    payload: AccessToken;
}

export type FetchCartDetails = {
    type: string;
    payload: CartDetails;
}