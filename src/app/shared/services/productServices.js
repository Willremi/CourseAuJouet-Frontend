export function SortProductDate(response, days) {

    /** 
     * This function is used to sort products according to their online date (decreasing)
     * @param {object} response: product data to be sorted
     * @param {number} days:  Number of days before removing product from novelties
     * @author Mathieu
     **/

    const presentTime = new Date()
    const listOfProduct = [] //constant that will record products that are less than 30 minutes

    response.map((products) => {

        const sortProduct = new Date(products.on_sale_date) // Addition to this constant the date the product was put online
        sortProduct.setDate(sortProduct.getDate() + days) // And add numbers of days
        if (sortProduct > presentTime) { // if sortProduct is older than presentTime 
            return listOfProduct.push({ //So we'll add the product in the array listOfProduct
                products
            })
        } else {
            return null
        }


    })

    listOfProduct.sort((a, b) => {
        if (a.products.on_sale_date > b.products.on_sale_date) {
            return -1
        }
        if (a.products.on_sale_date < b.products.on_sale_date) {
            return 1
        }
        return 0
    })
    return listOfProduct
}

/**
 * function that checks the expiration date of a product.
 * Returns true if the product is still valid and false if it has expired
 * @param {Date} products
 * @param {Number} days (before expiration)
 * @returns 
 */

export function expirationProductDate(products, days) {
    const expirationDate = new Date(products)
    expirationDate.setDate(expirationDate.getDate() + days)
    const today = Date.now()

    if (expirationDate > today) {
        return true
    } else {
        return false
    }
}

const PRODUCT_STATE = "product"
/**
 * @param {object} state
 * To save the state of product in localstorage
 */
export function setProductState(state){
    localStorage.setItem(PRODUCT_STATE,  JSON.stringify(state))
}

/**
 * To get the state of product in localstorage
 */
export function getProductState(){
    return JSON.parse(localStorage.getItem(PRODUCT_STATE))
}

/**
 * To delete the state of product in localstorage
 */
export function deleteProductState(){
    localStorage.removeItem(PRODUCT_STATE)
}
