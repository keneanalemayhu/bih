// @/hooks/books/use-book-cards.ts

import { useState } from "react";

export interface BookCard {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: string;
  category: string;
  condition: string;
}

const initialCards: BookCard[] = [
  {
    title: "The Great Gatsby",
    description: "F. Scott Fitzgerald",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/TheGreatGatsby_1925jacket.jpeg/640px-TheGreatGatsby_1925jacket.jpeg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
    content:
      "*The Great Gatsby* is a 1925 novel by F. Scott Fitzgerald. Set in the Jazz Age, it tells the story of Jay Gatsby’s dream for Daisy Buchanan, touching on themes of wealth, love, and the American Dream.",
    category: "Fiction",
    condition: "Like New",
  },
  {
    title: "Things Fall Apart",
    description: "Chinua Achebe",
    src: "https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    content:
      "*Things Fall Apart* (1958) by Chinua Achebe explores the effects of colonialism on traditional Igbo society. Through Okonkwo’s story, it critiques the destructive impact of British rule in Africa.",
    category: "Fiction",
    condition: "Good",
  },
  {
    title: "Fikir Eske Mekabir",
    description: "Haddis Alemayehu",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fiker_Esike_Mekaber.jpg/800px-Fiker_Esike_Mekaber.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Fikir_Eske_Mekabir",
    content:
      "*Fikir Eske Mekabir* is a revered Ethiopian novel delving into love, tradition, and social structures in 20th-century Ethiopia. Haddis Alemayehu's masterful storytelling makes it an enduring classic.",
    category: "Fiction",
    condition: "Acceptable",
  },
  {
    title: "The Alchemist",
    description: "Paulo Coelho",
    src: "https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/The_Alchemist_(novel)",
    content:
      "In *The Alchemist*, Paulo Coelho follows Santiago’s journey to fulfill his personal legend. This philosophical tale of purpose and destiny has inspired millions worldwide.",
    category: "Fiction",
    condition: "New",
  },
  {
    title: "Oromay",
    description: "Bealu Girma",
    src: "https://i.imgur.com/QwUqxAD.jpeg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Bealu_Girma",
    content:
      "*Oromay* is a political novel by Bealu Girma that critiques the Derg regime in Ethiopia. The book's bold commentary is believed to have led to the author's forced disappearance.",
    category: "Academic",
    condition: "Good",
  },
  {
    title: "Educated",
    description: "Tara Westover",
    src: "https://upload.wikimedia.org/wikipedia/en/8/8e/Educated_cover.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Educated_(book)",
    content:
      "*Educated* is a memoir by Tara Westover, recounting her journey from growing up in a strict and abusive household in rural Idaho to earning a PhD from Cambridge University.",
    category: "Non-Fiction",
    condition: "New",
  },
  {
    title: "Matilda",
    description: "Roald Dahl",
    src: "https://upload.wikimedia.org/wikipedia/en/6/6c/Matilda_cover.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Matilda_(novel)",
    content:
      "*Matilda* is a beloved children’s novel by Roald Dahl about a gifted girl with telekinetic powers who overcomes adversity with intelligence and heart.",
    category: "Children",
    condition: "Like New",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    description: "Yuval Noah Harari",
    src: "https://upload.wikimedia.org/wikipedia/en/8/8e/Sapiens_A_Brief_History_of_Humankind.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
    content:
      "Harari’s *Sapiens* explores the evolution of Homo sapiens and how shared myths, language, and culture shaped the modern world.",
    category: "Non-Fiction",
    condition: "Good",
  },
  {
    title: "Charlotte's Web",
    description: "E. B. White",
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/CharlotteWeb.png",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Charlotte%27s_Web",
    content:
      "*Charlotte’s Web* is a classic children’s novel about friendship, loyalty, and life on a farm, centered around a pig named Wilbur and his spider friend Charlotte.",
    category: "Children",
    condition: "Acceptable",
  },
  {
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman",
    src: "https://upload.wikimedia.org/wikipedia/en/8/8c/Thinking%2C_Fast_and_Slow.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
    content:
      "A groundbreaking book in behavioral economics, Kahneman explores the two systems that drive the way we think: fast, intuitive thinking and slower, logical thinking.",
    category: "Academic",
    condition: "New",
  },
  {
    title: "The Little Prince",
    description: "Antoine de Saint-Exupéry",
    src: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/The_Little_Prince",
    content:
      "A philosophical tale disguised as a children's story, *The Little Prince* teaches lessons about love, loss, and human nature.",
    category: "Children",
    condition: "Good",
  },
  {
    title: "A Brief History of Time",
    description: "Stephen Hawking",
    src: "https://upload.wikimedia.org/wikipedia/en/c/c8/A_Brief_History_of_Time.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time",
    content:
      "Stephen Hawking explores black holes, the big bang, and quantum physics in a book aimed at general readers curious about the universe.",
    category: "Academic",
    condition: "Acceptable",
  },
  {
    title: "The Catcher in the Rye",
    description: "J. D. Salinger",
    src: "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye",
    content:
      "Holden Caulfield’s narrative explores teenage alienation and angst in one of the most iconic novels of American literature.",
    category: "Fiction",
    condition: "Like New",
  },
  {
    title: "I Know Why the Caged Bird Sings",
    description: "Maya Angelou",
    src: "https://upload.wikimedia.org/wikipedia/en/e/e7/I_Know_Why_the_Caged_Bird_Sings_(book_cover).jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/I_Know_Why_the_Caged_Bird_Sings",
    content:
      "*I Know Why the Caged Bird Sings* is Maya Angelou’s powerful memoir about identity, trauma, resilience, and the power of words.",
    category: "Non-Fiction",
    condition: "Acceptable",
  },
  {
    title: "Harry Potter and the Philosopher’s Stone",
    description: "J.K. Rowling",
    src: "https://upload.wikimedia.org/wikipedia/en/6/6b/HP1cover.jpg",
    ctaText: "Exchange",
    ctaLink: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
    content:
      "The beginning of the iconic Harry Potter series introduces a magical world of friendship, bravery, and destiny.",
    category: "Children",
    condition: "New",
  },
];

export function useBookCards() {
  const [cards, setCards] = useState<BookCard[]>(initialCards);

  const addBook = (book: BookCard) => {
    setCards((prev) => [book, ...prev]);
  };

  return { cards, addBook };
}