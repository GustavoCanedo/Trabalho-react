import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Post from './Post'
import Put from './Put'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home />}></Route>
      <Route path= "/post" element={<Post />}></Route>
      <Route path= "/put/:id" element={<Put /> }></Route>
      <Route path= "/read/:id" element={<Read />}></Route>


    </Routes>
    </BrowserRouter>
  )
}
export default App