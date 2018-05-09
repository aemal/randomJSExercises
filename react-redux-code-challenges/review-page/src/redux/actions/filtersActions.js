import * as filterConsts from '../constants/filterConsts'

export const setSeacrhedKeywords = (keyWords) => {
  return ({
    type: filterConsts.SET_SEARCH_KEYWORDS,
    payload: { keyWords }
  })
}

export const setSearchedStarsCount = (count) => {
  return ({
    type: filterConsts.SET_SEARCH_STARS_COUNT,
    payload: { count }
  })
}
