import React from "react";
import "../styles/Books.css";
import FadeInSection from "./FadeInSection";

const books = [
  {
    title: "Just Read and Enjoy",
    cover: "/assets/books/just-read-and-enjoy.jpg",
    platform: "amazon · paperback",
    status: "published 2020",
    link: "https://www.amazon.in/dp/1648990770",
  },
  {
    title: "Enjoy by Reading",
    cover: "/assets/books/enjoy-by-reading.jpg",
    platform: "amazon · paperback",
    status: "published 2020",
    link: "https://www.amazon.in/dp/1649510888",
  },
  {
    title: "Beyond the Throne",
    cover: "/assets/books/beyond-the-throne.png",
    platform: "royalroad · webnovel",
    status: "21 chapters",
    link: "https://www.royalroad.com/fiction/168753/beyond-the-throne",
  },
];

const Books = () => {
  return (
    <div id="books">
      <div className="section-header">
        <span className="section-title">
          <span className="section-number">04.</span>books
        </span>
      </div>
      <FadeInSection delay="200ms">
        <div className="books-description">
          When I'm not coding, I write fiction — two books published on Amazon
          and a webnovel running on RoyalRoad. Click a cover to start reading.
        </div>
      </FadeInSection>
      <div className="books-container">
        <ul className="books-grid">
          {books.map((book, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="books-card">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="books-cover-link"
                  title={book.title}
                >
                  <img
                    className="books-cover"
                    src={book.cover}
                    alt={`${book.title} cover`}
                  />
                </a>
                <div className="books-title">{book.title}</div>
                <div className="books-platform">{book.platform}</div>
                <div className="books-status">{book.status}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
