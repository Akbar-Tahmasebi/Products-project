import { Component } from 'react';
import ProductContext from './context/products'
import Navbar from './class/navbar'
import Products from './class/products';

class App extends Component {
    state ={
        products: [
            {id:1 , count:7 , productname:"product name7"},
            {id:2 , count:8 , productname:"product name8"},
            {id:3 , count:9 , productname:"product name9"},
        ]
    }

    render() { 
        return (<>
            <ProductContext.Provider
                value={{
                    products : this.state.products,
                    onReset : this.handeleReset,
                    onIncrement : this.handeleIncrement,
                    onDecrement : this.handeleDecrement,
                    onDelete : this.handeleDelete,
                }}
            >
                <Navbar />
                <Products />
            </ProductContext.Provider>
        </>)  
    }
    handeleReset = () => {
        const newProducts = this.state.products.map(p => {
            p.count = 0;
            return p
        })
        this.setState({products: newProducts})
    }
    handeleIncrement = (productId) => {
        const newProducts = [...this.state.products]
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count +=1
        this.setState({products: newProducts})
    }
    handeleDecrement = (productId) => {
        const newProducts = [...this.state.products]
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count -=1
        this.setState({products: newProducts})
    }
    handeleDelete = (productId) => {
        const newProducts = this.state.products.filter(p => p.id !== productId)
        this.setState({products: newProducts})
    }
}
 
export default App;