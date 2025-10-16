import { useState } from "react";
import { CockpitPage } from "./components/CockpitPage";
import { AbastecimentosPage } from "./components/AbastecimentosPage";
import { AlertasPage } from "./components/AlertasPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "abastecimentos" | "alertas">("home");

  if (currentPage === "abastecimentos") {
    return (
      <AbastecimentosPage 
        onNavigateHome={() => setCurrentPage("home")}
        onNavigateToAlertas={() => setCurrentPage("alertas")}
      />
    );
  }

  if (currentPage === "alertas") {
    return (
      <AlertasPage 
        onNavigateHome={() => setCurrentPage("home")}
        onNavigateToAbastecimentos={() => setCurrentPage("abastecimentos")}
      />
    );
  }

  return (
    <CockpitPage 
      onNavigateToAbastecimentos={() => setCurrentPage("abastecimentos")}
      onNavigateToAlertas={() => setCurrentPage("alertas")}
    />
  );
}
