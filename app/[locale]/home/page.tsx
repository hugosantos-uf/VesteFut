import React from "react";
import HeroTop from "@/app/components/templates/Herotop";
import FeaturedProducts from "@/app/components/organisms/FeaturedProducts";
import CustomerReviews from "@/app/components/organisms/CustomReviews";

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <FeaturedProducts />
      <CustomerReviews />
    </>
  );
}
