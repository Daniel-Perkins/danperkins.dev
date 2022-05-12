import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Mockup from "./components/Mockup";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Mockup />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
