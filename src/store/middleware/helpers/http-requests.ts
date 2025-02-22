import axios from "axios";

const httpRequests = {
    baseURL: 'http://localhost:4000',
    send: async (dispatch:any, action:any) => {
        const { url, method, token, data, onSuccess, onError } = action.payload;
        try {
            const instance = axios.create({
                baseURL: httpRequests.baseURL,
                timeout: 1000,
                headers: {'Authorization': `Bearer ${token}`}
            });

            const response = await instance.request({
                url,
                method,
                data,
            });
            dispatch({type: onSuccess, payload: response.data});
        } catch(error: any) {
            dispatch({type: onError, payload: {error:  error.message}});
        }
    }
};

export default httpRequests;