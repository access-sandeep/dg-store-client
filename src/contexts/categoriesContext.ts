import { createContext } from "react";
import { Category } from "../types/categories";

const CategoriesContext = createContext<Array<Category>>([]) ;

export default CategoriesContext;