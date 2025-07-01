import React from 'react'
import Header from "./static/Header";
import Hero from "./components/block/Hero";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element= {<Home />}/>
         
        </Routes>
        
        </BrowserRouter>
        <Hero />

      {/* <Header />
      <Hero /> */}
    </div>
  )
}

export default App
