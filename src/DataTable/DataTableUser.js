import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import Modal from "../components/Modal";
import Propconfirm from "../components/Propconfirm";
import request from "../util/helper";
import axios from "axios";
import { CirclesWithBar } from "react-loader-spinner";
import Loading from "../components/shared/Loading";

const DataTableUser = ({ data, itemsPerPage, reloadNewUser }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [propconfirm, setPropconfirm] = useState(false);
    const [userID, setUserID] = useState()
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    // const CreateUser = async () => {
    //     try {
    //         await request(`User/Post`, "post", { formData })
    //         newUser();
    //         //   setPropconfirm(false);
    //     } catch (err) {

    //     }
    // }

    const RemoveUser = async () => {
        const id = userID
        setLoading(true);
        setPropconfirm(false);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        try {
            await request(`User/Delete?id=${id}`, "delete",)
            reloadNewUser();
            setLoading(false);
        } catch (err) {

        }
    }

    // handlOpenPropconfirm
    const handlOpenPropconfirm = (id) => {
        setUserID(id)
        setPropconfirm(true)
    }

    // DeleteUser
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        try {
            await axios.post("https://localhost:7014/api/User/Post", formData);
            reloadNewUser();
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
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

    // Filter the data based on the search term
    const filteredData = currentData.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase()) // Use optional chaining (?.) to check if 'name' exists
    );

    return (
        <div className="container mx-auto">
            {loading && (<Loading />)}
            <div className='flex justify-between items-center bg-white px-4 py-4 mb-4 shadow-md'>
                <input type="text"
                    placeholder='Search By Name'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.length > 0 ? (
                                currentData.map((item, i) => (
                                    <tr key={item.id}
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-100"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td className="px-6 py-4">
                                            <div className='flex gap-4'>
                                                <RiDeleteBin5Fill
                                                    onClick={() => handlOpenPropconfirm(item.id)}
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
                                <div className='flex justify-center items-center w-full p-12'>
                                    <h1 className='text-red-600 text-3xl'> No data found</h1>
                                </div>
                            )
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


            {/* Propconfirm */}
            <Propconfirm isOpenProp={propconfirm}>
                <div className="flex flex-col gap-7">
                    <p>Are you Sure to delete this task!</p>

                    <div className="flex justify-end gap-2">
                        <button
                            onClick={RemoveUser}
                            className="bg-blue-600 px-9 py-2
                            text-white rounded-lg">Yes</button>
                        <button
                            onClick={() => setPropconfirm(false)}
                            className="bg-red-600 px-9 py-2 text-white rounded-lg">No</button>
                    </div>
                </div>
            </Propconfirm>

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
                            placeholder='address'
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className='w-full px-3 py-2.5 border border-gray-300 focus:border-[#f5a65d] focus:ring-2 focus:ring-[#f5a65d] hover:outline-none rounded-lg'
                        />

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
                    </form>


                </div>
            </Modal>
        </div>
    );
};

export default DataTableUser;