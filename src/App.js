import { useState, useEffect } from "react";
import "./App.css"
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Portefolio from "./components/Portefolio/Portefolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
/* import { themeContext } from "./Context";
import { useContext } from "react"; */
import Quote from "./components/quoteEnter/QuoteEnter"


function App() {

const [quote, setQuote] = useState(false)

useEffect(()=>{
  setQuote(true)
setTimeout(()=>{
  setQuote(false)
},6000)

},[])
  /* const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode; */

  return (
    <div className="App" /* style={{background : darkMode ? "black" : "",
    color: darkMode ? "white" : "",
    }} */>

      {
        quote ? <Quote/> 
        :
        <div className="content">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works/>
      <Portefolio />
      <Testimonials/>
      <Contact/>
      <Footer/>
        </div>
      }
    </div>
  );
}

export default App;
