import React, { useContext } from 'react';
import ImageContext from '../../context/ImageContext';
import './cart.css'

import { useSelector,useDispatch } from 'react-redux';


// we are importing useselector and usedispatch because we want the add to cart functionality
const Cartpage = ({ product }) => {
    product.quantity = 1;
       // using the useSelector hook to get the state of cart
       const cart = useSelector((state) => state.CartReducer);
         console.log(cart);
       // to dispatch the action ;
    const dispatch = useDispatch();
    function handleSubmit(product) {
        console.log('item pe click hua');
        // action creator ban gya or dispatch bhi hogya 
        // isliye action creator alag se nhi banaya
        dispatch({
            type: "add",
            payload:product
        })
    }

    return (
        <div className='cart'>
            <div className='image'>
                <img src={process.env.PUBLIC_URL + "./images/images.jpg"} alt="" />
            </div>
            <div className='price'>Rs{product.price}</div>
            <div className='description'>{product.description}</div>

            {/* onclick event and dispatching the action with usedispatch */}
            <button className='add' onClick={()=>handleSubmit(product)}>ADD TO CART</button>
            <button >View Product</button>
        </div>
    );
}

export default Cartpage;
