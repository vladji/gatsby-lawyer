import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ header, gridItems }) => (
  <>
    <h2 className="h2 margin-top-3">{header}</h2>
    <div className="columns is-multiline">
      {gridItems.map((item, index) => (
        <div key={index} className="column is-6">
          <div className="grid-tile">
            <div className="has-text-centered">
              <div
                style={{
                  width: "240px",
                  display: "inline-block"
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
