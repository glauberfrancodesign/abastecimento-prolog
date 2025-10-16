import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-17t1ccuvst";
import { Check, Minus } from "lucide-react";

interface FilterBarProps {
  onSearchChange?: (value: string) => void;
}

export function FilterBar({ onSearchChange }: FilterBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Multi-select states
  const [selectedUnidades, setSelectedUnidades] = useState<string[]>(["Palhoça"]);
  const [selectedCombustiveis, setSelectedCombustiveis] = useState<string[]>([]);
  const [selectedMotoristas, setSelectedMotoristas] = useState<string[]>([]);
  
  // Date picker states
  const [selectedDatePreset, setSelectedDatePreset] = useState<string | null>("Mês atual");
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = Janeiro
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState<number | null>(31);
  
  // Search states for dropdowns
  const [unidadeSearch, setUnidadeSearch] = useState("");
  
  // Refs for dropdown positioning
  const dropdownRef = useRef<HTMLDivElement>(null);
  const unidadeButtonRef = useRef<HTMLButtonElement>(null);
  const dataButtonRef = useRef<HTMLButtonElement>(null);
  const combustivelButtonRef = useRef<HTMLButtonElement>(null);
  const motoristaButtonRef = useRef<HTMLButtonElement>(null);
  
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const unidadeOptions = ["São Paulo", "Florianópolis", "Palhoça"];
  const combustivelOptions = ["Arla32", "Diesel Comum", "Diesel S-10"];
  const motoristaOptions = ["Adriano Figueiredo", "João Souza", "Juliano Alencar"];
  const datePresets = ["Hoje", "7 dias", "30 dias", "Mês atual", "Ano atual"];
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    function updateDropdownPosition() {
      if (openDropdown) {
        let buttonRef;
        switch (openDropdown) {
          case "unidade":
            buttonRef = unidadeButtonRef;
            break;
          case "data":
            buttonRef = dataButtonRef;
            break;
          case "combustivel":
            buttonRef = combustivelButtonRef;
            break;
          case "motorista":
            buttonRef = motoristaButtonRef;
            break;
        }
        
        if (buttonRef?.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          setDropdownPosition({
            top: rect.bottom + 8,
            left: rect.left
          });
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", updateDropdownPosition, true);
    window.addEventListener("resize", updateDropdownPosition);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", updateDropdownPosition, true);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [openDropdown]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  const toggleDropdown = (dropdown: string, buttonRef: React.RefObject<HTMLButtonElement>) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
      // Calculate dropdown position
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.left
        });
      }
    }
  };

  const toggleUnidade = (unidade: string) => {
    setSelectedUnidades(prev =>
      prev.includes(unidade)
        ? prev.filter(u => u !== unidade)
        : [...prev, unidade]
    );
  };

  const toggleAllUnidades = () => {
    if (selectedUnidades.length === unidadeOptions.length) {
      setSelectedUnidades([]);
    } else {
      setSelectedUnidades([...unidadeOptions]);
    }
  };

  const toggleCombustivel = (combustivel: string) => {
    setSelectedCombustiveis(prev =>
      prev.includes(combustivel)
        ? prev.filter(c => c !== combustivel)
        : [...prev, combustivel]
    );
  };

  const toggleAllCombustiveis = () => {
    if (selectedCombustiveis.length === combustivelOptions.length) {
      setSelectedCombustiveis([]);
    } else {
      setSelectedCombustiveis([...combustivelOptions]);
    }
  };

  const toggleMotorista = (motorista: string) => {
    setSelectedMotoristas(prev =>
      prev.includes(motorista)
        ? prev.filter(m => m !== motorista)
        : [...prev, motorista]
    );
  };

  const toggleAllMotoristas = () => {
    if (selectedMotoristas.length === motoristaOptions.length) {
      setSelectedMotoristas([]);
    } else {
      setSelectedMotoristas([...motoristaOptions]);
    }
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getButtonLabel = (type: string) => {
    switch (type) {
      case "unidade":
        return selectedUnidades.length > 0 ? selectedUnidades[0] : "Unidade";
      case "data":
        return "Data";
      case "combustivel":
        return selectedCombustiveis.length > 0 ? selectedCombustiveis[0] : "Combustivel";
      case "motorista":
        return selectedMotoristas.length > 0 ? selectedMotoristas[0] : "Motorista";
      default:
        return "";
    }
  };

  const filteredUnidades = unidadeOptions.filter(option =>
    option.toLowerCase().includes(unidadeSearch.toLowerCase())
  );

  return (
    <div className="content-stretch flex gap-[16px] items-center relative" data-name="FilterBar" ref={dropdownRef}>
      {/* Search Input */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[282px]">
        <div className="bg-white h-[40px] relative rounded-[100px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-[12px] relative w-full">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p2d49ba80} stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Busca"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="basis-0 font-['Prompt:Light',_sans-serif] grow leading-[20px] text-[#999dae] text-[14px] tracking-[0.28px] bg-transparent border-none outline-none placeholder:text-[#999dae]"
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px overflow-x-auto relative shrink-0">
        {/* Unidade Filter */}
        <div className="relative shrink-0">
          <button
            ref={unidadeButtonRef}
            onClick={() => toggleDropdown("unidade", unidadeButtonRef)}
            className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0 hover:bg-[#3451b8] transition-colors"
          >
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_buildings)">
                  <path d={svgPaths.p1f45e100} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_buildings">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">
              {getButtonLabel("unidade")}
            </p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={openDropdown === "unidade" ? "M12 10L8 6L4 10" : "M4 6L8 10L12 6"} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
          
          {openDropdown === "unidade" && (
            <div 
              className="fixed bg-[#fafcff] rounded-[8px] z-[9999]" 
              style={{ top: `${dropdownPosition.top}px`, left: `${dropdownPosition.left}px` }}
              data-name="_DropdownMenuBase"
            >
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
                {/* Search and Select All */}
                <div className="box-border content-stretch flex flex-col items-start justify-center px-0 py-[8px] relative shrink-0 w-[280px]">
                  <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative w-full">
                        <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[17px] py-[13px] relative w-full">
                              <div className="relative shrink-0 size-[16px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <path d={svgPaths.p2d49ba80} stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </svg>
                              </div>
                              <input
                                type="text"
                                placeholder="Pesquisar"
                                value={unidadeSearch}
                                onChange={(e) => setUnidadeSearch(e.target.value)}
                                className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-none text-[#999dae] text-[14px] tracking-[0.28px] bg-transparent border-none outline-none placeholder:text-[#999dae]"
                              />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={toggleAllUnidades} className="h-[40px] relative shrink-0 w-full hover:bg-[#f1f5fd]">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-[10px] relative w-full">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                          <div className="relative shrink-0 size-[16px]">
                            {selectedUnidades.length === unidadeOptions.length ? (
                              <div className="absolute bg-[#3d5fd9] inset-0 overflow-clip rounded-[4px] flex items-center justify-center">
                                <Minus className="size-3 text-white" strokeWidth={2} />
                              </div>
                            ) : (
                              <div className="absolute bg-white inset-0 rounded-[4px]">
                                <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              </div>
                            )}
                          </div>
                          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Todos</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Menu Items */}
                <div className="box-border content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-[280px]">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    {filteredUnidades.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleUnidade(option)}
                        className="h-[38px] relative shrink-0 w-full hover:bg-[#f1f5fd]"
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[16px] h-[38px] items-center px-[16px] py-[10px] relative w-full">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                              <div className="relative shrink-0 size-[16px]">
                                {selectedUnidades.includes(option) ? (
                                  <div className="absolute bg-[#3d5fd9] inset-0 rounded-[4px] flex items-center justify-center">
                                    <Check className="size-3 text-white" strokeWidth={3} />
                                  </div>
                                ) : (
                                  <div className="absolute bg-white inset-0 rounded-[4px]">
                                    <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                  </div>
                                )}
                              </div>
                              <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{option}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative shrink-0 w-[280px]">
                  <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <button
                    onClick={() => setOpenDropdown(null)}
                    className="content-stretch flex items-start relative shrink-0 w-full"
                  >
                    <div className="basis-0 bg-[#3d5fd9] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#3451b8] transition-colors">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative w-full">
                          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Aplicar</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_16px_-10px_rgba(27,37,100,0.25)]" />
            </div>
          )}
        </div>

        {/* Data Filter - Date Picker */}
        <div className="relative shrink-0">
          <button
            ref={dataButtonRef}
            onClick={() => toggleDropdown("data", dataButtonRef)}
            className="bg-white box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0 hover:bg-[#f9f9f9] transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">
              {getButtonLabel("data")}
            </p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={openDropdown === "data" ? "M12 10L8 6L4 10" : "M4 6L8 10L12 6"} stroke="#3F424D" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {openDropdown === "data" && (
            <div 
              className="fixed z-[9999]"
              style={{ top: `${dropdownPosition.top}px`, left: `${dropdownPosition.left}px` }}
            >
              <div className="bg-white relative rounded-[8px] shrink-0">
                <div className="box-border content-stretch flex gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit]">
                  {/* Date Presets */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[80px]">
                    {datePresets.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setSelectedDatePreset(preset)}
                        className={`${
                          selectedDatePreset === preset ? "bg-[#dee7fb]" : "bg-white hover:bg-[#f1f5fd]"
                        } relative rounded-[6px] shrink-0 w-full transition-colors`}
                      >
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative w-full">
                            <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">{preset}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Calendar */}
                  <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[224px]">
                    {/* Header with month/year navigation */}
                    <div className="box-border content-stretch flex h-[32px] items-center justify-between px-[8px] py-0 relative shrink-0 w-[224px]">
                      <button onClick={previousMonth} className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M12.5 15L7.5 10L12.5 5" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </button>

                      <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[6px] shrink-0 px-2">
                        <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{months[currentMonth]}</p>
                        <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{currentYear}</p>
                      </div>

                      <button onClick={nextMonth} className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </button>
                    </div>

                    {/* Days of week */}
                    <div className="content-stretch flex items-center relative shrink-0">
                      {["D", "S", "T", "Q", "Q", "S", "S"].map((day, i) => (
                        <div key={i} className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0 w-[32px]">
                          <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase whitespace-pre">{day}</p>
                        </div>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[224px]">
                      {(() => {
                        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
                        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
                        const prevMonthDays = currentMonth === 0 ? getDaysInMonth(11, currentYear - 1) : getDaysInMonth(currentMonth - 1, currentYear);
                        const days = [];

                        // Previous month days
                        for (let i = firstDay - 1; i >= 0; i--) {
                          days.push(
                            <button
                              key={`prev-${i}`}
                              className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]"
                            >
                              <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{prevMonthDays - i}</p>
                            </button>
                          );
                        }

                        // Current month days
                        for (let day = 1; day <= daysInMonth; day++) {
                          const isSelected = day === selectedDate;
                          days.push(
                            <button
                              key={`current-${day}`}
                              onClick={() => setSelectedDate(day)}
                              className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[32px] hover:bg-[#f1f5fd]"
                            >
                              {isSelected && (
                                <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                              )}
                              <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{day}</p>
                            </button>
                          );
                        }

                        // Next month days to fill the grid
                        const remainingDays = 42 - days.length;
                        for (let day = 1; day <= remainingDays; day++) {
                          days.push(
                            <button
                              key={`next-${day}`}
                              className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]"
                            >
                              <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{day}</p>
                            </button>
                          );
                        }

                        return days;
                      })()}
                    </div>

                    {/* Apply button */}
                    <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0">
                      <button
                        onClick={() => setOpenDropdown(null)}
                        className="content-stretch flex items-start relative shrink-0 w-full"
                      >
                        <div className="basis-0 bg-[#3d5fd9] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#3451b8] transition-colors">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative w-full">
                              <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Aplicar</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_16px_-10px_rgba(27,37,100,0.25)]" />
              </div>
            </div>
          )}
        </div>

        {/* Combustível Filter */}
        <div className="relative shrink-0">
          <button
            ref={combustivelButtonRef}
            onClick={() => toggleDropdown("combustivel", combustivelButtonRef)}
            className="bg-white box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0 hover:bg-[#f9f9f9] transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">
              {getButtonLabel("combustivel")}
            </p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={openDropdown === "combustivel" ? "M12 10L8 6L4 10" : "M4 6L8 10L12 6"} stroke="#3F424D" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {openDropdown === "combustivel" && (
            <div 
              className="fixed bg-[#fafcff] rounded-[8px] z-[9999]"
              style={{ top: `${dropdownPosition.top}px`, left: `${dropdownPosition.left}px` }}
            >
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
                {/* Select All */}
                <div className="box-border content-stretch flex flex-col items-start justify-center px-0 py-[8px] relative shrink-0 w-[280px]">
                  <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <button onClick={toggleAllCombustiveis} className="h-[40px] relative shrink-0 w-full hover:bg-[#f1f5fd]">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-[10px] relative w-full">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                          <div className="relative shrink-0 size-[16px]">
                            {selectedCombustiveis.length === combustivelOptions.length ? (
                              <div className="absolute bg-[#3d5fd9] inset-0 overflow-clip rounded-[4px] flex items-center justify-center">
                                <Minus className="size-3 text-white" strokeWidth={2} />
                              </div>
                            ) : (
                              <div className="absolute bg-white inset-0 rounded-[4px]">
                                <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              </div>
                            )}
                          </div>
                          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Todos</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Menu Items */}
                <div className="box-border content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-[280px]">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    {combustivelOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleCombustivel(option)}
                        className="h-[38px] relative shrink-0 w-full hover:bg-[#f1f5fd]"
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[16px] h-[38px] items-center px-[16px] py-[10px] relative w-full">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                              <div className="relative shrink-0 size-[16px]">
                                {selectedCombustiveis.includes(option) ? (
                                  <div className="absolute bg-[#3d5fd9] inset-0 rounded-[4px] flex items-center justify-center">
                                    <Check className="size-3 text-white" strokeWidth={3} />
                                  </div>
                                ) : (
                                  <div className="absolute bg-white inset-0 rounded-[4px]">
                                    <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                  </div>
                                )}
                              </div>
                              <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{option}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative shrink-0 w-[280px]">
                  <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <button
                    onClick={() => setOpenDropdown(null)}
                    className="content-stretch flex items-start relative shrink-0 w-full"
                  >
                    <div className="basis-0 bg-[#3d5fd9] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#3451b8] transition-colors">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative w-full">
                          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Aplicar</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_16px_-10px_rgba(27,37,100,0.25)]" />
            </div>
          )}
        </div>

        {/* Motorista Filter */}
        <div className="relative shrink-0">
          <button
            ref={motoristaButtonRef}
            onClick={() => toggleDropdown("motorista", motoristaButtonRef)}
            className="bg-white box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0 hover:bg-[#f9f9f9] transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">
              {getButtonLabel("motorista")}
            </p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={openDropdown === "motorista" ? "M12 10L8 6L4 10" : "M4 6L8 10L12 6"} stroke="#3F424D" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {openDropdown === "motorista" && (
            <div 
              className="fixed bg-[#fafcff] rounded-[8px] z-[9999]"
              style={{ top: `${dropdownPosition.top}px`, left: `${dropdownPosition.left}px` }}
            >
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
                {/* Select All */}
                <div className="box-border content-stretch flex flex-col items-start justify-center px-0 py-[8px] relative shrink-0 w-[280px]">
                  <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <button onClick={toggleAllMotoristas} className="h-[40px] relative shrink-0 w-full hover:bg-[#f1f5fd]">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-[10px] relative w-full">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                          <div className="relative shrink-0 size-[16px]">
                            {selectedMotoristas.length === motoristaOptions.length ? (
                              <div className="absolute bg-[#3d5fd9] inset-0 overflow-clip rounded-[4px] flex items-center justify-center">
                                <Minus className="size-3 text-white" strokeWidth={2} />
                              </div>
                            ) : (
                              <div className="absolute bg-white inset-0 rounded-[4px]">
                                <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              </div>
                            )}
                          </div>
                          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Todos</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Menu Items */}
                <div className="box-border content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-[280px]">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    {motoristaOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleMotorista(option)}
                        className="h-[38px] relative shrink-0 w-full hover:bg-[#f1f5fd]"
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[16px] h-[38px] items-center px-[16px] py-[10px] relative w-full">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                              <div className="relative shrink-0 size-[16px]">
                                {selectedMotoristas.includes(option) ? (
                                  <div className="absolute bg-[#3d5fd9] inset-0 rounded-[4px] flex items-center justify-center">
                                    <Check className="size-3 text-white" strokeWidth={3} />
                                  </div>
                                ) : (
                                  <div className="absolute bg-white inset-0 rounded-[4px]">
                                    <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                  </div>
                                )}
                              </div>
                              <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{option}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative shrink-0 w-[280px]">
                  <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <button
                    onClick={() => setOpenDropdown(null)}
                    className="content-stretch flex items-start relative shrink-0 w-full"
                  >
                    <div className="basis-0 bg-[#3d5fd9] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#3451b8] transition-colors">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative w-full">
                          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Aplicar</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_16px_-10px_rgba(27,37,100,0.25)]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
