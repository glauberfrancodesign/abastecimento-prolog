import svgPaths from "./svg-4a080ypuvr";

function BreadcrumbBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Início</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[15.834px] left-[calc(50%-0.619px)] top-[calc(50%-0.083px)] translate-x-[-50%] translate-y-[-50%] w-[14.762px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
        <g clipPath="url(#clip0_7_31740)" id="Icon">
          <line id="Icon_2" stroke="var(--stroke-0, #D8DADF)" strokeLinecap="round" strokeLinejoin="round" x1="3.75816" x2="10.0974" y1="14.5031" y2="0.908512" />
        </g>
        <defs>
          <clipPath id="clip0_7_31740">
            <rect fill="white" height="15.8343" width="14.7619" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BreacrumbDivider() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Breacrumb divider">
      <Icon />
    </div>
  );
}

function BreadcrumbBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Frota</p>
      </div>
    </div>
  );
}

function BreadcrumbBase2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Abastecimentos</p>
      </div>
    </div>
  );
}

function BreadcrumbBase3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Breadcrumb base">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e08be] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Alertas</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Breadcrumb">
      <BreadcrumbBase />
      <BreacrumbDivider />
      <BreadcrumbBase1 />
      <BreacrumbDivider />
      <BreadcrumbBase2 />
      <BreacrumbDivider />
      <BreadcrumbBase3 />
    </div>
  );
}

function Actions() {
  return <div className="basis-0 content-stretch flex gap-[24px] grow h-[40px] items-center justify-end min-h-px min-w-px shrink-0" data-name="Actions" />;
}

function PageHeader() {
  return (
    <div className="content-stretch flex gap-[48px] h-[40px] items-center relative shrink-0 w-full" data-name="Page header">
      <Breadcrumb />
      <Actions />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="font-['Prompt:Medium',_sans-serif] leading-[48px] not-italic relative shrink-0 text-[#25262c] text-[32px] text-nowrap tracking-[0.64px] whitespace-pre">Alertas de abastecimento</p>
    </div>
  );
}

function TitleCockpit() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title cockpit">
      <Title />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Main header">
      <PageHeader />
      <TitleCockpit />
    </div>
  );
}

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
        <g clipPath="url(#clip0_1_24599)" id="buildings">
          <path d={svgPaths.p1f45e100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_24599">
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
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Motorista</p>
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
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Status</p>
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

function ChevronDown4() {
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

function ButtonContent4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Placa</p>
      <ChevronDown4 />
    </div>
  );
}

function PillButton4() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[100px] shrink-0" data-name="PillButton">
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ButtonContent4 />
    </div>
  );
}

function ButtonCleanAll() {
  return <div className="content-stretch flex items-start rounded-[8px] shrink-0" data-name="Button-clean-all" />;
}

function FilterRow() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip relative rounded-[100px] shrink-0 z-[2]" data-name="FilterRow">
      <PillButton />
      <PillButton1 />
      <PillButton2 />
      <PillButton3 />
      <PillButton4 />
      <ButtonCleanAll />
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] isolate items-center relative shrink-0 w-full" data-name="FilterBar">
      <InputField1 />
      <FilterRow />
    </div>
  );
}

function TableCellsHeader() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Data e Hora</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">02/10/2026 - 11:57</p>
      </div>
    </div>
  );
}

function TableItensText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text />
    </div>
  );
}

function TableCellsBody() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">02/10/2026 - 11:45</p>
      </div>
    </div>
  );
}

function TableItensText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text1 />
    </div>
  );
}

function TableCellsBody1() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">02/10/2026 - 11:42</p>
      </div>
    </div>
  );
}

function TableItensText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text2 />
    </div>
  );
}

function TableCellsBody2() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">02/10/2026 - 10:51</p>
      </div>
    </div>
  );
}

function TableItensText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text3 />
    </div>
  );
}

function TableCellsBody3() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText3 />
        </div>
      </div>
    </div>
  );
}

function TableColumns() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader />
      <TableCellsBody />
      <TableCellsBody1 />
      <TableCellsBody2 />
      <TableCellsBody3 />
    </div>
  );
}

function TableCellsHeader1() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f1f5fd] box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[12px] py-0 relative rounded-[39px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[39px]" />
      <div className="bg-[#3d5fd9] rounded-[19px] shrink-0 size-[6px]" />
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d5fd9] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Em andamento</p>
      </div>
    </div>
  );
}

function TableItensBadge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[128px]" data-name="Table / Itens / Badge">
      <Badge />
    </div>
  );
}

function TableCellsBody4() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensBadge />
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#daf5d7] box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[12px] py-0 relative rounded-[39px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#61d355] border-solid inset-0 pointer-events-none rounded-[39px]" />
      <div className="bg-[#449c3b] rounded-[19px] shrink-0 size-[6px]" />
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#449c3b] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Resolvido</p>
      </div>
    </div>
  );
}

function TableItensBadge1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[128px]" data-name="Table / Itens / Badge">
      <Badge1 />
    </div>
  );
}

function TableCellsBody5() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensBadge1 />
        </div>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#e9ecec] box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[12px] py-0 relative rounded-[39px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[39px]" />
      <div className="bg-[#6f7588] rounded-[19px] shrink-0 size-[6px]" />
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Ignorado</p>
      </div>
    </div>
  );
}

function TableItensBadge2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[128px]" data-name="Table / Itens / Badge">
      <Badge2 />
    </div>
  );
}

function TableCellsBody6() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensBadge2 />
        </div>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#feeae7] box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[12px] py-0 relative rounded-[39px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#be0d04] border-solid inset-0 pointer-events-none rounded-[39px]" />
      <div className="bg-[#be0d04] rounded-[19px] shrink-0 size-[6px]" />
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#be0d04] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">Pendente</p>
      </div>
    </div>
  );
}

function TableItensBadge3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[128px]" data-name="Table / Itens / Badge">
      <Badge3 />
    </div>
  );
}

function TableCellsBody7() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensBadge3 />
        </div>
      </div>
    </div>
  );
}

function TableColumns1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader1 />
      <TableCellsBody4 />
      <TableCellsBody5 />
      <TableCellsBody6 />
      <TableCellsBody7 />
    </div>
  );
}

function TableCellsHeader2() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Descrição</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">A média de consumo está acima</p>
      </div>
    </div>
  );
}

function TableItensText4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Table / Itens / Text">
      <Text4 />
    </div>
  );
}

function TableCellsBody8() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">O consumo está abaixo do valor médio</p>
      </div>
    </div>
  );
}

function TableItensText5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text5 />
    </div>
  );
}

function TableCellsBody9() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden whitespace-pre">A média de consumo está acima</p>
      </div>
    </div>
  );
}

function TableItensText6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Table / Itens / Text">
      <Text6 />
    </div>
  );
}

function TableCellsBody10() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText6 />
        </div>
      </div>
    </div>
  );
}

function TableColumns2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader2 />
      <TableCellsBody8 />
      <TableCellsBody9 />
      <TableCellsBody10 />
      <TableCellsBody8 />
    </div>
  );
}

function TableCellsHeader3() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Motorista</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">João Souza</p>
      </div>
    </div>
  );
}

function TableItensText8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text8 />
    </div>
  );
}

function TableCellsBody12() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Fernando Araripe</p>
      </div>
    </div>
  );
}

function TableItensText9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text9 />
    </div>
  );
}

function TableCellsBody13() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText9 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">José Ferreira</p>
      </div>
    </div>
  );
}

function TableItensText10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text10 />
    </div>
  );
}

function TableCellsBody14() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText10 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Getúlio Marcos</p>
      </div>
    </div>
  );
}

function TableItensText11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text11 />
    </div>
  );
}

function TableCellsBody15() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText11 />
        </div>
      </div>
    </div>
  );
}

function TableColumns3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader3 />
      <TableCellsBody12 />
      <TableCellsBody13 />
      <TableCellsBody14 />
      <TableCellsBody15 />
    </div>
  );
}

function TableCellsHeader4() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Placa do veículo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">RXA4F51</p>
      </div>
    </div>
  );
}

function TableItensText12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text12 />
    </div>
  );
}

function TableCellsBody16() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">HXU2I22</p>
      </div>
    </div>
  );
}

function TableItensText13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text13 />
    </div>
  );
}

function TableCellsBody17() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText13 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">AZK5J23</p>
      </div>
    </div>
  );
}

function TableItensText14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Table / Itens / Text">
      <Text14 />
    </div>
  );
}

function TableCellsBody18() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensText14 />
        </div>
      </div>
    </div>
  );
}

function TableColumns4() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader4 />
      <TableCellsBody16 />
      <TableCellsBody17 />
      <TableCellsBody18 />
      <TableCellsBody16 />
    </div>
  );
}

function TableCellsHeader5() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[32px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center justify-end min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-end min-w-inherit px-[16px] py-0 w-full" />
      </div>
    </div>
  );
}

function ButtonContent6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Ver alerta</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent6 />
    </div>
  );
}

function TableItensButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Table / Itens / Button">
      <Button />
    </div>
  );
}

function TableCellsBody20() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-[16px] py-[8px] relative shrink-0" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableItensButton />
    </div>
  );
}

function ButtonContent7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Ver alerta</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent7 />
    </div>
  );
}

function TableItensButton1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Table / Itens / Button">
      <Button1 />
    </div>
  );
}

function TableCellsBody21() {
  return (
    <div className="bg-white min-h-[64px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center min-h-inherit px-[16px] py-[8px] relative w-full">
          <TableItensButton1 />
        </div>
      </div>
    </div>
  );
}

function TableColumns5() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader5 />
      <TableCellsBody20 />
      <TableCellsBody21 />
      <TableCellsBody20 />
      <TableCellsBody20 />
    </div>
  );
}

function AlertTable() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Alert table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableColumns />
        <TableColumns1 />
        <TableColumns2 />
        <TableColumns3 />
        <TableColumns4 />
        <TableColumns5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableShell() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Table shell">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <AlertTable />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="file-text">
          <path d={svgPaths.pe5fd080} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <FileText />
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3d5fd9] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Exportar itens</p>
      <ChevronDown5 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent10 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">04 alertas</p>
          </div>
          <Button4 />
        </div>
      </div>
    </div>
  );
}

export default function MainSection() {
  return (
    <div className="relative rounded-br-[8px] rounded-tr-[8px] size-full" data-name="main section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-[24px] relative size-full">
          <MainHeader />
          <FilterBar />
          <TableShell />
          <Footer />
        </div>
      </div>
    </div>
  );
}