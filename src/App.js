import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./locomotive-scroll.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const mainRef = useRef(null);

  return (
    <div data-scroll-container className={darkMode && "dark"}>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main
          ref={mainRef}
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-teal-400"
        >
          <Hero />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
