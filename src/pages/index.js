import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import PostCard from "../components/postCard"
import Author from "../components/author"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges
  // let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <div
          className="header-container jumbotron"
          style={{
            backgroundImage: `url(${data.landingPic.childImageSharp.fluid.src})`,
          }}
        >
          {/* <Img fluid={data.landingPic.childImageSharp.fluid} className="" /> */}
          <div className="container">
            <div className="card header-text my-4">
              <h1>Senthil Kannan</h1>
              <h2>Software Developer. Jet Engineer. World Traveler.</h2>
            </div>
          </div>
        </div>
      )}

      <Author />

      {/* <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div> */}
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
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
