import React from "react";
import Hero from "../component/Hero";
import PhotoComponent from "../component/PhotoComponent";
import { OurBootcamp } from "../component/OurBootcamp";
import MoreThanBasics from "../component/MoreThanBasics";
import OurJourney from "../component/OurJourney";
import Testimonial from "../component/Testimonial";
import Partners from "../component/Partners";
import NextCohort from "../component/NextCohort";
import FAQ from "../component/FAQ";
import Subscribe from "../component/Subscribe";
import Community from "../component/Community";

const Home = () => {
  return (
    <div>
      <Hero />
      <PhotoComponent />
      <OurBootcamp />
      <MoreThanBasics />
      <OurJourney />
      <Testimonial />
      <Partners />
      <NextCohort />
      <FAQ />
      <Subscribe />
      <Community />
    </div>
  );
};

export default Home;
