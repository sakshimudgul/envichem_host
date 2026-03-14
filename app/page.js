"use client";
import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const imageRef = () => {
    const imageRef = useRef(null);
    const handleScroll = () => {
      imageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };
  };
  return (
    <>
      <HeroSection />
    </>
  );
}
