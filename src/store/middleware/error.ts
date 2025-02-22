const on_error = (store: any) => (next:any)  => async (action: any) => {
    switch(action.type) {
        case "tasks/errorActions":
        case "products/errorActions":
            console.log("This is an error", action);
        break;
        default:
            next(action);
    }
};

export default on_error;