import React from "react";

const TopCard = (props) => {
  const { rounded, cardHeader, cardMedia, cardContent, cardFooter } = props;
  return (
    <div
      className={`card-wrapper ${
        rounded ? "rounded" : ""
      } bg-purple-500 p-2  mx-2 shadow-md lg:w-[40vw] shadow-slate-700 overflow-hidden`}
    >
      {cardHeader && (
        <div className="text-slate-100 text-center font-medium uppercase pb-1">
          {cardHeader}
        </div>
      )}
      {cardMedia && (
        <img
          className="card-img rounded-md object-cover"
          src={cardMedia}
          alt={cardHeader}
        />
      )}
      {cardContent && (
        <div className="text-yellow-400 text-center text-[2rem] font-bold uppercase ">
          {cardContent}
        </div>
      )}
      {cardFooter && (
        <div className="text-slate-100 text-center uppercase text-[1.2rem] font-semibold">
          {cardFooter}
        </div>
      )}
    </div>
  );
};

export default TopCard;
