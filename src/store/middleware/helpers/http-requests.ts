import axios from "axios";

const httpRequests = {
    baseURL: 'http://localhost:4000',
    send: async (dispatch:any, action:any) => {
        const { url, method, token, data, onSuccess, onError } = action.payload;
        console.log('Action payload from http-requests', { url, method, token, data, onSuccess, onError });
        try {
            let instanceObject: {baseURL:string; timeout: number; headers?:{Authorization: string}} = {
                baseURL: httpRequests.baseURL,
                timeout: 1000,
                headers: {Authorization: `Bearer ${token}`}
            };

            const instance = axios.create(instanceObject);
            const requestData = {
                url,
                method,
                data,
            };
            const response = await instance.request(requestData);
            console.log("Response Data",response);
            dispatch({type: onSuccess, payload: response.data});
        } catch(error: any) {
            dispatch({type: onError, payload: {error:  error.message}});
        }
    }
};

export default httpRequests;