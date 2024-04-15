"use client";

import Image from "next/image";
import React from "react";
import { PiShootingStarThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { clearAll } from "../redux/todoSlice";

const data = [
  "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/33b3ef2cfb29119c7974dcbab0a6cd47/photo-1683125554888-33d34e38ddea.jpg",

  "https://wallpapercave.com/wp/2QSeAq8.jpg",

  "https://wallpapercrafter.com/desktop/149148-digital-digital-art-artwork-illustration-fantasy-art-landscape-nature-trees-clouds-Sun-sun-rays-sunset-mountains-dark-dusk-drawing-painting-digital-painting-world-peop.jpg",

  "https://r4.wallpaperflare.com/wallpaper/860/945/126/romantic-couple-4k-pics-ultra-hd-wallpaper-2bf62c5d53e1fff945142b096d3cac10.jpg",
];

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleSelectBackground = (img: string) => {
    setOpen(false);
    localStorage.setItem("background", img);
  };
  return (
    <div
      className="flex py-4 px-7 justify-between"
      style={{ background: "rgba(0, 0, 0, 0.4)" }}
    >
      <p
        className="bg-slate-800 text-white text-xl flex items-center gap-1 rounded-lg p-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Change Background
        <PiShootingStarThin className="text-yellow-500 text-3xl" />
      </p>
      <dialog className="bg-slate-800 text-white p-4 rounded-lg" open={open}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setOpen(false);
              document.body.style.backgroundImage = `url(${item})`;
            }}
          >
            <div
              onClick={() => handleSelectBackground(item)}
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "90px",
                height: "60px",
                borderRadius: "8px",
                margin: "4px",
              }}
            />
            <p>Background {index + 1}</p>
          </div>
        ))}
      </dialog>
      <p
        className="bg-slate-800 text-white text-xl flex items-center gap-1 rounded-lg p-2 cursor-pointer"
        onClick={() => {
          dispatch(clearAll());
        }}
      >Clear Board</p>
    </div>
  );
};

export default Header;
