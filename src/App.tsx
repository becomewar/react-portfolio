import Header from "./components/Header/Header";
import { BoosterProvider } from "./hooks/useThemeContext";

export default function Page() {
  return (
    <BoosterProvider>
      <div className="App">
        <Header />
      </div>
    </BoosterProvider>
  );
}
