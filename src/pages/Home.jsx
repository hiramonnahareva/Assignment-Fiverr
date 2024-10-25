import About from "../components/About"
import CallToAction from "../components/CallToAction";
import Content from "../components/Content";
import Faq from "../components/Faq";
import FeaturedExperiences from "../components/FeaturedExperiences";
import LandingPage from "../components/LandingPage"
import Testimonial from "../components/Testimonial";
import GuideSection from "../components/GuideSection";
import StakesSection from "../components/StakesSection";
import CTASection from "../components/CTASection";
import PlanSection from "../components/PlanSection";
import PricingSection from "../components/PricingSection";


function Home() {
  return (
   <>
   <LandingPage/>
   <About/>
   <StakesSection/>
   <GuideSection/>
   <CTASection/>
   <FeaturedExperiences/>
   <Content/>
   <PlanSection/>
   <PricingSection/>
   <Faq/>
   <Testimonial/>
   <CallToAction/>
   
    </>

  



   )
 }

export default Home;



// import Header from "../components/Header";
// import ValueProposition from "../components/ValueProposition";
// import StakesSection from "../components/StakesSection";
// import GuideSection from "../components/GuideSection";
// import PlanSection from "../components/PlanSection";
// import CTASection from "../components/CTASection";
// import PricingSection from "../components/PricingSection";

// function Home() {
//   return (
//     <div>
//       <Header />
//       <ValueProposition />
//       <StakesSection />
//       <GuideSection />
//       <PlanSection />
//       <CTASection />
//       <PricingSection />
//     </div>
//   );
// }

// export default Home;

  