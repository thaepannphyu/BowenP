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
    <main className="main-content  lg:main-content-lg  mx-auto mt-16 md:mt-11  flex flex-col gap-14 md:gap-44 mb-44 overflow-hidden">
      <ComLanding />
      <About />
      <StaffProfile />
      <Values />
      <PartnerSection />
      <Latest />
      {/* done raw*/}
    </main>
  );
};

export default Company;
