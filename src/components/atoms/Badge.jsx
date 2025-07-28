import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Badge = forwardRef(({ 
  className, 
  variant = "default",
  size = "default",
  children, 
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-all duration-200";
  
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-primary-100 text-primary-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };
  
  const sizes = {
    sm: "px-2 py-1 text-xs",
    default: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";
export default Badge;