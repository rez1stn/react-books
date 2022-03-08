
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import{More} from "./more"

import  './books.css'

export const Books = ()=>{

  const books = useSelector((state)=>state.fetchedBooks.books)

  let total = useSelector((state)=>state.fetchedBooks.total)
  let load = useSelector((state)=>state.fetchedBooks.loading)

  let noImg = "https://svarkasvarka.ru/uploads/no-img.jpg"
  let renderList = []


  if (total > 0){
    const check = books.map(books=>{
      var ch =  typeof books.volumeInfo.imageLinks?.thumbnail;
      if ( ch !== "undefined"){
        return books}else{
          Object.defineProperty(books.volumeInfo,'imageLinks',{value:{}});
          Object.defineProperty(books.volumeInfo.imageLinks,'thumbnail',{value:noImg})
          return books}
    })

    

  
     renderList = check.map((check,index)=>{ 

      let [img,authors, title]= [check.volumeInfo.imageLinks.thumbnail,check.volumeInfo.authors,check.volumeInfo.title]
      
      return(
      
          <Link to={`/book/${index}` }>
              
              <div className="card" key={index}>
                <img src={img} alt={index} className="book_img pt-4" height="150px" width="80" />
                <div className="content ">
                  <div className="title">{title}</div>
                  <div className="authors"> {authors}</div>
                </div>
              </div>

          </Link>
          
      )
    })
  }
  

  return (
  
    <div  >
      {load == true ?  
        <div>
          <div className="spinner-border" role="status">
          </div>
        </div>
      :
        <div>  
          Found {total} results
          <div className="books_conatiner">
          
          {renderList}
          <More/>
           
          </div>
        </div>
    
      }
    </div>
  
    
    
    
  
    
    
  )
}

