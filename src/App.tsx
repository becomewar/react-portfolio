import Header from "./components/Header";
import Home from "./components/Home";
import { BoosterProvider } from "./hooks/useThemeContext";

export default function Page() {
  return (
    <BoosterProvider>
      <div className="App">
        <Header />

        <main className="main">
          <Home />
        </main>
      </div>
    </BoosterProvider>
  );
}
