import { useState } from "react";
import { MainSidebar } from "./MainSidebar";
import { AlertasContent } from "./AlertasContent";
import { AlertaDrawer } from "./AlertaDrawer";

interface AlertasPageProps {
  onNavigateHome: () => void;
  onNavigateToAbastecimentos?: () => void;
}

export function AlertasPage({ onNavigateHome, onNavigateToAbastecimentos }: AlertasPageProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative size-full" data-name="Alertas de abastecimentos">
      <div className="absolute bg-white box-border content-stretch flex inset-0 isolate items-start p-[8px]" data-name="cockpit shell">
        <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0 z-[1] border border-[#dee7fb]" data-name="cockpit content">
          <div className="content-stretch flex isolate items-center overflow-clip relative rounded-[8px] size-full">
            
            {/* Shared Sidebar - Keep truck icon active */}
            <MainSidebar 
              currentPage="abastecimentos" 
              onNavigate={(page) => {
                if (page === 'home') {
                  onNavigateHome();
                } else if (page === 'abastecimentos' && onNavigateToAbastecimentos) {
                  onNavigateToAbastecimentos();
                }
              }}
            />

            {/* Main Content */}
            <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-br-[8px] rounded-tr-[8px] shrink-0 z-[1]" data-name="main section">
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col items-start py-[24px] relative size-full px-[32px] py-[0px]">
                  
                  {/* Header */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full mb-6" data-name="Main header">
                    <div className="content-stretch flex gap-[48px] h-[40px] items-center relative shrink-0 w-full" data-name="Page header">
                      
                      {/* Breadcrumb */}
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Breadcrumb">
                        <button 
                          onClick={onNavigateHome}
                          className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer" 
                          data-name="Breadcrumb base"
                        >
                          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
                            <p className="leading-[20px] whitespace-pre">Início</p>
                          </div>
                        </button>
                        <span className="text-[#D8DADF]">/</span>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
                          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
                            <p className="leading-[20px] whitespace-pre">Frota</p>
                          </div>
                        </div>
                        <span className="text-[#D8DADF]">/</span>
                        <button 
                          onClick={onNavigateToAbastecimentos}
                          className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer" 
                          data-name="Breadcrumb base"
                        >
                          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
                            <p className="leading-[20px] whitespace-pre">Abastecimentos</p>
                          </div>
                        </button>
                        <span className="text-[#D8DADF]">/</span>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
                          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e08be] text-[14px] text-center text-nowrap tracking-[0.28px]">
                            <p className="leading-[20px] whitespace-pre">Alertas</p>
                          </div>
                        </div>
                      </div>

                      {/* Actions - empty for now */}
                      <div className="basis-0 content-stretch flex gap-[24px] grow h-[40px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Actions" />
                    </div>

                    {/* Title Section */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title cockpit">
                      <div className="content-stretch flex gap-[24px] h-[48px] items-center relative shrink-0 w-full" data-name="Title">
                        <p className="font-['Prompt:Medium',_sans-serif] leading-[48px] not-italic relative shrink-0 text-[#25262c] text-[32px] text-nowrap tracking-[0.64px] whitespace-pre">Alertas de abastecimento</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 w-full overflow-hidden">
                    <AlertasContent onOpenDrawer={() => setIsDrawerOpen(true)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <AlertaDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
