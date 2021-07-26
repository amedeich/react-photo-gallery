import { large, medium, small } from '@/_sass/export-variables.module.scss'
import React from 'react'
import Masonry from 'react-masonry-css'
import { useSelector } from 'react-redux'
import './Masonry.scss'

const [$small] = small.split('px')
const [$medium] = medium.split('px')
const [$large] = large.split('px')

const breakpointColumnsObj = {
  default: 4,
  [$large]: 3,
  [$medium]: 2,
  [$small]: 1
}

const PhotosGrid = () => {
  const { results: images } = useSelector(state => state.gallery)
  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      {images.map(image => (
        <img
          src={image.urls.small}
          key={image.id}
          alt={image.alt_description}
          style={{ width: '100%', borderRadius: 12 }}
        />
      ))}
    </Masonry>
  )
}

export default React.memo(PhotosGrid)
