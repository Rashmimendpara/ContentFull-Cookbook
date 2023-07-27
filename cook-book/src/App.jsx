
import './App.css'
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"; 
import About  from './Components/About';
import Recipes from './Components/Recipes';


function App() {

  const [cookBooks, setCookBooks] = useState([]);

  console.log("Working check",import.meta.env.VITE_SPACE_ID)

  useEffect(() => {

    const client = createClient({
      space: import.meta.env.VITE_SPACE_ID,
      environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
      accessToken: import.meta.env.VITE_ACCESS_TOKEN,
    })

    client
    .getEntries()
    .then(response => setCookBooks(response.items))
    .catch(console.error)

  },[])

  return (
    <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home cookBooks={cookBooks}/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipes" element={<Home cookBooks={cookBooks}/>} />
        <Route path="cookBooks/:cookBooksId" element={<Recipes />} />
        </Routes>
        <Footer/>
  
    </>
  )
}

export default App
