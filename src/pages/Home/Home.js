import Aim from "../../components/Aim/Aim";
import Greeting from "../../components/Greeting/Greeting";
import Hero from "../../components/Hero/Hero";
import Reviews from "../../components/Reviews/Reviews";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Greeting />
      <Aim />
      <Reviews />
    </>
  );
};

export default HomePage;
