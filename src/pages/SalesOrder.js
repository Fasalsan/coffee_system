import { useEffect, useState } from 'react';
import request from '../util/helper';

import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";

export default function SalesOrder() {
    const [salesOrder, setSalesOrder] = useState([]);

    useEffect(() => {
        getSalesOrder();
    }, []);

    const getSalesOrder = async () => {
        const response = await request("SalesOrder/GetAll", "get")
        setSalesOrder(response)
        console.log(response)
    }
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CreatBy
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Customer
                            </th>
                            <th scope="col" className="px-6 py-3">
                                OrderDate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                TotalAmount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            salesOrder && salesOrder.map((item, i) => (
                                <tr key={item.orderId}
                                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{i + 1}</td>
                                    <td>{item.createdBy}</td>
                                    <td>{item.customerName}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.totalAmount}</td>
                                    <td className="px-6 py-4">
                                        <div className='flex gap-4'>
                                            <RiDeleteBin5Fill
                                                // onClick={() => handlOpenPropconfirm(item.id)}
                                                onClick={() => alert(item.orderId)}
                                                className='text-red-600 text-[20px] cursor-pointer'
                                            />
                                            <RiEditFill
                                                // onClick={() => handleEdits(item)}
                                                className='text-green-600 text-[20px] cursor-pointer'
                                            />
                                            <IoEye
                                                className='text-gray-600 text-[20px] cursor-pointer'
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}
