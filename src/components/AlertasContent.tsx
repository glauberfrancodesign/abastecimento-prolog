import { AlertasFilterBar } from "./AlertasFilterBar";
import { AlertasTableInfo } from "./AlertasTableInfo";

interface AlertasContentProps {
  onOpenDrawer: () => void;
}

export function AlertasContent({ onOpenDrawer }: AlertasContentProps) {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Filter Bar */}
      <div className="shrink-0">
        <AlertasFilterBar />
      </div>

      {/* Table Section - Takes remaining space */}
      <div className="flex-1 min-h-0">
        <AlertasTableInfo onOpenDrawer={onOpenDrawer} />
      </div>
    </div>
  );
}
