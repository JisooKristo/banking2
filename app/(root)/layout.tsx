import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Luis", lastName: "Moratalla" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex flex-col w-full">
        <div className="root-layout flex items-center justify-between p-4">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo icon"
          />
          <MobileNav user={loggedIn} />
        </div>

        {children}
      </div>
    </main>
  );
}
