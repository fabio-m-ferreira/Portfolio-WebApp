"use client";
import React from "react";
import styles from "./button.module.css";

interface BaseButtonProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  variant?: "primary" | "secondary" | "disabled";
  className?: string;
  fill?: boolean;
}

// Mutually exclusive types for `href` and `action`
interface LinkButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  action?: never;
  type?: never;
}

interface ActionButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary";
  action?: () => void;
  href?: never;
}

interface DisabledButtonProps extends BaseButtonProps {
  variant?: "disabled";
  action?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | ActionButtonProps | DisabledButtonProps;

const Button = ({
  text,
  type,
  href,
  action,
  target,
  variant = "primary",
  className,
  fill,
  ...rest
}: ButtonProps) => {
  const buttonClasses = `${styles.btn} ${variant && styles[variant]} ${
    fill && styles.fill
  } ${className && className}`;
  const isDisabled = variant === "disabled";

  if (href) {
    return (
      <a
        href={isDisabled ? undefined : href}
        className={buttonClasses}
        target={isDisabled ? undefined : target}
        rel={isDisabled ? undefined : "noreferrer"}
        aria-disabled={isDisabled}
        onClick={(e) => isDisabled && e.preventDefault()}
        {...rest}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={isDisabled || !action ? undefined : action}
      type={isDisabled ? undefined : type}
      className={buttonClasses}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
