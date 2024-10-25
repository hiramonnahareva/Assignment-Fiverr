import About from "./components/About"
import CallToAction from "./components/CallToAction";
import Content from "./components/Content";
import Faq from "./components/Faq";
import FeaturedExperiences from "./components/FeaturedExperiences";
import LandingPage from "./components/LandingPage"
import Testimonial from "./components/Testimonial";


function Home() {
  return (
   <>
   <LandingPage/>
   <About/>
   <FeaturedExperiences/>
   <Content/>
   <Faq/>
   <Testimonial/>
   <CallToAction/>
   
   </>
  )
}

export default Home;
  