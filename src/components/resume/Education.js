import React from "react";

function Education({ education }) {
  return (
    <div className="resumeSection">
      <div className="subHeading">Education</div>
      {education.map((x, i) => (
        <div key={i} className="dataArea pb-20">
          <div className="subSubHeading">{x.degree}</div>
          <div className="flex-row">
            <div className="year">{x.time1}</div>
            {x.time2 && <div className="year">{x.time2}</div>}
          </div>

          <em className="summaryPart">{x.institute}</em>

          <div className="percentMarks">
            {x.percentage && <span className="percText">Percentage - </span>}{" "}
            {x.percentage}
          </div>
          {x.cgpa && (
            <div className="percentMarks">
              <span className="percText">CGPA - </span> {x.cgpa}
            </div>
          )}

          {x.publication && (
            <div className="percentMarks">
              <span className="pubTitle">Publication-</span>
              <span className="time">{x.publication.time}</span>
              <span className="pubText">{x.publication.title}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;
