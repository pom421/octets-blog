import { cn } from "@/lib/utils";
import { type PropsWithChildren } from "react";

type Props = {
  className: string;
};

export const H1 = ({ children, className }: PropsWithChildren<Props>) => {
  return <h1 className={cn("font-slackey", className)}>{children}</h1>;
};

export const H2 = ({ children, className }: PropsWithChildren<Props>) => {
  return <h2 className={cn("font-slackey", className)}>{children}</h2>;
};

export const H3 = ({ children, className }: PropsWithChildren<Props>) => {
  return <h3 className={cn("font-slackey", className)}>{children}</h3>;
};

export const H4 = ({ children, className }: PropsWithChildren<Props>) => {
  return <h4 className={cn("font-slackey", className)}>{children}</h4>;
};
