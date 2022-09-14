import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

const ServicePage = ({ data, navigate }) => {
  console.log('props', navigate);
  const { markdownRemark: { frontmatter: { title, description }, html } } = data;
  return (
    <Layout>
      <section className="container">
        <button type='button' onClick={() => navigate("/services")}>Вернуться к списку услуг</button>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="service-content">
          <HTMLContent content={html} />
        </div>
      </section>
    </Layout>)
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
        sublinks {
          title
          link
        }
        title
        description
      }
    }
  }
`;