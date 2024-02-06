import LogoImage from "@/logos/vercel.svg";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
        <a>
            <div>
                <LogoImage />
                <span>Next.js</span>
            </div>
        </a>
    </Link>
    
  )
}

export default Logo
