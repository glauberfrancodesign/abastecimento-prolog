import svgPaths from "./svg-u243g00z0c";

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="iconLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="iconLeft">
          <path d={svgPaths.p3078b700} id="Vector" stroke="var(--stroke-0, #3F424D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function AgrupamentoTitulos() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="agrupamento_titulos">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f424d] text-[18px] tracking-[0.36px] w-full">Detalhe do abastecimento</p>
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

function TriangleAlert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="triangle-alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="triangle-alert">
          <path d={svgPaths.p17792780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#be0d04] relative rounded-[10px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-center p-[8px] relative">
        <TriangleAlert />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-nowrap tracking-[0.32px]">
          <p className="leading-[22px] whitespace-pre">Alerta no abastecimento</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] items-center relative">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="bg-[#be0d04] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Ver detalhes do alerta</p>
      <ChevronRight />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
        <ButtonContent />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Frame2115() {
  return (
    <div className="bg-[#feeae7] h-[68px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#980a03] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center p-[16px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Frame427318282() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#fbd2d0] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
      <Frame2115 />
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

function Container4() {
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
          <Container4 />
        </div>
      </div>
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

function Frame427318276() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Fuel />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">Abastecido</p>
    </div>
  );
}

function Frame427318279() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame427318276 />
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[32px] text-center text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">70L</p>
      </div>
    </div>
  );
}

function Frame2116() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Frame427318279 />
        </div>
      </div>
    </div>
  );
}

function Km() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="km">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="km">
          <path d={svgPaths.p1da86d00} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame427318280() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Km />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">KM rodado</p>
    </div>
  );
}

function Frame427318275() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center not-italic relative shrink-0 text-[#3f424d] text-center text-nowrap">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] relative shrink-0 text-[32px] tracking-[0.64px]">
        <p className="leading-[48px] text-nowrap whitespace-pre">750,0</p>
      </div>
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[16px] tracking-[0.32px] whitespace-pre">km</p>
    </div>
  );
}

function Frame2119() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Frame427318280 />
          <Frame427318275 />
        </div>
      </div>
    </div>
  );
}

function KmPlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="km-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="km-plus">
          <path d={svgPaths.p28792f00} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame427318281() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <KmPlus />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">KM registrado</p>
    </div>
  );
}

function Frame427318283() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center not-italic relative shrink-0 text-[#3f424d] text-center text-nowrap">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] relative shrink-0 text-[32px] tracking-[0.64px]">
        <p className="leading-[48px] text-nowrap whitespace-pre">347.677,0</p>
      </div>
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[16px] tracking-[0.32px] whitespace-pre">km</p>
    </div>
  );
}

function Frame2120() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Frame427318281 />
          <Frame427318283 />
        </div>
      </div>
    </div>
  );
}

function BadgeDollarSign() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="badge-dollar-sign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="badge-dollar-sign">
          <path d={svgPaths.p6e22800} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame427318284() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <BadgeDollarSign />
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">Valor abastecido</p>
    </div>
  );
}

function Frame427318285() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.64px]">
        <p className="leading-[48px] text-nowrap whitespace-pre">R$469,00</p>
      </div>
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px] whitespace-pre">R$6,70/L</p>
    </div>
  );
}

function Frame2121() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Frame427318284 />
          <Frame427318285 />
        </div>
      </div>
    </div>
  );
}

function Frame10830() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame2116 />
      <Frame2119 />
      <Frame2120 />
      <Frame2121 />
    </div>
  );
}

function Frame427318277() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10830 />
    </div>
  );
}

function Frame427318291() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Placa do veículo</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3d5fd9] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">RXA4F51</p>
      </div>
    </div>
  );
}

function Frame427318310() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[20px]">Tipo/Engate</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[22px]">Bi truck</p>
      </div>
    </div>
  );
}

function Frame427318312() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[20px]">Tipo do combustível</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[22px]">Diesel S-10</p>
      </div>
    </div>
  );
}

function Frame427318296() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Motorista responsável</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">João Souza</p>
      </div>
    </div>
  );
}

function Frame427318311() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[20px]">Documento (CNH/CPF)</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[22px]">24.013.399/0001-03</p>
      </div>
    </div>
  );
}

function Infos() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Infos">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <Frame427318291 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318310 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318312 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318296 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318311 />
        </div>
      </div>
    </div>
  );
}

function Frame427318290() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Dados do veículo</p>
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

function Frame427318294() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
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
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
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
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Data e hora `}</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px] text-nowrap whitespace-pre">02/10/2026 - 11:57</p>
      </div>
    </div>
  );
}

function Frame427318307() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[20px]">Encheu o tanque?</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[22px]">Sim</p>
      </div>
    </div>
  );
}

function Frame427318309() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center relative shrink-0 text-[#6f7588] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[20px]">Valor unitário do combustível</p>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[22px]">R$ 6.70</p>
      </div>
    </div>
  );
}

function Infos1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Infos">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <Frame427318294 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318295 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318293 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318307 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Frame427318309 />
        </div>
      </div>
    </div>
  );
}

function Frame427318292() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Dados do abastecimento</p>
      <Infos1 />
    </div>
  );
}

function Frame427318297() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame427318292 />
    </div>
  );
}

function Frame427318264() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame427318282 />
      <MetaSlider />
      <Frame427318277 />
      <Frame427318278 />
      <Frame427318297 />
    </div>
  );
}

function SlotAbastecimento() {
  return (
    <div className="box-border content-stretch flex items-start pb-[24px] pt-0 px-0 relative rounded-[8px] shrink-0 w-full z-[1]" data-name="Slot Abastecimento">
      <Frame427318264 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]" data-name="content">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] isolate items-center pb-0 pt-[24px] px-[24px] relative size-full">
          <SlotAbastecimento />
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

function ButtonContent1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <ChevronLeft />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Voltar</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-0 mt-0 relative rounded-[8px]" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

function Group5019() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button1 />
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

function DrawerFooter() {
  return (
    <div className="bg-[#f1f5fd] h-[60px] shrink-0 sticky top-0 w-full z-[1]" data-name="_drawerFooter">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[14px] relative w-full">
          <Left />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-[#fafcff] content-stretch flex flex-col grow h-[674px] isolate items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0" data-name="container">
      <DrawerHeader />
      <Content />
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