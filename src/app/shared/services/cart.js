export const setUserCart = (state) => {
    try {
        let serializedState = sessionStorage.getItem('userCart')
        if (serializedState === null) {
            try {
                serializedState = JSON.stringify([state]);
                sessionStorage.setItem('userCart', serializedState)
            } catch (err) {
                // ignore write error
            }
        } else {
            try {
                const addProduct = JSON.parse(serializedState)
                addProduct.push(state)
                serializedState = JSON.stringify(addProduct)
                sessionStorage.setItem('userCart', serializedState)
            } catch (err) {
                // ignore write error
            }
        }
    } catch (err) {
        // ignore write error
    }
}

export function RemoveOneProductInCart(productindex) {

    try {
        let serializedState = sessionStorage.getItem('userCart')
        if (serializedState === null) {
            return undefined
        } else {
            let TemporaryArray = []
            serializedState = JSON.parse(serializedState)
            serializedState.map((product, index) => {
                if (index === productindex)
                  return  console.log("Vous avez retiré " + product.product_name + " de votre panier")
                else {
                   return TemporaryArray.push(product)
                }
            })
            serializedState = JSON.stringify(TemporaryArray)
            sessionStorage.setItem('userCart', serializedState)
        }
    } catch (err) {
        return undefined
    }
}

export function getUserCart() {
    try {
        const serializedState = sessionStorage.getItem('userCart')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export function AddeOneProductQuantity(productindex) {

    try {
        let serializedState = sessionStorage.getItem('userCart')
        if (serializedState === null) {
            return undefined
        } else {
            let TemporaryArray = []
            serializedState = JSON.parse(serializedState)
            serializedState.map((product, index) => {
                if (index === productindex){
                    product.quantity = product.quantity + 1
                      console.log('modifier', product.quantity)
                return TemporaryArray.push(product)
                }
                  
                else {
                    console.log('pas modifier')
                   return TemporaryArray.push(product)
                }
            })
            serializedState = JSON.stringify(TemporaryArray)
            sessionStorage.setItem('userCart', serializedState)
        }
    } catch (err) {
        return undefined
    }
}

export function deleteOneProductQuantity(productindex) {

    try {
        let serializedState = sessionStorage.getItem('userCart')
        if (serializedState === null) {
            return undefined
        } else {
            let TemporaryArray = []
            serializedState = JSON.parse(serializedState)
            serializedState.map((product, index) => {
                if (index === productindex){
                    product.quantity = product.quantity - 1
                      console.log('modifier', product.quantity)
                return TemporaryArray.push(product)
                }
                  
                else {
                    console.log('pas modifier')
                   return TemporaryArray.push(product)
                }
            })
            serializedState = JSON.stringify(TemporaryArray)
            sessionStorage.setItem('userCart', serializedState)
        }
    } catch (err) {
        return undefined
    }
}

export function Pricing(productList, Delivery) {
    let calculating = {
        TotalPrice: 0,
        taxes: 0,
        Delivery: 0
    }

    switch (Delivery) {
        case 'Magasin':
            calculating.Delivery = 0
            break
        case 'Relais':
            calculating.Delivery = 0
            break
        case 'Domicile':
            calculating.Delivery = 350
            break
        default:
            return calculating.Delivery = "Gratuit";
    }

    if (productList)
        productList.map((p) => {
            calculating.TotalPrice = calculating.TotalPrice + (p.price * p.quantity)
            calculating.taxes = calculating.taxes + (p.price * p.quantity * 0.20)
            return null
        })

    return calculating

}
