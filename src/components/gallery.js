import Img from "gatsby-image"
import { chunk, sum } from "lodash"
import React from "react"
import { Box } from "rebass"

const Gallery = ({ images, itemsPerRow }) => {
  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow)

  return (
    <div>
      {rows.map(row => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))

        return row.map(image => (
          <Box
            key={image.src}
            as={Img}
            fluid={image}
            title={image.caption}
            width={`${(image.aspectRatio / rowAspectRatioSum) * 100}%`}
            css={{ display: "inline-block" }}
          />
        ))
      })}
    </div>
  )
}

export default Gallery
