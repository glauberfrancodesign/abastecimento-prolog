import svgPaths from "./svg-4wiv1ak52j";

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="iconLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="iconLeft">
          <path d={svgPaths.p13decf80} id="Vector" stroke="var(--stroke-0, #3F424D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function AgrupamentoTitulos() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="agrupamento_titulos">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f424d] text-[18px] tracking-[0.36px] w-full">Alerta de abastecimento</p>
    </div>
  );
}

function IconText2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon+Text2">
      <IconLeft />
      <AgrupamentoTitulos />
    </div>
  );
}

function IconText1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon+Text1">
      <IconText2 />
    </div>
  );
}

function Close() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <path d="M18 6L6 18M6 6L18 18" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </button>
  );
}

function Fechar() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 size-[24px]" data-name="Fechar">
      <Close />
    </div>
  );
}

function IconTextCloseButton() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Icon+Text+CloseButton\">
      <IconText1 />
      <Fechar />
    </div>
  );
}

function DrawerHeader() {
  return (
    <div className="bg-[#f1f5fd] h-[60px] shrink-0 sticky top-0 w-full z-[3]" data-name="_drawerHeader">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between p-[24px] relative w-full">
          <IconTextCloseButton />
        </div>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Em andamento</p>
      <ChevronDown />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonContent />
    </div>
  );
}

function WebStatusDeOSeProblema() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="WEB-Status-de-OSePROBLEMA">
      <Button />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
      <WebStatusDeOSeProblema />
    </div>
  );
}

function Frame10827() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-[201px]">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Status:</p>
      </div>
      <Status />
    </div>
  );
}

function Frame427318276() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Prompt:Medium',_sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[32px] tracking-[0.64px]">A média de consumo está fora da faixa de variação aceita.</p>
      <Frame10827 />
    </div>
  );
}

function Atual() {
  return (
    <div className="absolute bg-[#be0d04] right-0 rounded-[173.664px] size-[40px] top-1/2 translate-y-[-50%]" data-name="Atual">
      <div aria-hidden="true" className="absolute border-[#b5b8c4] border-[2.605px] border-solid inset-0 pointer-events-none rounded-[173.664px] shadow-[0px_5.789px_11.578px_-2.894px_rgba(16,24,40,0.1),0px_2.894px_5.789px_-2.894px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Frame427318317() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[8px] relative w-full">
          <div className="bg-[#449c3b] h-[14px] shrink-0 w-full" data-name="Progress line" />
        </div>
      </div>
    </div>
  );
}

function Frame427318321() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[40px]">
      <div className="bg-[#3f424d] h-[31.259px] rounded-[173.664px] shrink-0 w-[3.473px]" />
    </div>
  );
}

function Meta() {
  return (
    <div className="bg-[#449c3b] relative rounded-[133.333px] shrink-0 size-[24px]" data-name="Meta">
      <div aria-hidden="true" className="absolute border-2 border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[133.333px] shadow-[0px_4.444px_8.889px_-2.222px_rgba(16,24,40,0.1),0px_2.222px_4.444px_-2.222px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Frame427318318() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame427318321 />
      <Meta />
      <Frame427318321 />
    </div>
  );
}

function Frame427318273() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center left-[calc(50%+4px)] translate-x-[-50%] w-[48px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px] text-nowrap tracking-[0.36px]">
        <p className="leading-[28px] whitespace-pre">3.10</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[13.893px] tracking-[1.3893px] uppercase w-[min-content]">
        <p className="leading-[13.893px]">META</p>
      </div>
    </div>
  );
}

function Frame427318274() {
  return (
    <div className="font-['Prompt:Regular',_sans-serif] h-[42px] leading-[0] not-italic relative shrink-0 text-[#25262c] text-center w-full">
      <div className="absolute flex flex-col justify-center left-[19.82px] text-[18px] top-[calc(50%-7px)] tracking-[0.36px] translate-x-[-50%] translate-y-[-50%] w-[40px]">
        <p className="leading-[28px]">2.80</p>
      </div>
      <Frame427318273 />
      <div className="absolute flex flex-col justify-center right-[20.18px] text-[18px] top-[calc(50%-7px)] tracking-[0.36px] translate-x-[50%] translate-y-[-50%] w-[40px]">
        <p className="leading-[28px]">4.10</p>
      </div>
    </div>
  );
}

function Frame427318319() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[4px]">
      <Frame427318318 />
      <Frame427318274 />
    </div>
  );
}

function Frame427318320() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[5px] relative shrink-0 w-full">
      <Frame427318317 />
      <Frame427318319 />
    </div>
  );
}

function SliderDeMedia() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[13.893px] shrink-0" data-name="Slider de média">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[216px] py-[4px] relative w-full">
          <div className="absolute h-[14px] left-[0.56%] right-[0.84%] top-1/2 translate-y-[-50%]" data-name="Background">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1058 14">
              <path d={svgPaths.p23289cf0} fill="var(--fill-0, #D8DADF)" id="Background" />
            </svg>
          </div>
          <Atual />
          <Frame427318320 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="Container">
      <p className="font-['Prompt:Medium',_sans-serif] leading-[48px] relative shrink-0 text-[#be0d04] text-[32px] tracking-[0.64px]">10.7</p>
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px]">km/L atual</p>
    </div>
  );
}

function MetaSlider() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Meta slider">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start pb-[24px] pt-[48px] px-[24px] relative w-full">
          <SliderDeMedia />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame427318291() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Placa do veículo</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">RXA4F51</p>
      </div>
    </div>
  );
}

function Frame427318292() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Motorista responsável</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">João Souza</p>
      </div>
    </div>
  );
}

function Frame427318294() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Posto</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">Shell - São Bernardo</p>
      </div>
    </div>
  );
}

function Frame427318295() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Origem</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">Integração — Truckpag</p>
      </div>
    </div>
  );
}

function Frame427318293() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Data e hora `}</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">02/10/2026 - 11:57</p>
      </div>
    </div>
  );
}

function Infos() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Infos">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[32px] items-start p-[24px] relative w-full">
          <Frame427318291 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318292 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318294 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318295 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318293 />
        </div>
      </div>
    </div>
  );
}

function Frame427318290() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Dados do abastecimento</p>
      <Infos />
    </div>
  );
}

function Frame427318278() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame427318290 />
    </div>
  );
}

function KpiCardIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <path d={svgPaths.pe901540} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Tittle() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tittle">
      <KpiCardIcon />
      <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Abastecido</p>
      </div>
    </div>
  );
}

function Actions() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Actions" />;
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle />
      <Actions />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">70L</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Main />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container1 />
    </div>
  );
}

function KpiCard() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-[280px] relative shrink-0" data-name="KPI Card">
      <KpiCardBase />
    </div>
  );
}

function KpiCardIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <path d={svgPaths.pf0cab00} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Tittle1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tittle">
      <KpiCardIcon1 />
      <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">KM rodado</p>
      </div>
    </div>
  );
}

function Actions1() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Actions" />;
}

function Header1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle1 />
      <Actions1 />
    </div>
  );
}

function Infos1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Infos">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">KM</p>
    </div>
  );
}

function Main1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">750,0</p>
      </div>
      <Infos1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Main1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header1 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container2 />
    </div>
  );
}

function KpiCard1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase1 />
    </div>
  );
}

function KpiCardIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <path d={svgPaths.p34fc7280} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Tittle2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tittle">
      <KpiCardIcon2 />
      <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">KM registrado</p>
      </div>
    </div>
  );
}

function Actions2() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Actions" />;
}

function Header2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle2 />
      <Actions2 />
    </div>
  );
}

function Infos2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Infos">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">KM</p>
    </div>
  );
}

function Main2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">347.677,0</p>
      </div>
      <Infos2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Main2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header2 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container3 />
    </div>
  );
}

function KpiCard2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase2 />
    </div>
  );
}

function KpiCardIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <path d={svgPaths.p477500} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Tittle3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tittle">
      <KpiCardIcon3 />
      <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Valor abastecido</p>
      </div>
    </div>
  );
}

function Actions3() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Actions" />;
}

function Header3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle3 />
      <Actions3 />
    </div>
  );
}

function Infos3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Infos">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[22px] whitespace-pre">R$6,70/L</p>
      </div>
    </div>
  );
}

function Main3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">R$469,00</p>
      </div>
      <Infos3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Main3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header3 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container4 />
    </div>
  );
}

function KpiCard3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase3 />
    </div>
  );
}

function KpiRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="KPI Row">
      <KpiCard />
      <KpiCard1 />
      <KpiCard2 />
      <KpiCard3 />
    </div>
  );
}

function Frame427318277() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Informações importantes</p>
      <KpiRow />
    </div>
  );
}

function InsightLightbulb() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="insight-lightbulb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="insight-lightbulb">
          <path d={svgPaths.p926adec} id="Vector" stroke="var(--stroke-0, #25262C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InfoBanner() {
  return (
    <div className="bg-[#ffdb1b] relative rounded-[8px] shrink-0 w-full" data-name="Info banner">
      <div aria-hidden="true" className="absolute border border-[#957f0b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <InsightLightbulb />
          <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Sugestão: Validar se o motorista completou o tanque no abastecimento.</p>
        </div>
      </div>
    </div>
  );
}

function Frame427318280() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center left-[calc(50%-1px)] px-[4px] py-[8px] top-[calc(50%+48px)] translate-x-[-50%] translate-y-[-50%] w-[52px]">
      <div className="bg-[#dee7fb] h-full shrink-0 w-[2px]" />
    </div>
  );
}

function Frame427318288() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">07/10/25</p>
      <Frame427318280 />
    </div>
  );
}

function Fuel() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fuel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fuel">
          <path d={svgPaths.p1013bd80} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2109() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Abastecimento ID: 97182426 — TruckPag</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
        <p className="leading-[20px]">2.07 KM/L | META 2.30KM/L | 154 LITROS | KM RODADO 300 | KM REGISTRADO 348.392,0 | VALOR PAGO R$ 1.031,08 (R$ 6,70/L)</p>
      </div>
    </div>
  );
}

function Frame2110() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame2109 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
      <ChevronRight />
    </div>
  );
}

function ButtonA() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="ButtonA">
      <ButtonContent1 />
    </div>
  );
}

function Frame2115() {
  return (
    <div className="bg-[#fafcff] h-[68px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <Fuel />
          <Frame2110 />
          <ButtonA />
        </div>
      </div>
    </div>
  );
}

function Frame427318266() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
      <Frame2115 />
    </div>
  );
}

function Frame427318279() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame427318288 />
      <Frame427318266 />
    </div>
  );
}

function Frame427318286() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center left-[calc(50%-0.5px)] px-[4px] py-[8px] top-[calc(50%+48px)] translate-x-[-50%] translate-y-[-50%] w-[52px]">
      <div className="bg-[#dee7fb] h-full shrink-0 w-[2px]" />
    </div>
  );
}

function Frame427318296() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">06/10/25</p>
      <Frame427318286 />
    </div>
  );
}

function Fuel1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fuel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fuel">
          <path d={svgPaths.p1013bd80} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2111() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Abastecimento ID: 97182221 — TruckPag</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
        <p className="leading-[20px]">
          <span>{`0.39 KM/L | META 2.30KM/L | 352 `}</span>
          <span className="font-['Prompt:Light',_sans-serif] not-italic">LITROS</span>
          <span>{` | KM RODADO 138 | KM REGISTRADO 347.815,0 | VALOR PAGO R$ 2.358,04 (R$ 6,70/L)`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame2112() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame2111 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
      <ChevronRight1 />
    </div>
  );
}

function ButtonA1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="ButtonA">
      <ButtonContent2 />
    </div>
  );
}

function Frame2116() {
  return (
    <div className="bg-[#fafcff] h-[68px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <Fuel1 />
          <Frame2112 />
          <ButtonA1 />
        </div>
      </div>
    </div>
  );
}

function Frame427318283() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
      <Frame2116 />
    </div>
  );
}

function Frame427318270() {
  return (
    <div className="content-stretch flex gap-[24px] h-[68px] items-center relative shrink-0 w-full">
      <Frame427318296 />
      <Frame427318283 />
    </div>
  );
}

function Frame427318297() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center left-[calc(50%-0.5px)] px-[4px] py-[8px] top-[calc(50%+48px)] translate-x-[-50%] translate-y-[-50%] w-[52px]">
      <div className="bg-[#dee7fb] h-full shrink-0 w-[2px]" />
    </div>
  );
}

function Frame427318287() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">05/10/25</p>
      <Frame427318297 />
    </div>
  );
}

function TriangleAlert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="triangle-alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="triangle-alert">
          <path d={svgPaths.p17792780} id="Vector" stroke="var(--stroke-0, #980A03)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2113() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)]">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Abastecimento ID: 97182126 — TruckPag</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
        <p className="leading-[20px]">
          <span>{`10,7 KM/L | META 2.30KM/L | 70 `}</span>
          <span className="font-['Prompt:Light',_sans-serif] not-italic">LITROS</span>
          <span>{` | KM RODADO 750,0 | KM REGISTRADO 347.677,0 | VALOR PAGO R$ 469,00 (R$ 6,70/L)`}</span>
        </p>
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
      <ChevronRight2 />
    </div>
  );
}

function ButtonA2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="ButtonA">
      <ButtonContent3 />
    </div>
  );
}

function Frame2117() {
  return (
    <div className="bg-[#feeae7] h-[68px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#980a03] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <TriangleAlert />
          <Frame2113 />
          <ButtonA2 />
        </div>
      </div>
    </div>
  );
}

function Frame427318282() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#fbd2d0] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
      <Frame2117 />
    </div>
  );
}

function Frame427318268() {
  return (
    <div className="content-stretch flex gap-[24px] h-[68px] items-center relative shrink-0 w-full">
      <Frame427318287 />
      <Frame427318282 />
    </div>
  );
}

function Frame427318285() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-center text-nowrap tracking-[1.2px] uppercase whitespace-pre">04/10/25</p>
    </div>
  );
}

function Fuel2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fuel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fuel">
          <path d={svgPaths.p1013bd80} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2114() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Abastecimento ID: 97182110 — TruckPag</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[14px] tracking-[0.28px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">
          <span>{`2.10 KM/L  | META 2.30KM/L | 175 `}</span>
          <span className="font-['Prompt:Light',_sans-serif] not-italic">LITROS</span>
          <span>{` | KM RODADO 385,0 | KM REGISTRADO 346.917,0 | VALOR PAGO R$ 1.172,50 (R$ 6,70/L)`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame2118() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame2114 />
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Acessar</p>
      <ChevronRight3 />
    </div>
  );
}

function ButtonA3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="ButtonA">
      <ButtonContent4 />
    </div>
  );
}

function Frame2119() {
  return (
    <div className="bg-[#fafcff] h-[68px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <Fuel2 />
          <Frame2118 />
          <ButtonA3 />
        </div>
      </div>
    </div>
  );
}

function Frame427318281() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
      <Frame2119 />
    </div>
  );
}

function Frame427318269() {
  return (
    <div className="content-stretch flex gap-[24px] h-[68px] items-center relative shrink-0 w-full">
      <Frame427318285 />
      <Frame427318281 />
    </div>
  );
}

function Frame427318271() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <Frame427318279 />
      <Frame427318270 />
      <Frame427318268 />
      <Frame427318269 />
    </div>
  );
}

function Frame427318284() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <Frame427318271 />
        </div>
      </div>
    </div>
  );
}

function Frame427318289() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Histórico do abastecimento</p>
      <Frame427318284 />
    </div>
  );
}

function Frame427318263() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[22px] whitespace-pre">Comentários</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white max-h-[118px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center max-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center max-h-inherit px-[16px] py-[10px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Prompt:Light',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#999dae] text-[14px] text-nowrap tracking-[0.28px]">
            Adicionar comentário...
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function TextareaInputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="TextareaInputField">
      <InputWithLabel />
    </div>
  );
}

function Frame2535() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full">
      <TextareaInputField />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Component 4">
      <Frame427318263 />
      <Frame2535 />
    </div>
  );
}

function Frame2531() {
  return (
    <div className="content-stretch flex gap-[8px] items-end leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#25262c] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Pedro Nunes</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] tracking-[1px] uppercase">
        <p className="leading-[16px] text-nowrap whitespace-pre">- 10/10/2025 - 13:15</p>
      </div>
    </div>
  );
}

function ButtonContent5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Editar</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent5 />
    </div>
  );
}

function ButtonContent6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Excluir</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent6 />
    </div>
  );
}

function Frame2548() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Component 5">
      <Frame2531 />
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-[min-content]">
        <p className="leading-[20px]">mandei msg pro motorista, esperando resposta</p>
      </div>
      <Frame2548 />
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="logo icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="logo icon">
          <path d={svgPaths.pc88a00} fill="url(#paint0_linear_7_36573)" id="background" />
          <g id="symbol">
            <path d={svgPaths.p1ca2a600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1c282b00} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_36573" x1="6.00123" x2="6.00123" y1="12.0024" y2="-3.79827e-05">
            <stop stopColor="#3650B2" />
            <stop offset="0.02" stopColor="#3650B2" />
            <stop offset="0.22" stopColor="#3F5BC9" />
            <stop offset="0.45" stopColor="#4563DA" />
            <stop offset="0.69" stopColor="#4968E4" />
            <stop offset="0.99" stopColor="#4A6AE7" />
            <stop offset="1" stopColor="#4A6AE7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LogoIcon1() {
  return (
    <div className="absolute bottom-[10%] content-stretch flex gap-[3px] items-start left-0 right-0 top-[10%]" data-name="logo icon">
      <LogoIcon />
    </div>
  );
}

function LogoProlog() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Logo Prolog">
      <LogoIcon1 />
    </div>
  );
}

function LogoProlog1() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0 size-[12px]" data-name="Logo Prolog">
      <LogoProlog />
    </div>
  );
}

function Frame2549() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LogoProlog1 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.0024554235860705376)+(var(--transform-inner-height)*0.9999969601631165)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.0024554235860705376)+(var(--transform-inner-width)*0.9999969601631165)))]" style={{ "--transform-inner-width": "48.796875", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.141deg]">
          <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative text-[#3d5fd9] text-[10px] text-nowrap tracking-[1px] uppercase">
            <p className="leading-[16px] whitespace-pre">PROLOG</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">- 10/10/2025 - 13:11</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Component 6">
      <Frame2549 />
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-[min-content]">
        <p className="leading-[20px]">O status do alerta foi alterado para “Em andamento” por Pedro Nunes.</p>
      </div>
    </div>
  );
}

function SecaoDeComentarios() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Seção de comentários">
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function Frame427318264() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame427318276 />
      <MetaSlider />
      <Frame427318278 />
      <Frame427318277 />
      <InfoBanner />
      <Frame427318289 />
      <div className="bg-[#dee7fb] h-px shrink-0 w-full" />
      <SecaoDeComentarios />
    </div>
  );
}

function AlertContainer() {
  return (
    <div className="box-border content-stretch flex items-start pb-[24px] pt-0 px-0 relative rounded-[8px] shrink-0 w-full z-[1]" data-name="Alert container">
      <Frame427318264 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="content">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] isolate items-center pb-0 pt-[24px] px-[24px] relative w-full">
          <AlertContainer />
        </div>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-left">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <ChevronLeft />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Voltar</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-0 mt-0 relative rounded-[8px]" data-name="Button">
      <ButtonContent7 />
    </div>
  );
}

function Group5019() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button3 />
    </div>
  );
}

function Left() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-start overflow-visible p-0 relative shrink-0" data-name="left">
      <Group5019 />
    </button>
  );
}

function Share2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="share-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="share-2">
          <path d={svgPaths.p3643ab00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent8() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <Share2 />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Compartilhar</p>
    </div>
  );
}

function ButtonA4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ButtonA">
      <ButtonContent8 />
    </div>
  );
}

function Export() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="export">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="export">
          <path d={svgPaths.p42da360} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent9() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <Export />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Exportar</p>
    </div>
  );
}

function ButtonB() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="buttonB">
      <ButtonContent9 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="right">
      <ButtonA4 />
      <ButtonB />
    </div>
  );
}

function DrawerFooter() {
  return (
    <div className="bg-[#f1f5fd] h-[60px] shrink-0 sticky top-0 w-full z-[1]" data-name="_drawerFooter">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[14px] relative w-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-[#fafcff] content-stretch flex flex-col grow isolate items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0" data-name="container">
      <DrawerHeader />
      <Content4 />
      <DrawerFooter />
    </div>
  );
}

export default function DrawerSlot() {
  return (
    <div className="relative size-full" data-name="drawerSlot">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex items-start max-w-inherit p-[8px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}