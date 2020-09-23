import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const TravelPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Travels"
        keywords={[`travel`, `gatsby`, `javascript`, `react`]}
      />

      <article className="project-content page-template no-image">
        <div className="post-content-body">
          <h2 className="override-h2">TRAVELS</h2>
          <div className="container text-left div-travel-text">
            <p>
              One of my favorite ways to spend my time is traveling. I have
              always had a curiousity to explore the unknown and a passion for
              seeking out new experiences. The first time I studied abroad in
              college, I knew I had to do it again and keep wandering as much as
              I could to see what else was out there just beyond the horizon in
              places I had never been to before.
            </p>
            <p>
              This drive has led me on countless trips to countries scattered
              across the world, from India to Germany to South Africa to
              Thailand. Most recently I took my biggest trip of all. In October
              of 2019 I decided to backpack across Asia for 5 months. I started
              off traveling through Japan, took a boat to South Korea, then
              headed to Taiwan. Unfortunately, soon after I arrived in Taiwan,
              so did the coronavirus pandemic. Despite having to end my trip a
              little early, I am grateful to have had the opportunity and
              privelege to take such an extensive trip through so many new
              places.
            </p>

            <p>
              Traveling has given me invaluable experiences that have helped me
              grow as a person and learn about cultures and people different
              from the ones I have been raised around. Being exposed to diverse
              perspectives from all over the world has helped give me a unique
              way of approaching problems and working together with people from
              all walks of life to solve today's challenges in new ways.
            </p>

            <p>Below are some of my favorite pictures from my travels.</p>
          </div>

          <h4 className="text-center my-2">JAPAN</h4>
          <Gallery
            images={data.galleryJapan.edges.map(({ node }) => ({
              id: node.id,
              ...node.childImageSharp.fluid,
              caption: `${node.name}`,
            }))}
            itemsPerRow={[4, 5]}
          />
          <br />

          <h4 className="text-center my-2">KOREA</h4>
          <Gallery
            images={data.galleryKorea.edges.map(({ node }) => ({
              id: node.id,
              ...node.childImageSharp.fluid,
              caption: `${node.name}`,
            }))}
            itemsPerRow={[4, 5]}
          />
          <br />

          <h4 className="text-center my-2">TAIWAN</h4>
          <Gallery
            images={data.galleryTaiwan.edges.map(({ node }) => ({
              id: node.id,
              ...node.childImageSharp.fluid,
              caption: `${node.name}`,
            }))}
            itemsPerRow={[4, 5]}
          />
          <br />
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

    galleryJapan: allFile(
      filter: { relativeDirectory: { eq: "travel-photos/Japan" } }
    ) {
      edges {
        node {
          name
          id
          relativePath
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    galleryKorea: allFile(
      filter: { relativeDirectory: { eq: "travel-photos/Korea" } }
    ) {
      edges {
        node {
          name
          id
          relativePath
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    galleryTaiwan: allFile(
      filter: { relativeDirectory: { eq: "travel-photos/Taiwan" } }
    ) {
      edges {
        node {
          name
          id
          relativePath
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
      <TravelPage location={props.location} data={data} {...props} />
    )}
  />
)
