"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import DotPattern from "@/components/ui/dot-pattern"

export function AboutQuote() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative">
        <div 
          onMouseMove={handleMouseMove}
          className="relative flex flex-col items-center border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5 overflow-hidden"
        >
          <motion.div
            className="pointer-events-none absolute z-10 h-96 w-96 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, transparent 60%)',
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.5,
            }}
          />

          <DotPattern width={5} height={5} />

          <div className="relative z-20 mx-auto max-w-5xl rounded-[40px] py-6 md:p-10 xl:py-20">
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80 z-30" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80 z-30" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80 z-30" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80 z-30" />
      </div>
    </div>
  )
}
