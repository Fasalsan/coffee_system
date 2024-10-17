import React from 'react'
import { ProductItem } from '../components/navigation';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";

export default function Products() {

    const handlDelete = (id) => {
        alert(id)
    }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ProductName
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ProductItem && ProductItem.map((item, i) => {
                                return (
                                    <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-100">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.price}$
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className='flex gap-4'>
                                                <RiDeleteBin5Fill
                                                    onClick={() => handlDelete(item.id)}
                                                    className='text-red-600 text-[20px] cursor-pointer'
                                                />
                                                <RiEditFill
                                                    className='text-green-600 text-[20px] cursor-pointer'
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
