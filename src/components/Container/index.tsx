import clsx from "clsx";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx(
        "text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100"
      )}
    >
      <div className="max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
}
