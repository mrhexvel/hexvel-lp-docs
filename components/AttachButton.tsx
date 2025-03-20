"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Magnet } from "lucide-react";
import { motion, useAnimation } from "motion/react";
import { useCallback, useEffect, useState } from "react";

interface AttachButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number;
  attractRadius?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function AttachButton({
  className,
  particleCount = 12,
  attractRadius = 50,
  onClick,
  ...props
}: AttachButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      await handleInteractionStart();
      setTimeout(() => {
        if (onClick) {
          onClick(event);
        }
      }, 0);
    },
    [handleInteractionStart, onClick]
  );

  return (
    <Button
      className={cn(
        "min-w-40 relative touch-none cursor-pointer",
        "hover:bg-rose-400 hover:text-white",
        "border border-rose-300 text-rose-300",
        "transition-all duration-300",
        isAttracting && "bg-rose-400 text-white",
        className
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onClick={handleClick}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index].x, y: particles[index].y }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full",
            "bg-rose-400 dark:bg-rose-300",
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-40"
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        <Magnet
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isAttracting && "scale-110"
          )}
        />
        {isAttracting ? "Пикми!" : "Начать"}
      </span>
    </Button>
  );
}
