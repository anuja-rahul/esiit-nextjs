"use client";
import Image from "next/image";
import Logo from "./../assets/images/white-logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function AnimatedHero() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.1 });
    // tl.fromTo(
    //   ".hero-logo-animate",
    //   { opacity: 0, y: -80 },
    //   { opacity: 1, y: 0, duration: 1, ease: "bounce.out" },
    // );
    // tl.fromTo(
    //   ".hero-title",
    //   { opacity: 0, y: -100 },
    //   { opacity: 1, y: 0, duration: 0.8, ease: "bounce.out" },
    // );
    // tl.fromTo(
    //   ".hero-text",
    //   { opacity: 0, y: 100 },
    //   { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" },
    // );
    tl.fromTo(
      ".hero-btn",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.inOut" },
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
            className="hero-logo hero-logo-animate"
            priority
          />
          <h1 className="hero-title  text-5xl font-extrabold italic">
            <span className="hero-title-alt bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text font-['Permanent_Marker'] font-semibold text-transparent">
              Welcome to
            </span>{" "}
            ESIIT
          </h1>
          <p className="hero-text py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
            href="/#About"
            className="hero-btn btn rounded-2xl btn-info border-accent opacity-0"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
