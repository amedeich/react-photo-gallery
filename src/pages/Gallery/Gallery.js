import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PhotosGrid from '../../components/Photos/Photos'
import { fetchPhotos } from '../../store/gallery-slice'
import styles from './Gallery.module.scss'
import './Masonry.scss'

const Loading = React.memo(() => {
  return (
    <div style={{ textAlign: 'center', marginTop: 10 }}>
      <small>Cargando fotos...</small>
    </div>
  )
})

const Error = React.memo(({ error }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: 10 }}>
      <small>{error}</small>
    </div>
  )
})

const Gallery = () => {
  const { results: images, total_pages, isLoading, error, currentSlug, page } = useSelector(state => state.gallery)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhotos('all'))
  }, [dispatch])

  const loadMoreHandler = () => {
    const updatedPage = page + 1
    const slug = currentSlug
    if (total_pages < updatedPage) {
      return
    }
    dispatch(fetchPhotos(slug, updatedPage))
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <small>{error}</small>
      </div>
    )
  }

  return (
    <>
      {isLoading || !error || (images.length === 0 && <Loading />)}
      {!isLoading || error || (images.length === 0 && <Error error={error} />)}
      {images.length >= 10 && (
        <>
          <PhotosGrid />
          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <button disabled={isLoading} onClick={loadMoreHandler} className={styles.loadMore}>
              Mostrar más
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default React.memo(Gallery)
