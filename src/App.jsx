import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Insurancepolicy from "./components/insurancepolicy/Insurancepolicy";
import Keyfeatures from "./components/keyfeatures/Keyfeatures";
import Navbar from "./components/navbar/Navbar";
import Onlineinsurance from "./components/onlineinsurance/Onlineinsurance";
import Reason from "./components/reason/Reason";
import Rightpolicy from "./components/rightpolicy/Rightpolicy";
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
      <Insurancepolicy />
      <Onlineinsurance />
      <Reason />
      <Rightpolicy />
    </>
  );
}

export default App;
