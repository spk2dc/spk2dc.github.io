import Img from "gatsby-image"
import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

const Gallery = ({ images, itemsPerRow }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(-1)

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

  function imgClick(rowIndex, imageIndex) {
    setIsOpen(true)
    setGalleryIndex(rowIndex * rows[0].length + imageIndex)
  }

  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow[0])

  return (
    <div className="gallery-container">
      {rows.map((row, rowIndex) => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))

        return row.map((image, imageIndex) => (
          <div
            key={`clickable-${image.src}`}
            className="image-container-clickable"
            onClick={() => {
              imgClick(rowIndex, imageIndex)
            }}
            onKeyPress={e => {
              if (e.key === "Enter") {
                imgClick(rowIndex, imageIndex)
              }
            }}
            role="button"
            tabIndex={0}
            style={{
              width: `${(image.aspectRatio / rowAspectRatioSum) * 100}%`,
            }}
          >
            <Img
              key={image.src}
              className="gallery-image-container"
              fluid={image}
              title={image.caption}
              style={{
                width: `100%`,
              }}
            />
          </div>
        ))
      })}

      {isOpen && (
        <Lightbox
          mainSrc={images[galleryIndex].src}
          onCloseRequest={() => setIsOpen(false)}
          imageTitle={images[galleryIndex].caption}
          nextSrc={images[(galleryIndex + 1) % images.length].src}
          prevSrc={
            images[(galleryIndex + images.length - 1) % images.length].src
          }
          onMovePrevRequest={() =>
            setGalleryIndex((galleryIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setGalleryIndex((galleryIndex + 1) % images.length)
          }
          animationOnKeyInput={true}
        />
      )}
    </div>
  )
}

export default Gallery
