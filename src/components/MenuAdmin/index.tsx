"use client";
import React from "react";
import { logoutAction } from "@/actions/login/logout-action";
import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HourglassIcon,
  HouseIcon,
  LogOutIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState, useTransition } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg flex flex-col",
    "mb-8 sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && " overflow-hidden",
    "sm:overflow-auto sm:h-auto"
  );
  const linkClasses = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex items-center justify-start gap-2",
    "transition hover:bg-slate-800",
    "h-10 shrink-0"
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    "text-blue-200 italic cursor-pointer",
    "sm:hidden"
  );

  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Menu
          </>
        )}
      </button>

      <a href="/" target="_blank" className={linkClasses}>
        <HouseIcon />
        Home
      </a>
      <Link href="/admin/post" className={linkClasses}>
        <FileTextIcon />
        Posts
      </Link>
      <Link href="/admin/post/new" className={linkClasses}>
        <PlusIcon />
        Criar Post
      </Link>
      <a
        onClick={(e) => {
          e.preventDefault();

          startTransition(async () => {
            await logoutAction();
          });
        }}
        href="#"
        className={linkClasses}
      >
        {isPending && (
          <>
            <HourglassIcon />
            Aguarde
          </>
        )}
        {!isPending && (
          <>
            <LogOutIcon />
            Sair
          </>
        )}
      </a>
    </nav>
  );
}
