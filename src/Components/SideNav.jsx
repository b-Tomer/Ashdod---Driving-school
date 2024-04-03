"use client"
import { scrollToSection } from '@/utils/helpers';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';

const SideNav = ({ toggleNav, isOpen }) => {

    return (
        <>
            {isOpen && (
                <div
                    onClick={toggleNav}
                    className="fixed inset-0 bg-gray-800 opacity-50 z-50"
                />
            )}

            <aside
                dir='rtl'
                className={` fixed inset-y-0 right-0 w-64 bg-white z-50 transform duration-500 transition-transform ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='flex flex-col justify-between h-full pb-5'>
                    <div className="px-3 pt-20 flex flex-col gap-1 select-none text-lg ">
                        <a onClick={() => {
                            scrollToSection('services')
                            toggleNav()
                        }} className="hover:bg-gray-100 py-1.5 pr-4">חבילות לימוד</a>
                        <a onClick={() => {
                            scrollToSection('testimonials')
                            toggleNav()
                        }} className="hover:bg-gray-100 py-1.5 pr-4">המלצות</a>
                        <a onClick={() => {
                            scrollToSection('about')
                            toggleNav()
                        }} className="hover:bg-gray-100 py-1.5 pr-4">קצת עלינו</a>
                        <a onClick={() => {
                            scrollToSection('contact')
                            toggleNav()
                        }} className="hover:bg-gray-100 py-1.5 pr-4">צור קשר</a>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <h6 className='text-gray-700 text-sm'>יצירת קשר:</h6>
                        <div className='flex gap-1 mt-4 justify-center items-center'>

                            <Link legacyBehavior href="https://wa.me/9720538888862" className="mr-1 ml-1.5">
                                <a target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className='w-8 h-6' />
                                </a>
                            </Link>
                            <Link legacyBehavior href="mailto:shimonbenaim@gmail.com">
                                <a target="_blank" rel="noopener noreferrer">
                                    <MdMailOutline className='w-6 h-6' />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </aside >
        </>
    );
};

export default SideNav;
