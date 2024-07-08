"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SidebarLink = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const links = [
    // { href: "/services/introduction", label: "Introduction" },
    { href: "/services/cybersecurity", label: "Cyber Security" },
    { href: "/services/software-development", label: "Software Development" },
    { href: "/services/devops", label: "DevOps" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
  ];

  return (
    <li className="block">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white ${currentPath === link.href ? "bg-stroke dark:bg-blackho" : ""
            }`}
        >
          {link.label}
        </Link>
      ))}
    </li>
  );
};

export default SidebarLink;