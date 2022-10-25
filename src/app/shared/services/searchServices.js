export const setInput = (state) => {
  try {
    const serializedValue = JSON.stringify(state)
    localStorage.setItem('search', serializedValue)
  } catch (err) {
    // ignore write error
  }
}

export function getInput() {
  try {
    const serializedValue = localStorage.getItem('search')
    if (serializedValue === null) {
      return undefined
    }
    return JSON.parse(serializedValue)
  } catch (err) {
    return undefined
  }
}

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
  try {
    const serializedState = localStorage.getItem('searchValue')
    if (serializedState === null) {
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

export function FilteringSearchProduct(product, filter) {
  let filterProduct = product.slice()
  if (filter.trademark !== "undefined") {
    filterProduct = filterProduct.filter(item => item.trademark.toLowerCase() === filter.trademark.toLowerCase())
  }
  if (filter.requiredAge !== "undefined") {
    filterProduct = filterProduct.filter(item => item.required_age.toString() <= filter.requiredAge)
  }
  if (filter.category !== "undefined") {
    filterProduct = filterProduct.filter(item => item.category.toLowerCase() === filter.category.toLowerCase())
  }
  if (filter.sortProduct !== "undefined" && filter.sortProduct === "news") {
    filterProduct = filterProduct.sort(function (a, b) {
      return a.on_sale_date < b.on_sale_date;
    })
  }
  if (filter.sortProduct !== "undefined" && filter.sortProduct === "sales") {
    filterProduct = filterProduct.sort(function (a, b) {
      return a.ordered < b.ordered;
    })
  }
  if (filter.sortProduct !== "undefined" && filter.sortProduct === "priceAsc") {
    filterProduct = filterProduct.sort(function (a, b) {
      return a.price > b.price;
    })
  }
  if (filter.sortProduct !== "undefined" && filter.sortProduct === "priceDesc") {
    filterProduct = filterProduct.sort(function (a, b) {
      return a.price < b.price;
    })
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


