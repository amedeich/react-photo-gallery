import { createSlice } from '@reduxjs/toolkit'

const CLIENT_ID = 'eqLe_zH9s51IMIzNpp1CkVCFEgL0ZtAWCzpflP-hkgY'
const API_URI = 'https://api.unsplash.com/'

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    page: 1,
    total_pages: 0,
    results: [],
    error: undefined,
    isLoading: false,
    currentSlug: 'all'
  },
  reducers: {
    setLoading(state, { payload }) {
      const currentState = {
        ...state,
        error: undefined,
        isLoading: payload
      }
      Object.assign(state, currentState)
    },
    setError(state, { payload }) {
      const currentState = {
        ...state,
        isLoading: false,
        error: payload
      }
      Object.assign(state, currentState)
    },
    setPhotos(state, { payload }) {
      const currentState = {
        page: payload.page,
        total_pages: payload.total_pages,
        results: payload.results,
        isLoading: false,
        error: undefined,
        currentSlug: payload.slug
      }
      Object.assign(state, currentState)
    },
    concatPhotos(state, { payload }) {
      const currentState = {
        ...state,
        page: payload.page,
        results: [...state.results, ...payload.results],
        currentSlug: payload.slug
      }
      Object.assign(state, currentState)
    }
  }
})

export const fetchPhotos = (searchParam, page) => {
  const url = `${API_URI}search/photos?query=${searchParam}&`
  const _page = page ? page : 1
  return dispatch => {
    dispatch(galleryActions.setLoading(true))
    const fetchPhotosRequest = async () => {
      const req = await fetch(`${url}page=${_page}&client_id=${CLIENT_ID}`)
      if (!req.ok) {
        dispatch(galleryActions.setError('Ha ocurrido un error solicitando las imágenes, por favor intenta de nuevo.'))
      }

      const response = await req.json()

      const actionData = { ...response, slug: searchParam, page: _page }

      dispatch(!page ? galleryActions.setPhotos(actionData) : galleryActions.concatPhotos(actionData))
      dispatch(galleryActions.setLoading(false))
    }

    fetchPhotosRequest().catch(_ => {
      dispatch(galleryActions.setError('Ha ocurrido un error solicitando las imágenes, por favor intenta de nuevo.'))
    })
  }
}

export const galleryActions = gallerySlice.actions

export default gallerySlice
