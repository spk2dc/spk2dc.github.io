import Img from "gatsby-image"
import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

const Gallery = ({ images, itemsPerRow }) => {
  const [isOpen, setIsOpen] = useState(false)

  function chunk(array, groupSize) {
    const groups = []
    for (let i = 0; i < array.length; i += groupSize) {
      groups.push(array.slice(i, i + groupSize))
    }
    return groups
  }

  function sum(array) {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  }

  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow[0])

  return (
    <div className="gallery-container">
      {rows.map(row => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))

        return row.map(image => (
          <div
            className="clickTest"
            onClick={e => {
              console.log("lightbox test", e.target)
              setIsOpen(true)
            }}
          >
            <Img
              key={image.src}
              className="gallery-image-container"
              fluid={image}
              title={image.caption}
              style={{
                width: `${(image.aspectRatio / rowAspectRatioSum) * 100}%`,
              }}
            />

            {isOpen && (
              <Lightbox
                mainSrc={image.src}
                onCloseRequest={() => setIsOpen(false)}
              />
            )}
          </div>
        ))
      })}
    </div>
  )
}

export default Gallery
