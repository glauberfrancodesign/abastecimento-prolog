import { MainSidebar } from "./MainSidebar";
import { CockpitContent } from "./CockpitContent";

interface CockpitPageProps {
  onNavigateToAbastecimentos: () => void;
  onNavigateToAlertas: () => void;
}

export function CockpitPage({ onNavigateToAbastecimentos, onNavigateToAlertas }: CockpitPageProps) {
  return (
    <div className="relative size-full" data-name="Cockpit">
      <div className="bg-white box-border content-stretch flex h-screen w-full isolate items-start p-[8px]" data-name="cockpit shell">
        <div className="basis-0 content-stretch flex grow h-full isolate items-center min-h-px min-w-px relative rounded-[8px] shrink-0 z-[1] border border-[#dee7fb]" data-name="cockpit content">
          
          {/* Shared Sidebar */}
          <MainSidebar 
            currentPage="home" 
            onNavigate={(page) => {
              if (page === 'abastecimentos') {
                onNavigateToAbastecimentos();
              } else if (page === 'home') {
                // Already on home page, do nothing
                return;
              }
            }}
          />

          {/* Main Content */}
          <div 
            className="basis-0 grow h-full min-h-px min-w-px relative rounded-br-[8px] rounded-tr-[8px] shrink-0 z-[1]" 
            data-name="main section"
          >
            <CockpitContent 
              onNavigateToAbastecimentos={onNavigateToAbastecimentos}
              onNavigateToAlertas={onNavigateToAlertas}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
