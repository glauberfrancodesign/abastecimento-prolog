import svgPaths from "./svg-hclzpvidui";

function Trash() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trash">
          <path d={svgPaths.p39008080} id="Vector" stroke="var(--stroke-0, #E40F05)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-[#fee4e2] relative rounded-[28px] shrink-0 size-[48px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border-8 border-[#fef3f2] border-solid inset-[-4px] pointer-events-none rounded-[32px]" />
      <Trash />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] relative shrink-0 text-[#101828] text-[18px] tracking-[0.36px] w-full">Deseja excluir o comentário?</p>
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] relative shrink-0 text-[#475467] text-[14px] tracking-[0.28px] w-full">Essa ação não poderá ser desfeita.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-0 pt-[24px] px-[24px] relative w-full">
          <FeaturedIcon />
          <TextAndSupportingText />
        </div>
      </div>
    </div>
  );
}

function XClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x-close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x-close">
          <path d="M18 6L6 18M6 6L18 18" id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCloseX() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[10px] right-[16px] rounded-[8px] top-[16px]" data-name="Button close X">
      <XClose />
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="_ModalHeader">
      <Content />
      <ButtonCloseX />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="buttonContent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e40f05] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Cancelar</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e40f05] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ButtonContent />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="basis-0 bg-[#be0d04] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="buttonContent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">Exluir comentário</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start pb-[24px] pt-0 px-[24px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function ModalActions() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="_ModalActions">
      <Content1 />
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Modal">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <ModalHeader />
        <ModalActions />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}