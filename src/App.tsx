import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Background />
      <div className="grain-layer" />
      <Nav />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
};

export default App;
