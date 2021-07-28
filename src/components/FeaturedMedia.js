import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FeaturedMedia = ({ image }) => {
  const imageData = getImage(image?.node?.localFile)
  console.log(imageData);
  if (!imageData) return null

  return (
    <div className="news-img">
      <GatsbyImage alt={image.node.altText} image={imageData} />
    </div>
  )
}

export default FeaturedMedia