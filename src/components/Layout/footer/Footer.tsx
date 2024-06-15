import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

export default function Footer() {
  return (
    <div className="relative z-[999] h-auto min-h-[150px] w-full py-4 bg-slate-800/40">
      <div className="content flex h-full w-full flex-col items-center justify-evenly">
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
      </div>
    </div>
  );
}
