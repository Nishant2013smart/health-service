import React from "react";

const CrouselCard = (props) => {
  const { rounded, cardHeader, cardMedia, cardContent } = props;
  return (
    <div
      className={`card-wrapper ${
        rounded ? "rounded" : ""
      } bg-orange-300 p-2  mx-2 shadow-md lg:w-[30vw] shadow-slate-400 overflow-hidden flex`}
    >
      <div className="w-1/3">
        {cardMedia && (
          <img
            className="card-img rounded-md object-cover"
            src={cardMedia}
            alt={cardHeader}
          />
        )}
      </div>
      <div className="w-2/3">
        {cardHeader && (
          <div className="text-slate-100 text-center font-medium uppercase pb-1">
            {cardHeader}
          </div>
        )}

        {cardContent && (
          <div className="text-yellow-400 text-center text-[2rem] font-bold uppercase ">
            {cardContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default CrouselCard;
