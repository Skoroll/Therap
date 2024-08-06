import React from "react";
import Banner from "../components/Banner";
import books from "../assets/img/banner/books.jpg"; 
import  "../styles/pages/Tools.scss"; 
import { useEffect } from "react";
import Lorem from "../components/Lorem";

function Tool() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const bannerImages = [{ src: books, alt: "Books banner" }];

  return (
    <main>
      <h2>Mes outils</h2>
      <Banner images={bannerImages} />
      <p>
        Je suis formé à l'utilisation de plusieurs outils pour vous accompagner
        le plus efficacement possible
      </p>
      <div className="tool">
        <div className="tool_one tool__article">
          <h3>Tool 1</h3>
          <Lorem />
        </div>

        <div className="tool_two tool__article">
          <h3>Tool 2</h3>
          <Lorem />
        </div>

        <div className="tool_three tool__article">
          <h3>Tool 3</h3>
          <Lorem />
        </div>

        <div className="tool_four tool__article">
          <h3>Tool 4</h3>
          <Lorem />
        </div>
      </div>
    </main>
  );
}

export default Tool;
