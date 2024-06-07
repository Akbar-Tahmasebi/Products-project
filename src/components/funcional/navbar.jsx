import ProductContext from './../context/products'
import { useContext } from 'react';

const Navbar = () => {
    const productContext = useContext(ProductContext);
    
    return ( 
        <nav className='navbar bg-dark navbar-dark'>
            <div className='container-fluid'>
                <a href="#" className='navbar-brand'>
                    Number of products {calculateSum()}
                </a>
            <button onClick={productContext.onReset} className='navbar-item btn btn-primary'>reset</button>
            </div>
        </nav> 
    );
    
    function calculateSum(){
        let sum = 0
        productContext.products.forEach(p => {
            sum += p.count
        });
        return sum
    }
}
 
export default Navbar;