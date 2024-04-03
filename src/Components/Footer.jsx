import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer dir='rtl' className="bg-gray-100 py-6">
            <div className="flex flex-col justify-center items-center gap-5 mx-auto px-6">
                <div className="flex sm:flex-row flex-col gap-5 text-center justify-between">
                    <p>© כל הזכויות שמורות לאתר בית ספר לנהיגה &#34;אשדוד&#34; </p>
                    <p>אבא הילל סילבר 11, אשדוד </p>
                </div>
                    <Image
                        src='https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711986334/ashdod%20-%20driving%20school/cmrpcs2o0kuo7fk1f32a.png'
                        alt="logo"
                        height={30}
                        width={30}
                        className='rounded-full'
                        />
            </div>
        </footer>
    )
}
