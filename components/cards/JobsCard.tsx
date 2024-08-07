import React from "react";

const JobsCard = () => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
        <div>Logo</div>
        <div>Content</div>
      </div>
    </div>
  );
};

export default JobsCard;
