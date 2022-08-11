import React from "react";

export function PrimaryButton({
  onClick,
  optionalStyles,
  children,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize font-bold ${optionalStyles}`}
    >
      {children}
    </button>
  );
}
