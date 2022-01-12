import {
    createSlice
} from "@reduxjs/toolkit";
import handleQuantityProductWarning from "../components/form-and-success-components/handleQuantityProductWarning";
import handleSessionStorageSuccess from "../components/form-and-success-components/HandleStorageSuccess";
import {
    AddeOneProductQuantity,
    deleteOneProductQuantity,
    RemoveOneProductInCart
} from "../services/cart";
import {
    setUserCart,
    getUserCart
} from './../services/cart';


/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */

const initialState = {
    inCart: getUserCart()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            if (state.inCart[action.payload].quantity < 5) {
                state.inCart[action.payload].quantity++
                console.log(state.inCart[action.payload].quantity)
                AddeOneProductQuantity(action.payload)
            }
            else {
                let message = "la quantité de l'article ne peut pas être supérieur à 5"
                handleQuantityProductWarning(message)
                }
        },
        decrement: (state, action) => {
            if (state.inCart[action.payload].quantity > 1) {
                state.inCart[action.payload].quantity--
                deleteOneProductQuantity(action.payload)
            }
            else {
            let message = "la quantité de l'article ne peut pas être inférieur à 1"
            handleQuantityProductWarning(message)
            }
        },
        setInCart: (state, action) => {
            state.inCart = action.payload
        },
        removeInCart: (state, action) => {
            let temporaryArray = []
            state.inCart.map((product, index) => {
                if (index === action.payload) {

                } else {
                    temporaryArray.push(product)
                }
                return temporaryArray
            })
            RemoveOneProductInCart(action.payload)
            state.inCart = temporaryArray
        },

        AddToCart: (state, action) => {
            
            let addQuantityToProduct = {
                ...action.payload,
                quantity: 1
            }
            
            if (state.inCart === undefined) {
                state.inCart = [addQuantityToProduct]
            } else {
                state.inCart.push(addQuantityToProduct)
            }
            setUserCart(addQuantityToProduct)
            let message = "Vous avez ajouté " + action.payload.product_name + " dans votre panier"
            handleSessionStorageSuccess(message)
        },

    }
})




export const {
    increment,
    decrement,
    setInCart,
    removeInCart,
    AddToCart,
} = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;
