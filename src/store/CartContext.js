
import React from 'react'

//initial context,We need to use this provider to wrap component in order to useContext
const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item) => {},
    removeItem:(id) => {}
})

export default CartContext