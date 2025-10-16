import svgPaths from "./svg-jf2bbr4t64";

function KpiCardIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <path d={svgPaths.p2beffd80} id="Vector" stroke="var(--stroke-0, #E40F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Itens com alerta</p>
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

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trending-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trending-up">
          <path d={svgPaths.p3b901d72} fill="var(--stroke-0, #E40F05)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trending() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Trending">
      <TrendingUp />
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[1.2px] uppercase">
        <p className="leading-[18px] whitespace-pre">10%</p>
      </div>
    </div>
  );
}

function Infos() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Infos">
      <Trending />
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">ao dia anterior</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">15</p>
      </div>
      <Infos />
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

function ButtonContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3d5fd9] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Ver alertas</p>
      <ChevronRight />
    </div>
  );
}

function CallToAction() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Call to action">
      <ButtonContent />
    </div>
  );
}

function InfoOrCta() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Info-or-CTA">
      <CallToAction />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Main />
      <InfoOrCta />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#feeae7] min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e40f05] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
      <Container />
    </div>
  );
}

function KpiCard() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
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
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">KM Rodado</p>
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
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">KM</p>
      </div>
    </div>
  );
}

function Main1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">1.019,0</p>
      </div>
      <Infos1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Main1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative size-full">
          <Header1 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container1 />
    </div>
  );
}

function KpiCard1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase1 />
    </div>
  );
}

function KpiCardIcon2() {
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

function Tittle2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tittle">
      <KpiCardIcon2 />
      <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Litros</p>
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
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">litros</p>
      </div>
    </div>
  );
}

function Main2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">451,03</p>
      </div>
      <Infos2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Main2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative size-full">
          <Header2 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container2 />
    </div>
  );
}

function KpiCard2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase2 />
    </div>
  );
}

function KpiCardIcon3() {
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

function Tittle3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tittle">
      <KpiCardIcon3 />
      <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Média de Custo/L</p>
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
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">KM/l</p>
      </div>
    </div>
  );
}

function Main3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">6,29</p>
      </div>
      <Infos3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Main3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative size-full">
          <Header3 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container3 />
    </div>
  );
}

function KpiCard3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase3 />
    </div>
  );
}

export default function KpiRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative size-full" data-name="KPI Row">
      <KpiCard />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <KpiCard1 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <KpiCard2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <KpiCard3 />
      </div>
    </div>
  );
}