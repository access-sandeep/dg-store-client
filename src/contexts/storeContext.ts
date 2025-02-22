import { createContext } from "react";
import { AppStore } from "../store/configureStore";


const Storecontext = createContext<AppStore>({} as AppStore) ;

export default Storecontext;