import svgPaths from "../imports/svg-aq15klh6tb";
import { imgScreenshot20240702At1035361 } from "../imports/svg-6i68s";

interface MainSidebarProps {
  currentPage?: 'home' | 'abastecimentos';
  onNavigate?: (page: 'home' | 'abastecimentos') => void;
}

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

function Home({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p3181ee00} id="Vector" stroke={isActive ? "white" : "#3D5FD9"} strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function PieChart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pie-chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pie-chart">
          <path d={svgPaths.p38273500} id="Vector" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Reports() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="reports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reports">
          <path d={svgPaths.p7a3a140} id="Vector" stroke="#3D5FD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TruckSparkles({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="truck-sparkles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="truck-sparkles">
          <path d={svgPaths.p2f1cdff0} id="Vector" stroke={isActive ? "white" : "#3D5FD9"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
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

export function MainSidebar({ currentPage = 'home', onNavigate }: MainSidebarProps) {
  const isHomeActive = currentPage === 'home';
  const isAbastecimentosActive = currentPage === 'abastecimentos';

  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 z-[2]" data-name="Menu de navegação web">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
      
      {/* Header */}
      <div className="content-stretch flex flex-col h-[80px] items-center relative shrink-0 w-full" data-name="Header">
        <div className="bg-[#f1f5fd] h-[80px] relative rounded-tl-[8px] shrink-0 w-full" data-name="Top logo">
          <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px]" />
          <div className="flex flex-row justify-center size-full">
            <div className="box-border content-stretch flex h-[80px] items-start justify-center p-[16px] relative w-full">
              <div className="h-[40px] relative shrink-0 w-[32px]" data-name="Logo Prolog">
                <div className="absolute content-stretch flex gap-[8px] inset-0 items-start" data-name="logo icon">
                  <LogoIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Container */}
      <div className="basis-0 content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0" data-name="Sidebar container">
        <div className="bg-[#f1f5fd] box-border content-stretch flex h-full items-start justify-center p-[16px] relative shrink-0 z-[2]" data-name="Sidebar main">
          <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0" data-name="Container">
            
            {/* Top Navigation */}
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Top">
              {/* Home Button - Clickable */}
              <button 
                onClick={() => onNavigate?.('home')}
                className={`${
                  isHomeActive ? 'bg-[#3d5fd9] cursor-pointer' : 'hover:bg-[#dee7fb] cursor-pointer'
                } relative rounded-[8px] shrink-0 w-full transition-colors`} 
                data-name="_Sidebar button"
              >
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
                    <Home isActive={isHomeActive} />
                  </div>
                </div>
              </button>
              
              {/* Pie Chart - Hover only, not clickable */}
              <button 
                className="hover:bg-[#dee7fb] content-stretch flex gap-[8px] items-center relative shrink-0 w-full rounded-[8px] transition-colors cursor-pointer"
                data-name="_Sidebar button"
                onClick={(e) => e.preventDefault()}
              >
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
                      <PieChart />
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Reports - Hover only, not clickable */}
              <button 
                className="hover:bg-[#dee7fb] relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer"
                data-name="_Sidebar button"
                onClick={(e) => e.preventDefault()}
              >
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
                    <Reports />
                  </div>
                </div>
              </button>
            </div>

            {/* Primary Navigation */}
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Primary">
              {/* Truck Sparkles (Abastecimentos) - Clickable */}
              <button
                onClick={() => onNavigate?.('abastecimentos')}
                className={`${
                  isAbastecimentosActive ? 'bg-[#3d5fd9] cursor-pointer' : 'bg-[#dee7fb] hover:bg-[#c5d7f8] cursor-pointer'
                } box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 transition-colors`}
                data-name="_Sidebar button"
              >
                <TruckSparkles isActive={isAbastecimentosActive} />
              </button>
              
              {/* Group - Hover only, not clickable */}
              <button
                className="bg-[#dee7fb] hover:bg-[#c5d7f8] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer"
                data-name="_Sidebar button"
                onClick={(e) => e.preventDefault()}
              >
                <Group />
              </button>
              
              {/* Package Check - Hover only, not clickable */}
              <button
                className="bg-[#dee7fb] hover:bg-[#c5d7f8] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer"
                data-name="_Sidebar button"
                onClick={(e) => e.preventDefault()}
              >
                <PackageCheck />
              </button>
            </div>

            {/* Bottom Navigation - All hover only, not clickable */}
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Bottom">
              <button
                className="hover:bg-[#dee7fb] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer"
                data-name="_Sidebar button"
                onClick={(e) => e.preventDefault()}
              >
                <ShieldCheck />
              </button>
              
              <button
                className="hover:bg-[#dee7fb] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer"
                data-name="_Sidebar button"
                onClick={(e) => e.preventDefault()}
              >
                <Buildings />
              </button>
              
              <button
                className="hover:bg-[#dee7fb] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer"
                data-name="_Sidebar button"
                onClick={(e) => e.preventDefault()}
              >
                <Request />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Avatar */}
      <Footer />

      {/* Expand/Collapse Button */}
      <SidebarExpandAndCollapseButton />
    </div>
  );
}
