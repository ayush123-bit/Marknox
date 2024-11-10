import logo from './logo.svg';
import './App.css';
import Layout from './components/Layouts/Layout';
import About from './Pages/About/About';
import Techstack from './Pages/Techstack/Techstack';
import Projects from './Pages/Projects/Projects';
import Education from './Pages/Education/Education';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import ScrollToTop from "react-scroll-to-top";
import MobileNav from './components/MobileNav/MobileNav';
function App() {
  return (
    <>
    <MobileNav/>
    <Layout/>
<div className='container'>    <About/></div>
<Education/>
<Techstack/>
<Projects/>
<Contact/>
<Footer/>
<ScrollToTop smooth style={{backgroundColor:'orange', borderRadius:'80px'}}/>
    </>
  );
}

export default App;
