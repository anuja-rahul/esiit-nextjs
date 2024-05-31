"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
// import "./index.scss";

interface ActiveLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const ActiveLink = ({
  children,
  className,
  ...rest
}: ActiveLinkProps) => {
  const { href } = rest;
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link {...rest} className={clsx(className, isActive ? "active" : "", "")}>
      {children}
    </Link>
  );
};
