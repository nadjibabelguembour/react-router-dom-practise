import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Footer from './components/Footer'



function App() {
   // console.log(window.location)
   let myComponent;
   // we 're gonna replace this switch statment with react router
   //---------------------------------------
  //  switch (window.location.pathname) {
  //    case "/":
  //        myComponent = <Home />
  //      break;
  //    case "/profile":
  //        myComponent = <Profile />
  //      break;
  //    case "/about":
  //        myComponent = <About />
  //      break;
  //  }
  //-----------------------------------------

 
  return (
    <>
      <Header /> 
     
      <div className="App">
        {/* {myComponent} */}
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/profile" element={<Profile />} />
          <Route path = "/about" element={<About />} />

        </Routes>

      </div>
      <Footer />
    
    </>

   
  
  
  )
}

export default App
