"use client";
import React from "react";
import styles from "./button.module.css";
import { FaChevronDown } from "react-icons/fa6";

interface BaseButtonProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  variant?: "primary" | "secondary" | "tertiary" | "disabled";
  className?: string;
  fill?: boolean;
  size?: "small" | "medium";
  expandIcon?: boolean;
  expandOpen?: boolean;
}

// Mutually exclusive types for `href` and `action`
interface LinkButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  href: string;
  action?: never;
  type?: never;
}

interface ActionButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
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
  size = "medium",
  expandIcon,
  expandOpen,
  ...rest
}: ButtonProps) => {
  const buttonClasses = `${styles.btn} ${styles[size]} ${
    variant && styles[variant]
  } ${fill && styles.fill} ${className && className}`;
  const isDisabled = variant === "disabled";

  if (href) {
    return (
      <a
        href={isDisabled ? undefined : href}
        className={buttonClasses + size}
        target={isDisabled ? undefined : target}
        rel={isDisabled ? undefined : "noreferrer"}
        aria-disabled={isDisabled}
        aria-label={text}
        onClick={(e) => isDisabled && e.preventDefault()}
        {...rest}
      >
        {text}
        {expandIcon && (
          <FaChevronDown className={expandOpen ? styles.expandOpen : ""} />
        )}
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
      aria-label={text}
      {...rest}
    >
      {text}
      {expandIcon && (
        <FaChevronDown className={expandOpen ? styles.expandOpen : ""} />
      )}
    </button>
  );
};

export default Button;
