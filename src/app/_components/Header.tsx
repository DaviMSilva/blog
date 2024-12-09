'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = () => {
    const path = usePathname();

    const isHome = path === '/'

    return (
        <header className="w-screen absolute px-4">
            <nav className="flex justify-between items-center mx-auto h-14  max-w-lg">
                <Link href="/" className="font-semibold text-xl group">
                    DaviMSilva
                    <div data-is-path={isHome} className="block w-5 bg-gray-400 h-1 group-hover:w-full data-[is-path=true]:w-full  transition-all">
                    </div>
                </Link>

                <div>
                    {/* <Link href={'/about'} className="font-medium group">
                        About
                        <div data-is-path={path === '/about'} className="block w-5 bg-blue-400 h-1 group-hover:w-full data-[is-path=true]:w-full  transition-all">
                        </div>
                    </Link> */}
                </div>
            </nav>
        </header>
    )
}