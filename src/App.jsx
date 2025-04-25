import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/sharedcomponent/Navbar";
import background from "/background.svg"
import Team from "./pages/Team";
import Bootcamp from "./pages/Bootcamp";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";
import Blog from "./pages/Blog";
import OpenSource from "./pages/OpenSource";
import Contact from "./pages/Contact";
import Faucet from "./pages/Faucet";
import Footer from "./component/sharedcomponent/Footer";

function App() {

  return (
      <div className="">
        <Navbar />
        <div className="absolute top-48 md:top-16 -z-30 md:right-[600px] opacity-20 ">
          <img src={background} alt="" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/event" element={<Events />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/faucet" element={<Faucet />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
