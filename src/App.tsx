import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/home/Home";

const About = lazy(() => import("./components/about/About"));
const Contacts = lazy(() => import("./components/contacts/Contacts"));

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Background />
      <div className="grain-layer" />
      <Nav />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Suspense fallback={null}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
};

export default App;
