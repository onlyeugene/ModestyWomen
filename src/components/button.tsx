import React from "react";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  text?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  size = "md",
  type = "button",
  className = "",
  text,
  children,
  ...rest
}) => {
  const sizeClass =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${sizeClass} ${className}`}
      {...rest}
    >
      {children ?? text}
    </button>
  );
};

export default Button;
