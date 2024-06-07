import { createContext } from "react";

const ProductContext = createContext({
    products : [],
    onReset : ()=>{},
    onIncrement : ()=>{},
    onDecrement : ()=>{},
    onDelete : ()=>{}
});

export default ProductContext;