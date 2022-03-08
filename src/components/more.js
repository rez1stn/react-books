import { useDispatch,useSelector } from "react-redux"

import { fetchBooks } from "../redux/asyncFunctions/fetchBooks"
import { newPage } from "../redux/actions"

 


export const More = ()=>{
    const dispatch = useDispatch()
    const currentPage = useSelector((state)=>state.fetchedBooks.currentPage)
    const input = useSelector((state)=>state.fetchedBooks.input)
    const total = useSelector((state)=>state.fetchedBooks.total)
    const changePage = () =>{ 
    let nPage = currentPage+1
    dispatch(newPage(nPage))
    dispatch(fetchBooks(input,nPage))
    
    }
  return(
    <div>
      {total > 30 ? 
       <button className="btn btn-primary opacity-75" onClick ={changePage}>Load more</button>
       :
       <div>

       </div>
       }
    </div>
    
  )
}