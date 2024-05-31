"use client";
import Image from "next/image";
import Logo from "./../assets/images/white-logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AnimatedHero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-logo",
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 1, ease: "bounce.out" },
    );
    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.8, ease: "bounce.out" },
    );
    tl.fromTo(
        ".hero-text",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" },
      );
      tl.fromTo(
        ".hero-btn",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" },
      );
  });

  return (
    <main className="hero flex min-h-screen flex-col items-center justify-center p-8">
      <div className="hero-content text-center">
        <div className="flex max-w-md flex-col items-center">
          <Image
            src={Logo}
            alt="logo"
            width="150"
            height="150"
            className="hero-logo opacity-0"
          />
          <h1 className="hero-title opacity-0 bg-gradient-to-r from-blue-950 via-purple-800 to-blue-950 bg-clip-text text-5xl font-bold text-transparent">
            Welcome to ESIIT
          </h1>
          <p className="py-6 hero-text opacity-0">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="hero-btn btn btn-info rounded-xl border-accent opacity-0">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
