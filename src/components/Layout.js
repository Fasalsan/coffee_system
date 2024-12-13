import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './shared/SideBar'
import { HiOutlineUserCircle } from "react-icons/hi2";
import Breadcrumbs from './Breadcrumbs';
import { useNavigate } from 'react-router-dom';

export default function Layout() {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("authToken");
        navigate("/")
    };
    return (
        <>
            <div className='flex'>
                <SideBar />
                <main className='bg-gray-100 w-full'>
                    {/* head */}
                    <div className='bg-gradient-to-t from-[#f5a65d] to-[#ad5400] px-5 py-2  w-full flex justify-between items-center'>
                        <div>
                            <h1 className='text-white text-xl'><Breadcrumbs /></h1>
                        </div>
                        <div>
                            <HiOutlineUserCircle
                                className="text-5xl text-white cursor-pointer"
                                onClick={() => logout()}
                            />
                        </div>
                    </div>
                    <div className='px-8 py-4'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </>

    )
}
