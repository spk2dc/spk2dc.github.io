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
              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/13679/java"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" />
                  <p>Java</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/40669/c++"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" />
                  <p>C/C++</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/13441/python"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/python.png" />
                  <p>Python</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/13654/microsoft-excel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/ms-excel.png" />
                  <p>Excel VBA</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/108784/javascript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/javascript.png" />
                  <p>JavaScript</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/20909/html-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/html-5.png" />
                  <p>HTML</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/21278/css3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/css3.png" />
                  <p>CSS</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/54087/nodejs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
                  <p>Node.js</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                    height="96px"
                    width="96px"
                  />
                  <p>Express.js</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/t4YbEbA834uH/react-native"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/nolan/96/react-native.png" />
                  <p>React</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/38561/postgresql"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/postgreesql.png" />
                  <p>PostgreSQL</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/74402/mongodb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/mongodb.png" />
                  <p>MongoDB</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/40253/jquery"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/ios-filled/96/000000/jquery.png" />
                  <p>jQuery</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/84710/bootstrap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/bootstrap.png" />
                  <p>Bootstrap</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://github.com/spk2dc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                  <p>GitHub</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/22189/ruby-programming-language"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" />
                  <p>Ruby</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/vIdITG-Ob-NL/full-test-tube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/windows/96/a81103/full-test-tube.png" />
                  <p>Jekyll</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/31085/heroku"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/heroku.png" />
                  <p>Heroku</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/17842/linux"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/linux.png" />
                  <p>Linux</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/GgyRdUL5k1fr/android-os"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/plasticine/96/000000/android-os.png" />
                  <p>Android</p>
                </a>
              </div>

              {/* <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/19978/slack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/slack.png" />
                  <p>Slack</p>
                </a>
              </div> */}

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icons8.com/icon/19292/console"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://img.icons8.com/color/96/000000/console.png" />
                  <p>Bash</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://www.cleanpng.com/png-flask-python-web-framework-representational-state-6384161/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={data.icon_flask.childImageSharp.fluid.src}
                    height="96"
                    width="96"
                  />
                  <p>Python Flask</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://icon-icons.com/icon/file-type-ejs/130626"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={data.icon_ejs.childImageSharp.fluid.src}
                    height="96"
                    width="96"
                  />
                  <p>EJS</p>
                </a>
              </div>

              <div className="col-lg-2 col-sm-4 text-center">
                <a
                  href="https://www.gatsbyjs.com/guidelines/logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={data.icon_gatsby.publicURL}
                    height="96"
                    width="96"
                  />
                  <p>Gatsby</p>
                </a>
              </div>

              {/* <div class="col-lg-2 col-xs-4 text-center">
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
              </div> */}
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

    icon_flask: file(relativePath: { eq: "icon-flask.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    icon_ejs: file(relativePath: { eq: "icon-ejs.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    icon_gatsby: file(relativePath: { eq: "icon-gatsby.svg" }) {
      publicURL
    }
  }
`
