import React from "react"

export default function SkillsIcon({ name, href, src, height, width }) {
  return (
    <div className="col-md-2 col-4 text-center">
      {// if height/width does not exist display image without it, otherwise use them
      height === -1 || width === -1 ? (
        <img src={src} alt="skill-icon" />
      ) : (
        <img src={src} alt="skill-icon" height={height} width={width} />
      )}
      <p>{name}</p>
    </div>
  )
}
