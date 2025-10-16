interface AlertasTableInfoProps {
  onOpenDrawer: () => void;
}

export function AlertasTableInfo({ onOpenDrawer }: AlertasTableInfoProps) {
  const alertas = [
    {
      id: 1,
      dataHora: "02/10/2026 - 11:57",
      status: "andamento",
      statusLabel: "Em andamento",
      descricao: "A média de consumo está acima",
      motorista: "João Souza",
      placa: "RXA4F51"
    },
    {
      id: 2,
      dataHora: "02/10/2026 - 11:45",
      status: "resolvido",
      statusLabel: "Resolvido",
      descricao: "O consumo está abaixo do valor médio",
      motorista: "Fernando Araripe",
      placa: "HXU2I22"
    },
    {
      id: 3,
      dataHora: "02/10/2026 - 11:42",
      status: "ignorado",
      statusLabel: "Ignorado",
      descricao: "A média de consumo está acima",
      motorista: "José Ferreira",
      placa: "AZK5J23"
    },
    {
      id: 4,
      dataHora: "02/10/2026 - 10:51",
      status: "pendente",
      statusLabel: "Pendente",
      descricao: "A média de consumo está acima",
      motorista: "Getúlio Marcos",
      placa: "RXA4F51"
    }
  ];

  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case "andamento":
        return {
          bg: "bg-[#f1f5fd]",
          border: "border-[#3d5fd9]",
          dot: "bg-[#3d5fd9]",
          text: "text-[#3d5fd9]"
        };
      case "resolvido":
        return {
          bg: "bg-[#daf5d7]",
          border: "border-[#61d355]",
          dot: "bg-[#449c3b]",
          text: "text-[#449c3b]"
        };
      case "ignorado":
        return {
          bg: "bg-[#e9ecec]",
          border: "border-[#b5b8c4]",
          dot: "bg-[#6f7588]",
          text: "text-[#6f7588]"
        };
      case "pendente":
        return {
          bg: "bg-[#feeae7]",
          border: "border-[#be0d04]",
          dot: "bg-[#be0d04]",
          text: "text-[#be0d04]"
        };
      default:
        return {
          bg: "bg-[#e9ecec]",
          border: "border-[#b5b8c4]",
          dot: "bg-[#6f7588]",
          text: "text-[#6f7588]"
        };
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Table Container */}
      <div className="flex flex-col overflow-hidden border border-[#dee7fb] rounded-lg">
        {/* Table Wrapper */}
        <div className="overflow-auto custom-scrollbar max-h-full">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 z-10 bg-[#f1f5fd]">
              <tr className="bg-[#f1f5fd]">
                <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                  Data e Hora
                </th>
                <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                  Status
                </th>
                <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[300px]">
                  Descrição
                </th>
                <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                  Motorista
                </th>
                <th className="h-8 px-4 text-left font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[178px]">
                  Placa do veículo
                </th>
                <th className="h-8 px-4 text-right font-['Prompt:Light',_sans-serif] text-[14px] text-[#6f7588] tracking-[0.28px] border-b border-[#e9ecec] min-w-[120px]">
                </th>
              </tr>
            </thead>
            <tbody>
              {alertas.map((alerta) => {
                const statusClasses = getStatusBadgeClasses(alerta.status);
                return (
                  <tr key={alerta.id} className="bg-white hover:bg-gray-50">
                    <td className="min-h-[64px] px-4 py-2 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[14px] text-[#25262c] tracking-[0.28px]">
                      {alerta.dataHora}
                    </td>
                    <td className="min-h-[64px] px-4 py-2 align-middle border-b border-[#e9ecec]">
                      <div className={`${statusClasses.bg} box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[12px] py-0 relative rounded-[39px] shrink-0 w-fit`}>
                        <div aria-hidden="true" className={`absolute border ${statusClasses.border} border-solid inset-0 pointer-events-none rounded-[39px]`} />
                        <div className={`${statusClasses.dot} rounded-[19px] shrink-0 size-[6px]`} />
                        <div className={`flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${statusClasses.text} text-[10px] text-nowrap tracking-[1px] uppercase`}>
                          <p className="leading-[16px] whitespace-pre">{alerta.statusLabel}</p>
                        </div>
                      </div>
                    </td>
                    <td className="min-h-[64px] px-4 py-2 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[14px] text-[#25262c] tracking-[0.28px]">
                      {alerta.descricao}
                    </td>
                    <td className="min-h-[64px] px-4 py-2 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[14px] text-[#25262c] tracking-[0.28px]">
                      {alerta.motorista}
                    </td>
                    <td className="min-h-[64px] px-4 py-2 align-middle border-b border-[#e9ecec] font-['Prompt:Light',_sans-serif] text-[14px] text-[#25262c] tracking-[0.28px]">
                      {alerta.placa}
                    </td>
                    <td className="min-h-[64px] px-4 py-2 align-middle text-right border-b border-[#e9ecec]">
                      <button 
                        onClick={onOpenDrawer}
                        className="font-['Prompt:Light',_sans-serif] text-[12px] text-[#3d5fd9] tracking-[0.24px] hover:underline cursor-pointer"
                      >
                        Ver alerta
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="relative shrink-0 w-full mt-6">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative w-full">
            <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
              <p className="leading-[20px] whitespace-pre">04 alertas</p>
            </div>
            <button className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0 hover:opacity-80 transition-opacity">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M9.33333 1.33333V4C9.33333 4.35362 9.47381 4.69276 9.72386 4.94281C9.97391 5.19286 10.313 5.33333 10.6667 5.33333H13.3333M6.66667 6H5.33333M10.6667 8.66667H5.33333M10.6667 11.3333H5.33333M10 1.33333H4C3.64638 1.33333 3.30724 1.47381 3.05719 1.72386C2.80714 1.97391 2.66667 2.31304 2.66667 2.66667V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2761C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V4.66667L10 1.33333Z" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3d5fd9] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Exportar itens</p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M4 6L8 10L12 6" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
