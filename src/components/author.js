/**
 * Author component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Skills from "../components/skills"
import Img from "gatsby-image"

function Author() {
  return (
    <StaticQuery
      query={authorQuery}
      render={data => {
        return (
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <h2 className="header-light regular-pad">About Me</h2>
                <p className="font-2rem">
                  Hello and welcome to my portfolio! Here you can explore my
                  website to get a better understanding of my background,
                  projects, and experience.
                </p>
                <p className="font-2rem">
                  I'm an engineer who's passionate about full stack software
                  development and robotics, with experience working in the
                  aerospace industry. I have used the skills I learned minoring
                  in computer science to optimize and automate inefficient
                  processes I encountered in my aerospace job, saving employees
                  countless hours on unnecessary and repetitive tasks. Recently
                  I also completed a software engineering bootcamp to further
                  develop this knowledge and gain experience with modern
                  industry standard tools and practices.
                </p>
                <p className="font-2rem">
                  When not at work I often enjoy traveling to other countries
                  and most recently backpacked in Asia for 5 months!
                </p>
              </div>
              <div className="col-md-6 text-center">
                <div className="card portrait">
                  <Img
                    fluid={data.profilePic.childImageSharp.fluid}
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
            <hr className="my-2" />

            <Skills />

            <div className="card">
              <h3 className="text-center my-2">CONTACT</h3>
              <hr className="my-2" />
              <div className="row">
                <div className="col-lg-4 text-center">
                  <a
                    href="https://www.linkedin.com/in/spk2dc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <i className="fab fa-linkedin fa-7x" aria-hidden="true"></i> */}
                    <img
                      src="https://img.icons8.com/fluent/96/000000/linkedin.png"
                      alt="linkedin"
                    />
                    <p>LinkedIn</p>
                  </a>
                </div>

                <div className="col-lg-4 text-center">
                  <a
                    href="mailto:spk2dc@virginia.edu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <i
                      className="fa fa-envelope-square fa-7x"
                      aria-hidden="true"
                    ></i> */}
                    <img
                      src="https://img.icons8.com/material/96/000000/new-post--v1.png"
                      alt="email"
                    />
                    <p>Email</p>
                  </a>
                </div>

                <div className="col-lg-4 text-center">
                  <a
                    href="https://github.com/spk2dc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <i
                      className="fab fa-github-square fa-7x"
                      aria-hidden="true"
                    ></i> */}
                    <img
                      src="https://img.icons8.com/fluent/96/000000/github.png"
                      alt="github"
                    />
                    <p>GitHub</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const authorQuery = graphql`
  query AuthorQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
    profilePic: file(relativePath: { eq: "portrait-semi-professional.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Author
