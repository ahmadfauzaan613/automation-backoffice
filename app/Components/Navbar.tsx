'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <React.Fragment>
      <div className={`${pathname === '/' && 'hidden'} bg-[#14213d] flex items-center justify-between py-3 px-10`}>
        <h3 className="font-bold text-[#FCA311] text-[28px]">LOGO</h3>
        <div className="flex items-center gap-3">
          <p className="text-[18px] text-[#FFFFFF] font-bold">Ahmad</p>
          <FaUserCircle size={'18px'} color="#fff" />
        </div>
      </div>
    </React.Fragment>
  )
}
