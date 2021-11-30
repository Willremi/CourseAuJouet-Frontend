export const setSearch = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    }
    catch (err) {
        // ignore write error
    } 
    
}

export function getSearch() {
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
      }
      catch (err) {
          return undefined
      }
}

export function removeSearch() {
    localStorage.removeItem('state')
}



