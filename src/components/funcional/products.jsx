import Product from './product';
import ProductContext from './../context/products';
import { useContext } from 'react';

const Products = () => {
    const productContext = useContext(ProductContext);

    return (<>
        {productContext.products.map((p,index)=>(
            <Product
                key={index} 
                id={p.id} 
                productname={p.productname} 
                count={p.count}
            />
        ))}
    </>)
}
 
export default Products;