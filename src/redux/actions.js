

import { FETCH_BOOKS,SHOW_LOADER, SHOW_BOOK,NEW_INPUT ,UPDATE_PAGE} from "./types";



export const fetchAction = (payload) =>({
  type: FETCH_BOOKS,
  payload
})



export const isLoading = (payload) =>({
  type: SHOW_LOADER, 
  payload
})
export const showBook = (payload)=>({
  type:SHOW_BOOK,
  payload
})

export const newInput = (payload)=>({
  type:NEW_INPUT,
  payload
})
export const newPage = (payload)=>({
  type:UPDATE_PAGE,
  payload
})
