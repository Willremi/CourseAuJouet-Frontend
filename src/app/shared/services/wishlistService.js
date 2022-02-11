export const setLocalWishlist = (state) => {
    try {
        let serializedState = localStorage.getItem('localWishlist')
        if (serializedState === null) {
            try {
                serializedState = JSON.stringify([state]);
                localStorage.setItem('localWishlist', serializedState)
            } catch (err) {
                // ignore write error
            }
        } else {
            try {
                const addToLocalWishlist = JSON.parse(serializedState)
                addToLocalWishlist.push(state)
                serializedState = JSON.stringify(addToLocalWishlist)
                localStorage.setItem('localWishlist', serializedState)
            } catch (err) {
                // ignore write error
            }
        }
    } catch (err) {
        // ignore write error
    }
}

export const removeOneInLocalWishlist = (productToRemove) => {
    try {
        let serializedState = localStorage.getItem('localWishlist')
        if (serializedState === null) {
            return undefined
        } else {
            serializedState = JSON.parse(serializedState)
            let filtered = serializedState.filter(element => element._id !== productToRemove._id)
            serializedState = JSON.stringify(filtered)
            localStorage.setItem('localWishlist', serializedState)
        }
    } catch (err) {
        return undefined
    }
}

export const getLocalWishlist = () => {
    try {
        const serializedState = localStorage.getItem('localWishlist')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}