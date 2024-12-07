import React from 'react'
import { Link } from 'react-router-dom';
import { sidebar } from '../navigation';

export default function SideBar() {
    return (
        <div className='bg-gradient-to-l from-[#f5a65d] to-[#ad5400] w-[15%] h-screen text-white'>
            <div className='pb-7 text-2xl font-bold p-5 border-b border-[#ad5400]'>
                {/* <a href="/dashboard"> <h1>QV_STORE</h1></a> */}
                <Link to={"/dashboard"}>My_Store</Link>
            </div>
            <nav>
                <ul className='flex flex-col text-[16px]'>
                    {
                        sidebar && sidebar.map((item, i) => {
                            return (
                                <Link key={i} to={item.path} className='hover:bg-[#ad5400] p-4 text-[18px]'>
                                    {item.label}
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}
