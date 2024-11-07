import './App.css';
import About from './assets/component/About';
import Contact from './assets/component/Contact';
import Footer from './assets/component/Footer';
import Header from './assets/component/Header';
import Hero from './assets/component/Hero';
import Projects from './assets/component/Projects';
import Resume from './assets/component/Resume';


function App() {
  return (
    <div className="App">
       <Header/>
       <Hero />
       <About/>
       <Projects/>
       <Resume/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
