"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Button from "./button";
import Img from "./image";
import { BounceLoader, MoonLoader } from "react-spinners";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Main = () => {
  // app context
  const { theme, loading, isMobile } = useAppContext();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefMob = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div
      style={{ color: theme.text }}
      className="h-[85vh] w-[100vw] slide-in-right text-textlight
     pb-14 flex flex-col relative"
    >
      <div className="w-full desktop:hidden flex items-center h-[100vh] min-h-[100vh] overflow-hidden">
        <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.5)] absolute z-10" />
        <video
          controls={false}
          ref={videoRefMob}
          className={`transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/djsadepig/video/upload/v1720966513/-4356524820746039304_en5e2z.mp4" />
        </video>
        {!isLoaded && (
          <div className="absolute top-28 right-[5%] z-20">
            <MoonLoader size={24} color={theme.text} className="" />
          </div>
        )}
      </div>

      <div className="w-full hidden desktop:flex items-center max-h-[100vh] mt-[4vh] relative">
        <div className="w-full h-full max-h-[100vh] bg-[rgba(0,0,0,0.4)] absolute z-10 top-0" />
        <video
          ref={videoRef}
          className={`transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/djsadepig/video/upload/v1720966527/1720454991652_rmibk2.mp4" />
        </video>
        {!isLoaded && (
          <div className="absolute h-[100vh] z-20 flex w-full">
            <MoonLoader size={40} color={theme.text} className="mt-32 ml-24" />
          </div>
        )}
      </div>

      <div className="z-10 w-full h-full px-[6.5%] absolute top-[12vh] desktop:top-[30vh]">
        <div className="flex desktop:items-center gap-[8px] mt-4 mt-8 desktop:mt-0 ">
          <h1 className="w-[70%] text-[42px] leading-[48px] desktop:leading-[72px] desktop:text-[64px] font-[700] text-shadow-lg">
            Your events management solution
          </h1>
        </div>

        <p className="font-custom desktop:ml-4 text-xl leading-[28px]  desktop:leading-[32px] italic max-w-[90%] desktop:max-w-[60%] mt-6 desktop:mt-8 text-shadow">
          "Sarko is an event planning company that focuses on the uniqueness and
          success of your special moments. We create a space where dreams become
          reality. Our team fulfills your desires and requirements to make every
          event special, impressive, and unforgettable."
        </p>

        <Link
          href="/offers"
          className="h-12 w-full desktop:w-80 mt-12 desktop:mt-16 flex items-center rounded-full"
        >
          <div
            style={{
              backdropFilter: "blu(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            className="py-3 px-6 w-[65%] rounded-full flex items-center justify-between  shadow-xl gap-4 rounded-full bg-[rgba(255,255,255,0.1)]"
          >
            {/* <MdKeyboardDoubleArrowRight size={24} /> */}
            <h3>Offers</h3>
            <MdKeyboardDoubleArrowRight size={24} />
          </div>
        </Link>
      </div>
      <div
        style={{ display: loading ? "none" : "flex", color: theme.text }}
        className="w-full h-[95vh]
    text-white
    flex-col items-center relative"
      >
        <div className="w-[100%] py-4 pb-32 slide-in-top flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold mb-6 desktop:mb-4 whitespace-nowrap w-full pl-[5%]">
            What We Create
          </h2>
          <div className="list-disc list-inside w-full flex flex-col items-center gap-2">
            <div className="w-full flex flex-col items-center justify-between gap-2">
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px]  shadow-md flex flex-col items-center justify-center cursor-pointer  hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden">
                  <Img
                    src="/weddings.png"
                    alt="weddings"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute top-2 left-2 py-1 px-12 rounded-full bg-[rgba(0,0,0,0.4)] text-center text-sm">
                  Weddings
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px]  shadow-md flex flex-col items-center justify-center cursor-pointer  hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden ">
                  <Img
                    src="/corporation.jpg"
                    alt="corporations"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute top-2 left-2 py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Corporations
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px]  shadow-md flex flex-col items-center justify-center cursor-pointer hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden ">
                  <Img
                    src="/presentation.png"
                    alt="presentations"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute top-2 left-2 py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Company/product presentations
                </strong>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-2">
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px]  shadow-md flex flex-col items-center justify-center cursor-pointer hover:opacity-[0.9] "
              >
                <strong className="absolute top-2 left-2 py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Conferences
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px]  shadow-md flex flex-col items-center justify-center cursor-pointer  hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden ">
                  <Img
                    src="/teambuilding.jpg"
                    alt="teambuildings"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute top-2 left-2 py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Teambuildings
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px]  shadow-md  flex flex-col items-center justify-center cursor-pointer hover:opacity-[0.9] "
              >
                <strong className="absolute top-2 left-2 py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Festival organizations
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
