import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function JobDetails({ learning, details, setDetailsOpen, setShowId }) {
  return (
    <div className="jobDetails ">
      <AiOutlineClose
        onClick={() => {
          setDetailsOpen(true);
          setShowId(null);
        }}
        className="close"
      />
      {details.map((x, i) => (
        <div key={i} className="infoRowBackGround flex-col">
          <div className="infoRow">
            <span className="mark">:-&nbsp;</span>
            <span className="infoValue">{x.task}</span>
          </div>
          {x.subInfo?.map((y, j) => (
            <div className="subInfo">-- &nbsp;&nbsp;{y}</div>
          ))}
          {x.link && (
            <span className="link">
              Link-
              <a href={x.link != "not live" && x.link} target="_blank">
                {x.link != "not live"
                  ? x.link
                  : "   Link will be available when the project is live"}
              </a>
            </span>
          )}
        </div>
      ))}
      <div className="line"></div>
      <div className="learning">
        <div className="learnedTitle">
          Skills, Language, or Technology Learned/Enhanced -
        </div>
        <div className="learnedItem">{learning}</div>
      </div>
    </div>
  );
}

export default JobDetails;
