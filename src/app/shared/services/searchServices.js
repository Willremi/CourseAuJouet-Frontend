export const setSearch = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('searchValue', serializedState)
    }
    catch (err) {
        // ignore write error
    } 
    
}

export function getSearch() {
    try{
        const serializedState = localStorage.getItem('searchValue')
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
    localStorage.removeItem('searchValue')
}

export function FilteringSearchProduct (product, filter) {
    let filterProduct = product.slice()
    if(filter.trademark !== "undefined"){
    filterProduct = filterProduct.filter(item => item.trademark.toLowerCase() === filter.trademark.toLowerCase())
  }
  if(filter.requiredAge !== "undefined"){
   filterProduct = filterProduct.filter(item => item.required_age.toString() === filter.requiredAge)
  }
  if(filter.category !== "undefined"){
    filterProduct = filterProduct.filter(item => item.category.toLowerCase() === filter.category.toLowerCase())
  }
  return filterProduct
  }


  export function noDoubleDataFilter(product) {
    var TrademarkFilter = [];
    var CategoryFilter = [];
    var AgeFilter = [];
    product.forEach((getUniqueData) => {
      if (!TrademarkFilter.includes(getUniqueData.trademark)) {
        TrademarkFilter.push(getUniqueData.trademark);
      }

      if (!CategoryFilter.includes(getUniqueData.category)) {
        CategoryFilter.push(getUniqueData.category);
      }

      if (!AgeFilter.includes(getUniqueData.required_age)) {
        AgeFilter.push(getUniqueData.required_age);
      }
    });
    return { TrademarkFilter, CategoryFilter, AgeFilter };
  }


