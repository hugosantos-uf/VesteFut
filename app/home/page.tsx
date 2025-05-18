import React from "react";
import HeroTop from "../components/templates/Herotop";
import FeaturedProducts from "../components/organisms/FeaturedProducts";
import CustomerReviews from "../components/organisms/CustomReviews";

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <FeaturedProducts />
      <CustomerReviews />
    </>
  );
}
