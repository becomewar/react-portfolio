import { LanguageProvider } from "./hooks/LanguageContext";
import { ThemeProvider } from "./hooks/ThemeContext";

import ScrollUp from "./components/ScrollUp";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Qualifications from "./pages/Qualifications";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Home from "./pages/Home";

export default function Page() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Header />

          <main className="main">
            <Home />
            <About />
            <Skills />
            <Qualifications />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
