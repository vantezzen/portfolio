import React from "react";

function Button({
  children,
  highlighted = false,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${
        highlighted
          ? "text-fire-500 bg-fire-900 bg-opacity-10 hover:bg-opacity-20"
          : "text-fire-500 hover:bg-fire-900 hover:bg-opacity-10"
      }  font-medium rounded-lg py-3 px-6 duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
