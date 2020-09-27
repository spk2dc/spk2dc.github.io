import Img from "gatsby-image"
import React, { useState } from "react"
import Lightbox from "react-image-lightbox"

const Gallery = ({ images, itemsPerRow }) => {
  // state used to display or hide lightbox
  const [isOpen, setIsOpen] = useState(false)
  // state used to display currently selected image from the array
  const [galleryIndex, setGalleryIndex] = useState(-1)

  // split array of all images into groups of desired row size
  function chunk(array, groupSize) {
    const groups = []
    for (let i = 0; i < array.length; i += groupSize) {
      groups.push(array.slice(i, i + groupSize))
    }
    return groups
  }

  //sum the aspect ratios for a row to get entire row size
  function sum(array) {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  }

  // open lightbox and set index of image to be displayed when click event is triggered
  function imgClick(rowIndex, imageIndex) {
    setIsOpen(true)
    setGalleryIndex(rowIndex * rows[0].length + imageIndex)
  }

  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow[0])

  return (
    // entire gallery container with all images inside
    <div className="gallery-container">
      {// loop through each row and display each image
      rows.map((row, rowIndex) => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))

        // return all images in current row
        return row.map((image, imageIndex) => (
          // div wrapper around image used to set click listener and scale displayed size
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

      {// display lightbox if isOpen state is true
      isOpen && (
        // lightbox component displaying image with current index state based on image wrapper div that was clicked
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
