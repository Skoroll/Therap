import React from "react";
import "../styles/pages/Home.scss";
import Location from "../components/Location";
import Who from "../components/Who";
const Home = () => {
  return (
    <main>
      <Who />
      <Location />
    </main>
  );
};

export default Home;
