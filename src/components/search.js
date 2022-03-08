
import { useDispatch} from "react-redux"
import {useEffect, useState} from 'react'

import { fetchBooks } from "../redux/asyncFunctions/fetchBooks"
import { newInput } from "../redux/actions"





export const Search = () =>{
  const dispatch = useDispatch()
  let currentPage = 0
  const [onClick,setClick] = useState({})
  const [state,setState] = useState({
    input:'',
    categories:'',
    relevance: 'relevance',
  })
  
    useEffect(()=>{if (Object.keys(onClick).length !== 0 && onClick.input.trim() !== '') {
      
      dispatch(fetchBooks(state,currentPage),console.log(currentPage));
      dispatch(newInput(onClick))
      
    }},[onClick])
 
    

    const handlerSubmit = event =>{
  
      event.preventDefault()
      
      setClick(state)
      
      
      
    }
    const changeHandler = event =>{
      event.preventDefault()
      setState({...state,[event.target.name]:event.target.value})
      
    }
    


  return(
    
    
      <form onSubmit = {handlerSubmit} className='position-absolute top-50 start-50 translate-middle '>


        <div class="input-group mb-3">
          <input 
          type="text" 
          className="form-control opacity-75 autocomplete-off" 
          placeholder="Search" 
          aria-label="Recipient's username" 
          aria-describedby="basic-addon2"
          name='input' 
          onChange={changeHandler}>
          </input>
          <div className="input-group-append">
            <button className="btn btn-primary opacity-75" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <path opacity="1" fillRule="evenodd" clipRule="evenodd" 
                              d="M16.3775 14.5H15.385L15.04 14.1575C16.2588 12.7363 17 10.8938 17 
                              8.87502C17 4.38752 13.3625 0.750021 8.875 0.750021C4.3875 0.750021 
                              0.75 4.38752 0.75 8.87502C0.75 13.3625 4.3875 17 8.875 17C10.8938 
                              17 12.735 16.26 14.1563 15.0425L14.5013 15.385V16.375L20.7488 22.6138L22.6125 
                              20.75L16.3775 14.5ZM8.87501 14.5C5.76751 14.5 3.25001 11.9825 3.25001 8.87502C3.25001 
                              5.76877 5.76751 3.25002 8.87501 3.25002C11.9813 3.25002 14.5 5.76877 14.5 8.87502C14
                              .5 11.9825 11.9813 14.5 8.87501 14.5Z" fill="black"/>
                </svg>
            </button>
          </div>
        </div>




  
        <select className="form-select opacity-75" name="categories" onChange={changeHandler}  >
          <option value={''}>All</option>
          <option >Art</option>
          <option >Biography</option>
          <option >Computers</option>
          <option >History</option>
          <option >Medical</option>
          <option >Poetry</option>
        </select>
        <select className="form-select opacity-75" name="relevance" onChange={changeHandler} >
          <option >relevance</option>
          <option >newest</option>
        </select>
      </form>
    
      
      
    
    
  )
}


