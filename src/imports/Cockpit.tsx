import svgPaths from "./svg-aq15klh6tb";
import imgRectangle37 from "figma:asset/b09f5a215ce64a86c0f888837b43923ab265f70d.png";
import { imgScreenshot20240702At1035361 } from "./svg-6i68s";

function LogoIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="logo icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="logo icon">
          <path d={svgPaths.pbd8c00} fill="url(#paint0_linear_1_15428)" id="background" />
          <g id="symbol">
            <path d={svgPaths.p24638e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p95a8080} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_15428" x1="16.0033" x2="16.0033" y1="32.0064" y2="-0.000100314">
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
    <div className="absolute content-stretch flex gap-[8px] inset-0 items-start" data-name="logo icon">
      <LogoIcon />
    </div>
  );
}

function LogoProlog() {
  return (
    <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Logo Prolog">
      <LogoIcon1 />
    </div>
  );
}

function TopLogo() {
  return (
    <div className="bg-[#f1f5fd] h-[80px] relative rounded-tl-[8px] shrink-0 w-full" data-name="Top logo">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex h-[80px] items-start justify-center p-[16px] relative w-full">
          <LogoProlog />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-center relative shrink-0 w-full" data-name="Header">
      <TopLogo />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p3181ee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton() {
  return (
    <div className="bg-[#3d5fd9] relative rounded-[8px] shrink-0 w-full" data-name="_Sidebar button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
          <Home />
        </div>
      </div>
    </div>
  );
}

function PieChart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pie-chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pie-chart">
          <path d={svgPaths.p38273500} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Sidebar button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

function Frame10810() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <SidebarButton1 />
    </div>
  );
}

function Reports() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="reports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reports">
          <path d={svgPaths.p7a3a140} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_Sidebar button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
          <Reports />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Top">
      <SidebarButton />
      <Frame10810 />
      <SidebarButton2 />
    </div>
  );
}

function TruckSparkles() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="truck-sparkles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="truck-sparkles">
          <path d={svgPaths.p2f1cdff0} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton3() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Sidebar button">
      <TruckSparkles />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="group">
          <path d={svgPaths.pae41680} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton4() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Sidebar button">
      <Group />
    </div>
  );
}

function PackageCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="package-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="package-check">
          <path d={svgPaths.p375a2ee0} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton5() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Sidebar button">
      <PackageCheck />
    </div>
  );
}

function Primary() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Primary">
      <SidebarButton3 />
      <SidebarButton4 />
      <SidebarButton5 />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shield-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shield-check">
          <path d={svgPaths.p3026f100} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Sidebar button">
      <ShieldCheck />
    </div>
  );
}

function Buildings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="buildings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="buildings">
          <path d={svgPaths.p16215f00} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Sidebar button">
      <Buildings />
    </div>
  );
}

function Request() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="request">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="request">
          <path d={svgPaths.p10f53700} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarButton8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Sidebar button">
      <Request />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Bottom">
      <SidebarButton6 />
      <SidebarButton7 />
      <SidebarButton8 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0" data-name="Container">
      <Top />
      <Primary />
      <Bottom />
    </div>
  );
}

function SidebarMain() {
  return (
    <div className="bg-[#f1f5fd] box-border content-stretch flex h-full items-start justify-center p-[16px] relative shrink-0 z-[2]" data-name="Sidebar main">
      <Container />
    </div>
  );
}

function SidebarContainer() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0" data-name="Sidebar container">
      <SidebarMain />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <div className="absolute inset-[-5.88%_-10.92%_-10.92%_-4.2%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.681px_2.353px] mask-size-[40px_40px]" data-name="Screenshot 2024-07-02 at 10.35.36 1" style={{ maskImage: `url('${imgScreenshot20240702At1035361}')` }} />
    </div>
  );
}

function Designers() {
  return (
    <div className="absolute inset-0 rounded-[33.613px]" data-name="Designers">
      <div aria-hidden="true" className="absolute border-[#c5d7f8] border-[2.5px] border-solid inset-[-2.5px] pointer-events-none rounded-[36.113px]" />
      <MaskGroup />
    </div>
  );
}

function AvatarIcon() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[40px]" data-name="Avatar Icon">
      <Designers />
      <p className="absolute font-['Prompt:Light',_sans-serif] leading-[20px] left-[calc(50%-9px)] not-italic text-[#3d5fd9] text-[14px] text-nowrap top-[calc(50%-10px)] tracking-[0.28px] whitespace-pre">GF</p>
    </div>
  );
}

function AvatarIcon1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Avatar icon">
      <AvatarIcon />
    </div>
  );
}

function ClientProfile() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Client profile">
      <AvatarIcon1 />
    </div>
  );
}

function AvatarSidebarButton() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0" data-name="_Avatar sidebar button">
      <ClientProfile />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f1f5fd] box-border content-stretch flex h-[80px] items-center justify-between px-0 py-[16px] relative rounded-bl-[8px] shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[8px]" />
      <AvatarSidebarButton />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SidebarExpandAndCollapseButton() {
  return (
    <div className="absolute bg-[#c5d7f8] bottom-[26px] box-border content-stretch flex items-center left-[73px] px-[2px] py-[8px] rounded-br-[8px] rounded-tr-[8px]" data-name="_Sidebar expand and collapse button">
      <ChevronRight />
    </div>
  );
}

function MenuDeNavegacaoWeb() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 z-[2]" data-name="Menu de navegação web">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
      <Header />
      <SidebarContainer />
      <Footer />
      <SidebarExpandAndCollapseButton />
    </div>
  );
}

function TittleAndSubtittle() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="Tittle and subtittle">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] min-w-full relative shrink-0 text-[18px] text-black tracking-[0.36px] w-[min-content]">Por onde começar</p>
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">As principais atividades da rotina da unidade [NOME-UNIDADE]</p>
    </div>
  );
}

function Frame10743() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <TittleAndSubtittle />
    </div>
  );
}

function Frame10775() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10743 />
    </div>
  );
}

function Frame10746() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10775 />
    </div>
  );
}

function Fuel() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fuel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fuel">
          <path d={svgPaths.pe901540} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Info() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="info">
        <path d={svgPaths.p33cad000} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function InfoIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="InfoIcon">
      <Info />
    </div>
  );
}

function Frame10784() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Fuel />
      <p className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#3d5fd9] text-[18px] tracking-[0.36px]">Alertas de Abastecimentos</p>
      <InfoIcon />
    </div>
  );
}

function TriangleAlert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="triangle-alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="triangle-alert">
          <path d={svgPaths.p2beffd80} id="Vector" stroke="var(--stroke-0, #957F0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-[#fff1aa] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[40px]" data-name="Featured icon">
      <TriangleAlert />
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

function Frame10789() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <FeaturedIcon />
      <p className="font-['Prompt:Medium',_sans-serif] leading-[64px] not-italic relative shrink-0 text-[#3f424d] text-[48px] text-nowrap tracking-[0.96px] whitespace-pre">15</p>
      <Infos />
    </div>
  );
}

function CardDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Card description">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] tracking-[0.28px] w-full">Verifique os alertas pendentes em abastecimento</p>
    </div>
  );
}

function Frame10788() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10789 />
      <CardDescription />
    </div>
  );
}

function Frame10812() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10788 />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="basis-0 bg-[#3d5fd9] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="buttonContent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">Ver Alertas</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

function Frame10781() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Button1 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10784 />
      <Frame10812 />
      <Frame10781 />
    </div>
  );
}

function CardKpi() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Card KPI">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function TruckCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="truck-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="truck-check">
          <path d={svgPaths.p21de3500} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Info1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="info">
        <path d={svgPaths.p33cad000} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function InfoIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="InfoIcon">
      <Info1 />
    </div>
  );
}

function Frame10785() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <TruckCheck />
      <p className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#3d5fd9] text-[18px] tracking-[0.36px]">Veículos Pendentes Checklist</p>
      <InfoIcon1 />
    </div>
  );
}

function TriangleAlert1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="triangle-alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="triangle-alert">
          <path d={svgPaths.p2beffd80} id="Vector" stroke="var(--stroke-0, #957F0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-[#fff1aa] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[40px]" data-name="Featured icon">
      <TriangleAlert1 />
    </div>
  );
}

function Frame10790() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <FeaturedIcon1 />
      <p className="font-['Prompt:Medium',_sans-serif] leading-[64px] not-italic relative shrink-0 text-[#3f424d] text-[48px] text-nowrap tracking-[0.96px] whitespace-pre">08</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Card description">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] tracking-[0.28px] w-full">Sua frota está comprometida!</p>
    </div>
  );
}

function Frame10791() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10790 />
      <CardDescription1 />
    </div>
  );
}

function Frame10814() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10791 />
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="basis-0 bg-[#3d5fd9] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="buttonContent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">Ver Relatórios de Checklist</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
      <ButtonContent2 />
    </div>
  );
}

function Frame10783() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Button2 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10785 />
      <Frame10814 />
      <Frame10783 />
    </div>
  );
}

function CardKpi1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Card KPI">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Pressure2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pressure-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pressure-2">
          <path d={svgPaths.p3701f500} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Info2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="info">
        <path d={svgPaths.p33cad000} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function InfoIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="InfoIcon">
      <Info2 />
    </div>
  );
}

function Frame10786() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Pressure2 />
      <p className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#3d5fd9] text-[18px] tracking-[0.36px]">Aferições atrasadas</p>
      <InfoIcon2 />
    </div>
  );
}

function TriangleAlert2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="triangle-alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="triangle-alert">
          <path d={svgPaths.p2beffd80} id="Vector" stroke="var(--stroke-0, #957F0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="bg-[#fff1aa] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[40px]" data-name="Featured icon">
      <TriangleAlert2 />
    </div>
  );
}

function Frame10792() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <FeaturedIcon2 />
      <p className="font-['Prompt:Medium',_sans-serif] leading-[64px] not-italic relative shrink-0 text-[#3f424d] text-[48px] text-nowrap tracking-[0.96px] whitespace-pre">08</p>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Card description">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] tracking-[0.28px] w-full">Sua frota está comprometida!</p>
    </div>
  );
}

function Frame10793() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10792 />
      <CardDescription2 />
    </div>
  );
}

function Frame10782() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10793 />
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="basis-0 bg-[#3d5fd9] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="buttonContent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">Ver Relatórios de Pneus</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
      <ButtonContent3 />
    </div>
  );
}

function Frame10787() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Button3 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10786 />
      <Frame10782 />
      <Frame10787 />
    </div>
  );
}

function CardKpi2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Card KPI">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame10817() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <CardKpi />
      <CardKpi1 />
      <CardKpi2 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <path d={svgPaths.p2e0e8900} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame10822() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <User />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3d5fd9] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">Suas informações</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Nome</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Glauber Franco</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Cargo</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Engenharia</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">CPF</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">758.052.861-49</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Data de Nascimento</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">25/05/1994</p>
      </div>
    </div>
  );
}

function Frame10820() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Grupo</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Empurrada</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Unidade</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">São Paulo</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Equipe</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Engenharia</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Setor</p>
      </div>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center min-w-full relative shrink-0 text-[#25262c] text-[16px] tracking-[0.32px] w-[min-content]">
        <p className="leading-[22px]">Tech</p>
      </div>
    </div>
  );
}

function Frame10821() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Frame10818() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame10820 />
      <Frame10821 />
    </div>
  );
}

function BadgeDollarSign() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="badge-dollar-sign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_15376)" id="badge-dollar-sign">
          <path d={svgPaths.p3470f900} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_15376">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonContent4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <BadgeDollarSign />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Produtividade individual</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent4 />
    </div>
  );
}

function BadgeDollarSign1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="badge-dollar-sign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_15376)" id="badge-dollar-sign">
          <path d={svgPaths.p3470f900} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_15376">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonContent5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <BadgeDollarSign1 />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Pré-contracheque</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">utilidades</p>
      </div>
      <Button4 />
      <Button5 />
    </div>
  );
}

function Frame10819() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
          <Frame10822 />
          <Frame10818 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip pb-[24px] pt-0 px-0 relative rounded-[inherit] w-full">
        <Frame10817 />
        <Frame10819 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VisitasRecentes() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="visitas recentes">
      <Frame10746 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[1.3] relative shrink-0 text-[#3f424d] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">Incentive a equipe</p>
      <p className="font-['Prompt:Light',_sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#6f7588] text-[16px] w-[min-content]">Saiba o passo a passo para incentivar os motoristas através de um ranking.</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#fa541c] box-border content-stretch flex gap-[12px] h-[48px] items-center justify-end px-[32px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Prompt:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px] whitespace-pre">Saiba mais</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-end p-[24px] relative w-full">
          <Frame12 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="h-[292.022px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle37} />
        </div>
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="group">
          <path d={svgPaths.p296181f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHome() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex flex-col gap-[12px] h-[156px] items-center justify-center overflow-clip px-[16px] py-[24px] relative rounded-[8px] shrink-0 w-[165px]" data-name="Card-home">
      <Group1 />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.32px] w-[min-content]">Colaboradores</p>
    </div>
  );
}

function MinhaMarcacoes() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="minha-marcaçoes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="minha-marcaÃ§oes">
          <path d={svgPaths.p221bfa00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHome1() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex flex-col gap-[12px] h-[156px] items-center justify-center overflow-clip px-[16px] py-[24px] relative rounded-[8px] shrink-0 w-[165px]" data-name="Card-home">
      <MinhaMarcacoes />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.32px] w-[min-content]">Gestão de marcações</p>
    </div>
  );
}

function Tire() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="tire">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="tire">
          <path d={svgPaths.p2ecf9400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHome2() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex flex-col gap-[12px] h-[156px] items-center justify-center overflow-clip px-[16px] py-[24px] relative rounded-[8px] shrink-0 w-[165px]" data-name="Card-home">
      <Tire />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.32px] w-[min-content]">Listagem de pneus</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <CardHome />
      <CardHome1 />
      <CardHome2 />
    </div>
  );
}

function VisitasRecentes1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="visitas recentes">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f424d] text-[18px] text-nowrap text-right tracking-[0.36px] whitespace-pre">Visitas recentes</p>
      <Frame9 />
    </div>
  );
}

function OnlineLearning2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="online-learning 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="online-learning 2">
          <path d={svgPaths.p4f9a480} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRightL() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right-l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right-l">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #D8DADF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1845() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0">
      <ChevronRightL />
    </div>
  );
}

function Frame8() {
  return (
    <a className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[24px] pr-[16px] py-[24px] relative w-full">
          <OnlineLearning2 />
          <p className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[14px] tracking-[0.28px]">Base de conhecimento</p>
          <div className="flex flex-row items-center self-stretch">
            <Frame1845 />
          </div>
        </div>
      </div>
    </a>
  );
}

function IconIllustration() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon illustration">
          <path d={svgPaths.p9baf380} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRightL1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right-l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right-l">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #D8DADF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1846() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0">
      <ChevronRightL1 />
    </div>
  );
}

function Frame11() {
  return (
    <a className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" href="https://prolog.ead.guru/ead/">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[24px] pr-[16px] py-[24px] relative w-full">
          <IconIllustration />
          <p className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[14px] tracking-[0.28px]">Treinamento EAD</p>
          <div className="flex flex-row items-center self-stretch">
            <Frame1846 />
          </div>
        </div>
      </div>
    </a>
  );
}

function Frame13() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function CentralDeAjuda() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="central de ajuda">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f424d] text-[18px] text-nowrap tracking-[0.36px] whitespace-pre">Central de ajuda</p>
      <Frame13 />
    </div>
  );
}

function RedesSociais() {
  return (
    <div className="h-[23.396px] relative shrink-0 w-[24px]" data-name="redes sociais">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="redes sociais">
          <path clipRule="evenodd" d={svgPaths.p349d7d00} fill="var(--fill-0, #3D5FD9)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RedesSociais1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="redes sociais">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="redes sociais">
          <g id="Vector">
            <path d={svgPaths.p208dc800} fill="var(--fill-0, #3D5FD9)" />
            <path d={svgPaths.p338349f0} fill="var(--fill-0, #3D5FD9)" />
            <path d={svgPaths.p3a314e80} fill="var(--fill-0, #3D5FD9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RedesSociais2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="redes sociais">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="redes sociais">
          <path d={svgPaths.p637f480} fill="var(--fill-0, #3D5FD9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RedesSociais3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="redes sociais">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="redes sociais">
          <path d={svgPaths.p3e688800} fill="var(--fill-0, #3D5FD9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RedesSociais4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="redes sociais">
      <RedesSociais />
      <RedesSociais1 />
      <RedesSociais2 />
      <RedesSociais3 />
    </div>
  );
}

function RedesSociais5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="redes sociais">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#3f424d] text-[18px] tracking-[0.36px] w-full">Acompanhe nas redes</p>
      <RedesSociais4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="container">
      <VisitasRecentes1 />
      <CentralDeAjuda />
      <RedesSociais5 />
    </div>
  );
}

function Frame10813() {
  return (
    <div className="content-stretch flex gap-[24px] h-[499.022px] items-start relative shrink-0 w-full">
      <Container10 />
      <Container11 />
    </div>
  );
}

function HomeContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Home content">
      <VisitasRecentes />
      <Frame10813 />
    </div>
  );
}

function TableShell() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table shell">
      <HomeContent />
    </div>
  );
}

function MainSection() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-br-[8px] rounded-tr-[8px] shrink-0 z-[1]" data-name="main section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-[24px] relative h-full overflow-y-auto">
          <TableShell />
        </div>
      </div>
    </div>
  );
}

function CockpitContent() {
  return (
    <div className="basis-0 content-stretch flex grow h-full isolate items-center min-h-px min-w-px relative rounded-[8px] shrink-0 z-[1]" data-name="cockpit content">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <MenuDeNavegacaoWeb />
      <MainSection />
    </div>
  );
}

function CockpitShell() {
  return (
    <div className="absolute bg-white box-border content-stretch flex inset-0 isolate items-start p-[8px]" data-name="cockpit shell">
      <CockpitContent />
    </div>
  );
}

export default function Cockpit() {
  return (
    <div className="relative size-full" data-name="Cockpit">
      <CockpitShell />
    </div>
  );
}