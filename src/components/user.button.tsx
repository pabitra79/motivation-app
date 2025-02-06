import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { Loader } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const UserButton = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader className="w-6 h-6 mr-4 mt-4 float-right animate-spin" />;
  }

  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <nav>
      {session ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none relative float-right p-4 md:p-8">
            <div className="flex gap-4 items-center">
              <span>{session.user?.name}</span>
              <Avatar className="w-10 h-10 hover:opacity-75 transition">
                <AvatarImage
                  className="w-10 h-10 hover:opacity-75 transition"
                  src={session.user?.image || undefined}
                />
                <AvatarFallback className="bg-sky-900 text-white">
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <h5 className="text-lg bg-gradient-to-r from-sky-400 to-orange-700 text-transparent bg-clip-text"> click in logo to sign out</h5>
          <DropdownMenuContent align="center" side="bottom" className="w-50 hover:bg-orange-700  items-center justify-center font-semibold bg-sky-600">
            <DropdownMenuItem className="h-10" onClick={handleSignOut}>
              
              <p className='hover:bg-orange-700'>Log out</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex justify-end p-4 gap-4">
          <Link href="/sign-in">
            <Button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition transform hover:scale-105 shadow-md ">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition transform hover:scale-105 shadow-md">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default UserButton;