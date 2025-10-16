import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-p2ma82qtf";
import { ComentariosSection } from "./ComentariosSection";
import { ShareAlertModal } from "./ShareAlertModal";
import { Share2 } from "lucide-react";

interface AlertaDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AlertaDrawer({ isOpen, onClose }: AlertaDrawerProps) {
  const [status, setStatus] = useState("Em andamento");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  
  const statusOptions = ["Em andamento", "Resolvido", "Ignorado", "Pendente"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento":
        return "bg-[#3d5fd9]";
      case "Resolvido":
        return "bg-[#449c3b]";
      case "Ignorado":
        return "bg-[#6f7588]";
      case "Pendente":
        return "bg-[#e40f05]";
      default:
        return "bg-[#3d5fd9]";
    }
  };

  const handleExportPDF = () => {
    const pdfUrl = "https://44667852.fs1.hubspotusercontent-na1.net/hubfs/44667852/Testes%20Luiz/PDF%20Alerta.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Alerta_Abastecimento.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-[9998]"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 bottom-0 w-[1278px] z-[9999]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="size-full">
          <div className="box-border content-stretch flex items-start max-w-inherit p-[8px] relative size-full">
            <div className="basis-0 bg-[#fafcff] content-stretch flex flex-col grow h-full isolate items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0">
              
              {/* Header */}
              <div className="bg-[#f1f5fd] h-[60px] shrink-0 sticky top-0 w-full z-[3]">
                <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex h-[60px] items-center justify-between p-[24px] relative w-full">
                    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                      <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                        <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
                          <div className="relative shrink-0 size-[22px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                              <path d={svgPaths.p13decf80} stroke="#3F424D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                          </div>
                          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0">
                            <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f424d] text-[18px] tracking-[0.36px] w-full">Alerta de abastecimento</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                        <button 
                          className="flex items-center justify-center cursor-pointer relative shrink-0 size-[24px] hover:opacity-70 transition-opacity" 
                          onClick={() => setShareModalOpen(true)}
                          title="Compartilhar alerta"
                        >
                          <Share2 className="w-[20px] h-[20px] text-[#3D5FD9]" strokeWidth={1.5} />
                        </button>
                        <button className="block cursor-pointer relative shrink-0 size-[24px]" onClick={onClose}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]">
                <div className="flex flex-col items-center overflow-x-clip overflow-y-auto custom-scrollbar size-full">
                  <div className="box-border content-stretch flex flex-col gap-[24px] isolate items-center pb-0 pt-[24px] px-[24px] relative w-full">
                    <div className="box-border content-stretch flex items-start pb-[24px] pt-0 px-0 relative rounded-[8px] shrink-0 w-full z-[1]">
                      <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                        
                        {/* Title and Status */}
                        <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
                          <p className="basis-0 font-['Prompt:Medium',_sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[20px] tracking-[0.64px]">A média de consumo está fora da faixa de variação aceita.</p>
                          <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-[201px]">
                            <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px]">
                              <p className="leading-[20px] whitespace-pre">Status:</p>
                            </div>
                            <div className="relative">
                              <button
                                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                                className={`${getStatusColor(status)} box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:opacity-90 transition-opacity`}
                              >
                                <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">{status}</p>
                                <div className="relative shrink-0 size-[16px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <path d={showStatusDropdown ? "M12 10L8 6L4 10" : "M4 6L8 10L12 6"} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </button>
                              {showStatusDropdown && (
                                <div className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-[8px] shadow-lg border border-[#dee7fb] z-10 min-w-[160px]">
                                  {statusOptions.map((option) => (
                                    <button
                                      key={option}
                                      onClick={() => {
                                        setStatus(option);
                                        setShowStatusDropdown(false);
                                      }}
                                      className="w-full text-left px-[16px] py-[8px] hover:bg-[#f1f5fd] first:rounded-t-[8px] last:rounded-b-[8px] transition-colors"
                                    >
                                      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] text-[#3f424d] text-[14px] tracking-[0.28px]">{option}</p>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Meta Slider */}
                        <div className="bg-white relative rounded-[10px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                          <div className="size-full">
                            <div className="box-border content-stretch flex gap-[24px] items-start pb-[24px] pt-[48px] px-[24px] relative w-full">
                              <div className="basis-0 grow min-h-px min-w-px relative rounded-[13.893px] shrink-0">
                                <div className="size-full">
                                  <div className="box-border content-stretch flex flex-col items-start px-[216px] py-[4px] relative w-full">
                                    <div className="absolute h-[14px] left-[0.56%] right-[0.84%] top-1/2 translate-y-[-50%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1058 14">
                                        <path d={svgPaths.p23289cf0} fill="#D8DADF" />
                                      </svg>
                                    </div>
                                    <div className="absolute bg-[#be0d04] right-0 rounded-[173.664px] size-[40px] top-1/2 translate-y-[-50%]">
                                      <div aria-hidden="true" className="absolute border-[#b5b8c4] border-[2.605px] border-solid inset-0 pointer-events-none rounded-[173.664px] shadow-[0px_5.789px_11.578px_-2.894px_rgba(16,24,40,0.1),0px_2.894px_5.789px_-2.894px_rgba(16,24,40,0.06)]" />
                                    </div>
                                    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[5px] relative shrink-0 w-full">
                                      <div className="relative shrink-0 w-full">
                                        <div className="size-full">
                                          <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[8px] relative w-full">
                                            <div className="bg-[#449c3b] h-[14px] shrink-0 w-full" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[4px]">
                                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                          <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]">
                                            <div className="bg-[#3f424d] h-[31.259px] rounded-[173.664px] shrink-0 w-[3.473px]" />
                                          </div>
                                          <div className="bg-[#449c3b] relative rounded-[133.333px] shrink-0 size-[24px]">
                                            <div aria-hidden="true" className="absolute border-2 border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[133.333px] shadow-[0px_4.444px_8.889px_-2.222px_rgba(16,24,40,0.1),0px_2.222px_4.444px_-2.222px_rgba(16,24,40,0.06)]" />
                                          </div>
                                          <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]">
                                            <div className="bg-[#3f424d] h-[31.259px] rounded-[173.664px] shrink-0 w-[3.473px]" />
                                          </div>
                                        </div>
                                        <div className="font-['Prompt:Regular',_sans-serif] h-[42px] leading-[0] not-italic relative shrink-0 text-[#25262c] text-center w-full">
                                          <div className="absolute flex flex-col justify-center left-[19.82px] text-[18px] top-[calc(50%-7px)] tracking-[0.36px] translate-x-[-50%] translate-y-[-50%] w-[40px]">
                                            <p className="leading-[28px]">2.80</p>
                                          </div>
                                          <div className="absolute bottom-0 content-stretch flex flex-col items-center left-[calc(50%+4px)] translate-x-[-50%] w-[48px]">
                                            <div className="flex flex-col justify-center relative shrink-0 text-[18px] text-nowrap tracking-[0.36px]">
                                              <p className="leading-[28px] whitespace-pre">3.10</p>
                                            </div>
                                            <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[13.893px] tracking-[1.3893px] uppercase w-[min-content]">
                                              <p className="leading-[13.893px]">META</p>
                                            </div>
                                          </div>
                                          <div className="absolute flex flex-col justify-center right-[20.18px] text-[18px] top-[calc(50%-7px)] tracking-[0.36px] translate-x-[50%] translate-y-[-50%] w-[40px]">
                                            <p className="leading-[28px]">4.10</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-center text-nowrap whitespace-pre">
                                <p className="font-['Prompt:Medium',_sans-serif] leading-[48px] relative shrink-0 text-[#be0d04] text-[32px] tracking-[0.64px]">10.7</p>
                                <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px]">km/L atual</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Dados do abastecimento */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Dados do abastecimento</p>
                          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            <div className="size-full">
                              <div className="box-border content-stretch flex gap-[32px] items-start p-[24px] relative w-full">
                                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                                  <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
                                    <p className="leading-[20px] text-nowrap whitespace-pre">Placa do veículo</p>
                                  </div>
                                  <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
                                    <p className="leading-[22px] text-nowrap whitespace-pre">RXA4F51</p>
                                  </div>
                                </div>
                                <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
                                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                                  <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
                                    <p className="leading-[20px] text-nowrap whitespace-pre">Motorista responsável</p>
                                  </div>
                                  <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
                                    <p className="leading-[22px] text-nowrap whitespace-pre">João Souza</p>
                                  </div>
                                </div>
                                <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
                                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                                  <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
                                    <p className="leading-[20px] text-nowrap whitespace-pre">Posto</p>
                                  </div>
                                  <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
                                    <p className="leading-[22px] text-nowrap whitespace-pre">Shell - São Bernardo</p>
                                  </div>
                                </div>
                                <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
                                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                                  <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
                                    <p className="leading-[20px] text-nowrap whitespace-pre">Origem</p>
                                  </div>
                                  <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
                                    <p className="leading-[22px] text-nowrap whitespace-pre">Integração — Truckpag</p>
                                  </div>
                                </div>
                                <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
                                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                                  <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
                                    <p className="leading-[20px] text-nowrap whitespace-pre">Data e hora </p>
                                  </div>
                                  <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
                                    <p className="leading-[22px] text-nowrap whitespace-pre">02/10/2026 - 11:57</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* KPI Cards */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Informações importantes</p>
                          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                            {/* Abastecido */}
                            <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-[280px] relative shrink-0">
                              <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                <div className="min-w-inherit size-full">
                                  <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
                                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                                        <div className="relative shrink-0 size-[24px]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                            <g><path d={svgPaths.pe901540} stroke="#6F7588" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g>
                                          </svg>
                                        </div>
                                        <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
                                          <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Abastecido</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
                                        <p className="leading-[48px] whitespace-pre">70L</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* KM rodado */}
                            <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
                              <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                <div className="min-w-inherit size-full">
                                  <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
                                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                                        <div className="relative shrink-0 size-[24px]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                            <g><path d={svgPaths.pf0cab00} stroke="#6F7588" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g>
                                          </svg>
                                        </div>
                                        <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
                                          <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">KM rodado</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
                                        <p className="leading-[48px] whitespace-pre">750,0</p>
                                      </div>
                                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                                        <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">KM</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* KM registrado */}
                            <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
                              <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                <div className="min-w-inherit size-full">
                                  <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
                                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                                        <div className="relative shrink-0 size-[24px]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                            <g><path d={svgPaths.p34fc7280} stroke="#6F7588" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g>
                                          </svg>
                                        </div>
                                        <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
                                          <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">KM registrado</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
                                        <p className="leading-[48px] whitespace-pre">347.677,0</p>
                                      </div>
                                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                                        <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">KM</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Valor abastecido */}
                            <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
                              <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                <div className="min-w-inherit size-full">
                                  <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
                                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                                        <div className="relative shrink-0 size-[24px]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                            <g><path d={svgPaths.p477500} stroke="#6F7588" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g>
                                          </svg>
                                        </div>
                                        <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
                                          <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Valor abastecido</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                        <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
                                          <p className="leading-[48px] whitespace-pre">R$469,00</p>
                                        </div>
                                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                                          <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px]">
                                            <p className="leading-[22px] whitespace-pre">R$6,70/L</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Info Banner */}
                        <div className="bg-[#ffdb1b] relative rounded-[8px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#957f0b] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
                              <div className="relative shrink-0 size-[24px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g><path d={svgPaths.p926adec} stroke="#25262C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g>
                                </svg>
                              </div>
                              <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Sugestão: Validar se o motorista completou o tanque no abastecimento.</p>
                            </div>
                          </div>
                        </div>

                        {/* Histórico de abastecimentos */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Histórico do abastecimento</p>
                          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            <div className="size-full">
                              <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
                                <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
                                  {/* Item 1 - 07/10/25 */}
                                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                                      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">07/10/25</p>
                                      <div className="absolute box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center left-[calc(50%-1px)] px-[4px] py-[8px] top-[calc(50%+48px)] translate-x-[-50%] translate-y-[-50%] w-[52px]">
                                        <div className="bg-[#dee7fb] h-full shrink-0 w-[2px]" />
                                      </div>
                                    </div>
                                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
                                      <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
                                      <div className="bg-[#fafcff] h-[68px] relative rounded-[8px] shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
                                            <div className="relative shrink-0 size-[24px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                                <path d={svgPaths.p1013bd80} stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                              </svg>
                                            </div>
                                            <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
                                                <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
                                                  <p className="leading-[22px]">Abastecimento ID: 97182426 — TruckPag</p>
                                                </div>
                                                <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
                                                  <p className="leading-[20px] text-[12px]">2.07 KM/L | META 2.30KM/L | 154 LITROS | KM RODADO 300 | KM REGISTRADO 348.392,0 | VALOR PAGO R$ 1.031,08 (R$ 6,70/L)</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex items-start relative rounded-[8px] shrink-0">
                                              <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0">
                                                <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
                                                <div className="relative shrink-0 size-[16px]">
                                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                    <path d="M6 12L10 8L6 4" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Item 2 - 06/10/25 */}
                                  <div className="content-stretch flex gap-[24px] h-[68px] items-center relative shrink-0 w-full">
                                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                                      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">06/10/25</p>
                                      <div className="absolute box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center left-[calc(50%-0.5px)] px-[4px] py-[8px] top-[calc(50%+48px)] translate-x-[-50%] translate-y-[-50%] w-[52px]">
                                        <div className="bg-[#dee7fb] h-full shrink-0 w-[2px]" />
                                      </div>
                                    </div>
                                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
                                      <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
                                      <div className="bg-[#fafcff] h-[68px] relative rounded-[8px] shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
                                            <div className="relative shrink-0 size-[24px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                                <path d={svgPaths.p1013bd80} stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                              </svg>
                                            </div>
                                            <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
                                                <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
                                                  <p className="leading-[22px]">Abastecimento ID: 97182221 — TruckPag</p>
                                                </div>
                                                <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
                                                  <p className="leading-[20px] text-[13px]">0.39 KM/L | META 2.30KM/L | 352 LITROS | KM RODADO 138 | KM REGISTRADO 347.815,0 | VALOR PAGO R$ 2.358,04 (R$ 6,70/L)</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex items-start relative rounded-[8px] shrink-0">
                                              <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0">
                                                <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
                                                <div className="relative shrink-0 size-[16px]">
                                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                    <path d="M6 12L10 8L6 4" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Item 3 - 05/10/25 - ALERTA */}
                                  <div className="content-stretch flex gap-[24px] h-[68px] items-center relative shrink-0 w-full">
                                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                                      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">05/10/25</p>
                                      <div className="absolute box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center left-[calc(50%-0.5px)] px-[4px] py-[8px] top-[calc(50%+48px)] translate-x-[-50%] translate-y-[-50%] w-[52px]">
                                        <div className="bg-[#dee7fb] h-full shrink-0 w-[2px]" />
                                      </div>
                                    </div>
                                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
                                      <div aria-hidden="true" className="absolute border-2 border-[#fbd2d0] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
                                      <div className="bg-[#feeae7] h-[68px] relative rounded-[8px] shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border border-[#980a03] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
                                            <div className="relative shrink-0 size-[24px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                                <g><path d={svgPaths.p17792780} stroke="#980A03" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g>
                                              </svg>
                                            </div>
                                            <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)]">
                                              <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
                                                <p className="leading-[22px]">Abastecimento ID: 97182126 — TruckPag</p>
                                              </div>
                                              <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
                                                <p className="leading-[20px] text-[12px]">10,7 KM/L | META 2.30KM/L | 70 LITROS | KM RODADO 750,0 | KM REGISTRADO 347.677,0 | VALOR PAGO R$ 469,00 (R$ 6,70/L)</p>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex items-start relative rounded-[8px] shrink-0">
                                              <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0">
                                                <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
                                                <div className="relative shrink-0 size-[16px]">
                                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                    <path d="M6 12L10 8L6 4" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Item 4 - 04/10/25 */}
                                  <div className="content-stretch flex gap-[24px] h-[68px] items-center relative shrink-0 w-full">
                                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                                      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">04/10/25</p>
                                    </div>
                                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
                                      <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
                                      <div className="bg-[#fafcff] h-[68px] relative rounded-[8px] shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
                                            <div className="relative shrink-0 size-[24px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                                <path d={svgPaths.p1013bd80} stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                              </svg>
                                            </div>
                                            <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
                                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
                                                <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
                                                  <p className="leading-[22px]">Abastecimento ID: 97182110 — TruckPag</p>
                                                </div>
                                                <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
                                                  <p className="leading-[20px] whitespace-pre-wrap text-[12px]">2.10 KM/L  | META 2.30KM/L | 175 LITROS | KM RODADO 385,0 | KM REGISTRADO 346.917,0 | VALOR PAGO R$ 1.172,50 (R$ 6,70/L)</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex items-start relative rounded-[8px] shrink-0">
                                              <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0">
                                                <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
                                                <div className="relative shrink-0 size-[16px]">
                                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                    <path d="M6 12L10 8L6 4" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="bg-[#dee7fb] h-px shrink-0 w-full" />

                        {/* Comentários */}
                        <ComentariosSection />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#f1f5fd] h-[60px] shrink-0 sticky bottom-0 w-full z-[1]">
                <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[14px] relative w-full">
                    <button 
                      onClick={onClose}
                      className="box-border content-stretch cursor-pointer flex gap-[8px] items-start overflow-visible p-0 relative shrink-0 hover:opacity-70 transition-opacity"
                    >
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0">
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d="M10 12L6 8L10 4" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Voltar</p>
                      </div>
                    </button>
                    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
                      <button 
                        onClick={() => setShareModalOpen(true)}
                        className="content-stretch flex items-start relative shrink-0 cursor-pointer"
                      >
                        <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#3451b8] transition-colors">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g><path d={svgPaths.p3643ab00} stroke="white" strokeLinecap="round" strokeLinejoin="round" /></g>
                            </svg>
                          </div>
                          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Compartilhar</p>
                        </div>
                      </button>
                      <button 
                        onClick={handleExportPDF}
                        className="content-stretch flex items-start relative shrink-0 cursor-pointer"
                      >
                        <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#3451b8] transition-colors">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g><path d={svgPaths.p42da360} stroke="white" strokeLinecap="round" strokeLinejoin="round" /></g>
                            </svg>
                          </div>
                          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Exportar</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Share Modal */}
      <ShareAlertModal 
        isOpen={shareModalOpen} 
        onClose={() => setShareModalOpen(false)} 
      />
    </>
  );
}
