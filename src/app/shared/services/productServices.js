export function SortProductDate(response) {
    
    const mapped = response.map((products, i) => {
        return {i, products}
    })
    
    mapped.sort((a,b) => {
        if(a.products.on_sale_date > b.products.on_sale_date){
            return -1
        }
        if(a.products.on_sale_date < b.products.on_sale_date){
            return 1
        }
        return 0
    })
    console.log(mapped)
    return mapped
}