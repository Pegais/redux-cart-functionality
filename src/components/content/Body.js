import React, { useContext } from 'react';
import DataContext from '../../context/ImageContext';
import Cartpage from '../cart-content/CartPage';
import './body.css';


const Body = () => {

 
    const Data = useContext(DataContext)
    console.log(Data);
    return (
        <div className='parent'>
            <div className='body'>
                {
                    Data.map((product) => {
                        return (
                            
                            <Cartpage key={product.id} product={product}/>
                        )
                    })
                }
                

            </div>
        </div>
    );
}

export default Body;
