import { useState } from 'react';
import Products from './funcional/products';
import Navbar from './funcional/navbar';
import ProductContext from './context/products';

const App = () => {
    const [products , setProducts]=useState([
        {id:1 , count:4 , productname:"product name4"},
        {id:2 , count:5 , productname:"product name5"},
        {id:3 , count:6 , productname:"product name6"},
    ])

    return (<>
        <ProductContext.Provider
            value={{
                products : products,
                onReset : handeleReset,
                onIncrement : handeleIncrement,
                onDecrement : handeleDecrement,
                onDelete : handeleDelete,
            }}
        >
            <Navbar />
            <Products />
        </ProductContext.Provider>
    </>)

    function handeleIncrement(productId) {
        const newProducts = [...products]
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count +=1
        setProducts(newProducts)
    }
    function handeleDecrement(productId) {
        const newProducts = [...products]
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count -=1
        setProducts(newProducts)
    }
    function handeleDelete(productId) {
        const newProducts = products.filter(p => p.id !== productId)
        setProducts(newProducts)
    }
    function handeleReset () {
        const newProducts = products.map(p => {
            p.count = 0;
            return p
        })
        setProducts(newProducts)
    }
}
 
export default App;