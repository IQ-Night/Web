"use client";
import { useAppContext } from "@/context/app";
import React from "react";
import HeadRoom from "react-headroom";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdList } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  // theme
  const { theme, loading, menuItems, setMobileMenu } = useAppContext();

  const pathname = usePathname();

  return (
    <HeadRoom
      downTolerance={10}
      upTolerance={10}
      className="fixed w-full z-10"
      style={{
        display: loading ? "none" : "flex",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <ProgressBar
        height="0.2rem"
        color="#fff"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <header
        className="w-full h-full
      flex items-center justify-between
      py-4 desktop:py-[20px] px-[5%] border-b-[1.5px] border-b-[rgba(255,255,255,0.1)]"
      >
        <Link href="/">
          <h1 className="text-[36px] scale-up text-textlight cursor-pointer whitespace-nowrap">
            TP-Showcase
          </h1>
        </Link>

        <div className="hidden slide-in-left desktop:flex items-center gap-[48px] text-textlight text-[16px] font-custom font-[600]">
          {menuItems.map((item: any) => {
            return (
              <Link href={item.path} key={item.path}>
                <h4
                  style={{
                    color: pathname === item.path ? theme.fill : "inherit",
                    borderColor:
                      pathname === item.path ? theme.fill : "inherit",
                    transition: "ease-in 200ms",
                  }}
                  className={`cursor-pointer hover:opacity-[1] ${
                    pathname === item.path ? "opacity-1" : "opacity-[0.7]"
                  }`}
                >
                  {item.label}
                </h4>
              </Link>
            );
          })}
        </div>
        <div className="desktop:hidden" onClick={() => setMobileMenu(true)}>
          <CiMenuFries color={theme.fill} size={28} />
        </div>
      </header>
    </HeadRoom>
  );
};

export default Header;
