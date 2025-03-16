
import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Profilgithub  from "./pages/profilgithub";
import Mentionlegale from "./pages/mentionlegale";
import reactRouterDom, { BrowserRouter,Route } from 'react-router-dom';
import Routes from "react-router-dom";
import Main from './components/main';
import Footer from './components/footer';
import Form from './components/form';
import Realisation from './components/realisation';
import Serv from './components/serv';
import Profilgit from './components/profilgit';
import Conct from './components/conct';




function App (){
  return (
    
    <>
    <Navbar/>
    <Main/>
    <Form/>
    <Realisation/>
    <Serv/>
    <Profilgit/>
    <Conct/>
    <Footer/>

    <Routes>
      <div>
     <Route path="./pages/home" element={<Home/>}></Route>
     <Route path="./pages/contact" element={<Contact/>}></Route>
     <Route path="./mentionlegale" element={<Mentionlegale/>}></Route>
     <Route path="./portfolio" element={<Portfolio/>}></Route>
     <Route path="./profilgithub" element={<Profilgithub/>}></Route>
     <Route path="./services" element={<Services/>}></Route>
   </div> 
   </Routes>
    </>
  )
}

export default App;
