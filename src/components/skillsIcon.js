import React from "react"

export default function SkillsIcon({ name, href, src }) {
  return (
    <div className="col-md-2 col-6 text-center">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={src} alt="skill-icon" />
        <p>{name}</p>
      </a>
    </div>
  )
}
