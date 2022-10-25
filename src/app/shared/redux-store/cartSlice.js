import {
    createSlice
} from "@reduxjs/toolkit";
import HandleQuantityProductInCart from "../components/form-and-success-components/HandleQuantityProductInCart";
import handleQuantityProductWarning from "../components/form-and-success-components/handleQuantityProductWarning";
import handleSessionStorageSuccess from "../components/form-and-success-components/HandleStorageSuccess";
import {
    AddeOneProductQuantity,
    AddManyProductQuantity,
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

        detailIncrement: (state, action) => {
            
            if(action.payload.quantity < 5 ){
                state.inCart[action.payload.index].quantity = action.payload.quantity
                AddManyProductQuantity(action.payload)
                let message = `Vous avez maintenant ${state.inCart[action.payload.index].quantity} ${state.inCart[action.payload.index].product_name} dans votre panier`
                HandleQuantityProductInCart(message)
            }
            else {
                state.inCart[action.payload.index].quantity = 5
                AddManyProductQuantity(action.payload)
                let message = "la quantité de l'article ne peut pas être supérieur à 5"
                handleQuantityProductWarning(message)
                
            }
        },

        increment: (state, action) => {
            if (state.inCart[action.payload].quantity < 5) {
                state.inCart[action.payload].quantity++
                AddeOneProductQuantity(action.payload)
                let message = `Vous avez maintenant ${state.inCart[action.payload].quantity} ${state.inCart[action.payload].product_name} dans votre panier`
                HandleQuantityProductInCart(message)
            } 
            else if (state.inCart[action.payload].quantity === 5){
                let message = `vous avez atteint la quantité maximum autorisé pour ${state.inCart[action.payload].product_name} dans votre panier`
                handleQuantityProductWarning(message)
            }
            else if(state.inCart[action.payload].quantity + action.payload.quantity > 5){
                let message = `la quantité maximum autorisé pour ${state.inCart[action.payload].product_name} dans votre panier est de 5`
                handleQuantityProductWarning(message)
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
                let message = `Vous avez maintenant ${state.inCart[action.payload].quantity} articles du produit ${state.inCart[action.payload].product_name}`
                HandleQuantityProductInCart(message)
            } else {
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

        emptyCart:(state, action) => {
            state.inCart = getUserCart()
        }
    }
})




export const {
    detailIncrement,
    increment,
    decrement,
    setInCart,
    removeInCart,
    AddToCart,
    emptyCart
} = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;
