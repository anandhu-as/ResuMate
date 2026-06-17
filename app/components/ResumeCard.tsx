import React from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-black break-words">{companyName}</h3>
          <p className="text-sm text-gray-500 break-words">{jobTitle}</p>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resume</span>
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>

      <div className="gradient-border animate-in fade-in duration-1000">
        <div className="w-full h-full">
          <img
            src={imagePath}
            alt="resume"
            className="w-full h-[260px] max-sm:h-[180px] object-cover object-top rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;