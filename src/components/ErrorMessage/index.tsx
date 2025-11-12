"use client";

import clsx from "clsx";
import React from "react";

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export function ErrorMessage({
  content,
  contentTitle,
  pageTitle,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          "min-h-80 bg-slate-900 text-slate-100 mb-16 py-8",
          "rounded-xl flex items-center justify-center text-center"
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold">{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
