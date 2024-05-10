import "./card.css";
import PropTypes from "prop-types";
import React from "react";

export default function Card({ data }) {
  return (
    <>
      <React.Fragment key={data.id}>
        <div className="col">
          <div className="card h-100">
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

Card.prototype = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
