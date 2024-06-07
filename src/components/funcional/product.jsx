import ProductContext from './../context/products';
import { useContext } from 'react';

const Product = ({productname , count , id}) => {
    const productContext = useContext(ProductContext);

    return (
        <div className='bg-light'>
            <span className='m-4 h4'>{productname}</span>
            <span className='m-3 bg-primary align-middle py-2 px-3 text-light rounded'>{format()}</span>
            <button onClick={handeleIncrement} className='m-2 px-3 btn btn-dark btn-outline-success text-light'>+</button>
            <button onClick={handeleDecrement} className='m-2 px-3 btn btn-dark btn-outline-warning text-light'>-</button>
            <button onClick={handeleDelete} className='m-2 btn btn-dark btn-outline-danger text-light'>delete</button>
        </div>
     );
     
    function format(){
        if(count === 0){
            return "zero";
        }else{
            return count
        }
    }
    function handeleIncrement(){
        productContext.onIncrement(id)
    }
    function handeleDecrement(){
        productContext.onDecrement(id)
    }
    function handeleDelete(){
        productContext.onDelete(id)
    }
}
 
export default Product;