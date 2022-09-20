import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const IndexPageTemplate = ({
                                    mainpitch, intro
                                  }) => {
  return (
    <>
      {/*<Slider sliderData={sliderData} />*/}
      <section className="section">
        <div className="container">
          <h1 className="h1">{mainpitch.title}</h1>
          <div className="float-content">
            <div className="float-content__image">
              <PreviewCompatibleImage imageInfo={mainpitch} />
            </div>
            <p className="main-text">{mainpitch.description}</p>
          </div>
          <Features header={intro.header} gridItems={intro.blurbs} />
        </div>
      </section>
    </>);
};

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
    </Layout>);
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
        }
        intro {
          header
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
        }
      }
    }
  }
`;
