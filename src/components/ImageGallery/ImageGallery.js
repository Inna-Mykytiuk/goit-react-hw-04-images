import PropTypes from "prop-types"
import { ImageGalleryStyled } from "./ImageGallery.styled"
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images, openModal}) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => 
        <ImageGalleryItem openModal={openModal} key={image.id} tags={image.tags} smallImage={image.smallImage} largeImage={image.largeImage} /> 
    )}
  </ImageGalleryStyled>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
}
