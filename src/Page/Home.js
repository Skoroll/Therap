import React from "react";
import "../styles/pages/Home.scss";
import "../styles/components/Location.scss";
import Location from "../components/Location";
import Who from "../components/Who";
import Why from "../components/Why";
import Office from "../components/Office";
import { useEffect } from "react";

const Home = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <main>
      <Who />
      <Why />
      <Office />
      <Location />
    </main>
  );
};

export default Home;
