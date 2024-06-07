import { Component } from 'react';
import ProductContext from './../context/products'

class Navbar extends Component {
    static contextType = ProductContext;

    render() { 
        return (
            <nav className='navbar bg-dark navbar-dark'>
                <div className='container-fluid'>
                    <a href="#" className='navbar-brand'>
                        Number of products {this.calculateSum()}
                    </a>
                <button onClick={this.context.onReset} className='navbar-item btn btn-primary'>reset</button>
                </div>
            </nav>
        );
    }
    calculateSum = ()=>{
        let sum = 0
        this.context.products.forEach(p => {
            sum += p.count
        });
        return sum
    }
}
 
export default Navbar;