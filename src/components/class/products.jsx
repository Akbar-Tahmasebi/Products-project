import { Component } from 'react';
import ProductContext from './../context/products'
import Product from './product';

class Products extends Component {
    static contextType = ProductContext;

    render() { 
        return (<>
            {this.context.products.map((p,index)=>(
                <Product
                    id={p.id} 
                    key={index} 
                    productname={p.productname} 
                    count={p.count}
                />
            ))}
        </>)   
    }
}

 
export default Products;