
import{BrowserRouter , Route, Routes} from'react-router-dom'
import './App.css'
import Home from'./pages/Home.jsx'
import Produtos from './pages/produtos.jsx'
import About from'./pages/About.jsx'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx'


function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/produtos' element={<Produtos/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
