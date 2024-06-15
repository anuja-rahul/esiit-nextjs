"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import { newsData } from "./newsList";

export default function News() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".news-card",
      { x: 300, opacity: 0, filter: "blur(4px)" },
      {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1.5,
        stagger: 0.2,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".News",
          start: "top bottom-=40%",
          toggleActions: "play pause resume reverse",
        },
      },
    );
  }, [".News"]);

  return (
    <main className="News flex h-auto min-h-[80vh] w-full flex-col items-center justify-center p-6">
      <h1 className="mb-8 mt-12 font-['Permanent_Marker'] text-5xl font-semibold italic md:mt-8">
        News
      </h1>
      <p className="mb-4 text-balance text-center">
        Here a sneak peek at whats happening in the gaming world !
      </p>

      <div className="flex flex-col items-center justify-center p-6 sm:flex-row md:gap-4">
        {newsData.map((news, idx) => (
          <div
            className="news-card card mx-2 mb-6 w-[70%] border-2 border-accent bg-base-300/40 backdrop-blur-sm md:mb-0 md:w-60"
            key={idx}
          >
            <span
              className={`badge indicator-item badge-success absolute left-1 top-1 text-slate-900 ${news.new == 1 ? "opacity-[100%]" : "opacity-0"}`}
            >
              Latest
            </span>
            <span
              className={`badge indicator-item badge-warning absolute left-1 top-1 text-slate-900 ${news.new == 1 ? "opacity-0" : "opacity-[100%]"}`}
            >
              New
            </span>
            <figure>
              <img
                src={news.imgURL}
                width={280}
                alt={`news_${idx} image`}
                className="aspect-[16/9] w-full rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-balance text-center font-['Permanent_Marker'] text-lg font-extralight leading-4 text-info-content/75 lg:text-xl">
                {news.title}
              </h2>
              <div className="mb-2 flex w-full flex-row flex-wrap items-center justify-center gap-2">
                {/* <div className="badge badge-info">{news.relavance}</div> */}
                {news.relavance.map((data, dataID) => (
                  <div
                    className="badge badge-info text-xs text-accent"
                    key={dataID}
                  >
                    {data}
                  </div>
                ))}
              </div>
              <p className="mb-2 text-xs font-bold text-info-content/80 lg:text-base">
                {news.description}
              </p>
              <div className="card-actions justify-end">
                <Link
                  className="hero-btn btn btn-primary rounded-2xl p-2 text-white"
                  href={news.newsURL}
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
