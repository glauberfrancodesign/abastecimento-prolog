import { TriangleAlert, Check } from "lucide-react";
import { FilterBar } from "./FilterBar";

interface EnhancedTableInfoProps {
  onOpenDrawer: () => void;
}

export function EnhancedTableInfo({ onOpenDrawer }: EnhancedTableInfoProps) {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {/* Search and Filter Bar */}
      <div className="relative z-20">
        <FilterBar />
      </div>

      {/* Scrollable Table Container */}
      <div className="flex-1 flex flex-col overflow-hidden border border-[#dee7fb] rounded-lg">
        {/* Horizontal and Vertical Scroll Wrapper */}
        <div className="flex-1 overflow-auto custom-scrollbar custom-scrollbar-horizontal">
          {/* Table Wrapper with Fixed Right Column */}
          <div className="flex min-h-full">
            {/* Scrollable Content */}
            <div className="flex-1">
              <table className="w-full border-collapse">
                <thead className="sticky top-0 z-10 bg-[#f1f5fd]">
                  <tr className="bg-[#f1f5fd]">
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[56px]">
                      <div className="flex items-center justify-center size-6" />
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Unidade
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Placa
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Motorista
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Data/Hora
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Combustível
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Preço
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Valor abastecido
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Litros
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      KM Rodado
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      KM/litro
                    </th>
                    <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                      Origem
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 13 }).map((_, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex === 0 ? "bg-[#fbd2d0]" : "bg-white hover:bg-gray-50"}>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec]">
                        <div className="flex items-center justify-center">
                          {rowIndex === 0 ? (
                            <TriangleAlert className="size-6 text-[#DC362E]" />
                          ) : (
                            <Check className="size-6 text-[#12B76A]" />
                          )}
                        </div>
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[#25262c] tracking-[0.24px]">
                        São Paulo
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[#1e1e1e] tracking-[0.24px]">
                        XVF-12JJ0
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[#25262c] tracking-[0.24px]">
                        João Souza
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[#25262c] tracking-[0.24px]">
                        12/10/2025 - 21:36
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[0.24px]">
                        Diesel S-10
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[0.24px]">
                        R$ 6,42
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[0.24px]">
                        R$ 650,67
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[0.24px]">
                        Ver abastecimento
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[0.24px]">
                        252,0 km
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[0.24px]">
                        R$ 2,49
                      </td>
                      <td className="h-10 px-4 align-middle border-b border-[#e9ecec]">
                        <div className="flex flex-col font-['Prompt:Light',_sans-serif] text-[12px] tracking-[0.24px]">
                          <span className="text-[#25262c]">Integração</span>
                          <span className="text-[#6f7588]">Truckpag</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Fixed Right Column - Actions */}
            <div className="sticky right-0 bg-white shadow-[-8px_0px_16px_0px_rgba(197,215,248,0.3)] z-20">
              <table className="border-collapse">
                <thead className="sticky top-0 z-10 bg-[#f1f5fd]">
                  <tr>
                    <th className="h-8 px-4 text-right border-b border-[#e9ecec] min-w-[120px]">
                      <svg className="inline-block size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M11.4167 1.81667H7.26852M4.89815 1.81667H0.75M11.4167 6.08333H6.08333M3.71296 6.08333H0.75M11.4167 10.35H8.4537M6.08333 10.35H0.75M7.26852 0.75V2.88333M3.71296 5.01667V7.15M8.4537 9.28333V11.4167" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 13 }).map((_, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex === 0 ? "bg-[#fbd2d0]" : "bg-white hover:bg-gray-50"}>
                      <td className="h-10 px-4 align-middle text-right border-b border-[#e9ecec]">
                        <button 
                          onClick={onOpenDrawer}
                          className="font-['Prompt:Light',_sans-serif] text-[12px] text-[#3d5fd9] tracking-[0.24px] hover:underline cursor-pointer"
                        >
                          Ver detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
