import logo from './logo.svg';
import Header from "./components/header";
import ContactFrom from"./components/contactform";
import NotYourAverage from './components/realtorsection';
import WhyChooseUs from './components/Whychooseus';
import ImageGallery from "./components/imagegallery";
import AboutUs from "./components/Aboutus";
import OurProject from "./components/Ourproject";
import CallToAction from "./components/calltoactionfooter";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactFrom />
      <NotYourAverage/> 
      <WhyChooseUs />
      <ImageGallery />
      <AboutUs/>
      <OurProject />
      <CallToAction />
    </div>
  );
}

export default App;
