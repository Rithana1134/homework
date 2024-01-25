import {BrowserRouter,Routes,Route} from "react-router-dom"
import Outline from "./Outline"
import Home from "./css/Home"
import About from "./css/About"
import Contact from "./css/Contact"
import "./css/Outline.css";
export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outline/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route> 
    </Routes>
    </BrowserRouter>
  )
}