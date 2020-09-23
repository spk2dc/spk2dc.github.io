import Img from "gatsby-image"
import { chunk, sum } from "lodash"
import React from "react"
// import { Box } from "rebass"

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
    // array.reduce((accumulator, currentValue) => accumulator + currentValue)
  }

  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow[0])
  // console.log("gallery rows: ", rows)

  return (
    <div>
      {rows.map(row => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))

        return row.map(image => (
          //   <div
          //     key={image.src}
          //     as={Img}
          //     fluid={image}
          //     title={image.caption}
          //     width={`${(image.aspectRatio / rowAspectRatioSum) * 100}%`}
          //     css={{ display: "inline-block" }}
          //   ></div>
          <Img fluid={image} className="kg-image" />
        ))
      })}
    </div>
  )
}

export default Gallery
