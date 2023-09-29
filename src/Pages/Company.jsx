import React from "react";
import ComLanding from "../Components/CompanyComponents/ComLanding";
import StaffProfile from "../Components/CompanyComponents/StaffProfile";
import Values from "../Components/CompanyComponents/Values";
import Latest from "../Components/CompanyComponents/Latest";
import Footer from "../Components/GlobalComponent/Footer";
import About from "../Components/CompanyComponents/About";
import PartnerSection from "../Components/CompanyComponents/PartnerSection";
const Company = () => {
  return (
    <main className="  flex flex-col md:gap-44 mb-44">
      <ComLanding />
      <About />
      <StaffProfile />
      <Values />
      <PartnerSection />
      <Latest />
    </main>
  );
};

export default Company;
