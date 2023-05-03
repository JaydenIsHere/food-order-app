
import { useReducer } from "react"
import CartContext from "./CartContext"

const defaultCartReducer = {
    items:[],
    totalAmount:0
}


const cartReducer = (state,action) =>{

    if(action.type === 'ADD_ITEM'){
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
        let updatedItems
        if(state.items.find(item => item.id === action.payload.id)){
            updatedItems = state.items.map((item) => item.id === action.payload.id ? {...item,amount:item.amount + action.payload.amount}: item)
        }else{
            updatedItems = [...state.items,action.payload]
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE_ITEM'){

        const existingItem = state.items.find((item) => item.id === action.payload);
        const updatedTotalAmount = state.totalAmount - existingItem.price; //when click minus btn, off the item price
        let updatedItems;
        if(existingItem.amount === 1){//if the item quantity is equals to 1 then directly remove item
            updatedItems = state.items.filter((item) => item.id !== action.payload)
        }else{//if not minus the item quantity by 1
            const updatedItem = {...existingItem,amount:existingItem.amount - 1}
            updatedItems = [...state.items,updatedItem]
        }

        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
return defaultCartReducer
}

const CartProvider = (props) =>{

    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartReducer)
    const addToCarthandler = (item) =>{
  dispatchCart({type:'ADD_ITEM',payload:item})
    }
    const removeitemFromCarthandler = (id) =>{
        dispatchCart({type:'REMOVE_ITEM',payload:id})
    }
    const cartContext = {
        items:cartState.items,//for whole cart
        totalAmount:cartState.totalAmount,//for cart badge number
        addItem:addToCarthandler,// add item
        removeItem:removeitemFromCarthandler//remove item
    }

    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider