"use client";

import HeroGeometric from "@/components/ShapesHero";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  return (
    <HeroGeometric
      title1="ТВОЙ ЛУЧШИЙ"
      title2="ПОМОЩНИК"
      description="Это не просто бот. Это инструмент, вдохновлённый разными умами, который адаптируется к вашим задачам и упрощает жизнь в VK."
    />
  );
}
