import React from "react";

const PriceBlock = ({ data }) => (
  <div className="price-block margin-top-2">
    <h4 className="price-block__header">{data.title}</h4>
    {data.service.map((service, index) => (
      <div key={index} className="price-block__row">
        <div className="price-block__title">{service.title}</div>
        <div className="price-block__value">{service.price}</div>
      </div>
    ))}
  </div>
);

export default PriceBlock;