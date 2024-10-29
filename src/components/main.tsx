"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { MdCalendarMonth, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MoonLoader } from "react-spinners";
import Img from "./image";
import Button from "./button";
import { IoMdHeart } from "react-icons/io";
import Image from "next/image";
import { FaApple, FaGoogle, FaGooglePlay } from "react-icons/fa";

const Main = () => {
  // app context
  const { isMobile, theme, loading, gallery, activeLanguage } = useAppContext();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefMob = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", () =>
        setIsLoaded(true)
      );
    }
  }, [videoRef]);

  return (
    <div
      style={{ color: theme.text }}
      className="h-full w-[100vw] slide-in-right flex flex-col relative overflow-hidden"
    >
      <div className="w-full mt-[-50px] flex items-center h-[100vh] overflow-hidden relative">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            position: "absolute",
            zIndex: 50,
            marginTop: 164,
          }}
        >
          <h1 className="text-[32px] text-[white] font-[700]">
            Mafia Game Online
          </h1>
          <p className="text-[18px]">Play with friends</p>
          <div className="w-full h-56 flex gap-[16px] justify-center mt-[16px]">
            <div className="cursor-pointer relative overflow-hidden desktop:rounded-xl rounded-lg desktop:w-[20%]  w-[36%] h-[64px] flex items-center justify-center gap-[8px] bg-[black] border-[1px]">
              <FaApple color="white" size={48} />
              <div>
                <p className="text-[12px]">Download on the</p>
                <h2 className="font-[700] text-[20px]">App Store</h2>
              </div>
            </div>
            <div className="cursor-pointer relative overflow-hidden desktop:rounded-xl rounded-lg desktop:w-[20%] w-[36%] h-[64px] flex items-center justify-center gap-[8px] bg-[black] border-[1px]">
              <FaGooglePlay color="white" size={44} />
              <div>
                <p className="text-[12px]">GET IT ON</p>
                <h2 className="font-[700] text-[20px]">Google Play</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden desktop:rounded-xl rounded-md w-full h-full flex items-center">
          <Image
            src="/images/bg.jpg"
            alt="img"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        {!isLoaded && (
          <div className="absolute top-28 right-[5%] z-20">
            <MoonLoader size={24} color={theme.text} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
