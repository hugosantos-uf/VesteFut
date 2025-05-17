import React from "react";
import Content from "../components/templates/Content";
import HeroTop from "../components/templates/Herotop";
import Footer from "../components/organisms/Footer";

export default function HomePage() {
  return (
    <>
      <HeroTop></HeroTop>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}
