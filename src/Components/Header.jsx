import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdMailOutline, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import SideNav from './SideNav';
import { scrollToSection } from '@/utils/helpers';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-main-blue transition ease transform duration-300`
    useEffect(() => {
        const handleResize = () => {
            const isScreenSm = window.innerWidth >= 640
            if (isScreenSm) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className='relative'>
            <nav className="bg-gray-100 text-main-blue border-b py-2 sm:py-5 fixed top-0 bg-opacity-95 z-40 w-full ">
            <SideNav toggleNav={toggleNav} isOpen={isOpen} />
                <div className="container mx-auto flex justify-between items-center px-3 sm:px-6">
                    <div className="flex gap-2 sm:gap-3 text-xl">
                        <a href="tel:+97288554001" className="hover:text-gray-600">
                            <MdPhone className='w-6 h-6' />
                        </a>
                        <Link legacyBehavior href="mailto:shimonbenaim@gmail.com">
                            <a target="_blank" rel="noopener noreferrer">
                                <MdMailOutline className='w-6 h-6' />
                            </a>
                        </Link>
                        <Link href="https://wa.me/9720538888862" className="mr-1 ml-1.5">
                            <FaWhatsapp className='w-6 h-6' />
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:items-center text-center sm:justify-center gap-2 sm:gap-3">
                        <a onClick={() => scrollToSection('services')} className="hover:text-main-blue cursor-pointer">חבילות לימוד</a><span>|</span>
                        <a onClick={() => scrollToSection('testimonials')} className="hover:text-main-blue cursor-pointer">המלצות</a><span>|</span>
                        <a onClick={() => scrollToSection('about')} className="hover:text-main-blue cursor-pointer">קצת עלינו</a><span>|</span>
                        <a onClick={() => scrollToSection('contact')} className="hover:text-main-blue cursor-pointer">צור קשר</a>
                        <Image
                            src='https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711986334/ashdod%20-%20driving%20school/cmrpcs2o0kuo7fk1f32a.png'
                            alt="logo"
                            height={20}
                            width={20}
                            className='rounded-full'
                        />
                    </div>

                    <div className='sm:hidden z-50'>
                        <button
                            className="flex flex-col h-12 w-12 justify-center items-center group select-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div
                                className={`${genericHamburgerLine} ${isOpen
                                    ? "rotate-45 translate-y-2 opacity-70 group-hover:opacity-100"
                                    : "opacity-70 group-hover:opacity-100"
                                    }`}
                            />
                            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"}`} />
                            <div
                                className={`${genericHamburgerLine} ${isOpen
                                    ? "-rotate-45 -translate-y-3 opacity-70 group-hover:opacity-100"
                                    : "opacity-70 group-hover:opacity-100"
                                    }`}
                            />
                        </button>
                    </div>


                </div>
            </nav>
        </header>
    )
}
