import svgPaths from "./svg-17t1ccuvst";

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.p2d49ba80} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-white h-[40px] relative rounded-[100px] shrink-0 w-full" data-name="inputField">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-[12px] relative w-full">
          <Search />
          <p className="[white-space-collapse:collapse] basis-0 font-['Prompt:Light',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#999dae] text-[14px] text-nowrap tracking-[0.28px]">Busca</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[282px] z-[3]" data-name="InputField">
      <InputField />
    </div>
  );
}

function Buildings() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="buildings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_15330)" id="buildings">
          <path d={svgPaths.p1f45e100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_15330">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
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
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0" data-name="buttonContent">
      <Buildings />
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">Palhoça</p>
      <ChevronDown />
    </div>
  );
}

function PillButton() {
  return (
    <div className="content-stretch flex items-start relative rounded-[100px] shrink-0" data-name="PillButton">
      <ButtonContent />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #3F424D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Data</p>
      <ChevronDown1 />
    </div>
  );
}

function PillButton1() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[100px] shrink-0" data-name="PillButton">
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ButtonContent1 />
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #3F424D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Combustivel</p>
      <ChevronDown2 />
    </div>
  );
}

function PillButton2() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[100px] shrink-0" data-name="PillButton">
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ButtonContent2 />
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #3F424D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Motorista</p>
      <ChevronDown3 />
    </div>
  );
}

function PillButton3() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[100px] shrink-0" data-name="PillButton">
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ButtonContent3 />
    </div>
  );
}

function FilterRow() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip relative rounded-[100px] shrink-0 z-[2]" data-name="FilterRow">
      <PillButton />
      <PillButton1 />
      <PillButton2 />
      <PillButton3 />
    </div>
  );
}

export default function FilterBar() {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-center relative size-full" data-name="FilterBar">
      <InputField1 />
      <FilterRow />
    </div>
  );
}