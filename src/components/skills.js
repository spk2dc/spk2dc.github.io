/**
 * Author component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SkillsIcon from "../components/skillsIcon"

export default function Skills() {
  let iconData = [
    {
      name: "Java",
      href: "https://icons8.com/icon/13679/java",
      src: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png",
    },
    {
      name: "C/C++",
      href: "https://icons8.com/icon/40669/c++",
      src: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
    },
    {
      name: "Python",
      href: "https://icons8.com/icon/13441/python",
      src: "https://img.icons8.com/color/96/000000/python.png",
    },
    {
      name: "Excel VBA",
      href: "https://icons8.com/icon/13654/microsoft-excel",
      src: "https://img.icons8.com/color/96/000000/ms-excel.png",
    },
    {
      name: "JavaScript",
      href: "https://icons8.com/icon/108784/javascript",
      src: "https://img.icons8.com/color/96/000000/javascript.png",
    },
    {
      name: "HTML",
      href: "https://icons8.com/icon/20909/html-5",
      src: "https://img.icons8.com/color/96/000000/html-5.png",
    },
    {
      name: "CSS",
      href: "https://icons8.com/icon/21278/css3",
      src: "https://img.icons8.com/color/96/000000/css3.png",
    },
    {
      name: "Node.js",
      href: "https://icons8.com/icon/54087/nodejs",
      src: "https://img.icons8.com/color/96/000000/nodejs.png",
    },
    {
      name: "Express.js",
      href: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
      src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    },
    {
      name: "React",
      href: "https://icons8.com/icon/t4YbEbA834uH/react-native",
      src: "https://img.icons8.com/nolan/96/react-native.png",
    },
    {
      name: "PostgreSQL",
      href: "https://icons8.com/icon/38561/postgresql",
      src: "https://img.icons8.com/color/96/000000/postgreesql.png",
    },
    {
      name: "MongoDB",
      href: "https://icons8.com/icon/74402/mongodb",
      src: "https://img.icons8.com/color/96/000000/mongodb.png",
    },
    {
      name: "jQuery",
      href: "https://icons8.com/icon/40253/jquery",
      src: "https://img.icons8.com/ios-filled/96/000000/jquery.png",
    },
    {
      name: "Bootstrap",
      href: "https://icons8.com/icon/84710/bootstrap",
      src: "https://img.icons8.com/color/96/000000/bootstrap.png",
    },
    {
      name: "GitHub",
      href: "https://github.com/spk2dc",
      src: "https://img.icons8.com/fluent/96/000000/github.png",
    },
    {
      name: "Ruby",
      href: "https://icons8.com/icon/22189/ruby-programming-language",
      src:
        "https://img.icons8.com/color/96/000000/ruby-programming-language.png",
    },
    {
      name: "Jekyll",
      href: "https://icons8.com/icon/vIdITG-Ob-NL/full-test-tube",
      src: "https://img.icons8.com/windows/96/a81103/full-test-tube.png",
    },
    {
      name: "Heroku",
      href: "https://icons8.com/icon/31085/heroku",
      src: "https://img.icons8.com/color/96/000000/heroku.png",
    },
    {
      name: "Linux",
      href: "https://icons8.com/icon/17842/linux",
      src: "https://img.icons8.com/color/96/000000/linux.png",
    },
    {
      name: "Android",
      href: "https://icons8.com/icon/GgyRdUL5k1fr/android-os",
      src: "https://img.icons8.com/plasticine/96/000000/android-os.png",
    },
    {
      name: "Bash",
      href: "https://icons8.com/icon/19292/console",
      src: "https://img.icons8.com/color/96/000000/console.png",
    },
    {
      name: "Python Flask",
      href:
        "https://www.cleanpng.com/png-flask-python-web-framework-representational-state-6384161/",
      // src: {data.icon_flask.childImageSharp.fluid.src}
    },
    {
      name: "EJS",
      href: "https://icon-icons.com/icon/file-type-ejs/130626",
      // src: {data.icon_ejs.childImageSharp.fluid.src}
    },
    {
      name: "Gatsby",
      href: "https://www.gatsbyjs.com/guidelines/logo",
      // src: {data.icon_gatsby.publicURL}
    },
  ]

  return (
    <StaticQuery
      query={skillQuery}
      render={data => {
        return (
          <div className="card my-4">
            <h3 className="text-center my-2">SKILLS</h3>
            <hr className="my-2" />
            <div className="row skills-body">
              {iconData.map(icon => {
                return (
                  <SkillsIcon
                    name={icon.name}
                    href={icon.href}
                    src={icon.src}
                  />
                )
              })}
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
