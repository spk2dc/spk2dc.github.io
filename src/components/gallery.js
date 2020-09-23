import Img from "gatsby-image"
import React from "react"

const Gallery = ({ images, itemsPerRow }) => {
  function chunk(array, groupSize) {
    const groups = []
    for (let i = 0; i < array.length; i += groupSize) {
      groups.push(array.slice(i, i + groupSize))
    }
    // console.log("chunk: ", groupSize, array)
    return groups
  }

  function sum(array) {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  }

  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow[0])
  // console.log("gallery rows: ", rows)

  return (
    <div className="gallery-container">
      {rows.map(row => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))
        console.log("rowAspectRatioSum: ", rowAspectRatioSum)

        return row.map(image => (
          <Img
            key={image.src}
            className="gallery-image-container"
            fluid={image}
            title={image.caption}
            style={{
              width: `${(image.aspectRatio / rowAspectRatioSum) * 100}%`,
            }}
          />
        ))
      })}
    </div>
  )
}

export default Gallery
