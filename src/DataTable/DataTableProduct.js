import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import Modal from "../components/Modal";

const DataTableProduct = ({ data, itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
    // Step 3: Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Step 4: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form data submission (e.g., log or send to server)
        console.log(formData);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get the data for the current page
    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto">

            <div className='flex justify-between items-center bg-white px-4 py-4 mb-4 shadow-md'>
                <input type="text"
                    placeholder='Search By Name'
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    className='border border-[#f5a65d] w-[25%] px-4 py-2 focus:outline-none rounded-lg'
                />

                <button
                    onClick={openModal}
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
                            currentData && currentData.map((item, i) => {
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
                                                    // onClick={() => handlDelete(item.id)}
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

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-center">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-1 border border-gray-300 rounded-lg ${currentPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-white hover:bg-gray-200"
                        }`}
                >
                    Previous
                </button>

                {/* Generate page numbers dynamically */}
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 mx-1 border border-gray-300 rounded-lg ${currentPage === page
                                ? "bg-blue-500 text-white"
                                : "bg-white hover:bg-gray-200"
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-1 border border-gray-300 rounded-lg ${currentPage === totalPages
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-white hover:bg-gray-200"
                        }`}
                >
                    Next
                </button>
            </div>



            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-lg font-bold mb-4">Create User</h2>
                <div className='flex flex-col gap-3'>
                    {/* content */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-2">
                        <input
                            type="text"
                            placeholder='userName'
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full px-3 py-2.5 border border-gray-300 focus:border-[#f5a65d] focus:ring-2 focus:ring-[#f5a65d] hover:outline-none rounded-lg'
                        />
                        <input
                            type="text"
                            placeholder='phone'
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className='w-full px-3 py-2.5 border border-gray-300 focus:border-[#f5a65d] focus:ring-2 focus:ring-[#f5a65d] hover:outline-none rounded-lg'
                        />
                        <input
                            type="text"
                            placeholder='email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full px-3 py-2.5 border border-gray-300 focus:border-[#f5a65d] focus:ring-2 focus:ring-[#f5a65d] hover:outline-none rounded-lg'
                        />
                    </form>

                    {/* button */}
                    <div className='flex justify-end gap-2'>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-3 py-2 rounded-lg">
                            Save
                        </button>
                        <button
                            className="bg-red-500 text-white px-3 py-2 rounded-lg"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DataTableProduct;