function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-up">
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
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">Data</p>
      <ChevronUp />
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

function DatePickerListItem() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_datePickerListItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Hoje</p>
        </div>
      </div>
    </div>
  );
}

function DatePickerListItem1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_datePickerListItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">7 dias</p>
        </div>
      </div>
    </div>
  );
}

function DatePickerListItem2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_datePickerListItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">30 dias</p>
        </div>
      </div>
    </div>
  );
}

function DatePickerListItem3() {
  return (
    <div className="bg-[#dee7fb] relative rounded-[6px] shrink-0 w-full" data-name="_datePickerListItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Mês atual</p>
        </div>
      </div>
    </div>
  );
}

function DatePickerListItem4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_datePickerListItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Ano atual</p>
        </div>
      </div>
    </div>
  );
}

function DatePickerActionsList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[80px]" data-name="_datePickerActionsList">
      <DatePickerListItem />
      <DatePickerListItem1 />
      <DatePickerListItem2 />
      <DatePickerListItem3 />
      <DatePickerListItem4 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <ChevronLeft />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent2 />
    </div>
  );
}

function DatePickerArrows1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="_datePickerArrows">
      <Button1 />
    </div>
  );
}

function Previous() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="previous">
      <DatePickerArrows1 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <ChevronRight />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent3 />
    </div>
  );
}

function DatePickerArrows2() {
  return (
    <div className="content-stretch flex items-start relative" data-name="_datePickerArrows">
      <Button2 />
    </div>
  );
}

function Month() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="month">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Janeiro</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <DatePickerArrows2 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <ChevronRight1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent4 />
    </div>
  );
}

function DatePickerArrows3() {
  return (
    <div className="content-stretch flex items-start relative" data-name="_datePickerArrows">
      <Button3 />
    </div>
  );
}

function Year() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="year">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">2025</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <DatePickerArrows3 />
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[6px] shrink-0" data-name="select">
      <Month />
      <Year />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <ChevronRight2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent5 />
    </div>
  );
}

function DatePickerArrows4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="_datePickerArrows">
      <Button4 />
    </div>
  );
}

function Next() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="next">
      <DatePickerArrows4 />
    </div>
  );
}

function DatePickerHeader() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-center justify-between px-[8px] py-0 relative shrink-0 w-[224px]" data-name="_datePickerHeader">
      <Previous />
      <Select />
      <Next />
    </div>
  );
}

function DatePickerDays() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0 w-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase whitespace-pre">d</p>
    </div>
  );
}

function DatePickerDays1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0 w-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase whitespace-pre">s</p>
    </div>
  );
}

function DatePickerDays2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0 w-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase whitespace-pre">t</p>
    </div>
  );
}

function DatePickerDays3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0 w-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6f7588] text-[10px] text-nowrap tracking-[1px] uppercase whitespace-pre">q</p>
    </div>
  );
}

function DaysName() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="days name">
      <DatePickerDays />
      <DatePickerDays1 />
      <DatePickerDays2 />
      {[...Array(2).keys()].map((_, i) => (
        <DatePickerDays3 key={i} />
      ))}
      <DatePickerDays1 />
      <DatePickerDays1 />
    </div>
  );
}

function DatePickerDays7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">25</p>
    </div>
  );
}

function DatePickerDays8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">26</p>
    </div>
  );
}

function DatePickerDays9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">27</p>
    </div>
  );
}

function DatePickerDays10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">28</p>
    </div>
  );
}

function DatePickerDays11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29</p>
    </div>
  );
}

function DatePickerDays12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">1</p>
    </div>
  );
}

function DatePickerDays13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">2</p>
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0" data-name="rows">
      <DatePickerDays7 />
      <DatePickerDays8 />
      <DatePickerDays9 />
      <DatePickerDays10 />
      <DatePickerDays11 />
      <DatePickerDays12 />
      <DatePickerDays13 />
    </div>
  );
}

function DatePickerDays14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">3</p>
    </div>
  );
}

function DatePickerDays15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">4</p>
    </div>
  );
}

function DatePickerDays16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">5</p>
    </div>
  );
}

function DatePickerDays17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">6</p>
    </div>
  );
}

function DatePickerDays18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">7</p>
    </div>
  );
}

function DatePickerDays19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">8</p>
    </div>
  );
}

function DatePickerDays20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">9</p>
    </div>
  );
}

function Rows1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0" data-name="rows">
      <DatePickerDays14 />
      <DatePickerDays15 />
      <DatePickerDays16 />
      <DatePickerDays17 />
      <DatePickerDays18 />
      <DatePickerDays19 />
      <DatePickerDays20 />
    </div>
  );
}

function DatePickerDays21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">10</p>
    </div>
  );
}

function DatePickerDays22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">11</p>
    </div>
  );
}

function DatePickerDays23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">12</p>
    </div>
  );
}

function DatePickerDays24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">13</p>
    </div>
  );
}

function DatePickerDays25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">14</p>
    </div>
  );
}

function DatePickerDays26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">15</p>
    </div>
  );
}

function DatePickerDays27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-br-[8px] rounded-tr-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">16</p>
    </div>
  );
}

function Rows2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0" data-name="rows">
      <DatePickerDays21 />
      <DatePickerDays22 />
      <DatePickerDays23 />
      <DatePickerDays24 />
      <DatePickerDays25 />
      <DatePickerDays26 />
      <DatePickerDays27 />
    </div>
  );
}

function DatePickerDays28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">17</p>
    </div>
  );
}

function DatePickerDays29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">18</p>
    </div>
  );
}

function DatePickerDays30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">19</p>
    </div>
  );
}

function DatePickerDays31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">20</p>
    </div>
  );
}

function DatePickerDays32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">21</p>
    </div>
  );
}

function DatePickerDays33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">22</p>
    </div>
  );
}

function DatePickerDays34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">23</p>
    </div>
  );
}

function Rows3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0" data-name="rows">
      <DatePickerDays28 />
      <DatePickerDays29 />
      <DatePickerDays30 />
      <DatePickerDays31 />
      <DatePickerDays32 />
      <DatePickerDays33 />
      <DatePickerDays34 />
    </div>
  );
}

function DatePickerDays35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">24</p>
    </div>
  );
}

function DatePickerDays36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">25</p>
    </div>
  );
}

function DatePickerDays37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">26</p>
    </div>
  );
}

function DatePickerDays38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">27</p>
    </div>
  );
}

function DatePickerDays39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">28</p>
    </div>
  );
}

function DatePickerDays40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29</p>
    </div>
  );
}

function DatePickerDays41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">30</p>
    </div>
  );
}

function Rows4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0" data-name="rows">
      <DatePickerDays35 />
      <DatePickerDays36 />
      <DatePickerDays37 />
      <DatePickerDays38 />
      <DatePickerDays39 />
      <DatePickerDays40 />
      <DatePickerDays41 />
    </div>
  );
}

function DatePickerDays42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <div aria-hidden="true" className="absolute border-2 border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">31</p>
    </div>
  );
}

function DatePickerDays43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">1</p>
    </div>
  );
}

function DatePickerDays44() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">2</p>
    </div>
  );
}

function DatePickerDays45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">3</p>
    </div>
  );
}

function DatePickerDays46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">4</p>
    </div>
  );
}

function DatePickerDays47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">5</p>
    </div>
  );
}

function DatePickerDays48() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative rounded-[8px] shrink-0 size-[32px]" data-name="_datePickerDays">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">6</p>
    </div>
  );
}

function Rows5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0" data-name="rows">
      <DatePickerDays42 />
      <DatePickerDays43 />
      <DatePickerDays44 />
      <DatePickerDays45 />
      <DatePickerDays46 />
      <DatePickerDays47 />
      <DatePickerDays48 />
    </div>
  );
}

function DaysGrid() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[224px]" data-name="days grid">
      <Rows />
      <Rows1 />
      <Rows2 />
      <Rows3 />
      <Rows4 />
      <Rows5 />
    </div>
  );
}

function ButtonContent6() {
  return (
    <div className="basis-0 bg-[#3d5fd9] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="buttonContent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Aplicar</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
      <ButtonContent6 />
    </div>
  );
}

function ActionButton() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0" data-name="Action button">
      <Button5 />
    </div>
  );
}

function DateShell() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[224px]" data-name="_DateShell">
      <DatePickerHeader />
      <DaysName />
      <DaysGrid />
      <ActionButton />
    </div>
  );
}

function Calendar() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Calendar">
      <div className="box-border content-stretch flex gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit]">
        <DatePickerActionsList />
        <DateShell />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_16px_-10px_rgba(27,37,100,0.25)]" />
    </div>
  );
}

export default function DropdownButton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full" data-name="Dropdown Button">
      <PillButton />
      <Calendar />
    </div>
  );
}