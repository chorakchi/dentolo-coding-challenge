import { InputHTMLAttributes } from "react";

type variant = "primary" | "outline";
type extent = "sm" | "md" | "lg" ;

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /** @default 'outline' */
  variant?: variant;
  /**
   * it's the size of element but as input html has a 'size' for a default attribute used 'extent' as the name of it
   */
  /** @default 'md' */
  extent?: extent ;
}
