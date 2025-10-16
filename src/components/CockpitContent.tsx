import MainSection from "../imports/MainSection";

interface CockpitContentProps {
  onNavigateToAbastecimentos: () => void;
  onNavigateToAlertas: () => void;
}

// This component renders the main content section from Figma
export function CockpitContent({ onNavigateToAbastecimentos, onNavigateToAlertas }: CockpitContentProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent;
    
    // Check if we clicked on "Ver alertas" button (from KPI card "Itens com alerta")
    if (text === "Ver alertas" || text === "Ver Alertas" || target.closest('[data-name="buttonContent"]')?.textContent?.includes("Ver alertas")) {
      e.preventDefault();
      e.stopPropagation();
      onNavigateToAlertas();
      return;
    }
    
    // Check if we clicked on "Itens com alerta" KPI card text or anywhere on the yellow alert card
    const clickedCard = target.closest('[data-kpi-card]');
    if (clickedCard) {
      const cardText = clickedCard.textContent;
      if (cardText?.includes("Itens com alerta")) {
        e.preventDefault();
        e.stopPropagation();
        onNavigateToAlertas();
        return;
      }
    }
    
    // Also check for direct text match
    if (text === "Itens com alerta" || text?.includes("Itens com alerta")) {
      e.preventDefault();
      e.stopPropagation();
      onNavigateToAlertas();
    }
  };

  return (
    <div className="w-full h-full overflow-hidden" onClick={handleClick}>
      <MainSection />
    </div>
  );
}
