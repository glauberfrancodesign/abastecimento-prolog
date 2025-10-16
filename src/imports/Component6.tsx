import svgPaths from "./svg-p5bsbj20qf";

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
        <p className="leading-[16px] whitespace-pre">- 10/10/2025 - 12:18</p>
      </div>
    </div>
  );
}

export default function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Component 6">
      <Frame2549 />
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-[min-content]">
        <p className="leading-[20px]">Alerta gerado automaticamente pelo sistema devido à média de KM/L fora da faixa esperada</p>
      </div>
    </div>
  );
}