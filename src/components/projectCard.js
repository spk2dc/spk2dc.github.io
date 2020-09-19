import React from "react"
import { Link } from "gatsby"

export default props => (
  <div className="project-card">
    <article
      className={`post-card ${props.postClass} ${
        props.node.frontmatter.thumbnail ? `with-image` : `no-image`
      }`}
      style={
        props.node.frontmatter.thumbnail && {
          backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
        }
      }
    >
      <Link to={props.node.fields.slug} className="post-card-link">
        <div
          className="post-card-content"
          style={{ backgroundColor: `#79aeffc7` }}
        >
          <h2 className="post-card-title">
            {props.node.frontmatter.title || props.node.fields.slug}
          </h2>
        </div>
      </Link>
    </article>

    <div className="project-card-text">
      {props.node.frontmatter.title}
      {props.node.frontmatter.description}
    </div>
  </div>
)
