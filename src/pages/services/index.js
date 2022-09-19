import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";

const Services = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <Layout>
      <section className="section is-flex-grow-1">
        <div className="container">
          <h1 className="h1">Услуги</h1>
          <nav className="nav-links-list">
            <ul>
              {edges.map(link => (
                <li
                  key={link.node.fields.slug}
                  className="link-wrapper">
                  <Link
                    className="link"
                    to={link.node.fields.slug}>
                    {link.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
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