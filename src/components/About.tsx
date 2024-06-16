"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AboutImage from "./../assets/images/white-sub-no-bg.png";

export default function About() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".about-animate",
      { y: 200, opacity: 0, filter: "blur(4px)" },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1.5,
        stagger: 0.2,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".About",
          start: "top bottom-=40%",
          toggleActions: "play pause resume reverse",
        },
      },
    );
  }, [".About"]);

  return (
    <section
      id="About"
      className="About flex h-auto min-h-screen flex-col flex-wrap items-center justify-center p-12"
    >
      <h1 className="section-title mb-12 mt-12 font-['Permanent_Marker'] text-5xl font-semibold italic md:mt-0">
        About us
      </h1>
      <div className="flex h-full w-full flex-col items-center justify-center text-xs md:w-4/5 md:flex-row md:text-lg">
        <Image
          src={AboutImage}
          alt="image"
          width={300}
          className="hero-logo about-animate w-[200px] opacity-0 md:w-[300px]"
        />

        <div className="flex w-4/5 flex-col flex-wrap items-center justify-center gap-4 text-balance text-center md:w-3/5">
          <p className="about-animate w-full text-balance text-center font-['Extatica'] opacity-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            magni obcaecati necessitatibus! Illo? iusto! Cupiditate modi fugiat
            et delectus ut, doloribus consectetur possimus laboriosam rem
          </p>
          <p className="about-animate w-full text-balance text-center font-['Extatica'] opacity-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            magni obcaecati necessitatibus! I rem, ea, nobis distinctio dolorem
            veritatis magni obcaecati necessitatibus! Illo? Lorem, ipsum dolor
            sit amet consectetur
          </p>
          <p className="about-animate w-full text-balance text-center font-['Extatica'] opacity-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            magni obcaecati necessitatibus! I rem, ea, nobis distinctio dolorem
            veritatis magni obcaecati necessitatibus! Illo? sit amet consectetur
            adipisicing elit. modi fugiat et delectus ut, doloribus consectetur
            possimus laboriosam rem
          </p>
        </div>
      </div>
    </section>
  );
}
