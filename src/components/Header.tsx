

import { getServerSession } from "next-auth"
import DarkModeToggle from "./DarkModeToggle"
import Logo from "./Logo"
import UserButton from "./UserButton"
import { authOptions } from "../../auth"
import Link from "next/link"
import { MessagesSquareIcon } from "lucide-react"

async function Header() {
  const Session=await getServerSession(authOptions);
  console.log(Session);
  return (
    
<header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
    <nav className=" flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900
    max-w-7xl mx-auto ">
        <Logo />

        <div className=" flex-1 flex items-center justify-end
        space-x-4">
            {/*Langaugeselect */}

            {Session ? (
              <>
              <Link 
              href={`/chat`} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white"/>
              </Link>
              </>
            ):
            (
              <Link href="/pricing">
                Pricing
            </Link>

            )}
            

            {/*Dark Mode Tooglle*/}
            <DarkModeToggle />
            <UserButton />
        </div>
    </nav>
    {/*Upgrade Banner*/}
</header>
  )
}

export default Header
