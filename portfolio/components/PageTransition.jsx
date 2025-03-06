"use client";
import {AnimatePresence, delay, easeInOut} from "framer-motion";
import { usePathname } from "next/navigation";

export default function pageTransition({children}){

    const pathname = usePathname();
    return <AnimatePresence>
        <div key={pathname}>
            <Motion.div 
                initial={{opacity: 1}}
                animate={{
                    opacity: 0,
                    transition: { delay: 1, duration: 0.4 , ease: "easeInOut"}
                }}
                className="h-screen w-screen fixed bg-blue-700 top-0 pointer-events-none" 
            />

        {children}
        </div>
        
    </AnimatePresence>;
}