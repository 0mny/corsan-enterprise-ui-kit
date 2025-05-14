
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-muted/50 text-foreground',
    ghost: 'hover:bg-muted/50 text-foreground',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-6 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
