"use client";

import { useAppContext } from "@/context/app";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";

const Popup = () => {
  // state
  const { active, setActive } = useAppContext();

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);

  return (
    <div
      className={`${
        active ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } flex w-full h-[100vh] fixed top-0 left-0 right-0 z-50 p-4
      transition-transform transition-opacity duration-200 ease-in-out overflow-y-auto`}
      style={{
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
        pointerEvents: active ? "auto" : "none", // Prevent clicks when invisible
      }}
    >
      <div
        className="absolute z-20 top-4 right-4 cursor-pointer hover:opacity-[0.9]"
        onClick={() => setActive(false)}
      >
        <MdClose color="red" size={40} />
      </div>
    </div>
  );
};

export default Popup;
