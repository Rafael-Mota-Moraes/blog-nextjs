import clsx from "clsx";
import React, { useId } from "react";

type InputTextProps = {
  labelText?: string;
  type?: "checkbox";
} & React.ComponentProps<"input">;

export function InputCheckbox({
  labelText = "",
  type = "checkbox",
  ...props
}: InputTextProps) {
  const id = useId();
  return (
    <div className="flex flex-row gap-2 items-center">
      <input
        {...props}
        type={type}
        id={id}
        className={clsx(
          "w-4 h-4 outline-none rounded-sm focus:rind-2 focus:ring-blue-500",
          props.className
        )}
      />
      {labelText && (
        <label htmlFor={id} className="text-sm">
          {labelText}
        </label>
      )}
    </div>
  );
}
