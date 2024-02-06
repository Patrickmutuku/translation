import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image"; // Import the next/image component

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
          <Image
            priority
            src="/images/logos/blackj.svg" // Use the relative path to your image file
            alt="logo"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
            className="rounded-full dark:filter dark:invert"
          />
          <h1>TRANSLATION</h1>
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
