import { Faq, Footer, Hero, Know, Navbar, Platform, Services, Testimonial, Trusted } from "../../components/pages/home-components";
import { Socielity } from "../../components/pages/home-components/socielity";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Trusted/>
      <Services/>
      <Socielity/>
      <Know/>
      <Testimonial/>
      <Faq/>
      <Platform/>
      <Footer/>
    </div>
  );
};
