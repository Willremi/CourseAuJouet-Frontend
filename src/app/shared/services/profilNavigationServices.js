export const setValueMenu = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('menuValue', serializedState)
    }
    catch (err) {
        // ignore write error
    } 
    
}

export function getValueMenu() {
    try{
        const serializedState = localStorage.getItem('menuValue')
        if(serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
      }
      catch (err) {
          return undefined
      }
}