import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import React from 'react'

interface IButton {
    text: string;
    href: string;
    logo?: boolean;
    className?: string
}

const Button: React.FC<IButton> = ({text, href, logo, className}) => {
  return (
    <Link href={href} className={`no-underline bg-blue-700 text-white px-6 py-3 font-bold rounded-full cursor-pointer `+className}>{ logo && <FontAwesomeIcon icon={faDiceD20} className='mr-2' size='lg'/>}{text}</Link>
  )
}

export default Button