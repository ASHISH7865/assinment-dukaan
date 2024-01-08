'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ActiveLink = ({ href, children, className }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${isActive ? "bg-[#FFFFFF] bg-opacity-10" : ""} ${className}   hover:bg-[#ffffff0e]  px-4 py-2 rounded-md`}>
      {children}
    </Link>
  );
};


export default ActiveLink;