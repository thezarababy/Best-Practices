import React from 'react'
import Header from "./static/Header";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Save from "./pages/Save";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
// import Hero from "./components/block/Hero";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route  path='/save' element={<Save />}/>
        <Route path='/invest' element={<Invest />} />
        <Route path='/stories'  element={<Stories />}/>
        <Route path='/FAQs'  element={<FAQs />}/>
         <Route path='/resources'  element={<Resources />}/>

      </Routes>
      </BrowserRouter>
      
      {/* <Hero /> */}
    </div>
  )
}

export default App
