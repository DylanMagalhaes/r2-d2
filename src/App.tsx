import { Plaquette } from "./components/plaquette/Plaquette";
import { LanguageProvider } from "./i18n/LanguageProvider";

export default function App() {
  return (
    <LanguageProvider>
      <Plaquette />
    </LanguageProvider>
  );
}
