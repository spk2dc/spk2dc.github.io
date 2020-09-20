import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ProjectsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  function accordionClick(event) {
    event.target.classList.toggle("accordion-active")
    let panel = event.target.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 15 + "px"
    }
  }

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Projects"
        keywords={[`projects`, `gatsby`, `javascript`, `react`]}
      />

      <article className="project-content page-template no-image">
        <div className="post-content-body">
          <h2 className="mb-5">PROJECTS</h2>

          <div className="post-feed">
            <button
              className="accordion text-center"
              onClick={event => accordionClick(event)}
            >
              Software Engineering
            </button>

            <div className="accordion-panel">
              {posts.map(({ node }) => {
                if (node.frontmatter.tags === "software") {
                  return (
                    <ProjectCard
                      key={node.fields.slug}
                      node={node}
                      postClass={`post`}
                    />
                  )
                }
              })}
            </div>

            <button
              className="accordion text-center"
              onClick={event => accordionClick(event)}
            >
              Mechanical Engineering
            </button>

            <div className="accordion-panel">
              {posts.map(({ node }) => {
                if (node.frontmatter.tags === "mechanical") {
                  return (
                    <ProjectCard
                      key={node.fields.slug}
                      node={node}
                      postClass={`post`}
                    />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const projectsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project_post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
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
            tags
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
    query={projectsQuery}
    render={data => (
      <ProjectsPage location={props.location} data={data} {...props} />
    )}
  />
)
