'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaHome, FaRobot, FaUsers, FaDoorOpen } from 'react-icons/fa'
import Link from 'next/link'

const menuList = [
  { menu: 'Dashboard', icon: <FaHome size={'18px'} color="#fff" />, path: '/dashboard' },
  { menu: 'Data Bot', icon: <FaRobot size={'18px'} color="#fff" />, path: '/dashboard/data-bot' },
  { menu: 'User', icon: <FaUsers size={'18px'} color="#fff" />, path: '/dashboard/user' },
]

const ListMenu = (props: any) => {
  const pathname = usePathname()
  return (
    <Link href={props.path} className="flex items-center gap-3 cursor-pointer">
      {props.icon}
      <h5 className={`${props.path === pathname ? 'text-[#FCA311] font-bold' : 'text-white hover:font-bold hover:text-[#FCA311] font-light'} text-[18px]`}>{props.nameMenu}</h5>
    </Link>
  )
}

export default function Sidebar() {
  return (
    <React.Fragment>
      <div className="bg-[#14213d] w-full pt-8 pb-7 space-y-7 px-10 h-screen">
        {menuList.map((item, idx) => (
          <ListMenu key={idx} icon={item.icon} path={item.path} nameMenu={item.menu} />
        ))}
        <div className="absolute bottom-10">
          <ListMenu icon={<FaDoorOpen size={'19px'} color="#fff" />} path={'/'} nameMenu={'Log Out'} />
        </div>
      </div>
    </React.Fragment>
  )
}
