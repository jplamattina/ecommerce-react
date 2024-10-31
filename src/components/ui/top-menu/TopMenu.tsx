import { titleFont } from "@/config/fonts"
import Link from "next/link"

import { IoSearchOutline, IoCartOutline } from "react-icons/io5"

export const TopMenu = () => {
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
        {/*Logo*/}
        <div>
            <Link
                href="/"
            >
                <span className={`${titleFont.className} anitaliased font-bold`}>
                    EMPRESA PEPE
                </span>
                <span> | Shop</span>
            </Link>
        </div>
        {/* center menu */}
        <div className="hidden sm:block">
            <Link className="m-2 p2 rounded transition-all hover:bg-gray-100" href="/category/mens">Mens</Link>
            <Link className="m-2 p2 rounded transition-all hover:bg-gray-100" href="/category/womans">womans</Link>
            <Link className="m-2 p2 rounded transition-all hover:bg-gray-100" href="/category/kids">kids</Link>
        </div>
        {/*Search, Cart, Menu*/}
        <div className="flex items-center">

        <Link href="/search" className="mx-2">
            <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
            <div className="relative">
                <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                3
                </span>
                <IoCartOutline className="w-5 h-5" />
            </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
            Menú
        </button>

        </div>

    </nav>
  )
}
