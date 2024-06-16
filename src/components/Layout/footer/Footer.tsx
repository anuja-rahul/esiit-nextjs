import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import Image from "next/image";
import Logo from "./../../../assets/images/white-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative z-[999] flex h-auto min-h-[400px] w-full flex-col flex-wrap bg-slate-800/40 py-4">
      {/* <div className="content flex h-full w-full flex-col items-center justify-evenly">
        <div className="footer-links mb-2 mt-4 flex w-3/5 flex-row flex-wrap items-center justify-center gap-2 text-balance text-center text-neutral sm:justify-between md:flex-row">
          <Link href="/" className="p-1 nav-btn btn btn-ghost">
            Home
          </Link>
          <Link href="/" className="p-1 nav-btn btn btn-ghost">
            Gallery
          </Link>
          <Link href="/" className="p-1 nav-btn btn btn-ghost">
            Events
          </Link>
          <Link href="/" className="p-1 nav-btn btn btn-ghost">
            Teams
          </Link>
          <Link href="/" className="p-1 nav-btn btn btn-ghost">
            Shop
          </Link>
          <Link href="/" className="p-1 nav-btn btn btn-ghost">
            Contact us
          </Link>
        </div>
        <div className="mb-4 flex w-4/5 flex-row items-center justify-evenly text-neutral sm:w-1/5">
          <Link href="/" className="nav-btn btn btn-ghost">
            <FontAwesomeIcon icon={faFacebook} color="#fff" />
          </Link>
          <Link href="/" className="nav-btn btn btn-ghost">
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </Link>
          <Link href="/" className="nav-btn btn btn-ghost">
            <FontAwesomeIcon icon={faYoutube} color="#fff" />
          </Link>
          <Link href="/" className="nav-btn btn btn-ghost">
            <FontAwesomeIcon icon={faInstagram} color="#fff" />
          </Link>
        </div>
      </div> */}
      <div className="flex h-auto w-full flex-col flex-wrap items-center justify-around gap-2 py-8 sm:mb-0 sm:flex-row">
        <div className="flex h-full w-4/5 flex-row items-center justify-center sm:w-1/5 sm:flex-col">
          <Image src={Logo} alt="logo" width={100} />
          <h2 className="text-balance text-center text-lg font-extrabold text-base-100/85">
            Bringing you closer to your dream home, one click at a time.
          </h2>
        </div>
        <div className="flex h-full w-4/5 flex-col items-start justify-start sm:w-1/5">
          <h2 className="mb-2 text-balance text-center text-3xl font-extrabold text-base-100/85">
            ESPORTS IIT
          </h2>
          <div className="flex flex-col flex-wrap items-start justify-center uppercase">
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              Home
            </Link>
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              Gallery
            </Link>
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              Events
            </Link>
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              Teams
            </Link>
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              Shop
            </Link>
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex h-full w-4/5 flex-col items-start justify-start sm:w-1/5">
          <h2 className="mb-2 text-balance text-center text-3xl font-extrabold text-base-100/85">
            SUPPORT
          </h2>
          <div className="flex flex-col flex-wrap items-start justify-center uppercase">
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              About us
            </Link>
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              Contact us
            </Link>
            <Link href="/" className="nav-btn btn btn-ghost p-1">
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex h-full w-4/5 flex-col items-start sm:items-center justify-start sm:w-1/5">
          <h2 className="mb-2 text-balance text-center text-3xl font-extrabold text-base-100/85">
            Our Socials
          </h2>
          <div className="flex w-full flex-col sm:flex-row flex-wrap items-start justify-start uppercase h-full">
            <Link
              href="/"
              className="nav-btn btn btn-ghost flex w-auto sm:w-1/2 flex-row flex-wrap items-center justify-start sm:justify-center aspect-square"
            >
              <FontAwesomeIcon icon={faFacebook} color="#fff" />
            </Link>
            <Link
              href="/"
              className="nav-btn btn btn-ghost flex w-auto sm:w-1/2 flex-row flex-wrap items-center justify-start sm:justify-center aspect-square"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#fff" />
            </Link>
            <Link
              href="/"
              className="nav-btn btn btn-ghost flex w-auto sm:w-1/2 flex-row flex-wrap items-center justify-start sm:justify-center aspect-square"
            >
              <FontAwesomeIcon icon={faYoutube} color="#fff" />
            </Link>
            <Link
              href="/"
              className="nav-btn btn btn-ghost flex w-auto sm:w-1/2 flex-row flex-wrap items-center justify-start sm:justify-center aspect-square"
            >
              <FontAwesomeIcon icon={faInstagram} color="#fff" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <p className="w-4/5 text-balance text-center text-base text-base-100/90">
          © {currentYear} eSports IIT. All Rights Reserved. | Terms &
          Conditions | Privacy policy
        </p>
      </div>
    </div>
  );
}
