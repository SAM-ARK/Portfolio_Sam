"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "contact",
        path: "/contact",
    },
    
];

export default function Nav() {
    const pathname = usePathname();
    console.log(pathname);
    return ( 
    <nav className="flex gap-8">
    {links.map((links, index) => { 
        return (
        <Link href={links.path} key={index} className={`${links.path === pathname && "text-blue border-b-4 border-blue-700 "} capitalize font-medium hover:text-blue-700 transition-all `}>
            {links.name}
        </Link>
        );
        })}
    
    </nav>);
  }
  