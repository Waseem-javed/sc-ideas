import React from "react";
import Link from "next/link";
import { LogIn, LogOut, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
// import { useTheme } from "next-themes";

const Navbar = async () => {
  const session = await auth();
  const theme = true;
  return (
    <header
      className={`backdrop-filter backdrop-blur-sm bg-opacity-0  shadow-sm`}
    >
      <div className="container max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between py-2">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={"/sc.png"} alt="sc-logo" width={40} height={40} />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          {session && session.user && (
            <nav className="hidden md:flex space-x-4">
              <Button variant={"ghost"}>
                <Link href="/startup/create" className="hover:text-primary">
                  Create
                </Link>
              </Button>
            </nav>
          )}

          {/* Right: Theme Toggle, Profile Dropdown, and Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button variant="ghost" className="bg-light" size="icon">
              {theme ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle mobile menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild className="md:hidden">
                  <Link href="/startup/create">Create</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={`/user/${session?.user?.id}`}
                    className="hover:text-primary"
                  >
                    {session?.user?.name}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons */}
            {session && session.user ? (
              <>
                <nav className="hidden md:flex space-x-4">
                  <Link
                    href={`/user/${session?.user?.id}`}
                    className="hover:text-primary"
                  >
                    {session.user.name}
                  </Link>
                </nav>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <Button variant="destructive" className="p-3" type="submit">
                    {/* Show icon only on small screens */}
                    <span className="block sm:hidden">
                      <LogOut />
                    </span>

                    {/* Show text and icon on medium and larger screens */}
                    <span className="hidden sm:flex items-center">
                      <LogOut className="mr-2" />
                      LogOut
                    </span>
                  </Button>
                </form>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <Button variant="ghost" type="submit">
                  {/* Show icon only on small screens */}
                  <span className="block sm:hidden">
                    <LogIn />
                  </span>

                  {/* Show text and icon on medium and larger screens */}
                  <span className="hidden sm:flex items-center">
                    <LogIn className="mr-2" />
                    Login
                  </span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
