import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ProjectsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Resume"
        keywords={[`resume`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 className="override-h2">Resume</h2>

          <div className="text-center mt-4">
            <a
              className="button primary mt-4"
              href={data.resumeFile.publicURL}
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
          </div>

          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.resumePic.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    resumePic: file(relativePath: { eq: "resume/Resume 2020CS8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    resumeFile: file(relativePath: { eq: "resume/Resume 2020CS8.pdf" }) {
      name
      publicURL
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ProjectsPage location={props.location} data={data} {...props} />
    )}
  />
)
