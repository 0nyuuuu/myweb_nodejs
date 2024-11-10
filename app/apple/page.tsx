"use client"

import { HeartIcon, SendIcon } from "lucide-react";

export default function Home() {
  return (
    <div className = "flex justify-center items-center w-full h-[100dvh] bg-gray-300">
      <div className="max-w-sm w-full h-[100dvh] bg-white">
        <div className="flex justify-between px-4">
      <span className="font-bold border-4 border-blue-500">lnstagram</span>
      <div className="flex items-center gap-4 border-2">
        <button onClick={() => like()}>
          <HeartIcon className="w-6 h-6"/>
        </button>
        <button>
          <SendIcon className="w-6 h-6"/>
        </button>
      </div>
    </div>
      </div>
    </div> 
  );
}

function like() {
  //.log("like!!!");
  prompt("Like!!")
  confirm("yes or no!!!");
}
