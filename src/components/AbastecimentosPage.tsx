import { useState } from "react";
import { MainSidebar } from "./MainSidebar";
import { AbastecimentosContent } from "./AbastecimentosContent";
import { AbastecimentoDrawer } from "./AbastecimentoDrawer";

interface AbastecimentosPageProps {
  onNavigateHome: () => void;
  onNavigateToAlertas?: () => void;
}

export function AbastecimentosPage({ onNavigateHome, onNavigateToAlertas }: AbastecimentosPageProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative size-full" data-name="Listagem de abastecimentos">
      <div className="absolute bg-white box-border content-stretch flex inset-0 isolate items-start p-[8px]" data-name="cockpit shell">
        <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0 z-[1] border border-[#dee7fb]" data-name="cockpit content">
          <div className="content-stretch flex isolate items-center overflow-clip relative rounded-[8px] size-full">
            
            {/* Shared Sidebar */}
            <MainSidebar 
              currentPage="abastecimentos" 
              onNavigate={(page) => {
                if (page === 'home') {
                  onNavigateHome();
                } else if (page === 'abastecimentos') {
                  // Already on abastecimentos page, do nothing
                  return;
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
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
                          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
                            <p className="leading-[20px] whitespace-pre">Início</p>
                          </div>
                        </div>
                        <span className="text-[#D8DADF]">/</span>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
                          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
                            <p className="leading-[20px] whitespace-pre">Frota</p>
                          </div>
                        </div>
                        <span className="text-[#D8DADF]">/</span>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
                          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e08be] text-[14px] text-center text-nowrap tracking-[0.28px]">
                            <p className="leading-[20px] whitespace-pre">Abastecimentos</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="basis-0 content-stretch flex gap-[24px] grow h-[40px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Actions">
                        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
                          <button className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#3451c4] transition-colors cursor-pointer" data-name="buttonContent">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="plus">
                              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M8 3.33333V12.6667M3.33333 8H12.6667"/>
                              </svg>
                            </div>
                            <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px]">
                              <p className="leading-[20px] whitespace-pre">Lançar abastecimento</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Title Section */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title cockpit">
                      <div className="content-stretch flex gap-[24px] h-[48px] items-center relative shrink-0 w-full" data-name="Title">
                        <p className="font-['Prompt:Medium',_sans-serif] leading-[48px] not-italic relative shrink-0 text-[#25262c] text-[32px] text-nowrap tracking-[0.64px] whitespace-pre">Abastecimentos</p>
                      </div>
                      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#667085] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Veja todos os abastecimentos realizados na sua frota através de integrações e lançamentos manuais</p>
                    </div>
                  </div>

                  {/* Content Area with KPI and Table */}
                  <div className="flex-1 w-full overflow-hidden">
                    <AbastecimentosContent 
                      onOpenDrawer={() => setIsDrawerOpen(true)}
                      onNavigateToAlertas={onNavigateToAlertas}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <AbastecimentoDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        onNavigateToAlertas={onNavigateToAlertas}
      />
    </div>
  );
}
