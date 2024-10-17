import { useState } from 'react';
import { DataCategories } from '../components/navigation';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";




export default function Categories() {
    const [search, setSearch] = useState("");

    const [data] = useState([
        { id: 1, name: 'Espresso', price: '$3.00' },
        { id: 2, name: 'Latte', price: '$4.50' },
        { id: 3, name: 'Cappuccino', price: '$4.00' },
        { id: 4, name: 'Mocha', price: '$4.75' },
        { id: 5, name: 'Americano', price: '$3.25' }
    ]);


    // Filter the data based on the search term
    const filteredData = data.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase()) // Use optional chaining (?.) to check if 'name' exists
    );



    // const handlDelete = (id) => {
    //     alert(id);
    // }
    return (
        <div>

            <div className='flex justify-between items-center bg-white px-4 py-4 mb-4 shadow-md'>
                <input type="text"
                    placeholder='Search By Name'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border border-[#f5a65d] w-[25%] px-4 py-2 focus:outline-none rounded-lg'
                />

                <button
                    className='bg-[#f5a65d] px-12 py-2 rounded-lg text-white'
                >Add+</button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CategoryName
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item.id}
                                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.id}</td>
                                    <td>{item.name || 'N/A'}</td> {/* Display 'N/A' if name is missing */}
                                    <td className="px-6 py-4">
                                        <div className='flex gap-4'>
                                            <RiDeleteBin5Fill
                                                // onClick={() => handlDelete(item.id)}
                                                className='text-red-600 text-[20px] cursor-pointer'
                                            />
                                            <RiEditFill
                                                className='text-green-600 text-[20px] cursor-pointer'
                                            />

                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            // <tr className='flex justify-center items-center '>
                            //     <td colSpan="3">No data found</td>
                            // </tr>
                            <div className='flex justify-center items-center w-full p-12'>
                                <h1 className='text-red-600 text-3xl'> No data found</h1>
                            </div>
                        )}

                    </tbody>
                </table>

                
            </div>
        </div>
    )
}
