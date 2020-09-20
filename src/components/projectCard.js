import React from "react"
import { Link } from "gatsby"

export default props => (
  <div className="project-card">
    <article
      className={`post-card project-article ${props.postClass} ${
        props.node.frontmatter.thumbnail ? `with-image` : `no-image`
      }`}
      style={
        props.node.frontmatter.thumbnail && {
          backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
        }
      }
    ></article>

    <div className="project-card-textpanel">
      <div className="project-card-text">
        <h4 className="text-center">{props.node.frontmatter.title}</h4>
        <p>{props.node.frontmatter.description}</p>
      </div>
    </div>

    <Link to={props.node.fields.slug} className="post-card-link">
      <div
        className="post-card-content"
        style={{ backgroundColor: `#79aeffc7` }}
      >
        <h2 className="project-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
      </div>
    </Link>
  </div>
)
