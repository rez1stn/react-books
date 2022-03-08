import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './book.css'
export const Book =()=>{
  const total = useSelector((state)=>state.fetchedBooks.total)
  const {id} = useParams()
  const book = useSelector((state)=>state.fetchedBooks.books)

  return(
  <div>
      {total>0?
      <div className="container">
        <img className="img" src={book[id].volumeInfo.imageLinks.thumbnail} alt="kek" />
        <div className="content">
          <div className="categori">{book[id].volumeInfo.title}</div>
          <div className="title">{book[id].volumeInfo.title}</div>
          <div className="authors">{book[id].volumeInfo.authors}</div>
          <div className="description">{book[id].volumeInfo.description}</div>
        </div>
      </div>
      :
      <div>No result</div>
      }
  </div>
    
  
  )
}