"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathName = usePathname();
    return (
        <div>
            <ul className="flex gap-4 text-sm text-slate-500">
                <Link prefetch={false} scroll={false} replace={true} href="/products/car" className={pathName === "/products/car" ? "text-green-600" : ""}>Car</Link>
                <Link href="/products/laptop" className={pathName === "/products/laptop" ? "text-green-600" : ""}>Laptop</Link>
                <Link href="/products/handphone" className={pathName === "/products/handphone" ? "text-green-600" : ""}>Handphone</Link>
            </ul>
            {children}
        </div>
    )
}