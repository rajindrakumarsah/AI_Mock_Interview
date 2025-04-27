import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react"; // Import Logout Icon

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  async function handleLogout() {
    "use server";
    await logout();
    redirect("/sign-in");
  }

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>

        {/* Logout button with icon */}
        <form action={handleLogout}>
          <Button type="submit" variant="ghost" size="icon" className="cursor-pointer h-10 w-10 p-2" >
            <LogOut className="h-6 w-6" />
          </Button>
        </form>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
