"use client";
import { useAppContext } from "@/context/app";
import { BarLoader, MoonLoader } from "react-spinners";

export const Loading = () => {
  const { loading, theme } = useAppContext();

  return (
    <div
      style={{ display: loading ? "flex" : "none" }}
      className="fixed w-full z-40 h-full flex-col items-center justify-center gap-4"
    >
      <h1 style={{ color: theme.text }} className="text-[20px] font-bold">
        IQ-Night
      </h1>
      <MoonLoader size={40} color={theme.active} className="rounded-full" />
    </div>
  );
};
