// @/types/book-card.ts

import { JSX } from "react";
export interface BookCard {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
}
