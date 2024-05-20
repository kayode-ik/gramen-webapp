import React from "react";
import { Link } from "react-router-dom";

const ServiceList = ({id, key, image, title, description }) => {
  return (
    <Link to={`/services/${id}`}>
      <div
        key={key}
        className="borderDiv flex-itemImg topServe1 text-center flex flex-col items-center"
        style={{ width: "300px" }}
      >
        {/* Image */}
        <img src={image} alt="Service" style={{ width: "7rem" }} />

        {/* Title */}
        <h2 className="text-gray-200 font-Gilroy-bold font-extrabold text-xl uppercase py-5">
          {title}
        </h2>

        {/* Description */}
        <p className="text-white text-sm leading-7 tracking-wider">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceList;
