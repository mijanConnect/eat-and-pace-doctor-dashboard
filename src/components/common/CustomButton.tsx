import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

export default function CustomButton({
  children,
  variant = "default",
  size = "default",
  className = "cursor-pointer px-8! hover:bg-gray-200 hover:text-black",
  ...props
}: CustomButtonProps) {
  return (
    <Button variant={variant} size={size} className={className} {...props}>
      {children}
    </Button>
  );
}
