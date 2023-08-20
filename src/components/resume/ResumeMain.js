import React from "react";
import Head from "../common/head/Head";
import { motion } from "framer-motion";
import { fadeInVariant } from "../../data/variants";
import { resumeData } from "../../data/resumeData";
import Summary from "./Summary";
import Education from "./Education";
import ProfExp from "./ProfExp";
import ButtonWrapper from "../common/button/ButtonWrapper";

function ResumeMain() {
  return (
    <motion.div variants={fadeInVariant} className="resume flex-col">
      <Head title="RESUME" text={resumeData.text} />

      <div className="content">
        <div className="resume-col">
          <Summary summary={resumeData.summary} />
          <Education education={resumeData.education} />
        </div>

        <div className="resume-col">
          <ProfExp profExp={resumeData.profExp} />
        </div>
      </div>
      <ButtonWrapper>
        <button
          onClick={(e) => {
            window.open(
              "https://drive.google.com/file/d/178iWMsqHki1BHKRJK4N8bAKvTqaDFSQm/",
              "_blank"
            );
          }}
        >
          Download Resume
        </button>
      </ButtonWrapper>
    </motion.div>
  );
}

export default ResumeMain;
