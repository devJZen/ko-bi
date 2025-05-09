import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { PopoverClose } from "@radix-ui/react-popover";
import Image from 'next/image';
import Link from 'next/link';


export function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 z-50">
      <div className="flex items-center justify-between bg-black/50 pl-6 pr-12 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/favicon.ico"
              alt="Ko-bi"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-medium text-white">Ko-bi</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/profiles"
            className="text-sm text-gray-300 transition-colors hover:text-white">
            Mentors
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-300 transition-colors hover:text-white">
            Help
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-300 transition-colors hover:text-white">
            Contact
          </Link>
        </nav>

        <Popover>
          <PopoverTrigger className="cursor-pointer">
            <div className="flex items-center gap-2">
              <Image
                src="/user.png"
                alt="Profile picture"
                width={36}
                height={36}
                className="rounded-full object-cover bg-white"
              />
            <p>Log in</p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 items-start w-full py-2 px-4">
            <PopoverClose>
              <Link
                href="/login"
                className="text-sm text-gray-300 transition-colors hover:underline">
                Log in
              </Link>
            </PopoverClose>
            <Separator />
            <PopoverClose>
              <Link
                href="/sign-up"
                className="text-sm text-gray-300 transition-colors hover:underline">
                Sign up
              </Link>
            </PopoverClose>
            <Separator />
            <PopoverClose>
              <Link
                href="/my-page"
                className="text-sm text-gray-300 transition-colors hover:underline">
                Profile
              </Link>
            </PopoverClose>
            <Separator />
            <PopoverClose>
              <Link
                href="/settings"
                className="text-sm text-gray-300 transition-colors hover:underline">
                Settings
              </Link>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
