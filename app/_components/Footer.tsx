import { faPatreon, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
    const socialLinks = [
        { label: "Twitter", icon: faTwitter },
        { label: "Patreon", icon: faPatreon },
    ]
    const links = [
        [
            { label: "Company", key: "header-1" },
            { label: "Services", key: "item-1-1" },
            { label: "Blog", key: "item-1-2" },
            { label: "Videos", key: "item-1-3" },
            { label: "Shop", key: "item-1-4" },

        ],
        [
            { label: "Support", key: 'header-2' },
            { label: "Terms of Service", key: "item-2-1" },
            { label: "Privacy Policy", key: "item-2-2" },
            { label: "Contact", key: "item-2-3" }
        ]
    ]
    return (
        <div className='min-h-screen flex items-end justify-center'>
            <div className='py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-gray-800 text-white w-full p-4 relative'>
                <div className="">
                    <p className='text-2xl font-bold'>About</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem asperiores possimus perferendis ipsum nam, praesentium nobis corporis maxime aliquam voluptatem quisquam consectetur repudiandae expedita exercitationem sequi corrupti itaque, ea adipisci.</p>

                    <div className="text-gray-400">
                        <span>Copyright &copy;{new Date().getFullYear()} Adrian Bauer</span>
                    </div>
                </div>
                <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2">
                    {links.map((col, idx) => {
                        return (
                            <ul className={`col col-${idx+1}`} key={`col-${idx}`}>
                                {col.map((link, index) => {
                                    return (
                                        <li
                                            key={`link-${col}-${index}`}
                                            className={`text-gray-400 cursor-pointer ${
                                                link.key == "header-1" || link.key === "header-2"
                                                    ? "text-2xl text-white"
                                                    : "" 
                                            }`}
                                            >
                                                {link.label}
                                            </li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-lg font-semibold text-white">
                        Stay up to date
                    </label>
                    <input type="email" placeholder='Subscribe to our mailing list' className="mt-2 w-full border-none rounded-lg py-3 px-6" />
                </div>
            </div>
        </div>
    )
}

export default Footer