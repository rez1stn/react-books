
import {  FETCH_BOOKS, SHOW_LOADER, UPDATE_PAGE, NEW_INPUT} from "./types"

const initialState = {
  input:{},
  books:[],
  loading: false,
  total:0,
  currentPage:0
}
  
  



export const fetchReducer = (state = initialState,action)=>{


  switch(action.type){
    case NEW_INPUT:
      return {...state,input:action.payload}
    case UPDATE_PAGE:
      return{...state,currentPage:action.payload}
    
    case SHOW_LOADER:
      return {...state,loading:action.payload}

    case FETCH_BOOKS:
      return {...state,books:action.payload.items,total:action.payload.totalItems}

    default:
      return state
  }
}

