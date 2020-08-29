/**
 * Author component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Skills() {
  return (
    <StaticQuery
      query={skillQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div class="panel panel-default">
            <h3 class="text-center">SKILLS</h3>
            <hr class="divider px-4" />
            <div class="row">
              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-java fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Java</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-cuttlefish fa-7x" aria-hidden="true"></i>
                <p class="text-muted">C/C++</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-python fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Python</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fa fa-file-excel fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Excel VBA</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-js-square fa-7x" aria-hidden="true"></i>
                <p class="text-muted">JavaScript</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-html5 fa-7x" aria-hidden="true"></i>
                <p class="text-muted">HTML</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-css3-alt fa-7x" aria-hidden="true"></i>
                <p class="text-muted">CSS</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-node fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Node.js</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-node-js fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Express</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-react fa-7x" aria-hidden="true"></i>
                <p class="text-muted">React</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fa fa-database fa-7x" aria-hidden="true"></i>
                <p class="text-muted">SQL / MongoDB</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <div class="icon-jquery">
                  <img
                    src="{{site.baseurl}}/assets/img/miscellaneous/cleanpng_JQuery_logo.png"
                    class="icon-jquery"
                  />
                </div>
                <p class="text-muted">jQuery</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-bootstrap fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Bootstrap</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-github-square fa-7x" aria-hidden="true"></i>
                <p class="text-muted">GitHub</p>
              </div>

              <div className="col-lg-4 col-sm-4 text-center">
                <a
                  href="https://github.com/spk2dc"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <i
                      className="fab fa-github-square fa-7x"
                      aria-hidden="true"
                    ></i> */}
                  <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                  <p>GitHub</p>
                </a>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fa fa-gem fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Ruby</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fa fa-vial fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Jekyll</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-linux fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Linux</p>
              </div>

              <div class="col-lg-2 col-xs-4 text-center">
                <i class="fab fa-android fa-7x" aria-hidden="true"></i>
                <p class="text-muted">Android</p>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const skillQuery = graphql`
  query SkillQuery {
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
