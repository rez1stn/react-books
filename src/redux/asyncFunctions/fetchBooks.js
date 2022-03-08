
import {  fetchAction,isLoading} from "../actions"


export const fetchBooks = (state,nPage) => {
  const API_key = 'AIzaSyDq-GI4GJbi_PcnSqTptfHapmQbBq1l4J8'

  
  
  return dispatch =>{
    
        dispatch(isLoading(true));
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.input}+subject:${state.categories}&startIndex=${nPage*30}&maxResults=30&orderBy=${state.relevance}&key=${API_key}`)
        .then(response => response.json())
        .then(json => dispatch(isLoading(false),dispatch(fetchAction(json))))
        .catch(err => console.log(err))
        
        
        
    
    
      
  }
}