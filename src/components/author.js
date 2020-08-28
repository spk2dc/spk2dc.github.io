/**
 * Author component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Author() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h2 class="header-light regular-pad">About Me</h2>
                <p class="lead">
                  Hello and welcome to my portfolio! Here you can explore my
                  website to get a better understanding of my background,
                  projects, and experience.
                </p>
                <p class="lead">
                  I'm an engineer who's passionate about full stack software
                  development and robotics, with experience working in the
                  aerospace industry. I have used the skills I learned minoring
                  in computer science to optimize and automate inefficient
                  processes I encountered in my aerospace job to save employees
                  countless hours on unnecessary and repetitive tasks. Recently
                  I also completed a software engineering bootcamp to further
                  develop this knowledge and gain experience with modern
                  industry standard tools and practices.
                </p>
                <p class="lead">
                  When not at work I often enjoy traveling to other countries
                  and most recently backpacked in Asia for 5 months!
                </p>
              </div>
              <div class="col-md-6 text-center">
                <div class="panel panel-default portrait">
                  {/* <img src="{{ "/assets/img/miscellaneous/portrait-semi-professional.jpg"
                  | relative_url }}" alt="Jekyll logo" class="img-responsive"> */}
                </div>
              </div>
            </div>
            <hr />

            {/* {% include skills.html %} */}

            <div class="panel panel-default">
              <h3 class="text-center">CONTACT</h3>
              <hr class="divider px-4" />
              <div class="row">
                <a
                  href="https://www.linkedin.com/in/spk2dc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="col-lg-4 col-xs-4 text-center">
                    <i class="fab fa-linkedin fa-7x" aria-hidden="true"></i>
                    <p>LinkedIn</p>
                  </div>
                </a>

                <a
                  href="mailto:spk2dc@virginia.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="col-lg-4 col-xs-4 text-center">
                    <i
                      class="fa fa-envelope-square fa-7x"
                      aria-hidden="true"
                    ></i>
                    <p>Email</p>
                  </div>
                </a>

                <a
                  href="https://github.com/spk2dc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="col-lg-4 col-xs-4 text-center">
                    <i
                      class="fab fa-github-square fa-7x"
                      aria-hidden="true"
                    ></i>
                    <p>GitHub</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
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
  }
`

export default Author
