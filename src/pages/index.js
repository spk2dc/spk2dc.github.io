import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import "react-image-lightbox/style.css" //only needs to be imported once

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div
        className="header-container jumbotron"
        style={{
          backgroundImage: `url(${data.landingPic.childImageSharp.fluid.src})`,
        }}
      >
        <div className="container">
          <div className="card header-text my-4">
            <h1>Senthil Kannan</h1>
            <h2>Software Developer. Jet Engineer. World Traveler.</h2>
          </div>
        </div>
      </div>

      {console.log("env variable: ", process.env.GATSBY_GOOGLE_ANALYTICS_ID)}

      <Author />
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    landingPic: file(relativePath: { eq: "Jeju_Hallasan_Mountain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery query={indexQuery} render={data => <IndexPage data={data} />} />
)
