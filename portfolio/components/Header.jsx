import Link from "next/link";
import { Button } from "./ui/button";
//Components start
import Nav  from "./Nav";
//Components end
export default function Header() {
    return <header className="py-8 text-white bg-black">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo*/}
            <Link href="/"><h1 className= "text-4xl font-semibold ml-3">
                <span className="text-blue-600">S</span>am<span className="text-blue-600">D</span>evs
                <span className="text-blue-600">.</span>
                </h1>
            </Link>

            {/*desktop nav and hire button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button className="bg-amber-400 text-black mr-3 hover:bg-blue-700 hover:text-white">Hire Me<span className="text-cyan-400 hover:bg-blue-700">.</span></Button>
                </Link>
            </div>

            {/**mobile nav */}
            <div className="xl:hidden">mobile nav</div>
            
        </div>
    </header>;
  }
  