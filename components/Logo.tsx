import Image from 'next/image'
import logo from "./images/Logo.jpeg";
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
        <Image src={logo} alt="Zayna online store" width={150} height={50} />
    </Link>
  )
}

export default Logo