"use client";
import { useAppContext } from "@/context/app";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeadRoom from "react-headroom";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  // theme
  const { theme, loading, menuItems, setMobileMenu, isMobile } =
    useAppContext();

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
      py-4 desktop:py-[20px] px-[5%] border-b-[1.5px] border-b-[rgba(255,255,255,0.1)]"
      >
        <Link href="/" className="flex items-center gap-4 scale-up">
          <div
            className={`${
              (theme.id === "light" ||
                theme.id === "white&red" ||
                theme.id === "gray-red") &&
              "h-[48px] w-[48px] flex items-center justify-center rounded-full"
            }`}
            style={{
              background:
                theme.id === "light" ||
                theme.id === "white&red" ||
                theme.id === "gray-red"
                  ? theme.text
                  : "none",
            }}
          >
            <Image
              src="/logo-white.png"
              width={
                theme.id === "light" ||
                theme.id === "white&red" ||
                theme.id === "gray-red"
                  ? 36
                  : 42
              }
              height={
                theme.id === "light" ||
                theme.id === "white&red" ||
                theme.id === "gray-red"
                  ? 36
                  : 42
              }
              alt="tp"
              color={theme.text}
            />
          </div>
          <h1
            style={{ color: theme.text }}
            className="text-[32px] text-textlight cursor-pointer whitespace-nowrap"
          >
            TP-Showcase
          </h1>
        </Link>

        <div className="hidden slide-in-left desktop:flex items-center gap-[48px] text-textlight text-[16px] font-custom font-[600]">
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
          <CgMenuRight color={theme.active} size={32} />
        </div>
      </header>
    </HeadRoom>
  );
};

export default Header;
