import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";

const Services = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  console.log("services data", edges);
  return (
    <Layout>
      <nav><a href="/service"></a></nav>
      <section className="container">
        <h1>Услуги</h1>
        <nav className="nav-links-block">
          {edges.map(link => (
            <Link
              key={link.node.fields.slug}
              to={link.node.fields.slug}>
              {link.node.frontmatter.title}
            </Link>
          ))}
        </nav>
      </section>
    </Layout>);
};

export default Services;

export const pageQuery = graphql`
  query Services {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service-page"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;