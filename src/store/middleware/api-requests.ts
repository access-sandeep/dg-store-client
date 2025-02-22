import httpRequests from "./helpers/http-requests";

const http_request = ({dispatch, getState}: any) => (next:any)  => async (action: any) => {
    switch(action.type) {
        case "tasks/httpRequest":
        case "products/httpRequest":
        case "products/fetchProduct":
        case "login/postLogin":
        case "cart/postCart":
            httpRequests.send(dispatch, action);
        break;
        default:
            next(action);
    }
};

export default http_request;