import Footer from "../../components/Footer/Footer";
import React from "react";
import ProgramIncentives from "../../components/ProgramIncentives/ProgramIncentives";
import ProgramBenefits from "../../components/ProgramBenefits/ProgramBenefits";
import ProgramResult from "../../components/ProgramResult/ProgramResult";
import ProgramSchedule from "../../components/ProgramSchedule/ProgramSchedule";
import ProgrammAddInfo from "../../components/ProgrammAddInfo/ProgrammAddInfo";

const ProgramPage = () => {
  return (
    <>
      <ProgramIncentives />
      <ProgramBenefits />
      <ProgramResult />
      <ProgramSchedule />
      <ProgrammAddInfo />
      <Footer/>
    </>
  );
};

export default ProgramPage;
