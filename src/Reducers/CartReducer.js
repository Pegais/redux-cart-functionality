
const intialCart = [];
const CartReducer = (cart=intialCart,actions) => {
    if (actions.type === "add") {
        let tempCart = cart.filter((ele) => ele.id == actions.payload.id)
        if (tempCart<1) {
            return [...cart,actions.payload]
        } else {
            return cart;
        }
    } if (actions.type === "REMOVE") {
        return cart.filter((ele)=>ele.id !==actions.payload.id)

    } if (actions.type === "INCREMENT") {
        let tempCart = cart.map((ele) => {
            if (ele.id === actions.payload.id) {
                if (ele.quantity < actions.payload.openSpots) {
                    return {...ele,quantity:ele.quantity+1}
                }
            }
            return ele;
        })
        return tempCart;
        
    }if (actions.type === "DECREMENT") {
        let tempCart = cart.map((ele) => {
            if (ele.id === actions.payload.id) {
                if (ele.quantity >0) {
                    return {...ele,quantity:ele.quantity-1}
                }
            }
            return ele;
        })
        return tempCart;
        
    }
    else {
        return cart;
   }
}
export default CartReducer;