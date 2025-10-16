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
          <p className="-webkit-box basis-0 css-4fd1r6 font-['Prompt:Light',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[14px] tracking-[0.28px]">
            Lorem ipsum dolor sit amet
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputStroke() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-h-[118px] relative rounded-[8px] shrink-0 w-full" data-name="InputStroke">
      <div aria-hidden="true" className="absolute border-4 border-[#dee7fb] border-solid inset-[-4px] pointer-events-none rounded-[12px]" />
      <Input />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <InputStroke />
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

function ButtonContent() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Cancelar</p>
    </div>
  );
}

function BtnCancelarEdicaoDeComentario() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="BTN-Cancelar-edição-de-comentário">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ButtonContent />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Salvar</p>
    </div>
  );
}

function BtnSalvarEdicaoDeComentario() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="BTN-Salvar-edição-de-comentário">
      <ButtonContent1 />
    </div>
  );
}

function Frame2549() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <BtnCancelarEdicaoDeComentario />
      <BtnSalvarEdicaoDeComentario />
    </div>
  );
}

function Frame2535() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0 w-full">
      <TextareaInputField />
      <Frame2549 />
    </div>
  );
}

export default function InputComentario() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Input comentário">
      <Frame427318263 />
      <Frame2535 />
    </div>
  );
}