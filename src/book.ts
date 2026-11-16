// TODO: імпортуй потрібні типи з ./types
import type { BookId, Genre, LoanStatus } from "./types";

type BookOptions = {
  id: BookId,
  title: string,
  author: string,
  year: number,
  genre: Genre
}

export class Book {
  // TODO: додай типи до властивостей
  id: BookId;
  title: string;
  author: string;
  year: number;
  genre: Genre;

  private status: LoanStatus = "available";
  private borrowedBy: string | null = null;

  // TODO: реалізуй конструктор з параметром opts
  constructor(opts: BookOptions) {
    this.id = opts.id;
    this.title = opts.title;
    this.author = opts.author;
    this.year = opts.year;
    this.genre = opts.genre;
  }

  // TODO: методи відповідно до ТЗ
  getStatus(): LoanStatus {
    return this.status;
  }

  markBorrowed(personName: string): void {
    if (this.status === "borrowed") {
      throw new Error(`Already borrowed by ${this.borrowedBy}`);
    }
    this.status = "borrowed";
    this.borrowedBy = personName;
  }

  markReturned(): void {
    if (this.status === "available") {
      throw new Error("Already available");
    }
    this.status = "available";
    this.borrowedBy = null;
  }

  getInfo(): string {
    const state =
      this.status === "available" ? "Available" : `Borrowed by ${this.borrowedBy}`;
    return `${this.title} — ${this.author} (${this.year}), ${this.genre} [${state}]`;
  }
}
