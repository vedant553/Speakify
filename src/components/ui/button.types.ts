import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";

export type ButtonVariant = VariantProps<typeof buttonVariants>;

export interface ButtonBaseProps extends ButtonVariant {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}
