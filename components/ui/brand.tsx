"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"
import SPLogo from "../icons/StratusBot256x256.png"
import Image from "next/image"
interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center hover:opacity-50">
      <div className="mb-2">
        <Image alt="icon" src={SPLogo} />
        {/* <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} /> */}
      </div>

      <div className="text-4xl font-bold tracking-wide">myStratus Helpbot</div>
    </div>
  )
}
