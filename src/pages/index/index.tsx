import React from "react";
import AboutBlock from "./blocks/About";
import FaqBlock from "./blocks/Faq";
import ServicesBlock from "./blocks/Services";
import WelcomeBlock from "./blocks/Welcome";

export default function IndexPage() {
  // Render
  return (<>
    <WelcomeBlock />
    <ServicesBlock />
    <AboutBlock />
    <FaqBlock />
  </>);
}
