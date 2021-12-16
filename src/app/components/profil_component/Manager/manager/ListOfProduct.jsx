import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../../api/backend/product'
import { Icon } from '@iconify/react';

const ListOfProduct = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        getAllProducts()
        .then((res) => setProduct(res.data.products))
        .catch((error) => console.log(error))
    }, [])
    console.log(product)
    return (
        <>
            <h2 className="uppercase font-semibold text-xl text-nav-blue">Liste des produits</h2>
            <table className='w-full bg-white font-semibold'>
                <thead >
                    <tr className='flex text-left font-semibold w-full'>
                        <th className='flex w-5/12 py-1 px-5'>Nominations</th>
                        <th className='flex w-3/12 ml-3'>Références</th>
                        <th className='flex w-1/12'>Prix</th>
                        <th className='flex w-3/12'>Date</th>
                        <th className='flex w-3/12'>Stock</th>
                        <th className='flex w-2/12'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                     {product.map((product) => 
            
                        <tr className='flex justify-between w-full'>
                            <td className='flex w-5/12 py-1 px-5 truncate'>{product.product_name}</td>
                            <td className='flex w-3/12 ml-3'>{product._id}</td>
                            <td className='flex w-1/12'>{product.price / 100}€</td>
                            <td className='flex w-3/12'>{product.on_sale_date}</td>
                            <td className='flex w-3/12'><input type="text" /> <button>change</button></td>
                            <td className='flex w-2/12'>
                                <button>
                                <Icon icon="carbon:change-catalog" />
                                </button>
                                <button>
                                <Icon icon="bx:bxs-trash" />
                                </button>
                            </td>
                        </tr>
            
            )}
                </tbody>
           
            </table>
        </>
    )
}

export default ListOfProduct
