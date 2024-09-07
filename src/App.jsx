import Header from "./components/Header/Header";
import Hero from "./components/Body/Hero";
import About from "./components/Body/About";
import Career from "./components/Body/Career";
import Projects from "./components/Body/Projects";
import Work from "./components/Body/Work";
import Footer from "./components/Footer/Footer";

import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [splash, Setsplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      Setsplash(false);
    }, 2500);

    // cleanup func
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {splash ? (
        <Preloader status={splash} />
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Career />
          <Projects />
          {/* <Work /> */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

<div>
  <Header />
  <Hero />
  <About />
  <Career />
  <Projects />
  <Work />
  <Footer />
</div>;
