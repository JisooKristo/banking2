"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import Footer from "./Footer";

type SidebarProps = {
  user?: { firstName: string; lastName?: string };
};

const SideBar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar w-64 p-4 bg-white shadow-md">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 cursor-pointer flex items-center gap-2"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon Logo"
            className="w-8 h-8"
          />
          <h1 className="sidebar-logo text-xl font-bold">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "sidebar-link flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100",
                { "bg-bank-gradient": isActive }
              )}
            >
              <div className="relative w-6 h-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-125 invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        USER
      </nav>
      <Footer user={user}/>
    </section>
  );
};

export default SideBar;
