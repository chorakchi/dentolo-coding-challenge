import { HTMLAttributes } from 'react';

type variant = 'primary' | 'outline'
type size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  /** @default 'primary' */
  variant?: variant;
  /** @default 'md' */
  size?: size;
}