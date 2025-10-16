import { EnhancedKpiRow } from "./EnhancedKpiRow";
import { EnhancedTableInfo } from "./EnhancedTableInfo";

interface AbastecimentosContentProps {
  onOpenDrawer: () => void;
  onNavigateToAlertas?: () => void;
}

export function AbastecimentosContent({ onOpenDrawer, onNavigateToAlertas }: AbastecimentosContentProps) {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* KPI Row Section */}
      <div className="shrink-0">
        <EnhancedKpiRow onAlertasClick={onNavigateToAlertas} />
      </div>

      {/* Table Section - Takes remaining space */}
      <div className="flex-1 min-h-0">
        <EnhancedTableInfo onOpenDrawer={onOpenDrawer} />
      </div>
    </div>
  );
}
