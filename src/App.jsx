import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Keyfeatures from "./components/keyfeatures/Keyfeatures";
import Navbar from "./components/navbar/Navbar";
import Topnav from "./components/topnav/Topnav";
import Whyus from "./components/whyus/Whyus";

function App() {
  return (
    <>
      <Topnav />
      <Navbar />
      <Header />
      <Whyus />
      <About />
      <Keyfeatures />
    </>
  );
}

export default App;
