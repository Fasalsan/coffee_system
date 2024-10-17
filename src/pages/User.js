import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import { UserData } from "../components/navigation";
// DataTableWithPagination component
const DataTableWithPagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="container mx-auto mt-8">
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
            {
              currentData.map((item, i) => (
                <tr key={item.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-100"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{i + 1}</td>
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
    </div>
  );
};


// Example data and rendering
const User = () => {
  return <DataTableWithPagination data={UserData} itemsPerPage={8} />;
};

export default User;
