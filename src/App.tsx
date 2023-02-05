import { BoosterProvider } from "./hooks/useThemeContext";

import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Home from "./components/Home";

export default function Page() {
  return (
    <BoosterProvider>
      <div className="App">
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualifications />
          <Contact />
        </main>
      </div>
    </BoosterProvider>
  );
}
