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

    return (
        <>
            <h2 className="uppercase font-semibold text-xl text-nav-blue py-2 ml-1">Liste des produits</h2>
            <table className=' w-full '>
                <thead>
                    <tr className='flex text-left font-semibold w-full border-2 border-gray-400 bg-white rounded-full'>
                        <th className='flex w-5/12 py-1 px-5'>Nominations</th>
                        <th className='flex w-3/12 ml-5'>Références</th>
                        <th className='flex w-3/12 '>Date</th>
                        <th className='flex w-1/12 '>Prix</th>
                        <th className='flex w-2/12 '>Stock</th>
                        <th className='flex w-1/12 '>Actions</th>
                    </tr>
                </thead>
                <tbody className=' bg-white'>
                     {product.map((product, index) => 
            
                        <tr key={index} className='flex justify-between w-full items-center first:rounded-t-xl first:border-t-2 last:rounded-b-xl last:border-b-2 border-r-2 border-l-2 border-gray-400'>
                            <td className='flex w-5/12 py-1 pl-5 truncate'>{product.product_name}</td>
                            <td className='flex w-3/12 ml-5'>{product._id}</td>
                            <td className='flex w-3/12 '>{product.on_sale_date}</td>
                            <td className='flex w-1/12 '>{product.price / 100}€</td>
                            <td className='flex w-2/12 '><input type="text" placeholder={product.stock} className='w-2/3 h-8'/>
                            <button>
                            <Icon icon="dashicons:update-alt" className='scale-200 text-nav-blue mx-3'/>
                            </button></td>
                            <td className='flex flex-row justify-around w-1/12'>
                                <button>
                                <Icon icon="carbon:change-catalog" className='scale-150 text-nav-blue' />
                                </button>
                                <button>
                                <Icon icon="bx:bxs-trash" className='scale-150 text-nav-blue' />
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
