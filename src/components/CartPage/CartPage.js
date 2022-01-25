import React from 'react';
import './product.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CartPage = () => {
    // using the useSelector hook to get the state of cart
    const cart = useSelector((state) => state.CartReducer);
    console.log(cart);
    // to dispatch the action ;
    const dispatch = useDispatch();
    return (
        <div>
            <Link to="/"> <div>BACK</div></Link>
            <div className='container'>
                {
                    cart.map((product) => {
                        return (
                            <div className='cart'>

                                <div className='image'>
                                    <img src={process.env.PUBLIC_URL + "./images/images.jpg"} alt="" />
                                </div>
                                <div className='price'>Rs{product.price}</div>
                                <div className='description'>{product.description}</div>
                                <div className='inc-dec'>
                                    <button className='plus' onClick={() => dispatch({ type: "INCREMENT", payload:product})}>+</button>
                                    <span>{product.quantity}</span>
                                    <button className='minus'onClick={() => dispatch({ type: "DECREMENT", payload:product})}>-</button>
                                </div>
                                <p>Amount:{product.price * product.quantity}</p>
                                <button onClick={()=>dispatch({type:"REMOVE",payload:product})}>remove</button>
                            </div>


                        )
                    })
                }

            </div>
        </div>
    );
}

export default CartPage;
