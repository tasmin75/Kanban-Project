'use client';

import React, { useEffect } from "react";
import Header from "./components/Header";
import KanbanList from "./components/KanbanList";

export default function Home() {
  useEffect(() => {
    const background = localStorage.getItem("background");
    if (background) {
      document.body.style.backgroundImage = `url(${background})`;
    }
    else{
      document.body.style.backgroundImage = `url(https://i.pinimg.com/originals/b4/11/fd/b411fd4b992bf718fcc81607fd66bb91.jpg)`;
    }
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "3s",
        color: "white",
      }}
    >
      <Header />
      <KanbanList/>
    </div>
  );
}
