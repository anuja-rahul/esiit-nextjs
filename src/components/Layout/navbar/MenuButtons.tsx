"use client";

import { useState } from "react";
import { ActiveLink } from "./ActiveLink";

export default function MenuButtons() {
  const [clicked, setclicked] = useState(false);

  const burgerMenu = (
    <button
      type="submit"
      title="btn"
      onClick={() => setclicked(true)}
      className="menu-icon-btn"
    >
      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>
    </button>
  );

  const closeMenu = (
    <button
      type="submit"
      title="btn"
      onClick={() => setclicked(false)}
      className="ml-4 mt-4 menu-icon-btn"
    >
      <svg
        className="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </button>
  );

  return (
    <div
      className={`mobile right-0 z-[999] rounded-2xl bg-slate-800/60 backdrop-blur-sm duration-500 ${clicked ? "h-screen w-screen" : "w-0"}`}
    >
      {clicked ? closeMenu : burgerMenu}

      <ul
        className={`mt-16 w-full flex-col items-end justify-center pr-12 ${clicked ? "flex" : "hidden"}`}
      >
        <li>
          {/* <Link href="/" className="nav-btn btn btn-ghost relative px-4">
                Home
              </Link> */}
          <ActiveLink
            href="/"
            className="nav-btn btn btn-ghost relative my-2 px-4"
          >
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/gallery"
            className="nav-btn btn btn-ghost relative my-2 px-4"
          >
            Gallery
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/events"
            className="nav-btn btn btn-ghost relative my-2 px-4"
          >
            Events
          </ActiveLink>
        </li>

        <li>
          <ActiveLink
            href="/teams"
            className="nav-btn btn btn-ghost relative my-2 px-4"
          >
            Teams
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/shop"
            className="nav-btn btn btn-ghost relative my-2 px-4"
          >
            Shop
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/contact"
            className="nav-btn btn btn-ghost relative my-2 px-4"
          >
            Contact us
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
}
