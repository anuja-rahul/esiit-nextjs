import Link from "next/link";
import Logo from "./../../../assets/images/white-sub-no-bg.png";
import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import MenuButtons from "./MenuButtons";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center fixed w-screen z-[9999]">
      <div className="z-[9999] min-h-8 w-4/5 m-auto bg-slate-600/20 backdrop-blur-sm navbar-main rounded-3xl">
      <nav className="flex w-full flex-wrap items-center justify-center px-20 py-1">
        <div className="hidden w-4/5 flex-wrap items-center justify-center lg:flex">
          <ul className="header-navbar navbar flex w-full flex-wrap items-center justify-center lg:justify-around">
            <li>
              {/* <Link href="/" className="nav-btn btn btn-ghost relative px-4">
                Home
              </Link> */}
              <ActiveLink
                href="/"
                className="nav-btn btn btn-ghost relative px-4"
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/gallery"
                className="nav-btn btn btn-ghost relative px-4"
              >
                Gallery
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/events"
                className="nav-btn btn btn-ghost relative px-4"
              >
                Events
              </ActiveLink>
            </li>
            <li>
              <Link href="/" className="nav-btn btn btn-ghost relative px-4 nav-logo">
                <Image src={Logo} alt="Logo" width={100} />
              </Link>
            </li>
            <li>
              <ActiveLink
                href="/teams"
                className="nav-btn btn btn-ghost relative px-4"
              >
                Teams
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/shop"
                className="nav-btn btn btn-ghost relative px-4"
              >
                Shop
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/contact"
                className="nav-btn btn btn-ghost relative px-4"
              >
                Contact us
              </ActiveLink>
            </li>
          </ul>
        </div>

        <div className="z-[999] flex w-screen items-center justify-between lg:hidden">
          <Link
            href="/"
            className="btn btn-ghost z-[9999] flex w-2/5 items-center px-0"
          >
            <Image src={Logo} alt="Logo" width={100} />
          </Link>
          <MenuButtons />
        </div>
      </nav>
    </div>
    </div>
  );
}
