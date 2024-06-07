import { Component } from 'react';
import ProductContext from './../context/products'

class Product extends Component {
    static contextType = ProductContext

    render() { 
        const {productname} = this.props
        return (
            <div className='bg-light'>
                <span className='m-4 h4'>{productname}</span>
                <span className='m-3 bg-primary align-middle py-2 px-3 text-light rounded'>{this.format()}</span>
                <button onClick={this.handeleIncrement} className='m-2 px-3 btn btn-dark btn-outline-success text-light'>+</button>
                <button onClick={this.handeleDecrement} className='m-2 px-3 btn btn-dark btn-outline-warning text-light'>-</button>
                <button onClick={this.handeleDelete} className='m-2 btn btn-dark btn-outline-danger text-light'>delete</button>
            </div>
        );
    }
    format(){
        if(this.props.count === 0){
            return "zero";
        }else{
            return this.props.count
        }
    }
    handeleIncrement = () => {
        this.context.onIncrement(this.props.id)
    }
    handeleDecrement = () => {
        this.context.onDecrement(this.props.id)
    }
    handeleDelete = () => {
        this.context.onDelete(this.props.id)
    }
}
 
export default Product;