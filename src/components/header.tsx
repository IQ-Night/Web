"use client";
import { useAppContext } from "@/context/app";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeadRoom from "react-headroom";
import { CgMenuRight } from "react-icons/cg";
import Img from "./image";
import { TbMenuDeep } from "react-icons/tb";

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
        display: loading || pathname.includes("/projects/") ? "none" : "flex",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <ProgressBar
        key={theme.active}
        height="0.25rem"
        color={theme.active}
        options={{ showSpinner: false }}
        shallowRouting
      />
      <header
        className="w-full h-full
      flex items-center justify-between
      py-4 desktop:py-[20px] px-[5%] shadow-sm border-b-[1px] border-b-[rgba(255,255,255,0.1)]"
      >
        <Link
          href="/"
          className="flex items-center gap-4 scale-up cursor-pointer"
        >
          <div className="relative w-[140px] h-[50px] flex items-center justify-center text-[32px] font-[700] text-[white]">
            IQ Night
          </div>
        </Link>

        <div className="w-1/2 hidden slide-in-left desktop:flex items-center justify-end gap-[48px] text-textlight text-[16px] font-custom font-[600]">
          {menuItems.map((item: any) => {
            return (
              <Link href={item.path} key={item.path}>
                <h4
                  style={{
                    color: pathname === item.path ? theme.active : theme.text,
                    borderColor: theme.text,
                    transition: "ease-in 200ms",
                  }}
                  className={`cursor-pointer hover:opacity-[1] ${
                    pathname === item.path ? "opacity-1" : "opacity-[0.5]"
                  }`}
                >
                  {item.label}
                </h4>
              </Link>
            );
          })}
        </div>
        <div className="desktop:hidden" onClick={() => setMobileMenu(true)}>
          <TbMenuDeep color={theme.active} size={32} />
        </div>
      </header>
    </HeadRoom>
  );
};

export default Header;
