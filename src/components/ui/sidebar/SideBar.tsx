'use client';
import Link from "next/link";
import { useUIStore } from "@/store";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import clsx from "clsx";


export const SideBar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);

  return (
    <div>
        {/* background black*/}
        {
            isSideMenuOpen &&  (
                <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
            )
        }

        {/* blur */}
        {
            isSideMenuOpen && (
                <div 
                    onClick={ () => closeSideMenu() }
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" 
                />
            )
        }
        
        {/* sideMenu */}
        <nav
            className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2x1 transform transition-all duration-300",
                    {
                        "translate-x-full" : !isSideMenuOpen,
                    }
                )
            }>
                <IoCloseOutline 
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={ () => closeSideMenu() }
                />
                {/* input de busqueda */}
                <div className="relative mt-14">
                    <IoSearchOutline size={ 20 } className="absolute top-2 left-2"/>
                    <input 
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                    >
                    </input>
                </div>
                {/* menu */}
                <Link 
                    href="/"
                    className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoPersonOutline 
                        size={ 20 }
                    />
                    <span className="ml-3 text-ml">Profile</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoTicketOutline 
                        size={ 20 }
                    />
                    <span className="ml-3 text-ml">Orders</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoLogInOutline 
                        size={ 20 }
                    />
                    <span className="ml-3 text-ml">Sign in</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoLogOutOutline 
                        size={ 20 }
                    />
                    <span className="ml-3 text-ml">Exit</span>
                </Link>
                {/* Line separator */}
                <div className="w-full h-px bg-gray-200 my-10 rounded" />
                <Link 
                    href="/"
                    className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoShirtOutline 
                        size={ 20 }
                    />
                    <span className="ml-3 text-ml">Products</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoTicketOutline 
                        size={ 20 }
                    />
                    <span className="ml-3 text-ml">Orders</span>
                </Link>
                <Link 
                    href="/"
                    className="flex items-center mt-8 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoPeopleOutline 
                        size={ 20 }
                    />
                    <span className="ml-3 text-ml">Users</span>
                </Link>
        </nav>
    </div>
  )
}
