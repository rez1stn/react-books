
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import  {Search}  from './components/search';
import {Books} from './components/books'
import { Book } from './components/book';



import './App.css'




function App() {

  return (
    <div className="App">
      <header className="App-header" >
        <Search/>
      </header>
      <Routes>
        <Route path ="/" element = {<Books/>}></Route>
        <Route path ="/book/:id" element={<Book/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
