// @/app/user/page.tsx

"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/common/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useBookCards } from "@/hooks/books/use-book-cards";
import { ExpandableCard } from "@/components/ui/aceternity/expandable-card";
import { BookCard } from "@/hooks/books/use-book-cards";

export default function Home() {
  const { cards, addBook } = useBookCards();
  const [category, setCategory] = React.useState("all");
  const [condition, setCondition] = React.useState("any");
  const [author, setAuthor] = React.useState("");
  const [activeExchangeBook, setActiveExchangeBook] = React.useState<BookCard | null>(null);
  const [search, setSearch] = React.useState("");

  const filteredCards = cards.filter((card) => {
    const matchesCategory = category === "all" || card.category === category;
    const matchesCondition = condition === "any" || card.condition === condition;
    const matchesAuthor =
      author.trim() === "" || card.description.toLowerCase().includes(author.toLowerCase());
    const matchesSearch =
      search.trim() === "" ||
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.content.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesCondition && matchesAuthor && matchesSearch;
  });

  return (
    <div className="h-screen w-full bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>

      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-auto">
        <div className="w-full max-w-5xl px-4 py-12 flex flex-col items-center justify-center gap-8">
          <Header variant="dashboard" />

          <div className="max-w-2xl w-full text-center">
            <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              Search your books
            </h1>
            <br />
            <div className="flex gap-2 items-center justify-center">
              <Input
                type="text"
                placeholder="The Great Gatsby"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-neutral-800 bg-neutral-950 text-neutral-200 placeholder:text-neutral-700"
              />

              {/* Add Book Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" size="icon" title="Add a book">
                    +
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-neutral-900 text-white border border-neutral-800">
                  <DialogHeader>
                    <DialogTitle>Add a New Book</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const data = new FormData(form);

                      const newBook = {
                        title: data.get("title") as string,
                        description: data.get("author") as string,
                        src: data.get("cover") as string,
                        ctaText: "Exchange",
                        ctaLink: data.get("link") as string,
                        content: data.get("description") as string,
                        category: data.get("category") as string,
                        condition: data.get("condition") as string,
                      };

                      addBook(newBook);
                      form.reset();
                      document.body.click(); // Closes dialog via click-outside fallback
                    }}
                    className="space-y-4 mt-4"
                  >
                    <Input name="title" placeholder="Book Title" required />
                    <Input name="author" placeholder="Author" required />
                    <Input name="cover" placeholder="Cover Image URL" />
                    <Input name="link" placeholder="More Info / External Link" />
                    <Input name="category" placeholder="Category" />
                    <Input name="condition" placeholder="Condition" />
                    <textarea
                      name="description"
                      rows={4}
                      placeholder="Short Description"
                      required
                      className="w-full bg-neutral-950 border border-neutral-700 text-white rounded p-2"
                    />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Submit Book
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
            <Select onValueChange={setCategory}>
              <SelectTrigger className="bg-neutral-950 border border-neutral-800 text-neutral-200">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950 text-neutral-200">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                <SelectItem value="Children">Children’s</SelectItem>
                <SelectItem value="Academic">Academic</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setCondition}>
              <SelectTrigger className="bg-neutral-950 border border-neutral-800 text-neutral-200">
                <SelectValue placeholder="Any Condition" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950 text-neutral-200">
                <SelectItem value="any">Any Condition</SelectItem>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Like New">Like New</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
                <SelectItem value="Acceptable">Acceptable</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-neutral-800 bg-neutral-950 text-neutral-200 placeholder:text-neutral-700"
            />
          </div>

          {/* Expandable Cards */}
          <div className="w-full max-w-3xl h-[400px] overflow-y-auto">
            <ExpandableCard cards={filteredCards} onExchangeClick={setActiveExchangeBook} />
          </div>
        </div>
      </div>

      {/* Exchange Dialog */}
      <Dialog open={!!activeExchangeBook} onOpenChange={(open) => !open && setActiveExchangeBook(null)}>
        <DialogContent className="sm:max-w-[500px] bg-neutral-900 text-white border border-neutral-800">
          <DialogHeader>
            <DialogTitle>
              Exchange for “{activeExchangeBook?.title}”
            </DialogTitle>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);

              // You can log or handle exchange info here
              console.log("Exchanging:", data.get("yourBook"), "Contact:", data.get("contact"));

              form.reset();
              setActiveExchangeBook(null); // Close on submit
            }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-4">
              {/* Book select (full width) */}
              <div className="flex items-center border border-neutral-700 rounded bg-neutral-950 w-full">
                <Select name="yourBook" required>
                  <SelectTrigger className="w-full bg-neutral-950 border-none text-white">
                    <SelectValue placeholder="Select your book" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-950 text-white">
                    {cards.map((book) => (
                      <SelectItem key={book.title} value={book.title}>
                        {book.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Contact input (full width) */}
              <div className="flex items-center border border-neutral-700 rounded bg-neutral-950 w-full">
                <span className="px-3 py-2 bg-neutral-800 text-white rounded-l select-none text-sm font-mono">
                  +251
                </span>
                <input
                  type="tel"
                  name="contact"
                  placeholder="9XXXXXXXX"
                  pattern="[0-9]{9}"
                  required
                  className="flex-1 bg-transparent px-3 py-2 text-white outline-none"
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              Submit Exchange
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
