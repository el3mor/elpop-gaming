"use client";
import Link from 'next/link'
import React, { ReactElement } from "react";
import { usePathname } from 'next/navigation';

type Props = {
  navbar: {
    label: string,
    link: string,
    icon: ReactElement<{ className?: string }>
  }
}

const SideLink = ({navbar}: Props) => {
  const pathname = usePathname()
  const isActive = navbar.link === pathname
  const {label, link, icon} = navbar
  return (
    <Link href={link} className={`flex hover:text-rose-400   my-2 duration-200 gap-2 items-center p-2  rounded-md ${isActive ? "text-rose-400" : ""  }`}>


        {React.cloneElement(icon, { className: "w-5 h-5" })}
          <div>{label}</div>


    </Link>
  )
}

export default SideLink
