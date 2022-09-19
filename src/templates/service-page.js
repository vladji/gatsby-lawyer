import React from "react";
import { graphql } from "gatsby";
import cn from "classnames";

import Layout from "../components/Layout";
import Button from "../components/Button";
import FullWidthImage from "../components/FullWidthImage";
import { HTMLContent } from "../components/Content";
import PriceBlock from "../components/PriceBlock";

const ServicePage = ({ data, navigate }) => {
  const { markdownRemark: { frontmatter: { image, title, description, priceList }, html } } = data;
  return (
    <Layout>
      <div className="section padding-bottom-0">
        <div className="container">
          <h1 className="h1">{title}</h1>
        </div>
      </div>
      {image && <FullWidthImage image={image} />}
      <div className={cn("section", { "padding-top-0": !image })}>
        <div className="container">
          <Button className="centered" onClick={() => navigate("/services")}>
            Вернуться к списку услуг
          </Button>
          <p className="main-text margin-vertical-2">{description}</p>
          <HTMLContent content={html} />
          {!!priceList.service.length && <PriceBlock data={priceList} />}
        </div>
      </div>
    </Layout>);
};

export default ServicePage;

export const pageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
        description
        priceList {
          title
          service {
            title
            price
          }
        }
      }
    }
  }
`;