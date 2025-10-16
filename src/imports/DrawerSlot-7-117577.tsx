import svgPaths from "./svg-ndhma1fq5h";
import imgGaleriaDeVeiculos from "figma:asset/7832015ccbf41e3283d31f80c5c0653c64b52918.png";
import imgVector1 from "figma:asset/5dd4442af2d023db62f5e4daab6451d35e5ee3aa.png";
import imgVector3 from "figma:asset/4ad8865c662e7bf3489cdea919210363c62188f1.png";
import imgVector5 from "figma:asset/68136528dd539cffb1e3229cd9fdd38b63cdf1fe.png";
import imgVector6 from "figma:asset/ed1649b04357bc9f2d0418f9b6590acb9fd31b88.png";
import imgVector7 from "figma:asset/e7bf861f02943c744aeace0ccaf9bad24644af25.png";
import imgVector8 from "figma:asset/5dd581db0d75e37275e7942492f277707475c429.png";
import imgVector9 from "figma:asset/1263bce5c5346db7523b654c261537ec506bcb1d.png";
import imgVector10 from "figma:asset/2ce3c6ef6b364d757e88aa6ffa792b009040a544.png";
import imgVector11 from "figma:asset/8b2e84eb5c5a30e21ae08b67c7b6d99ec3c740c0.png";
import { imgVector, imgVector2, imgVector4, imgGroup } from "./svg-gvpx9";

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="iconLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="iconLeft">
          <path d={svgPaths.pe8c2900} id="Vector" stroke="var(--stroke-0, #25262C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function AgrupamentoTitulos() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="agrupamento_titulos">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f424d] text-[18px] tracking-[0.36px] w-full">Visualização do veículo</p>
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
    <div className="bg-[#f1f5fd] h-[60px] relative shrink-0 w-full z-[3]" data-name="_drawerHeader">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between p-[24px] relative w-full">
          <IconTextCloseButton />
        </div>
      </div>
    </div>
  );
}

function GaleriaDeVeiculos1() {
  return (
    <div className="pointer-events-none relative rounded-[5.6px] shrink-0 size-[84px]" data-name="Galeria de veiculos">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[5.6px] size-full" src={imgGaleriaDeVeiculos} />
      <div aria-hidden="true" className="absolute border-[#c5d7f8] border-[0.7px] border-solid inset-0 rounded-[5.6px]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">Placa do veículo</p>
    </div>
  );
}

function Frame10563() {
  return (
    <div className="content-stretch flex flex-col font-['Prompt:Regular',_sans-serif] items-start justify-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#6f7588] text-[10px] tracking-[1px] uppercase">cavalo</p>
      <p className="leading-[22px] relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">RXA4F51</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="content">
      <Frame10563 />
    </div>
  );
}

function Frame10564() {
  return (
    <div className="content-stretch flex flex-col font-['Prompt:Regular',_sans-serif] items-start justify-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#6f7588] text-[10px] tracking-[1px] uppercase">ID da frota</p>
      <p className="leading-[22px] relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">33</p>
    </div>
  );
}

function Frame10565() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Content3 />
      <div className="bg-[#dee7fb] self-stretch shrink-0 w-px" />
      <Frame10564 />
    </div>
  );
}

function Hitch3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hitch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_7_124062)" id="hitch">
          <path d={svgPaths.p20ae7600} fill="var(--stroke-0, #6F7588)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_124062">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Engate1() {
  return (
    <div className="bg-[#e9ecec] content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Engate">
      <Hitch3 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path d={svgPaths.p3b397100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="buttonContent">
      <Plus />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Adicionar acoplamento</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

function Frame2258() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame10565 />
      <Engate1 />
      <Button1 />
    </div>
  );
}

function Frame10847() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Title1 />
      <Frame2258 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#daf5d7] box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[12px] py-0 relative rounded-[39px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#61d355] border-solid inset-0 pointer-events-none rounded-[39px]" />
      <div className="bg-[#449c3b] rounded-[19px] shrink-0 size-[6px]" />
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#449c3b] text-[10px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">veículo Ativo</p>
      </div>
    </div>
  );
}

function Frame10815() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <Badge1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full z-10" data-name="Header">
      <GaleriaDeVeiculos1 />
      <Frame10847 />
      <Frame10815 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Dados do veículo</p>
    </div>
  );
}

function Frame10837() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Tipo de veículo</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Marca do veículo</p>
      </div>
    </div>
  );
}

function Frame10838() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Cavalo</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Volvo</p>
      </div>
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[262.75px]" data-name="rows">
      <Frame10837 />
      <Frame10838 />
    </div>
  );
}

function Frame10839() {
  return (
    <div className="content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Modelo do veículo</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Ano/modelo</p>
      </div>
    </div>
  );
}

function Frame10840() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">FH400 6x2</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">2008/2009</p>
      </div>
    </div>
  );
}

function Rows1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[262.75px]" data-name="rows">
      <Frame10839 />
      <Frame10840 />
    </div>
  );
}

function Frame10841() {
  return (
    <div className="content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Valor de compra</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Motorizado</p>
      </div>
    </div>
  );
}

function Frame10842() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">R$ 500.900,00</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Sim</p>
      </div>
    </div>
  );
}

function Rows2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[262.75px]" data-name="rows">
      <Frame10841 />
      <Frame10842 />
    </div>
  );
}

function Frame10843() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Medido por</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Código auxiliar</p>
      </div>
    </div>
  );
}

function Frame10844() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Odômetro</p>
      </div>
      <div className="flex flex-col justify-center min-w-full overflow-ellipsis overflow-hidden relative shrink-0 w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">FA002:M0003,FA002:M0005,FA002:M0021,FA002:M0024,FA002:M0049,FA002:M0108</p>
      </div>
    </div>
  );
}

function Rows3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[262.75px]" data-name="rows">
      <Frame10843 />
      <Frame10844 />
    </div>
  );
}

function Infos() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Infos">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start p-[16px] relative w-full">
          <Rows />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Rows1 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Rows2 />
          <div className="bg-[#dee7fb] h-[48px] shrink-0 w-px" />
          <Rows3 />
        </div>
      </div>
    </div>
  );
}

function DadosDoVeiculo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full z-[9]" data-name="Dados do veiculo">
      <Title2 />
      <Infos />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Informações</p>
    </div>
  );
}

function Flag() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flag">
          <path d={svgPaths.paedb3d0} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2109() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#3f424d]">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] min-w-full relative shrink-0 text-[10px] tracking-[1px] uppercase w-[min-content]">Grupo</p>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Empurrada</p>
      </div>
    </div>
  );
}

function Frame2112() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <Flag />
          <Frame2109 />
        </div>
      </div>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="map-pin">
          <g id="Vector">
            <path d={svgPaths.p18d573c0} stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p10001740} stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2111() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#3f424d]">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] min-w-full relative shrink-0 text-[10px] tracking-[1px] uppercase w-[min-content]">Unidade</p>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">São Paulo</p>
      </div>
    </div>
  );
}

function Frame2113() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <MapPin />
          <Frame2111 />
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
          <path d={svgPaths.p2bc00a80} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2116() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#3f424d] text-nowrap">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] relative shrink-0 text-[10px] tracking-[1px] uppercase whitespace-pre">Km atual</p>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">124.678</p>
      </div>
    </div>
  );
}

function Frame2114() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <Km />
          <Frame2116 />
        </div>
      </div>
    </div>
  );
}

function Tire() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tire">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tire">
          <path d={svgPaths.p3b0cbb00} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2117() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#3f424d]">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] relative shrink-0 text-[10px] tracking-[1px] uppercase w-full">Pneus</p>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[20px]">6 de 6</p>
      </div>
    </div>
  );
}

function Frame2110() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <Tire />
          <Frame2117 />
        </div>
      </div>
    </div>
  );
}

function TireSpare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tire-spare">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tire-spare">
          <path d={svgPaths.p15d73400} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2118() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#3f424d]">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[16px] relative shrink-0 text-[10px] tracking-[1px] uppercase w-full">Estepes</p>
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[20px]">0 aplicados</p>
      </div>
    </div>
  );
}

function Frame2115() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[68px] items-center px-[24px] py-[16px] relative w-full">
          <TireSpare />
          <Frame2118 />
        </div>
      </div>
    </div>
  );
}

function Frame10830() {
  return (
    <div className="content-stretch flex gap-[16px] h-[68px] items-start relative shrink-0 w-full">
      <Frame2112 />
      <Frame2113 />
      <Frame2114 />
      <Frame2110 />
      <Frame2115 />
    </div>
  );
}

function InformacoesDoVeiculo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full z-[8]" data-name="Informações do veículo">
      <Title3 />
      <Frame10830 />
    </div>
  );
}

function KpiCardIcon() {
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

function Tittle() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tittle">
      <KpiCardIcon />
      <div className="basis-0 flex flex-col font-['Prompt:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-nowrap tracking-[0.36px]">
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Consumo</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="info">
        <path d={svgPaths.p33cad000} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <InfoIcon />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle />
      <Actions />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">3,23 KM/L</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Main />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header2 />
          <Content4 />
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
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-[280px] relative shrink-0" data-name="KPI Card">
      <KpiCardBase />
    </div>
  );
}

function KpiCardIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <path d={svgPaths.p2ed53b80} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">CPK</p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="info">
        <path d={svgPaths.p33cad000} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <InfoIcon1 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle1 />
      <Actions1 />
    </div>
  );
}

function Main1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">R$ 0,091</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Main1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container1 />
    </div>
  );
}

function KpiCard1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase1 />
    </div>
  );
}

function KpiCardIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_7_124561">
              <path clipRule="evenodd" d={svgPaths.p2f3a3f00} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p16fa1700} fillRule="evenodd" />
            </mask>
            <path clipRule="evenodd" d={svgPaths.p2f3a3f00} fill="var(--fill-0, #25262C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p16fa1700} fill="var(--fill-0, #25262C)" fillRule="evenodd" />
            <path d={svgPaths.pbcfe000} fill="var(--stroke-0, #6F7588)" mask="url(#path-1-inside-1_7_124561)" />
          </g>
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
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">KM/ MM</p>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="info">
        <path d={svgPaths.p33cad000} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function Actions2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <InfoIcon2 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle2 />
      <Actions2 />
    </div>
  );
}

function Main2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">12.491</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Main2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header4 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container2 />
    </div>
  );
}

function KpiCard2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase2 />
    </div>
  );
}

function KpiCardIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KPI card icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KPI card icon">
          <g id="Vector">
            <path d={svgPaths.p305fca00} stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <path d={svgPaths.p1f04b540} id="Vector_2" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
        <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">CMPK</p>
      </div>
    </div>
  );
}

function Info3() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="info">
        <path d={svgPaths.p33cad000} id="Vector" stroke="var(--stroke-0, #6F7588)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function InfoIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="InfoIcon">
      <Info3 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
      <InfoIcon3 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Tittle3 />
      <Actions3 />
    </div>
  );
}

function Main3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col font-['Prompt:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-gray-900 text-nowrap tracking-[0.64px]">
        <p className="leading-[48px] whitespace-pre">R$ 0,18</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Main3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5b8c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start min-w-inherit p-[16px] relative w-full">
          <Header5 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function KpiCardBase3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[280px] relative rounded-[8px] shrink-0 w-full" data-name="_KPI Card Base">
      <Container3 />
    </div>
  );
}

function KpiCard3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="KPI Card">
      <KpiCardBase3 />
    </div>
  );
}

function KpiRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full z-[7]" data-name="KPI Row">
      <KpiCard />
      <KpiCard1 />
      <KpiCard2 />
      <KpiCard3 />
    </div>
  );
}

function Frame10868() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Galeria de fotos do veículo</p>
    </div>
  );
}

function GaleriaDeVeiculos2() {
  return (
    <div className="aspect-[84/84] h-full pointer-events-none relative rounded-[8px] shrink-0" data-name="Galeria de veiculos">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgGaleriaDeVeiculos} />
      <div aria-hidden="true" className="absolute border border-[#c5d7f8] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-32.974%] mt-[-15.894%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.23px_0.118px] mask-size-[0.698px_0.745px] ml-0 mt-0 relative size-[1.543px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <img alt="" className="block max-w-none size-full" height="1.543" src={imgVector1} width="1.543" />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.907%] mt-[60.231%] place-items-start relative" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-93.132%] mt-[-133.011%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[2.057px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.446px_0.986px] mask-size-[0.479px_0.741px] ml-0 mt-0 relative w-[1.029px]" data-name="Vector" style={{ maskImage: `url('${imgVector2}')` }}>
        <img alt="" className="block max-w-none size-full" height="2.057" src={imgVector3} width="1.029" />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.522%] mt-[46.871%] place-items-start relative" data-name="Mask group">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-21.842%] mt-[-133.011%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] flex h-[2.057px] items-center justify-center ml-0 mt-0 relative w-[1.029px]">
        <div className="flex-none h-[2.057px] rotate-[180deg] scale-y-[-100%] w-[1.029px]">
          <div className="mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.104px_0.986px] mask-size-[0.479px_0.741px] relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector4}')` }}>
            <img alt="" className="block max-w-none size-full" height="2.057" src={imgVector3} width="1.029" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[95.637%] mt-[46.872%] place-items-start relative" data-name="Mask group">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] h-[8.745px] mix-blend-soft-light ml-[2.66%] mt-[45.218%] relative w-[2.649px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
        <g id="Group" opacity="0.06" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.pf7e3680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] h-[8.199px] mix-blend-soft-light ml-[2.823%] mt-[45.279%] relative w-[2.49px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <g id="Group" opacity="0.12" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p58b6040} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] h-[7.66px] mix-blend-soft-light ml-[3.012%] mt-[45.331%] relative w-[2.329px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
        <g id="Group" opacity="0.19" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p2d393cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] h-[7.112px] mix-blend-soft-light ml-[3.184%] mt-[45.4%] relative w-[2.172px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
        <g id="Group" opacity="0.25" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p18d5da00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] h-[6.57px] mix-blend-soft-light ml-[3.361%] mt-[45.464%] relative w-[2.01px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
        <g id="Group" opacity="0.31" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p2fe28d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] h-[6.026px] mix-blend-soft-light ml-[3.549%] mt-[45.523%] relative w-[1.851px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
        <g id="Group" opacity="0.38" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.pf1d5900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] h-[5.481px] mix-blend-soft-light ml-[3.726%] mt-[45.583%] relative w-[1.691px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
        <g id="Group" opacity="0.44" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p169f8f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] h-[4.942px] mix-blend-soft-light ml-[3.903%] mt-[45.642%] relative w-[1.539px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
        <g id="Group" opacity="0.5" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p3dfa9a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] h-[4.4px] mix-blend-soft-light ml-[4.075%] mt-[45.704%] relative w-[1.383px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
        <g id="Group" opacity="0.56" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p33a36a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] h-[3.855px] mix-blend-soft-light ml-[4.238%] mt-[45.764%] relative w-[1.234px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
        <g id="Group" opacity="0.62" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p39378000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] h-[3.316px] mix-blend-soft-light ml-[4.399%] mt-[45.817%] relative w-[1.092px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
        <g id="Group" opacity="0.69" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p1ee45500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] h-[2.775px] mix-blend-soft-light ml-[4.547%] mt-[45.872%] relative w-[0.958px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
        <g id="Group" opacity="0.75" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p28d2fa00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] h-[2.241px] mix-blend-soft-light ml-[4.689%] mt-[45.931%] relative w-[0.836px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
        <g id="Group" opacity="0.81" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p3f61bf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] h-[1.703px] mix-blend-soft-light ml-[4.773%] mt-[45.983%] relative w-[0.754px]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <g id="Group" opacity="0.88" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p3263d080} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] h-[1.17px] mix-blend-soft-light ml-[4.837%] mt-[46.025%] relative w-[0.687px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
        <g id="Group" opacity="0.94" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p3ae541f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="[grid-area:1_/_1] h-[0.638px] mix-blend-soft-light ml-[4.91%] mt-[46.07%] relative w-[0.627px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
        <g id="Group" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.pdabadf0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="[grid-area:1_/_1] h-[8.745px] mix-blend-soft-light ml-[92.675%] mt-[45.218%] relative w-[2.649px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
        <g id="Group" opacity="0.06" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p18b55f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="[grid-area:1_/_1] h-[8.199px] mix-blend-soft-light ml-[92.793%] mt-[45.279%] relative w-[2.49px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
        <g id="Group" opacity="0.12" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p250fda00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="[grid-area:1_/_1] h-[7.66px] mix-blend-soft-light ml-[92.889%] mt-[45.331%] relative w-[2.329px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
        <g id="Group" opacity="0.19" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p5cda80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="[grid-area:1_/_1] h-[7.112px] mix-blend-soft-light ml-[92.992%] mt-[45.401%] relative w-[2.172px]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
          <g id="Group" opacity="0.25" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p1b4b4200} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="[grid-area:1_/_1] h-[6.57px] mix-blend-soft-light ml-[93.101%] mt-[45.464%] relative w-[2.01px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
        <g id="Group" opacity="0.31" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p27fbc300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="[grid-area:1_/_1] h-[6.026px] mix-blend-soft-light ml-[93.191%] mt-[45.523%] relative w-[1.851px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
        <g id="Group" opacity="0.38" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p10733800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="[grid-area:1_/_1] h-[5.481px] mix-blend-soft-light ml-[93.296%] mt-[45.583%] relative w-[1.691px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
        <g id="Group" opacity="0.44" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.peb2def2} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="[grid-area:1_/_1] h-[4.942px] mix-blend-soft-light ml-[93.388%] mt-[45.642%] relative w-[1.539px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <g id="Group" opacity="0.5" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p15f79d00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="[grid-area:1_/_1] h-[4.4px] mix-blend-soft-light ml-[93.491%] mt-[45.704%] relative w-[1.383px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <g id="Group" opacity="0.56" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p53bce80} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="[grid-area:1_/_1] h-[3.855px] mix-blend-soft-light ml-[93.589%] mt-[45.764%] relative w-[1.234px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
        <g id="Group" opacity="0.62" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p3afd4480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="[grid-area:1_/_1] h-[3.316px] mix-blend-soft-light ml-[93.679%] mt-[45.817%] relative w-[1.092px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
        <g id="Group" opacity="0.69" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p6bf1800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="[grid-area:1_/_1] h-[2.775px] mix-blend-soft-light ml-[93.766%] mt-[45.872%] relative w-[0.958px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
        <g id="Group" opacity="0.75" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.pe5ffd00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="[grid-area:1_/_1] h-[2.241px] mix-blend-soft-light ml-[93.841%] mt-[45.931%] relative w-[0.836px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
        <g id="Group" opacity="0.81" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p2a3e6ac0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="[grid-area:1_/_1] h-[1.703px] mix-blend-soft-light ml-[93.9%] mt-[45.983%] relative w-[0.754px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.03%] right-0 top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <g id="Group" opacity="0.88" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p1fc4b780} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="[grid-area:1_/_1] h-[1.17px] mix-blend-soft-light ml-[93.955%] mt-[46.025%] relative w-[0.687px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
        <g id="Group" opacity="0.94" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.pb0ab400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="[grid-area:1_/_1] h-[0.638px] mix-blend-soft-light ml-[93.986%] mt-[46.07%] relative w-[0.627px]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-[-0.03%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <g id="Group" style={{ mixBlendMode: "soft-light" }}>
            <path d={svgPaths.p21ece700} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="[grid-area:1_/_1] h-[1.347px] mix-blend-multiply ml-[15.192%] mt-[80.487%] relative w-[2.571px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p208db00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="[grid-area:1_/_1] h-[1.322px] mix-blend-multiply ml-[15.227%] mt-[80.493%] relative w-[2.535px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p5392900} fill="var(--fill-0, #FEFFFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="[grid-area:1_/_1] h-[1.306px] mix-blend-multiply ml-[15.256%] mt-[80.506%] relative w-[2.505px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p2798c1c0} fill="var(--fill-0, #FEFEFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="[grid-area:1_/_1] h-[1.281px] mix-blend-multiply ml-[15.291%] mt-[80.514%] relative w-[2.463px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p3294db80} fill="var(--fill-0, #FDFEFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="[grid-area:1_/_1] h-[1.25px] mix-blend-multiply ml-[15.326%] mt-[80.528%] relative w-[2.427px]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p1dbace70} fill="var(--fill-0, #FDFEFF)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="[grid-area:1_/_1] h-[1.229px] mix-blend-multiply ml-[15.367%] mt-[80.534%] relative w-[2.391px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p35562300} fill="var(--fill-0, #FCFDFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="[grid-area:1_/_1] h-[1.203px] mix-blend-multiply ml-[15.402%] mt-[80.548%] relative w-[2.355px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p1c23c500} fill="var(--fill-0, #FCFDFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="[grid-area:1_/_1] h-[1.183px] mix-blend-multiply ml-[15.437%] mt-[80.554%] relative w-[2.319px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p146a7500} fill="var(--fill-0, #FBFDFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="[grid-area:1_/_1] h-[1.157px] mix-blend-multiply ml-[15.472%] mt-[80.567%] relative w-[2.283px]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p263a1480} fill="var(--fill-0, #FBFCFE)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="[grid-area:1_/_1] h-[1.137px] mix-blend-multiply ml-[15.51%] mt-[80.567%] relative w-[2.247px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p273e7e00} fill="var(--fill-0, #FAFCFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="[grid-area:1_/_1] h-[1.111px] mix-blend-multiply ml-[15.546%] mt-[80.588%] relative w-[2.211px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p8333780} fill="var(--fill-0, #FAFCFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="[grid-area:1_/_1] h-[1.085px] mix-blend-multiply ml-[15.581%] mt-[80.594%] relative w-[2.175px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p24a16100} fill="var(--fill-0, #F9FBFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="[grid-area:1_/_1] h-[1.059px] mix-blend-multiply ml-[15.617%] mt-[80.608%] relative w-[2.139px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p3d634380} fill="var(--fill-0, #F9FBFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="[grid-area:1_/_1] h-[1.039px] mix-blend-multiply ml-[15.645%] mt-[80.615%] relative w-[2.103px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p3e2d3380} fill="var(--fill-0, #F8FBFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="[grid-area:1_/_1] h-[1.013px] mix-blend-multiply ml-[15.68%] mt-[80.628%] relative w-[2.067px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p3c6e9980} fill="var(--fill-0, #F8FAFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="[grid-area:1_/_1] h-[0.987px] mix-blend-multiply ml-[15.716%] mt-[80.635%] relative w-[2.031px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p14644c00} fill="var(--fill-0, #F7FAFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="[grid-area:1_/_1] h-[0.967px] mix-blend-multiply ml-[15.756%] mt-[80.648%] relative w-[1.995px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p34069f00} fill="var(--fill-0, #F7FAFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="[grid-area:1_/_1] h-[0.941px] mix-blend-multiply ml-[15.791%] mt-[80.656%] relative w-[1.959px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p1fd31580} fill="var(--fill-0, #F6F9FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="[grid-area:1_/_1] h-[0.915px] mix-blend-multiply ml-[15.827%] mt-[80.669%] relative w-[1.923px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p199f9800} fill="var(--fill-0, #F6F9FD)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="[grid-area:1_/_1] h-[0.895px] mix-blend-multiply ml-[15.862%] mt-[80.676%] relative w-[1.887px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p231c5600} fill="var(--fill-0, #F5F9FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="[grid-area:1_/_1] h-[0.869px] mix-blend-multiply ml-[15.899%] mt-[80.689%] relative w-[1.851px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p72faa00} fill="var(--fill-0, #F5F8FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="[grid-area:1_/_1] h-[0.843px] mix-blend-multiply ml-[15.935%] mt-[80.696%] relative w-[1.815px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p3ccb4280} fill="var(--fill-0, #F4F8FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group60() {
  return (
    <div className="[grid-area:1_/_1] h-[1.347px] mix-blend-multiply ml-[80.375%] mt-[80.487%] relative w-[2.571px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p288f2b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group61() {
  return (
    <div className="[grid-area:1_/_1] h-[1.322px] mix-blend-multiply ml-[80.41%] mt-[80.493%] relative w-[2.535px]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p1870b000} fill="var(--fill-0, #FEFFFF)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="[grid-area:1_/_1] h-[1.306px] mix-blend-multiply ml-[80.439%] mt-[80.507%] relative w-[2.505px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p281cad60} fill="var(--fill-0, #FEFEFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group63() {
  return (
    <div className="[grid-area:1_/_1] h-[1.281px] mix-blend-multiply ml-[80.474%] mt-[80.514%] relative w-[2.463px]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.pd597300} fill="var(--fill-0, #FDFEFF)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="[grid-area:1_/_1] h-[1.25px] mix-blend-multiply ml-[80.51%] mt-[80.528%] relative w-[2.427px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p294feb00} fill="var(--fill-0, #FDFEFF)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group65() {
  return (
    <div className="[grid-area:1_/_1] h-[1.229px] mix-blend-multiply ml-[80.547%] mt-[80.534%] relative w-[2.391px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.pfa6a900} fill="var(--fill-0, #FCFDFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group66() {
  return (
    <div className="[grid-area:1_/_1] h-[1.203px] mix-blend-multiply ml-[80.583%] mt-[80.548%] relative w-[2.355px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p23587980} fill="var(--fill-0, #FCFDFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group67() {
  return (
    <div className="[grid-area:1_/_1] h-[1.183px] mix-blend-multiply ml-[80.618%] mt-[80.554%] relative w-[2.319px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p2c013f80} fill="var(--fill-0, #FBFDFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="[grid-area:1_/_1] h-[1.157px] mix-blend-multiply ml-[80.654%] mt-[80.567%] relative w-[2.283px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p2288dd00} fill="var(--fill-0, #FBFCFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group69() {
  return (
    <div className="[grid-area:1_/_1] h-[1.137px] mix-blend-multiply ml-[80.694%] mt-[80.567%] relative w-[2.247px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p3c67100} fill="var(--fill-0, #FAFCFE)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group70() {
  return (
    <div className="[grid-area:1_/_1] h-[1.111px] mix-blend-multiply ml-[80.729%] mt-[80.588%] relative w-[2.211px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p1ff64980} fill="var(--fill-0, #FAFCFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group71() {
  return (
    <div className="[grid-area:1_/_1] h-[1.085px] mix-blend-multiply ml-[80.765%] mt-[80.594%] relative w-[2.175px]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p1903c780} fill="var(--fill-0, #F9FBFE)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group72() {
  return (
    <div className="[grid-area:1_/_1] h-[1.059px] mix-blend-multiply ml-[80.8%] mt-[80.608%] relative w-[2.139px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p136e9b00} fill="var(--fill-0, #F9FBFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group73() {
  return (
    <div className="[grid-area:1_/_1] h-[1.039px] mix-blend-multiply ml-[80.828%] mt-[80.615%] relative w-[2.103px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p12ac000} fill="var(--fill-0, #F8FBFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="[grid-area:1_/_1] h-[1.013px] mix-blend-multiply ml-[80.863%] mt-[80.628%] relative w-[2.067px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p1e687580} fill="var(--fill-0, #F8FAFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group75() {
  return (
    <div className="[grid-area:1_/_1] h-[0.987px] mix-blend-multiply ml-[80.899%] mt-[80.635%] relative w-[2.031px]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p2951e600} fill="var(--fill-0, #F7FAFE)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group76() {
  return (
    <div className="[grid-area:1_/_1] h-[0.962px] mix-blend-multiply ml-[80.936%] mt-[80.648%] relative w-[1.995px]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.pdc47a40} fill="var(--fill-0, #F7FAFD)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group77() {
  return (
    <div className="[grid-area:1_/_1] h-[0.941px] mix-blend-multiply ml-[80.972%] mt-[80.656%] relative w-[1.959px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p13b4d900} fill="var(--fill-0, #F6F9FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group78() {
  return (
    <div className="[grid-area:1_/_1] h-[0.915px] mix-blend-multiply ml-[81.007%] mt-[80.669%] relative w-[1.923px]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path d={svgPaths.p3e93a680} fill="var(--fill-0, #F6F9FD)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group79() {
  return (
    <div className="[grid-area:1_/_1] h-[0.895px] mix-blend-multiply ml-[81.043%] mt-[80.676%] relative w-[1.887px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p3a03a100} fill="var(--fill-0, #F5F9FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group80() {
  return (
    <div className="[grid-area:1_/_1] h-[0.869px] mix-blend-multiply ml-[81.083%] mt-[80.689%] relative w-[1.851px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p38d4d200} fill="var(--fill-0, #F5F8FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group81() {
  return (
    <div className="[grid-area:1_/_1] h-[0.843px] mix-blend-multiply ml-[81.118%] mt-[80.696%] relative w-[1.815px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p39be4870} fill="var(--fill-0, #F4F8FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group83() {
  return (
    <div className="[grid-area:1_/_1] h-[12.569px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-29.318px_-6.367px] mask-size-[41.662px_16.534px] mix-blend-multiply ml-[71.728%] mt-[27.846%] relative w-[10.718px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p37f1dc70} fill="var(--fill-0, #E1EBFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group84() {
  return (
    <div className="[grid-area:1_/_1] h-[12.569px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-10.731px_-6.367px] mask-size-[41.662px_16.534px] mix-blend-multiply ml-[25.616%] mt-[27.846%] relative w-[10.718px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p37f1dc70} fill="var(--fill-0, #E1EBFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group85() {
  return (
    <div className="[grid-area:1_/_1] h-[12.569px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-0.406px_-6.367px] mask-size-[41.662px_16.534px] mix-blend-multiply ml-0 mt-[27.846%] relative w-[10.718px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p11d0c480} fill="var(--fill-0, #E1EBFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="[grid-area:1_/_1] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-28.639px_-12.868px] mask-size-[41.662px_16.534px] mix-blend-multiply ml-[70.042%] mt-[53.097%] relative size-[12.075px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p3ddfba80} fill="var(--fill-0, #E1EBFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group87() {
  return (
    <div className="[grid-area:1_/_1] h-[18.355px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-1.146px_0.602px] mask-size-[41.662px_16.534px] mix-blend-soft-light ml-[1.836%] mt-[0.779%] relative w-[5.23px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 19">
        <g id="Group" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p113629c0} fill="var(--fill-0, #D9E6FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group88() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.975%] mt-[-4.851%] place-items-start relative" data-name="Group">
      <Group83 />
      <Group84 />
      <Group85 />
      <Group86 />
      <div className="[grid-area:1_/_1] h-[18.093px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-5.846px_0.776px] mask-size-[41.662px_16.534px] mix-blend-soft-light ml-[5.44px] mt-[0.026px] relative w-[10.98px]" data-name="Vector" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19">
          <path d={svgPaths.p3be3d700} fill="url(#paint0_linear_7_124297)" id="Vector" opacity="0.5" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124297" x1="0" x2="10.98" y1="9.04628" y2="9.04628">
              <stop stopColor="#F8FAFE" />
              <stop offset="0.12" stopColor="#F9FBFE" />
              <stop offset="0.88" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[18.576px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-22.668px_0.802px] mask-size-[41.662px_16.534px] mix-blend-soft-light ml-[22.262px] mt-0 relative w-[16.509px]" data-name="Vector" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
          <path d={svgPaths.p21622c00} fill="url(#paint0_linear_7_124779)" id="Vector" opacity="0.5" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124779" x1="0" x2="16.5086" y1="9.288" y2="9.288">
              <stop stopColor="#F8FAFE" />
              <stop offset="0.12" stopColor="#F9FBFE" />
              <stop offset="0.88" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group87 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[13.747%] mt-[32.156%] place-items-start relative" data-name="Mask group">
      <Group88 />
    </div>
  );
}

function Group833() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[40.691px] ml-[4.823px] mt-[0.767px] relative w-[47.623px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 41">
          <path d={svgPaths.p1e02db00} fill="url(#paint0_linear_7_124641)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124641" x1="23.8114" x2="23.8114" y1="-0.252" y2="36.8436">
              <stop stopColor="#F5F8FF" />
              <stop offset="0.02" stopColor="#FCFCFF" />
              <stop offset="0.03" stopColor="#FEFEFF" />
              <stop offset="0.07" stopColor="#F7FAFF" />
              <stop offset="0.14" stopColor="#F0F6FF" />
              <stop offset="0.34" stopColor="#EFF5FF" />
              <stop offset="0.56" stopColor="#E4EEFF" />
              <stop offset="0.59" stopColor="#E3EDFF" />
              <stop offset="0.99" stopColor="#F4F7FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[42.171px] ml-[4.207px] mt-0 relative w-[48.857px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="42.171" src={imgVector5} width="48.857" />
      </div>
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <div className="[grid-area:1_/_1] h-[9.951px] ml-0 mt-[34.299px] relative w-[4.335px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p2ee79300} fill="var(--fill-0, #EAF1FB)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.833px] ml-[0.027px] mt-[34.366px] relative w-[4.243px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p22c97c80} fill="var(--fill-0, #E7EFFB)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.715px] ml-[0.063px] mt-[34.417px] relative w-[4.15px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p2ba63130} fill="var(--fill-0, #E5EDFA)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.597px] ml-[0.1px] mt-[34.479px] relative w-[4.053px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p1435b200} fill="var(--fill-0, #E3ECFA)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.478px] ml-[0.14px] mt-[34.535px] relative w-[3.955px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p35d29580} fill="var(--fill-0, #E0EAF9)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.36px] ml-[0.169px] mt-[34.598px] relative w-[3.862px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p24ba4700} fill="var(--fill-0, #DEE8F8)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.242px] ml-[0.205px] mt-[34.653px] relative w-[3.765px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p10891980} fill="var(--fill-0, #DBE7F8)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.123px] ml-[0.237px] mt-[34.716px] relative w-[3.672px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p206f5680} fill="var(--fill-0, #D8E5F7)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.005px] ml-[0.273px] mt-[34.772px] relative w-[3.574px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p10fe00} fill="var(--fill-0, #D6E3F7)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.882px] ml-[0.31px] mt-[34.834px] relative w-[3.476px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p4d99000} fill="var(--fill-0, #D3E1F6)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.769px] ml-[0.346px] mt-[34.891px] relative w-[3.379px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.pdd170c0} fill="var(--fill-0, #D1E0F6)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.65px] ml-[0.377px] mt-[34.946px] relative w-[3.292px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p1e92e300} fill="var(--fill-0, #CFDEF5)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.527px] ml-[0.413px] mt-[35.014px] relative w-[3.194px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p345fd300} fill="var(--fill-0, #CCDCF5)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.409px] ml-[0.458px] mt-[35.07px] relative w-[3.091px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.pa69cdf0} fill="var(--fill-0, #CADAF4)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.29px] ml-[0.479px] mt-[35.132px] relative w-[3.004px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p13876700} fill="var(--fill-0, #C7D9F4)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.172px] ml-[0.515px] mt-[35.188px] relative w-[2.911px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p3665ee00} fill="var(--fill-0, #C4D7F3)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.054px] ml-[0.551px] mt-[35.25px] relative w-[2.808px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p26bdeb00} fill="var(--fill-0, #C2D5F3)" id="Vector" />
        </svg>
      </div>
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
      <Group21 />
      <div className="[grid-area:1_/_1] h-[9.951px] ml-[52.457px] mt-[34.299px] relative w-[4.335px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3677f100} fill="var(--fill-0, #EAF1FB)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.833px] ml-[52.523px] mt-[34.366px] relative w-[4.243px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3ec6200} fill="var(--fill-0, #E7EFFB)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.715px] ml-[52.579px] mt-[34.417px] relative w-[4.15px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p3b45a000} fill="var(--fill-0, #E5EDFA)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.597px] ml-[52.641px] mt-[34.479px] relative w-[4.053px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
          <path d={svgPaths.p1d2fcb40} fill="var(--fill-0, #E3ECFA)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.478px] ml-[52.698px] mt-[34.535px] relative w-[3.955px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p2c1df6f1} fill="var(--fill-0, #E0EAF9)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.36px] ml-[52.762px] mt-[34.598px] relative w-[3.862px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p361efb00} fill="var(--fill-0, #DEE8F8)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.242px] ml-[52.823px] mt-[34.653px] relative w-[3.765px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p288115c0} fill="var(--fill-0, #DBE7F8)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.123px] ml-[52.884px] mt-[34.716px] relative w-[3.672px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
          <path d={svgPaths.p1e9e3400} fill="var(--fill-0, #D8E5F7)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[9.005px] ml-[52.945px] mt-[34.772px] relative w-[3.574px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p28174800} fill="var(--fill-0, #D6E3F7)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.882px] ml-[53.007px] mt-[34.834px] relative w-[3.477px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p821c6f2} fill="var(--fill-0, #D3E1F6)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.769px] ml-[53.068px] mt-[34.891px] relative w-[3.379px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p28988cc0} fill="var(--fill-0, #D1E0F6)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.65px] ml-[53.125px] mt-[34.946px] relative w-[3.291px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p1447780} fill="var(--fill-0, #CFDEF5)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.527px] ml-[53.187px] mt-[35.014px] relative w-[3.194px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p310c6780} fill="var(--fill-0, #CCDCF5)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.409px] ml-[53.244px] mt-[35.07px] relative w-[3.091px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p35a52700} fill="var(--fill-0, #CADAF4)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.29px] ml-[53.312px] mt-[35.132px] relative w-[3.003px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p2ed1c700} fill="var(--fill-0, #C7D9F4)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.172px] ml-[53.368px] mt-[35.188px] relative w-[2.911px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p304b6e80} fill="var(--fill-0, #C4D7F3)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[8.054px] ml-[53.434px] mt-[35.25px] relative w-[2.808px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.p3f3a100} fill="var(--fill-0, #C2D5F3)" id="Vector" />
        </svg>
      </div>
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <div className="[grid-area:1_/_1] h-[47.617px] ml-[4.154px] mt-[19.106px] relative w-[48.978px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 48">
          <path d={svgPaths.p24bf7980} fill="url(#paint0_linear_7_124747)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124747" x1="24.4813" x2="24.4813" y1="0.426514" y2="47.3859">
              <stop stopColor="#FDFEFF" />
              <stop offset="0.04" stopColor="#FDFEFF" />
              <stop offset="0.28" stopColor="#FDFEFF" />
              <stop offset="0.47" stopColor="#F6F9FF" />
              <stop offset="0.58" stopColor="#EFF5FF" />
              <stop offset="0.77" stopColor="#EBF2FF" />
              <stop offset="0.9" stopColor="#E3EDFF" />
              <stop offset="0.95" stopColor="#E0EBFF" />
              <stop offset="0.99" stopColor="#D6E4FF" />
              <stop offset="1" stopColor="#D1E1FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[4.222px] ml-[42.479px] mt-[66.492px] relative w-[7.714px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
          <path d={svgPaths.pab19900} fill="var(--fill-0, #C6D8F4)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[4.222px] ml-[5.908px] mt-[66.497px] relative w-[7.714px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
          <path d={svgPaths.p2f36b400} fill="var(--fill-0, #C6D8F4)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[10.908px] ml-[43.527px] mt-[65.283px] relative w-[5.626px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
          <path d={svgPaths.p194f8900} fill="url(#paint0_linear_7_124612)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124612" x1="2.81314" x2="2.81314" y1="-7.65258" y2="10.7177">
              <stop stopColor="#BFD3F3" />
              <stop offset="1" stopColor="#C5D7F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[10.908px] ml-[7.056px] mt-[65.283px] relative w-[5.626px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
          <path d={svgPaths.p6497900} fill="url(#paint0_linear_7_124230)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124230" x1="2.81314" x2="2.81314" y1="-64.8514" y2="-64.8514">
              <stop stopColor="#BFD3F3" />
              <stop offset="1" stopColor="#C5D7F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[4.629px] ml-[3.692px] mt-[50.4px] relative w-[10.8px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="4.629" src={imgVector6} width="10.8" />
      </div>
      <div className="[grid-area:1_/_1] h-[3.354px] ml-[4.171px] mt-[50.977px] relative w-[9.653px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 4">
          <path d={svgPaths.p33608280} fill="url(#paint0_linear_7_124841)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124841" x1="-0.00514286" x2="10.8309" y1="1.67657" y2="1.67657">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[3.024px] ml-[4.167px] mt-[50.977px] relative w-[2.628px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p175b21f0} fill="var(--fill-0, #D1E1FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] mix-blend-soft-light ml-[7.503px] mt-[51.372px] relative size-[2.438px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p287d3c50} fill="url(#paint0_linear_7_124705)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124705" x1="0.00514285" x2="2.43771" y1="1.21886" y2="1.21886">
              <stop stopColor="#C6D8F4" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] mix-blend-soft-light ml-[10.568px] mt-[51.372px] relative size-[2.438px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p366602f0} fill="url(#paint0_linear_7_124719)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124719" x1="0" x2="2.43772" y1="-50.9399" y2="-50.9399">
              <stop stopColor="#C6D8F4" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.833px] mix-blend-soft-light ml-[4.645px] mt-[51.377px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <path d={svgPaths.p2b60e900} fill="url(#paint0_linear_7_124605)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124605" x1="0" x2="1.8" y1="0.416573" y2="0.416573">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#F4F8FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.833px] mix-blend-soft-light ml-[4.645px] mt-[52.56px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <path d={svgPaths.p3bcd4f00} fill="url(#paint0_linear_7_124601)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124601" x1="-12.2812" x2="-11.7669" y1="0.416573" y2="0.416573">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#F4F8FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[3.354px] mix-blend-multiply ml-[4.167px] mt-[50.977px] relative w-[9.566px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 4">
          <path d={svgPaths.p2d6e0400} fill="url(#paint0_linear_7_124591)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124591" x1="0" x2="10.7434" y1="1.67657" y2="1.67657">
              <stop stopColor="#EBF2FF" />
              <stop offset="0.06" stopColor="#EBF2FF" />
              <stop offset="0.99" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.394px] mix-blend-soft-light ml-[4.598px] mt-[51.059px] relative w-[9.139px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <path d={svgPaths.p33928e80} fill="url(#paint0_linear_7_124781)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124781" x1="0" x2="10.26" y1="0.699429" y2="0.699429">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#C6D8F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[4.629px] ml-[42.264px] mt-[50.4px] relative w-[10.286px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="4.629" src={imgVector7} width="10.286" />
      </div>
      <div className="[grid-area:1_/_1] h-[3.354px] ml-[42.88px] mt-[50.977px] relative w-[9.653px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 4">
          <path d={svgPaths.p29dfe700} fill="url(#paint0_linear_7_124446)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124446" x1="9.65829" x2="-1.17771" y1="-50.5442" y2="-50.5442">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[3.024px] ml-[49.911px] mt-[50.977px] relative w-[2.628px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p20585500} fill="var(--fill-0, #D1E1FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] mix-blend-soft-light ml-[46.758px] mt-[51.372px] relative size-[2.438px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p32e2ee00} fill="url(#paint0_linear_7_124582)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124582" x1="2.43771" x2="0.00514289" y1="-50.9399" y2="-50.9399">
              <stop stopColor="#C6D8F4" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] mix-blend-soft-light ml-[43.698px] mt-[51.372px] relative size-[2.438px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p32e2ee00} fill="url(#paint0_linear_7_124671)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124671" x1="2.43771" x2="0" y1="-50.9399" y2="-50.9399">
              <stop stopColor="#C6D8F4" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.833px] mix-blend-soft-light ml-[50.256px] mt-[51.377px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <path d={svgPaths.p246eca00} fill="url(#paint0_linear_7_124375)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124375" x1="1.80514" x2="0.00514276" y1="-50.9453" y2="-50.9453">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#F4F8FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.833px] mix-blend-soft-light ml-[50.256px] mt-[52.56px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <path d={svgPaths.p2d9a9cf0} fill="url(#paint0_linear_7_124578)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124578" x1="1.80514" x2="0.00514276" y1="0.416573" y2="0.416573">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#F4F8FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[3.354px] mix-blend-multiply ml-[42.973px] mt-[50.977px] relative w-[9.566px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 4">
          <path d={svgPaths.p1b9a20b0} fill="url(#paint0_linear_7_124574)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124574" x1="9.56571" x2="-1.17771" y1="-50.5442" y2="-50.5442">
              <stop stopColor="#EBF2FF" />
              <stop offset="0.06" stopColor="#EBF2FF" />
              <stop offset="0.99" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.394px] mix-blend-soft-light ml-[42.969px] mt-[51.059px] relative w-[9.139px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <path d={svgPaths.p14e2f00} fill="url(#paint0_linear_7_124580)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124580" x1="9.13886" x2="-1.12114" y1="-50.6265" y2="-50.6265">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#C6D8F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.278px] mix-blend-hard-light ml-[4.099px] mt-[51.059px] relative w-[48.538px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 1">
          <path d={svgPaths.p368e27f0} fill="url(#paint0_linear_7_124551)" id="Vector" style={{ mixBlendMode: "hard-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124551" x1="24.2743" x2="24.2743" y1="0.277713" y2="0.00514285">
              <stop stopColor="#BDD4FF" />
              <stop offset="0.55" stopColor="#D4E3FF" />
              <stop offset="1" stopColor="#EBF2FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.278px] mix-blend-multiply ml-[4.099px] mt-[50.781px] relative w-[48.538px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 1">
          <path d={svgPaths.p368e27f0} fill="url(#paint0_linear_7_124603)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124603" x1="24.2743" x2="24.2743" y1="0.277713" y2="0.0102857">
              <stop stopColor="#F1F5FC" />
              <stop offset="0.15" stopColor="#D1E1FF" />
              <stop offset="0.26" stopColor="#DCE8FF" />
              <stop offset="0.5" stopColor="#EFF5FF" />
              <stop offset="0.74" stopColor="#FBFCFF" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[4.114px] ml-[18.606px] mt-[50.4px] relative w-[19.543px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="4.114" src={imgVector8} width="19.543" />
      </div>
      <div className="[grid-area:1_/_1] h-[6.737px] ml-[14.545px] mt-[50.652px] relative w-[28.234px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 7">
          <path d={svgPaths.p1a455500} fill="url(#paint0_linear_7_124385)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124385" x1="14.112" x2="14.112" y1="6.54172" y2="0.0617147">
              <stop stopColor="#EDF3FC" />
              <stop offset="0.56" stopColor="#EAF1FB" />
              <stop offset="0.99" stopColor="#C6D8F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.939px] ml-[15.089px] mt-[52.606px] relative w-[27.139px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 2">
          <path d={svgPaths.p38e9da70} fill="url(#paint0_linear_7_124542)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124542" x1="13.572" x2="13.572" y1="1.88743" y2="0.0154286">
              <stop offset="0.01" stopColor="#F4F8FD" />
              <stop offset="0.05" stopColor="#D9E6FF" />
              <stop offset="0.09" stopColor="#EEF3FC" />
              <stop offset="0.9" stopColor="#C6D8F4" />
              <stop offset="0.96" stopColor="#EDF3FC" />
              <stop offset="0.99" stopColor="#BFD3F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.944px] ml-[14.545px] mt-[50.663px] relative w-[28.229px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 2">
          <path d={svgPaths.p10fb8500} fill="url(#paint0_linear_7_124540)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124540" x1="14.112" x2="14.112" y1="1.88743" y2="0.0154286">
              <stop offset="0.01" stopColor="#F4F8FD" />
              <stop offset="0.05" stopColor="#D9E6FF" />
              <stop offset="0.09" stopColor="#EEF3FC" />
              <stop offset="0.9" stopColor="#C6D8F4" />
              <stop offset="0.96" stopColor="#EDF3FC" />
              <stop offset="0.99" stopColor="#BFD3F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.944px] ml-[15.63px] mt-[54.545px] relative w-[26.064px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 2">
          <path d={svgPaths.p1478bb00} fill="url(#paint0_linear_7_124868)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124868" x1="-23.2663" x2="-22.752" y1="1.88743" y2="0.020571">
              <stop offset="0.01" stopColor="#F4F8FD" />
              <stop offset="0.05" stopColor="#D9E6FF" />
              <stop offset="0.09" stopColor="#EEF3FC" />
              <stop offset="0.9" stopColor="#C6D8F4" />
              <stop offset="0.96" stopColor="#EDF3FC" />
              <stop offset="0.99" stopColor="#BFD3F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[6.737px] mix-blend-multiply ml-[14.545px] mt-[50.652px] relative w-[28.234px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 7">
          <path d={svgPaths.p1a455500} fill="url(#paint0_radial_7_124783)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(13.9783 6.696) scale(14.6211 14.6211)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124783" r="1">
              <stop stopColor="white" />
              <stop offset="0.48" stopColor="#FCFDFE" />
              <stop offset="0.8" stopColor="#F3F7FC" />
              <stop offset="0.99" stopColor="#EAF1FB" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[7.514px] ml-[3.769px] mt-[59.004px] relative w-[48.884px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 8">
          <path d={svgPaths.p2a7b4d00} fill="url(#paint0_linear_7_124419)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124419" x1="24.4342" x2="24.4342" y1="7.21543" y2="0.195428">
              <stop stopColor="#BFD3F3" />
              <stop offset="0.1" stopColor="#C6D8F4" />
              <stop offset="0.91" stopColor="#EEF3FC" />
              <stop offset="0.95" stopColor="#D9E6FF" />
              <stop offset="0.99" stopColor="#F4F8FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.53px] mix-blend-multiply ml-[14.148px] mt-[60.665px] relative w-[8.049px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 3">
          <path d={svgPaths.p246cbb80} fill="url(#paint0_linear_7_124365)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124365" x1="4.02171" x2="4.02171" y1="2.45829" y2="0.0205715">
              <stop stopColor="#F8FAFE" />
              <stop offset="0.55" stopColor="#F2F6FD" />
              <stop offset="0.99" stopColor="#EAF1FB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.53px] mix-blend-multiply ml-[35.116px] mt-[60.655px] relative w-[8.049px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 3">
          <path d={svgPaths.p2c05f990} fill="url(#paint0_linear_7_124629)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124629" x1="4.032" x2="4.032" y1="2.45829" y2="0.0257144">
              <stop stopColor="#F8FAFE" />
              <stop offset="0.55" stopColor="#F2F6FD" />
              <stop offset="0.99" stopColor="#EAF1FB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[7.473px] mix-blend-multiply ml-[49.167px] mt-[59.051px] relative w-[3.482px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
          <path d={svgPaths.p15d06700} fill="url(#paint0_linear_7_124530)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124530" x1="2.844" x2="0.0154286" y1="3.73372" y2="3.73372">
              <stop stopColor="#F8FAFE" />
              <stop offset="0.26" stopColor="#FBFCFE" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[7.473px] mix-blend-multiply ml-[3.765px] mt-[59.056px] relative w-[3.204px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
          <path d={svgPaths.p2b84c380} fill="url(#paint0_linear_7_124153)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124153" x1="0.571343" x2="3.18906" y1="3.73371" y2="3.73371">
              <stop stopColor="#F8FAFE" />
              <stop offset="0.26" stopColor="#FBFCFE" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.705px] ml-[22.835px] mt-[60.572px] relative w-[11.649px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
          <path d={svgPaths.p30368430} fill="var(--fill-0, #FDFEFF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.849px] ml-[22.763px] mt-[60.501px] relative w-[11.793px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
          <path d={svgPaths.p3fa77500} fill="var(--fill-0, #F6F9FD)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.522px] ml-[8.479px] mt-[61.164px] relative w-[2.762px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p7e18a00} fill="var(--fill-0, #F2F6FD)" id="Vector" />
        </svg>
      </div>
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
      <Group50 />
      <Group51 />
      <Group52 />
      <Group53 />
      <Group54 />
      <Group55 />
      <Group56 />
      <Group57 />
      <Group58 />
      <Group59 />
      <div className="[grid-area:1_/_1] h-[1.126px] ml-[8.711px] mt-[61.359px] relative w-[2.345px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p24e53c80} fill="url(#paint0_linear_7_124610)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124610" x1="1.17257" x2="1.17257" y1="1.11086" y2="-0.0462858">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.095px] ml-[8.716px] mt-[61.365px] relative w-[2.335px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p3c6bf980} fill="url(#paint0_linear_7_124456)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124456" x1="1.16743" x2="1.16743" y1="1.07486" y2="-0.0514287">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.059px] ml-[8.727px] mt-[61.365px] relative w-[2.319px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p215fd400} fill="url(#paint0_linear_7_124875)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124875" x1="1.15714" x2="1.15714" y1="1.044" y2="-0.0462859">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.023px] ml-[8.731px] mt-[61.37px] relative w-[2.304px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p11537400} fill="url(#paint0_linear_7_124665)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124665" x1="1.152" x2="1.152" y1="1.008" y2="-0.0462857">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.993px] ml-[8.74px] mt-[61.375px] relative w-[2.289px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p10047900} fill="url(#paint0_linear_7_124795)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124795" x1="1.14171" x2="1.14171" y1="0.971996" y2="-0.0462856">
              <stop stopColor="#F1F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.957px] ml-[8.747px] mt-[61.375px] relative w-[2.273px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p22cadd80} fill="url(#paint0_linear_7_124861)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124861" x1="1.13657" x2="1.13657" y1="0.941141" y2="-0.0411428">
              <stop stopColor="#F1F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.921px] ml-[8.751px] mt-[61.381px] relative w-[2.263px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p152a6800} fill="url(#paint0_linear_7_124658)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124658" x1="1.13143" x2="1.13143" y1="0.905142" y2="-0.0411428">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.89px] ml-[8.763px] mt-[61.381px] relative w-[2.247px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p211a0380} fill="url(#paint0_linear_7_124519)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124519" x1="1.12114" x2="1.12114" y1="0.874281" y2="-0.0359998">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.854px] ml-[8.768px] mt-[61.386px] relative w-[2.232px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p152893c0} fill="url(#paint0_linear_7_124870)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124870" x1="1.116" x2="1.116" y1="0.838282" y2="-0.0411427">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.823px] ml-[8.776px] mt-[61.386px] relative w-[2.217px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p27d83600} fill="url(#paint0_linear_7_124812)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124812" x1="1.10571" x2="1.10571" y1="0.807426" y2="-0.0359999">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.787px] ml-[8.783px] mt-[61.391px] relative w-[2.206px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p3ac41e80} fill="url(#paint0_linear_7_124818)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124818" x1="1.10057" x2="1.10057" y1="0.771428" y2="-0.036">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.751px] ml-[8.787px] mt-[61.391px] relative w-[2.191px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p4fbb680} fill="url(#paint0_linear_7_124090)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124090" x1="1.09543" x2="1.09543" y1="0.74571" y2="-0.0308569">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.72px] ml-[8.8px] mt-[61.396px] relative w-[2.175px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p450e040} fill="url(#paint0_linear_7_124448)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124448" x1="1.08514" x2="1.08514" y1="0.709711" y2="-0.030857">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.684px] ml-[8.804px] mt-[61.401px] relative w-[2.16px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p3defd3e0} fill="url(#paint0_linear_7_124194)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124194" x1="1.08" x2="1.08" y1="0.673713" y2="-0.0308571">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.653px] ml-[8.809px] mt-[61.401px] relative w-[2.15px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p34d6c580} fill="url(#paint0_linear_7_124450)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124450" x1="1.07486" x2="1.07486" y1="0.642857" y2="-0.0257143">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.617px] ml-[8.819px] mt-[61.406px] relative w-[2.134px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p1c273b80} fill="url(#paint0_linear_7_124444)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124444" x1="1.06457" x2="1.06457" y1="0.606858" y2="-0.0308572">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.581px] ml-[8.823px] mt-[61.406px] relative w-[2.119px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p3f4b2300} fill="url(#paint0_linear_7_124651)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124651" x1="1.05943" x2="1.05943" y1="0.575997" y2="-0.0257142">
              <stop stopColor="#F0F5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.55px] ml-[8.833px] mt-[61.411px] relative w-[2.103px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p8c46c80} fill="url(#paint0_linear_7_124437)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124437" x1="1.04914" x2="1.04914" y1="0.539999" y2="-0.0257142">
              <stop stopColor="#F0F5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.514px] ml-[8.84px] mt-[61.411px] relative w-[2.088px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p1eb9cb00} fill="url(#paint0_linear_7_124724)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124724" x1="1.044" x2="1.044" y1="0.509143" y2="-0.0205714">
              <stop stopColor="#EFF5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.96" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.478px] ml-[8.849px] mt-[61.416px] relative w-[2.078px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p2c72cfc0} fill="url(#paint0_linear_7_124639)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124639" x1="1.03372" x2="1.03372" y1="0.473144" y2="-0.0205715">
              <stop stopColor="#EFF5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.96" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.447px] ml-[8.855px] mt-[61.416px] relative w-[2.062px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p35a4300} fill="url(#paint0_linear_7_124461)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124461" x1="1.02857" x2="1.02857" y1="0.442283" y2="-0.0154285">
              <stop stopColor="#EFF5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.96" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.411px] ml-[8.865px] mt-[61.416px] relative w-[2.042px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p1fc35f80} fill="var(--fill-0, #EFF5FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.247px] ml-[8.896px] mt-[61.417px] relative w-[2.022px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p15de5580} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.522px] ml-[45.498px] mt-[61.164px] relative w-[2.762px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p2bdd2980} fill="var(--fill-0, #F2F6FD)" id="Vector" />
        </svg>
      </div>
      <Group60 />
      <Group61 />
      <Group62 />
      <Group63 />
      <Group64 />
      <Group65 />
      <Group66 />
      <Group67 />
      <Group68 />
      <Group69 />
      <Group70 />
      <Group71 />
      <Group72 />
      <Group73 />
      <Group74 />
      <Group75 />
      <Group76 />
      <Group77 />
      <Group78 />
      <Group79 />
      <Group80 />
      <Group81 />
      <div className="[grid-area:1_/_1] h-[1.126px] ml-[45.729px] mt-[61.359px] relative w-[2.345px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p24e53c80} fill="url(#paint0_linear_7_124361)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124361" x1="1.17257" x2="1.17257" y1="1.11086" y2="-0.0462858">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.095px] ml-[45.739px] mt-[61.365px] relative w-[2.335px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p42b63f0} fill="url(#paint0_linear_7_124822)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124822" x1="1.16229" x2="1.16229" y1="-60.9327" y2="-60.9327">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.059px] ml-[45.745px] mt-[61.365px] relative w-[2.319px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p215fd400} fill="url(#paint0_linear_7_124875)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124875" x1="1.15714" x2="1.15714" y1="1.044" y2="-0.0462859">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.023px] ml-[45.749px] mt-[61.37px] relative w-[2.304px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p11537400} fill="url(#paint0_linear_7_124665)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124665" x1="1.152" x2="1.152" y1="1.008" y2="-0.0462857">
              <stop stopColor="#F2F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.98" stopColor="#F1F5FD" />
              <stop offset="1" stopColor="#F2F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.993px] ml-[45.76px] mt-[61.375px] relative w-[2.289px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p2b44d500} fill="url(#paint0_linear_7_124350)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124350" x1="1.14171" x2="1.14171" y1="-60.9428" y2="-60.9428">
              <stop stopColor="#F1F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.957px] ml-[45.765px] mt-[61.375px] relative w-[2.273px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p1469cd30} fill="url(#paint0_linear_7_124348)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124348" x1="1.13657" x2="1.13657" y1="0.941141" y2="-0.0411428">
              <stop stopColor="#F1F6FD" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.921px] ml-[45.769px] mt-[61.381px] relative w-[2.263px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p2569d900} fill="url(#paint0_linear_7_124346)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124346" x1="1.13143" x2="1.13143" y1="-60.9481" y2="-60.9481">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.89px] ml-[45.781px] mt-[61.381px] relative w-[2.247px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p232de900} fill="url(#paint0_linear_7_124341)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124341" x1="1.12114" x2="1.12114" y1="0.874281" y2="-0.0359998">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.854px] ml-[45.785px] mt-[61.386px] relative w-[2.232px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p265839f2} fill="url(#paint0_linear_7_124334)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124334" x1="1.116" x2="1.116" y1="0.838282" y2="-0.0411427">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.823px] ml-[45.796px] mt-[61.386px] relative w-[2.217px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p333c5b80} fill="url(#paint0_linear_7_124332)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124332" x1="1.10571" x2="1.10571" y1="0.807426" y2="-0.0359999">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.787px] ml-[45.801px] mt-[61.391px] relative w-[2.206px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p17285900} fill="url(#paint0_linear_7_124402)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124402" x1="1.10057" x2="1.10057" y1="0.771428" y2="-0.036">
              <stop stopColor="#F1F6FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F1F6FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.751px] ml-[45.805px] mt-[61.391px] relative w-[2.191px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p30cae780} fill="url(#paint0_linear_7_124367)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124367" x1="1.09543" x2="1.09543" y1="-60.958" y2="-60.958">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.72px] ml-[45.817px] mt-[61.396px] relative w-[2.175px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p450e040} fill="url(#paint0_linear_7_124448)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124448" x1="1.08514" x2="1.08514" y1="0.709711" y2="-0.030857">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.684px] ml-[45.821px] mt-[61.401px] relative w-[2.16px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.pff98a00} fill="url(#paint0_linear_7_124232)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124232" x1="1.08" x2="1.08" y1="0.673713" y2="-0.0308571">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.653px] ml-[45.828px] mt-[61.401px] relative w-[2.15px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p2331320} fill="url(#paint0_linear_7_124328)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124328" x1="1.07486" x2="1.07486" y1="0.642857" y2="-0.0257143">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.617px] ml-[45.837px] mt-[61.406px] relative w-[2.134px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p208e1500} fill="url(#paint0_linear_7_124168)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124168" x1="1.06457" x2="1.06457" y1="0.606858" y2="-0.0308572">
              <stop stopColor="#F0F5FE" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.581px] ml-[45.841px] mt-[61.406px] relative w-[2.119px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p4137740} fill="url(#paint0_linear_7_124330)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124330" x1="1.05943" x2="1.05943" y1="-60.9738" y2="-60.9738">
              <stop stopColor="#F0F5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.55px] ml-[45.852px] mt-[61.411px] relative w-[2.103px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p3ffb0700} fill="url(#paint0_linear_7_124774)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124774" x1="1.04914" x2="1.04914" y1="0.539999" y2="-0.0257142">
              <stop stopColor="#F0F5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#F0F5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.514px] ml-[45.857px] mt-[61.411px] relative w-[2.088px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p1eb9cb00} fill="url(#paint0_linear_7_124326)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124326" x1="1.044" x2="1.044" y1="-60.979" y2="-60.979">
              <stop stopColor="#EFF5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.96" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.478px] ml-[45.868px] mt-[61.416px] relative w-[2.078px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p12053700} fill="url(#paint0_linear_7_124320)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124320" x1="1.03371" x2="1.03371" y1="0.473144" y2="-0.0205715">
              <stop stopColor="#EFF5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.96" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.447px] ml-[45.873px] mt-[61.416px] relative w-[2.062px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p35a4300} fill="url(#paint0_linear_7_124461)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124461" x1="1.02857" x2="1.02857" y1="0.442283" y2="-0.0154285">
              <stop stopColor="#EFF5FF" />
              <stop offset="0.73" stopColor="#EFF5FF" />
              <stop offset="0.96" stopColor="#EFF5FF" />
              <stop offset="1" stopColor="#EFF5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.406px] ml-[45.884px] mt-[61.422px] relative w-[2.042px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p5af6880} fill="var(--fill-0, #EFF5FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.247px] ml-[45.914px] mt-[61.417px] relative w-[2.022px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p2f5ab200} fill="var(--fill-0, white)" id="Vector" opacity="0.5" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[18.53px] ml-[6.973px] mt-[22.813px] relative w-[43.339px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 19">
          <path d={svgPaths.p3a7bf480} fill="var(--fill-0, #E9F0FB)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[16.524px] ml-[7.813px] mt-[24.512px] relative w-[41.662px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 17">
          <path d={svgPaths.p24331040} fill="url(#paint0_linear_7_124886)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124886" x1="-0.00514286" x2="41.652" y1="8.25943" y2="8.25943">
              <stop stopColor="#F5F8FD" />
              <stop offset="1" stopColor="#D9E6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.754px] mix-blend-overlay ml-[5.75px] mt-[41.817px] relative w-[45.771px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 2">
          <path d={svgPaths.p5041c0} fill="url(#paint0_linear_7_124314)" id="Vector" opacity="0.5" style={{ mixBlendMode: "overlay" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124314" x1="0" x2="45.7714" y1="0.87943" y2="0.87943">
              <stop stopColor="#F8FAFE" />
              <stop offset="0.22" stopColor="#FCFDFE" />
              <stop offset="0.24" stopColor="#FDFEFF" />
              <stop offset="0.27" stopColor="#FDFEFF" />
              <stop offset="0.49" stopColor="#FDFEFF" />
              <stop offset="0.75" stopColor="#FDFEFF" />
              <stop offset="1" stopColor="#F8FAFE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <MaskGroup3 />
      <div className="[grid-area:1_/_1] h-[42.439px] mix-blend-multiply ml-[41.621px] mt-[19.559px] relative w-[11.501px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 43">
          <path d={svgPaths.p1d91ff00} fill="url(#paint0_linear_7_124292)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124292" x1="10.584" x2="2.47371" y1="20.7411" y2="21.4817">
              <stop stopColor="#E3EDFF" />
              <stop offset="0.02" stopColor="#E4EEFF" />
              <stop offset="0.27" stopColor="#F3F7FF" />
              <stop offset="0.55" stopColor="#FCFDFF" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[42.423px] mix-blend-multiply ml-[4.154px] mt-[19.574px] relative w-[11.166px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 43">
          <path d={svgPaths.p3f640e00} fill="url(#paint0_linear_7_124287)" id="Vector" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124287" x1="0.59787" x2="8.86759" y1="20.484" y2="21.6">
              <stop stopColor="#E3EDFF" />
              <stop offset="0.02" stopColor="#E4EEFF" />
              <stop offset="0.27" stopColor="#F3F7FF" />
              <stop offset="0.55" stopColor="#FCFDFF" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.543px] ml-[17.065px] mt-[39.086px] relative w-[9.771px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="1.543" src={imgVector9} width="9.771" />
      </div>
      <div className="[grid-area:1_/_1] h-[0.652px] ml-[26.441px] mt-[40.03px] relative w-[0.556px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p2086ff80} fill="url(#paint0_radial_7_124285)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.280652 0.307499) rotate(63.34) scale(0.303429)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124285" r="1">
              <stop stopColor="#C6D8F4" />
              <stop offset="0.15" stopColor="#CADBF4" />
              <stop offset="0.32" stopColor="#D7E4F7" />
              <stop offset="0.5" stopColor="#EEF3FC" />
              <stop offset="0.51" stopColor="#EBF1FB" />
              <stop offset="0.56" stopColor="#DAE5F8" />
              <stop offset="0.63" stopColor="#CEDDF5" />
              <stop offset="0.73" stopColor="#C7D9F4" />
              <stop offset="1" stopColor="#C6D8F4" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.753px] ml-[20.825px] mt-[40.232px] relative w-[11.86px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1">
          <path d={svgPaths.p103c6c80} fill="url(#paint0_linear_7_124283)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124283" x1="5.97737" x2="5.96366" y1="0.263174" y2="0.566259">
              <stop stopColor="#C6D8F4" />
              <stop offset="0.15" stopColor="#CADBF4" />
              <stop offset="0.32" stopColor="#D7E4F7" />
              <stop offset="0.5" stopColor="#EEF3FC" />
              <stop offset="0.51" stopColor="#EBF1FB" />
              <stop offset="0.56" stopColor="#DAE5F8" />
              <stop offset="0.63" stopColor="#CEDDF5" />
              <stop offset="0.73" stopColor="#C7D9F4" />
              <stop offset="1" stopColor="#C6D8F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.133px] ml-[16.463px] mt-[39.789px] relative w-[2.764px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p12682700} fill="var(--fill-0, #C3D6F4)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.057px] ml-[28.893px] mt-[38.572px] relative w-[9.771px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="2.057" src={imgVector10} width="9.771" />
      </div>
      <div className="[grid-area:1_/_1] h-[0.644px] ml-[28.961px] mt-[39.101px] relative w-[0.573px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p264a7b80} fill="url(#paint0_radial_7_124439)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.16884 0.252114 -0.252114 -0.168839 0.241706 0.28054)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124439" r="1">
              <stop stopColor="#C6D8F4" />
              <stop offset="0.15" stopColor="#CADBF4" />
              <stop offset="0.32" stopColor="#D7E4F7" />
              <stop offset="0.5" stopColor="#EEF3FC" />
              <stop offset="0.51" stopColor="#EBF1FB" />
              <stop offset="0.56" stopColor="#DAE5F8" />
              <stop offset="0.63" stopColor="#CEDDF5" />
              <stop offset="0.73" stopColor="#C7D9F4" />
              <stop offset="1" stopColor="#C6D8F4" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.154px] ml-[23.256px] mt-[39.09px] relative w-[11.834px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
          <path d={svgPaths.pa3f5520} fill="url(#paint0_linear_7_124038)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124038" x1="5.97806" x2="5.95338" y1="0.513048" y2="0.820591">
              <stop stopColor="#C6D8F4" />
              <stop offset="0.15" stopColor="#CADBF4" />
              <stop offset="0.32" stopColor="#D7E4F7" />
              <stop offset="0.5" stopColor="#EEF3FC" />
              <stop offset="0.51" stopColor="#EBF1FB" />
              <stop offset="0.56" stopColor="#DAE5F8" />
              <stop offset="0.63" stopColor="#CEDDF5" />
              <stop offset="0.73" stopColor="#C7D9F4" />
              <stop offset="1" stopColor="#C6D8F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.078px] ml-[36.43px] mt-[39.932px] relative w-[2.748px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p14b17a80} fill="var(--fill-0, #C3D6F4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function GaleriaDeVeiculos3() {
  return (
    <div className="aspect-[84/84] bg-white content-stretch flex flex-col h-full items-center justify-center relative rounded-[8px] shrink-0" data-name="Galeria de veiculos">
      <div aria-hidden="true" className="absolute border border-[#9dbef3] border-dashed inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <Group833 />
    </div>
  );
}

function Group89() {
  return (
    <div className="[grid-area:1_/_1] h-[0.797px] mix-blend-multiply ml-[10.231%] mt-[79.645%] relative w-[6.408px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.pae25500} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group90() {
  return (
    <div className="[grid-area:1_/_1] h-[2.093px] mix-blend-soft-light ml-[14.82%] mt-[79.645%] relative w-[1.934px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
        <g id="Group" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p2ab9ec00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group91() {
  return (
    <div className="[grid-area:1_/_1] h-[0.797px] mix-blend-multiply ml-[76.505%] mt-[79.645%] relative w-[6.408px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
        <g id="Group" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p340dde00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="[grid-area:1_/_1] h-[2.093px] mix-blend-soft-light ml-[81.061%] mt-[79.645%] relative w-[1.934px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
        <g id="Group" style={{ mixBlendMode: "soft-light" }}>
          <path d={svgPaths.p29abd810} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group830() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[6.799px] ml-[13.527px] mt-[57.502px] relative w-[21.801px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 7">
          <path d={svgPaths.pd394980} fill="url(#paint0_linear_7_124653)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124653" x1="10.9029" x2="10.9029" y1="0.0565714" y2="6.732">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.04" stopColor="#C3D6F4" />
              <stop offset="0.1" stopColor="#BBD0F2" />
              <stop offset="0.91" stopColor="#B6CEF0" />
              <stop offset="0.99" stopColor="#BED2F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[50.436px] ml-[2.49px] mt-[2.237px] relative w-[43.879px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 51">
          <path d={svgPaths.p2cb2ab70} fill="url(#paint0_linear_7_124259)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124259" x1="21.9394" x2="21.9394" y1="-0.473143" y2="50.7753">
              <stop stopColor="#F5F8FF" />
              <stop offset="0.01" stopColor="#FCFCFF" />
              <stop offset="0.03" stopColor="#FEFEFF" />
              <stop offset="0.05" stopColor="#FCFDFF" />
              <stop offset="0.3" stopColor="#F5F8FF" />
              <stop offset="0.91" stopColor="#F4F7FF" />
              <stop offset="0.96" stopColor="#F2F5FF" />
              <stop offset="0.98" stopColor="#EBF2FF" />
              <stop offset="0.99" stopColor="#EBF2FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[3.945px] ml-[5.21px] mt-[54.725px] relative w-[38.438px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 4">
          <path d={svgPaths.p36ddf280} fill="var(--fill-0, #C2D5F3)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[12.466px] ml-[39.734px] mt-[62.949px] relative w-[6.665px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 13">
          <path d={svgPaths.p7f1e500} fill="url(#paint0_linear_7_124273)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124273" x1="3.33257" x2="3.33257" y1="-8.748" y2="12.2451">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.5" stopColor="#BCD1F2" />
              <stop offset="0.66" stopColor="#C2D5F3" />
              <stop offset="1" stopColor="#BBD0F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[14.333px] ml-[38.502px] mt-[54.823px] relative w-[9.139px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
          <path d={svgPaths.p31405e00} fill="url(#paint0_linear_7_124397)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124397" x1="4.56686" x2="4.56686" y1="-0.138857" y2="14.5131">
              <stop offset="0.03" stopColor="#C9DBF4" />
              <stop offset="0.04" stopColor="#C5D8F4" />
              <stop offset="0.1" stopColor="#C3D6F4" />
              <stop offset="0.44" stopColor="#D3E1F6" />
              <stop offset="0.72" stopColor="#DAE6F7" />
              <stop offset="0.9" stopColor="#DBE7F7" />
              <stop offset="0.97" stopColor="#E2EBF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[12.471px] ml-[3.065px] mt-[62.949px] relative w-[6.83px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 13">
          <path d={svgPaths.p180d9e40} fill="url(#paint0_linear_7_124271)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124271" x1="3.41486" x2="3.41486" y1="-63.0309" y2="-63.0309">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.5" stopColor="#BCD1F2" />
              <stop offset="0.66" stopColor="#C2D5F3" />
              <stop offset="1" stopColor="#BBD0F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[14.333px] ml-[1.677px] mt-[54.828px] relative w-[9.36px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
          <path d={svgPaths.pc0a6800} fill="url(#paint0_linear_7_124269)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124269" x1="4.68" x2="4.68" y1="-0.0308571" y2="14.3949">
              <stop offset="0.03" stopColor="#C9DBF4" />
              <stop offset="0.04" stopColor="#C5D8F4" />
              <stop offset="0.1" stopColor="#C3D6F4" />
              <stop offset="0.44" stopColor="#D3E1F6" />
              <stop offset="0.72" stopColor="#DAE6F7" />
              <stop offset="0.9" stopColor="#DBE7F7" />
              <stop offset="0.97" stopColor="#E2EBF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.705px] ml-[18.817px] mt-[57.101px] relative w-[11.649px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
          <path d={svgPaths.p3ae08e80} fill="var(--fill-0, #FDFEFF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.849px] ml-[18.745px] mt-[57.029px] relative w-[11.793px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
          <path d={svgPaths.pfb9b080} fill="var(--fill-0, #E0EAF8)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[52.493px] ml-[23.826px] mt-[1.028px] relative w-[1.198px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 53">
          <path d={svgPaths.p7c6b680} fill="url(#paint0_linear_7_124251)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124251" x1="0" x2="1.20343" y1="26.2493" y2="26.2493">
              <stop stopColor="#E6EEFF" />
              <stop offset="0.02" stopColor="#E3ECFF" />
              <stop offset="0.07" stopColor="#DEE9FF" />
              <stop offset="0.1" stopColor="#E2ECFF" />
              <stop offset="0.21" stopColor="#E9F0FF" />
              <stop offset="0.51" stopColor="#EBF2FF" />
              <stop offset="0.73" stopColor="#EDF3FF" />
              <stop offset="0.85" stopColor="#F5F8FF" />
              <stop offset="0.92" stopColor="#FEFEFF" />
              <stop offset="1" stopColor="#E4EDFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[55.029px] ml-0 mt-0 relative w-[48.857px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="55.029" src={imgVector11} width="48.857" />
      </div>
      <div className="[grid-area:1_/_1] h-[52.493px] ml-[22.263px] mt-[1.028px] relative w-[0.386px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 53">
          <path d={svgPaths.p211e3900} fill="url(#paint0_linear_7_124244)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124244" x1="0" x2="0.385714" y1="26.2493" y2="26.2493">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.895px] ml-[21.558px] mt-[49.135px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path d="M1.8 0H0V2.89543H1.8V0Z" fill="url(#paint0_linear_7_124501)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124501" x1="0" x2="1.8" y1="1.44514" y2="1.44514">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.895px] ml-[21.558px] mt-[2.834px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path d="M1.8 0H0V2.89543H1.8V0Z" fill="url(#paint0_linear_7_124359)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124359" x1="0" x2="1.8" y1="1.45029" y2="1.45029">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.447px] ml-[22.263px] mt-[53.522px] relative w-[0.859px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p116d2100} fill="url(#paint0_linear_7_124234)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124234" x1="-266.046" x2="0.858852" y1="0.226289" y2="0.226289">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.031px] ml-[16.035px] mt-[44.131px] relative w-[6.83px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3">
          <path d={svgPaths.p8ee8200} fill="url(#paint0_linear_7_124261)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124261" x1="0" x2="6.82971" y1="1.01314" y2="1.01314">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.83" stopColor="#DCE7F8" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[52.493px] ml-[26.312px] mt-[1.028px] relative w-[0.386px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 53">
          <path d={svgPaths.p211e3900} fill="url(#paint0_linear_7_124586)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124586" x1="0" x2="0.385714" y1="-1.11086" y2="-1.11086">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.895px] ml-[25.605px] mt-[49.135px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path d="M1.8 0H0V2.89543H1.8V0Z" fill="url(#paint0_linear_7_124501)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124501" x1="0" x2="1.8" y1="1.44514" y2="1.44514">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.895px] ml-[25.605px] mt-[2.834px] relative w-[1.8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path d="M1.8 0H0V2.89543H1.8V0Z" fill="url(#paint0_linear_7_124359)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124359" x1="0" x2="1.8" y1="1.45029" y2="1.45029">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.447px] ml-[25.843px] mt-[53.522px] relative w-[0.859px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p13f16680} fill="url(#paint0_linear_7_124757)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124757" x1="0" x2="0.853716" y1="0.226287" y2="0.226287">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.037px] ml-[26.038px] mt-[44.121px] relative w-[6.83px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3">
          <path d={svgPaths.p36fac700} fill="url(#paint0_linear_7_124839)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124839" x1="6.82971" x2="0" y1="-44.2031" y2="-44.2031">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.83" stopColor="#DCE7F8" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.651px] ml-[2.416px] mt-[9.268px] relative w-[5.266px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <path d={svgPaths.p2fde2b00} fill="url(#paint0_linear_7_124749)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124749" x1="0.00514286" x2="5.27143" y1="0.828" y2="0.828">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.11" stopColor="#DCE7F8" />
              <stop offset="0.3" stopColor="#E8F0FA" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.967px] ml-[2.762px] mt-[9.617px] relative w-[4.582px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.p15e08300} fill="url(#paint0_linear_7_124814)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124814" x1="0" x2="4.58228" y1="0.478286" y2="0.478286">
              <stop stopColor="#D3E1F6" />
              <stop offset="0.01" stopColor="#D3E1F6" />
              <stop offset="0.52" stopColor="#EBF2FF" />
              <stop offset="0.53" stopColor="#EBF2FF" />
              <stop offset="0.83" stopColor="#F2F6FF" />
              <stop offset="1" stopColor="#F2F6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.344px] mt-[8.743px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p629e600} fill="url(#paint0_radial_7_124277)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.226286 0.226286) scale(0.226287 0.226286)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124277" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.344px] mt-[10.918px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p629e600} fill="url(#paint0_radial_7_124322)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(-245.876 0.226286) scale(0.257144 0.257143)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124322" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.651px] ml-[2.416px] mt-[27.066px] relative w-[5.266px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <path d={svgPaths.p21b07700} fill="url(#paint0_linear_7_124475)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124475" x1="-246.204" x2="-245.689" y1="0.828" y2="0.828">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.11" stopColor="#DCE7F8" />
              <stop offset="0.3" stopColor="#E8F0FA" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.967px] ml-[2.762px] mt-[27.412px] relative w-[4.582px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.p2f9ce700} fill="url(#paint0_linear_7_124225)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124225" x1="-246.549" x2="-246.035" y1="0.48343" y2="0.48343">
              <stop stopColor="#D3E1F6" />
              <stop offset="0.01" stopColor="#D3E1F6" />
              <stop offset="0.52" stopColor="#EBF2FF" />
              <stop offset="0.53" stopColor="#EBF2FF" />
              <stop offset="0.83" stopColor="#F2F6FF" />
              <stop offset="1" stopColor="#F2F6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.344px] mt-[26.542px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p25ff00} fill="url(#paint0_radial_7_124357)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(-245.876 0.226287) scale(0.257144)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124357" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.344px] mt-[28.718px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p25ff00} fill="url(#paint0_radial_7_124737)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(-245.876 0.226287) scale(0.226287)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124737" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.651px] ml-[2.416px] mt-[44.866px] relative w-[5.266px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <path d={svgPaths.p21b07700} fill="url(#paint0_linear_7_124475)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124475" x1="-246.204" x2="-245.689" y1="0.828" y2="0.828">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.11" stopColor="#DCE7F8" />
              <stop offset="0.3" stopColor="#E8F0FA" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.967px] ml-[2.762px] mt-[45.211px] relative w-[4.582px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.p30514680} fill="url(#paint0_linear_7_124220)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124220" x1="-246.549" x2="-246.035" y1="0.483427" y2="0.483427">
              <stop stopColor="#D3E1F6" />
              <stop offset="0.01" stopColor="#D3E1F6" />
              <stop offset="0.52" stopColor="#EBF2FF" />
              <stop offset="0.53" stopColor="#EBF2FF" />
              <stop offset="0.83" stopColor="#F2F6FF" />
              <stop offset="1" stopColor="#F2F6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.344px] mt-[44.342px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.pc337dc0} fill="url(#paint0_radial_7_124810)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(-245.876 0.226284) scale(0.226287 0.226286)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124810" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[2.344px] mt-[46.517px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p25ff00} fill="url(#paint0_radial_7_124134)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(-245.876 0.226287) scale(0.257144)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124134" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.908px] ml-[2.314px] mt-[9.145px] relative w-[0.514px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path d={svgPaths.p117f0680} fill="url(#paint0_linear_7_124185)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124185" x1="0" x2="0.514286" y1="0.951429" y2="0.951429">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.903px] ml-[2.314px] mt-[26.943px] relative w-[0.514px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path d={svgPaths.p4106700} fill="url(#paint0_linear_7_124205)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124205" x1="0" x2="0.514286" y1="0.951429" y2="0.951429">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.903px] ml-[2.314px] mt-[44.738px] relative w-[0.514px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path d={svgPaths.p4106700} fill="url(#paint0_linear_7_124201)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124201" x1="0" x2="0.514286" y1="0.956572" y2="0.956572">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.651px] ml-[41.132px] mt-[9.268px] relative w-[5.266px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <path d={svgPaths.p3e07ab00} fill="url(#paint0_linear_7_124196)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124196" x1="5.26629" x2="0" y1="-9.34972" y2="-9.34972">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.11" stopColor="#DCE7F8" />
              <stop offset="0.3" stopColor="#E8F0FA" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.967px] ml-[41.473px] mt-[9.617px] relative w-[4.582px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.pfe842c0} fill="url(#paint0_linear_7_124698)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124698" x1="4.58743" x2="0.00514296" y1="-9.69943" y2="-9.69943">
              <stop stopColor="#D3E1F6" />
              <stop offset="0.01" stopColor="#D3E1F6" />
              <stop offset="0.52" stopColor="#EBF2FF" />
              <stop offset="0.53" stopColor="#EBF2FF" />
              <stop offset="0.83" stopColor="#F2F6FF" />
              <stop offset="1" stopColor="#F2F6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[46.024px] mt-[8.743px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p2e1053c0} fill="url(#paint0_radial_7_124189)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.226284 -8.568) rotate(180) scale(0.257143)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124189" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[46.024px] mt-[10.918px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p2e1053c0} fill="url(#paint0_radial_7_124806)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.226284 0.226286) rotate(180) scale(0.257143)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124806" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.651px] ml-[41.132px] mt-[27.066px] relative w-[5.266px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <path d={svgPaths.pb389b00} fill="url(#paint0_linear_7_124512)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124512" x1="5.26629" x2="0" y1="0.828" y2="0.828">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.11" stopColor="#DCE7F8" />
              <stop offset="0.3" stopColor="#E8F0FA" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.967px] ml-[41.473px] mt-[27.412px] relative w-[4.582px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.p332eb980} fill="url(#paint0_linear_7_124187)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124187" x1="4.58743" x2="0.00514296" y1="0.48343" y2="0.48343">
              <stop stopColor="#D3E1F6" />
              <stop offset="0.01" stopColor="#D3E1F6" />
              <stop offset="0.52" stopColor="#EBF2FF" />
              <stop offset="0.53" stopColor="#EBF2FF" />
              <stop offset="0.83" stopColor="#F2F6FF" />
              <stop offset="1" stopColor="#F2F6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[46.024px] mt-[26.542px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p21cd9300} fill="url(#paint0_radial_7_124390)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.226284 0.226287) rotate(180) scale(0.257143 0.257145)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124390" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[46.024px] mt-[28.718px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p21cd9300} fill="url(#paint0_radial_7_124820)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.226284 0.226287) rotate(180) scale(0.226286 0.226287)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124820" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.651px] ml-[41.132px] mt-[44.866px] relative w-[5.266px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <path d={svgPaths.pb389b00} fill="url(#paint0_linear_7_124512)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124512" x1="5.26629" x2="0" y1="0.828" y2="0.828">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.11" stopColor="#DCE7F8" />
              <stop offset="0.3" stopColor="#E8F0FA" />
              <stop offset="0.95" stopColor="#F1F6FF" />
              <stop offset="0.97" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.967px] ml-[41.473px] mt-[45.211px] relative w-[4.582px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.p1b3b4e00} fill="url(#paint0_linear_7_124183)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124183" x1="4.58743" x2="0.00514296" y1="0.483427" y2="0.483427">
              <stop stopColor="#D3E1F6" />
              <stop offset="0.01" stopColor="#D3E1F6" />
              <stop offset="0.52" stopColor="#EBF2FF" />
              <stop offset="0.53" stopColor="#EBF2FF" />
              <stop offset="0.83" stopColor="#F2F6FF" />
              <stop offset="1" stopColor="#F2F6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[46.024px] mt-[44.342px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p9784f80} fill="url(#paint0_radial_7_124324)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.226284 0.226284) rotate(180) scale(0.226286)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124324" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[46.024px] mt-[46.517px] relative size-[0.453px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <path d={svgPaths.p21cd9300} fill="url(#paint0_radial_7_124215)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.226284 0.226287) rotate(180) scale(0.257143)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_124215" r="1">
              <stop stopColor="#F1F6FF" />
              <stop offset="0.7" stopColor="#E8F0FA" />
              <stop offset="0.89" stopColor="#DCE7F8" />
              <stop offset="1" stopColor="#E6EEFA" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.908px] ml-[45.988px] mt-[9.139px] relative w-[0.514px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path d="M0 1.908H0.514286V0H0V1.908Z" fill="url(#paint0_linear_7_124888)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124888" x1="0.514286" x2="0" y1="0.956572" y2="0.956572">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.903px] ml-[45.988px] mt-[26.943px] relative w-[0.514px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path d={svgPaths.p225bcc00} fill="url(#paint0_linear_7_124181)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124181" x1="0.514286" x2="0" y1="0.951429" y2="0.951429">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.903px] ml-[45.988px] mt-[44.743px] relative w-[0.514px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path d={svgPaths.p1065cf00} fill="url(#paint0_linear_7_124544)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124544" x1="0.514286" x2="0" y1="0.951426" y2="0.951426">
              <stop stopColor="#E6EEFA" />
              <stop offset="0.08" stopColor="#F0F5FC" />
              <stop offset="0.21" stopColor="#FEFFFF" />
              <stop offset="0.34" stopColor="#FEFFFF" />
              <stop offset="0.35" stopColor="#FEFFFF" />
              <stop offset="0.45" stopColor="#F4F8FC" />
              <stop offset="0.53" stopColor="#E8F0FA" />
              <stop offset="0.77" stopColor="#DCE7F8" />
              <stop offset="0.84" stopColor="#EBF1FD" />
              <stop offset="0.9" stopColor="#F1F6FF" />
              <stop offset="0.95" stopColor="#E5EDFB" />
              <stop offset="1" stopColor="#D3E1F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.71px] ml-[4.521px] mt-[59.832px] relative w-[7.421px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
          <path d={svgPaths.p2f302080} fill="url(#paint0_linear_7_124174)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124174" x1="3.708" x2="3.708" y1="0.0257143" y2="2.68457">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.04" stopColor="#C3D6F4" />
              <stop offset="0.1" stopColor="#BBD0F2" />
              <stop offset="0.9" stopColor="#B6CEF0" />
              <stop offset="0.95" stopColor="#BED2F3" />
              <stop offset="1" stopColor="#B6CEF0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.093px] ml-[5.003px] mt-[60.068px] relative w-[6.408px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3">
          <path d={svgPaths.p1c566100} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.093px] ml-[5.003px] mt-[60.068px] relative w-[6.408px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3">
          <path d={svgPaths.p1c566100} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.44px] ml-[5.413px] mt-[60.567px] relative w-[1.584px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p3f880e00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.44px] ml-[7.437px] mt-[60.567px] relative w-[1.584px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p3f880e00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.44px] ml-[9.462px] mt-[60.567px] relative w-[1.584px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p3f880e00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.977px] mix-blend-soft-light ml-[5.257px] mt-[61.185px] relative w-[6.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d={svgPaths.p742fe00} fill="url(#paint0_linear_7_124170)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124170" x1="2.99829" x2="2.99829" y1="0" y2="0.97714">
              <stop stopColor="#C2D5F3" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.401px] ml-[5.256px] mt-[61.761px] relative w-[6.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d={svgPaths.p61aea00} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
        </svg>
      </div>
      <Group89 />
      <Group90 />
      <div className="[grid-area:1_/_1] h-[2.602px] ml-[6.999px] mt-[57.235px] relative w-[5.57px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
          <path d={svgPaths.p2255e580} fill="url(#paint0_linear_7_124804)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124804" x1="2.78228" x2="2.78228" y1="0.0205714" y2="2.57143">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.04" stopColor="#C3D6F4" />
              <stop offset="0.07" stopColor="#BED2F3" />
              <stop offset="1" stopColor="#C2D5F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.71px] ml-[36.837px] mt-[59.838px] relative w-[7.421px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
          <path d={svgPaths.p1166ee80} fill="url(#paint0_linear_7_124163)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124163" x1="3.71314" x2="3.71314" y1="0.0205714" y2="2.67943">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.04" stopColor="#C3D6F4" />
              <stop offset="0.1" stopColor="#BBD0F2" />
              <stop offset="0.9" stopColor="#B6CEF0" />
              <stop offset="0.95" stopColor="#BED2F3" />
              <stop offset="1" stopColor="#B6CEF0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.093px] ml-[37.367px] mt-[60.068px] relative w-[6.408px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3">
          <path d={svgPaths.p1c566100} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.093px] ml-[37.367px] mt-[60.068px] relative w-[6.408px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3">
          <path d={svgPaths.p1c566100} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.44px] ml-[41.786px] mt-[60.567px] relative w-[1.584px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p3f880e00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.44px] ml-[39.758px] mt-[60.567px] relative w-[1.584px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p3f880e00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[1.44px] ml-[37.731px] mt-[60.567px] relative w-[1.584px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p21bbba00} fill="var(--fill-0, #DEE9FF)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.977px] mix-blend-soft-light ml-[37.521px] mt-[61.185px] relative w-[6.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d={svgPaths.p1903c180} fill="url(#paint0_linear_7_124703)" id="Vector" style={{ mixBlendMode: "soft-light" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124703" x1="3.00343" x2="3.00343" y1="3010.39" y2="3010.91">
              <stop stopColor="#C2D5F3" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[0.401px] ml-[37.521px] mt-[61.761px] relative w-[6.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d={svgPaths.p61aea00} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
        </svg>
      </div>
      <Group91 />
      <Group92 />
      <div className="[grid-area:1_/_1] h-[2.602px] ml-[36.212px] mt-[57.235px] relative w-[5.57px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
          <path d={svgPaths.pe38e100} fill="url(#paint0_linear_7_124242)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124242" x1="2.78743" x2="2.78743" y1="0.0205714" y2="2.57143">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.04" stopColor="#C3D6F4" />
              <stop offset="0.07" stopColor="#BED2F3" />
              <stop offset="1" stopColor="#C2D5F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.623px] ml-[0.432px] mt-[54.725px] relative w-[47.988px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 3">
          <path d={svgPaths.p179a5a00} fill="url(#paint0_linear_7_124762)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_124762" x1="23.9966" x2="23.9966" y1="0.0565715" y2="2.45315">
              <stop stopColor="#BBD0F2" />
              <stop offset="0.04" stopColor="#C3D6F2" />
              <stop offset="0.1" stopColor="#C2D5F3" />
              <stop offset="0.91" stopColor="#C5D8F3" />
              <stop offset="0.95" stopColor="#E4EDFF" />
              <stop offset="0.99" stopColor="#BED2F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GaleriaDeVeiculos4() {
  return (
    <div className="aspect-[84/84] bg-white content-stretch flex flex-col h-full items-center justify-center relative rounded-[8px] shrink-0" data-name="Galeria de veiculos">
      <div aria-hidden="true" className="absolute border border-[#9dbef3] border-dashed inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <Group830 />
    </div>
  );
}

function Frame10610() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <GaleriaDeVeiculos2 />
      <GaleriaDeVeiculos3 />
      <GaleriaDeVeiculos4 />
    </div>
  );
}

function Imagens() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="Imagens">
      <Frame10868 />
      <Frame10610 />
    </div>
  );
}

function Frame10869() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Custos</p>
    </div>
  );
}

function Frame10845() {
  return (
    <div className="content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px] w-[128px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Abastecimento</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Pneus</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Manutenção</p>
      </div>
    </div>
  );
}

function Frame10848() {
  return (
    <div className="content-stretch flex flex-col font-['Prompt:Light',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">R$ 4.691,00</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">R$ 1.031,08</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">R$ 3.657,00</p>
      </div>
    </div>
  );
}

function Rows4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="rows">
      <Frame10845 />
      <Frame10848 />
    </div>
  );
}

function Frame10849() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">Total</p>
      </div>
    </div>
  );
}

function Frame10850() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[18px] text-nowrap tracking-[0.36px]">
        <p className="leading-[28px] whitespace-pre">R$ 9.379,08</p>
      </div>
    </div>
  );
}

function Rows5() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0" data-name="rows">
      <Frame10849 />
      <Frame10850 />
    </div>
  );
}

function Infos1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Infos">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[24px] items-start p-[16px] relative w-full">
          <Rows4 />
          <div className="bg-[#dee7fb] h-[76px] shrink-0 w-px" />
          <Rows5 />
        </div>
      </div>
    </div>
  );
}

function Imagens1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[426px]" data-name="Imagens">
      <Frame10869 />
      <Infos1 />
    </div>
  );
}

function Frame427318296() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full z-[6]">
      <Imagens />
      <Imagens1 />
    </div>
  );
}

function TransferChange() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="transfer-change">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="transfer-change">
          <path d={svgPaths.p330fd980} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Movimentar pneus</p>
      <TransferChange />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent2 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Diagrama do veículo</p>
      <Button2 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f1f5fd] box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[1.2px] uppercase">
        <p className="leading-[18px] whitespace-pre">frente</p>
      </div>
    </div>
  );
}

function EixoCentral() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-start left-0 px-[60px] py-0 right-0 top-1/2 translate-y-[-50%]" data-name="Eixo central">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="absolute bottom-[-5px] left-0 right-0 top-[-5px]" style={{ "--stroke-0": "rgba(157, 190, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 10">
            <path d="M0 5H360" id="Vector 22" stroke="var(--stroke-0, #9DBEF3)" strokeWidth="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PartesDoChassis() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="_Partes do chassis">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="flex-none h-full rotate-[180deg]">
          <div className="h-full relative w-0">
            <div className="absolute bottom-0 left-[-5px] right-[-5px] top-0" style={{ "--stroke-0": "rgba(157, 190, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 264">
                <path d="M5 0V264" id="Vector 21" stroke="var(--stroke-0, #9DBEF3)" strokeWidth="10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AxleBar() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-0 py-[46px] relative size-full" data-name="Axle bar">
      <PartesDoChassis />
    </div>
  );
}

function Lifetime() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Lifetime">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-center text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">1ª Vida</p>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="box-border content-stretch flex items-start justify-end mb-[-4px] relative shrink-0 w-full" data-name="Header">
      <Lifetime />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[32px] items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Content">
      <Header7 />
      <div className="basis-0 flex flex-col font-['Prompt:Medium',_sans-serif] grow justify-center leading-[0] mb-[-4px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">01234567890</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0 w-[104px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3f424d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Content8 />
    </div>
  );
}

function TiposDePneu() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] w-[104px]" data-name="_Tipos de pneu">
      <Container4 />
    </div>
  );
}

function OrientacaoDoPneu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-[104px]" data-name="_Orientação do pneu">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961947202682495)))] items-center justify-center left-[-1.54px] top-[-4.46px] w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961947202682495)))]" style={{ "--transform-inner-width": "104", "--transform-inner-height": "40" } as React.CSSProperties}>
        <div className="flex-none rotate-[5deg]">
          <TiposDePneu />
        </div>
      </div>
    </div>
  );
}

function PartesDoChassis1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="_Partes do chassis">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="flex-none h-full rotate-[180deg]">
          <div className="h-full relative w-0">
            <div className="absolute bottom-0 left-[-5px] right-[-5px] top-0" style={{ "--stroke-0": "rgba(157, 190, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 136">
                <path d="M5 0V136" id="Vector 21" stroke="var(--stroke-0, #9DBEF3)" strokeWidth="10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lifetime1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Lifetime">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-center text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">1ª Vida</p>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="box-border content-stretch flex items-start justify-end mb-[-4px] relative shrink-0 w-full" data-name="Header">
      <Lifetime1 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[32px] items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Content">
      <Header8 />
      <div className="basis-0 flex flex-col font-['Prompt:Medium',_sans-serif] grow justify-center leading-[0] mb-[-4px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">01234567890</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0 w-[104px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3f424d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Content9 />
    </div>
  );
}

function TiposDePneu1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] w-[104px]" data-name="_Tipos de pneu">
      <Container5 />
    </div>
  );
}

function OrientacaoDoPneu1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-[104px]" data-name="_Orientação do pneu">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961947202682495)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961947202682495)))]" style={{ "--transform-inner-width": "104", "--transform-inner-height": "40" } as React.CSSProperties}>
        <div className="flex-none rotate-[5deg]">
          <TiposDePneu1 />
        </div>
      </div>
    </div>
  );
}

function Order1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="order">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="order">
          <path d={svgPaths.p3368af00} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#f1f5fd] box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Order1 />
    </div>
  );
}

function TagETooltip8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[24px] items-center justify-end relative shrink-0" data-name="Tag e tooltip - 8">
      <Badge3 />
    </div>
  );
}

function TiposDeTag() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_Tipos de tag">
      <TagETooltip8 />
    </div>
  );
}

function BaseTipoDeEixo() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px px-0 py-[46px] relative shrink-0" data-name="_Base tipo de eixo">
      <div className="absolute bottom-0 flex items-center justify-center left-1/2 top-0 translate-x-[-50%] w-[10px]">
        <div className="flex-none h-[356px] rotate-[180deg] w-[10px]">
          <AxleBar />
        </div>
      </div>
      <OrientacaoDoPneu />
      <PartesDoChassis1 />
      <OrientacaoDoPneu1 />
      <div className="absolute bottom-[11px] flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] left-1/2 not-italic text-[16px] text-black text-center text-nowrap tracking-[0.32px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[22px] whitespace-pre">Eixo 1</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-1/2 top-0 translate-x-[-50%]">
        <TiposDeTag />
      </div>
    </div>
  );
}

function BaseDoEixo() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-center justify-center px-[8px] py-0 relative shrink-0" data-name="_Base do eixo">
      <BaseTipoDeEixo />
    </div>
  );
}

function PartesDoChassis2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[120px]" data-name="_Partes do chassis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 72">
        <g clipPath="url(#clip0_7_124289)" id="_Partes do chassis">
          <path d="M1.57361e-06 36L120 36" id="Connector" stroke="var(--stroke-0, #9DBEF3)" strokeLinejoin="round" strokeWidth="16" />
        </g>
        <defs>
          <clipPath id="clip0_7_124289">
            <rect fill="white" height="72" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BaseDoEixo1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="_Base do eixo">
      <PartesDoChassis2 />
    </div>
  );
}

function PartesDoChassis3() {
  return (
    <div className="h-[72px] relative shrink-0 w-[120px]" data-name="_Partes do chassis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 72">
        <g clipPath="url(#clip0_7_124289)" id="_Partes do chassis">
          <path d="M1.57361e-06 36L120 36" id="Connector" stroke="var(--stroke-0, #9DBEF3)" strokeLinejoin="round" strokeWidth="16" />
        </g>
        <defs>
          <clipPath id="clip0_7_124289">
            <rect fill="white" height="72" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BaseDoEixo2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="_Base do eixo">
      <PartesDoChassis3 />
    </div>
  );
}

function PartesDoChassis4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="_Partes do chassis">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="flex-none h-full rotate-[180deg]">
          <div className="h-full relative w-0">
            <div className="absolute bottom-0 left-[-5px] right-[-5px] top-0" style={{ "--stroke-0": "rgba(157, 190, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 264">
                <path d="M5 0V264" id="Vector 21" stroke="var(--stroke-0, #9DBEF3)" strokeWidth="10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AxleBar1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-0 py-[46px] relative size-full" data-name="Axle bar">
      <PartesDoChassis4 />
    </div>
  );
}

function Lifetime3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Lifetime">
      <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-center text-nowrap tracking-[1px] uppercase">
        <p className="leading-[16px] whitespace-pre">1ª Vida</p>
      </div>
    </div>
  );
}

function Header10() {
  return (
    <div className="box-border content-stretch flex items-start justify-end mb-[-4px] relative shrink-0 w-full" data-name="Header">
      <Lifetime3 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[32px] items-start justify-center min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Content">
      <Header10 />
      <div className="basis-0 flex flex-col font-['Prompt:Medium',_sans-serif] grow justify-center leading-[0] mb-[-4px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">01234567890</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0 w-[104px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#3f424d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Content11 />
    </div>
  );
}

function TiposDePneu3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 rounded-[4px] top-0 w-[104px]" data-name="_Tipos de pneu">
      <Container7 />
    </div>
  );
}

function OrientacaoDoPneu3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-[104px]" data-name="_Orientação do pneu">
      <TiposDePneu3 />
    </div>
  );
}

function Frame2554() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <OrientacaoDoPneu3 key={i} />
      ))}
    </div>
  );
}

function PartesDoChassis5() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="_Partes do chassis">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="flex-none h-full rotate-[180deg]">
          <div className="h-full relative w-0">
            <div className="absolute bottom-0 left-[-5px] right-[-5px] top-0" style={{ "--stroke-0": "rgba(157, 190, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 72">
                <path d="M5 0V72" id="Vector 21" stroke="var(--stroke-0, #9DBEF3)" strokeWidth="10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[56px] items-center justify-center left-[calc(50%-3.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[65px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[56px] relative w-[65px]" data-name="Transmission">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 56">
              <path d={svgPaths.p1e82e680} fill="var(--fill-0, #9DBEF3)" id="Transmission" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tire1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tire">
      <div className="absolute inset-[-1.389%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="tire">
            <path d={svgPaths.p251c6700} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#f1f5fd] box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#3d5fd9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Tire1 />
    </div>
  );
}

function TagETooltip4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[24px] items-center justify-end relative shrink-0" data-name="Tag e tooltip - 4">
      <Badge4 />
    </div>
  );
}

function TiposDeTag1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-0 translate-x-[-50%]" data-name="_Tipos de tag">
      <TagETooltip4 />
    </div>
  );
}

function BaseTipoDeEixo1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-0 py-[46px] relative shrink-0" data-name="_Base tipo de eixo">
      <div className="absolute bottom-0 flex items-center justify-center left-1/2 top-0 translate-x-[-50%] w-[10px]">
        <div className="flex-none h-[356px] rotate-[180deg] w-[10px]">
          <AxleBar1 />
        </div>
      </div>
      <Frame2554 />
      <PartesDoChassis5 />
      <Frame2554 />
      <TiposDeTag1 />
      <div className="absolute bottom-[11px] flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap tracking-[0.32px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[22px] whitespace-pre">Eixo 2</p>
      </div>
    </div>
  );
}

function BaseDoEixo3() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative shrink-0" data-name="_Base do eixo">
      <BaseTipoDeEixo1 />
    </div>
  );
}

function Partes() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Partes">
      <EixoCentral />
      <div className="flex flex-row items-center self-stretch">
        <BaseDoEixo />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <BaseDoEixo1 />
      </div>
      <BaseDoEixo2 />
      <BaseDoEixo3 />
    </div>
  );
}

function Toco() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Toco">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "71.203125", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Badge2 />
        </div>
      </div>
      <Partes />
    </div>
  );
}

function TiposDeDiagramas() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Tipos de diagramas">
      <Toco />
    </div>
  );
}

function DiagramSlot() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Diagram slot">
      <TiposDeDiagramas />
    </div>
  );
}

function TireSlosts() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Tire slosts">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">Nenhum estepe aplicado.</p>
      </div>
    </div>
  );
}

function ContainerEstepes() {
  return (
    <div className="bg-[#fafcff] h-[80px] relative rounded-[8px] shrink-0 w-full" data-name="↪ Container estepes">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[80px] items-start justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Prompt:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f424d] text-[10px] text-center text-nowrap tracking-[1px] uppercase">
            <p className="leading-[16px] whitespace-pre">estepes do veículo</p>
          </div>
          <TireSlosts />
        </div>
      </div>
    </div>
  );
}

function DiagramContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full z-[1]" data-name="Diagram container">
      <DiagramSlot />
      <ContainerEstepes />
    </div>
  );
}

function DiagramCanvaWeb() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Diagram Canva Web">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] isolate items-center p-[16px] relative w-full">
          <DiagramContainer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DadosDoPneu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full z-[4]" data-name="Dados do pneu">
      <Title4 />
      <DiagramCanvaWeb />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[1278px]" data-name="title">
      <p className="basis-0 font-['Prompt:Regular',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#3f424d] text-[16px] tracking-[0.32px]">Pneus aplicados no veículo</p>
    </div>
  );
}

function TableCellsHeader() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Nº de fogo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">102305</p>
      </div>
    </div>
  );
}

function TableItensText() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text />
    </div>
  );
}

function TableCellsBody() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText />
        </div>
      </div>
    </div>
  );
}

function TableColumns() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader1() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">DOT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">3124</p>
      </div>
    </div>
  );
}

function TableItensText6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text6 />
    </div>
  );
}

function TableCellsBody6() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText6 />
        </div>
      </div>
    </div>
  );
}

function TableColumns1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader1 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody6 key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader2() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Vida atual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">2ª vida</p>
      </div>
    </div>
  );
}

function TableItensText12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text12 />
    </div>
  );
}

function TableCellsBody12() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText12 />
        </div>
      </div>
    </div>
  );
}

function TableColumns2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader2 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody12 key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader3() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Máximo de recapagens</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">10 recapagens</p>
      </div>
    </div>
  );
}

function TableItensText18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text18 />
    </div>
  );
}

function TableCellsBody18() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText18 />
        </div>
      </div>
    </div>
  );
}

function TableColumns3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader3 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody18 key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader4() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Menor sulco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">15mm</p>
      </div>
    </div>
  );
}

function TableItensText24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text24 />
    </div>
  );
}

function TableCellsBody24() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText24 />
        </div>
      </div>
    </div>
  );
}

function TableColumns4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader4 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody24 key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader5() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Pressão atual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">120psi</p>
      </div>
    </div>
  );
}

function TableItensText30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text30 />
    </div>
  );
}

function TableCellsBody30() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText30 />
        </div>
      </div>
    </div>
  );
}

function TableColumns5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader5 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody30 key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader6() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">Pressão recomendada</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">130psi</p>
      </div>
    </div>
  );
}

function TableItensText36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text36 />
    </div>
  );
}

function TableCellsBody36() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText36 />
        </div>
      </div>
    </div>
  );
}

function TableColumns6() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader6 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody36 key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader7() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[178px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-inherit px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="leading-[20px] whitespace-pre">KM rodado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">231.013km</p>
      </div>
    </div>
  );
}

function TableItensText42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text42 />
    </div>
  );
}

function TableCellsBody42() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText42 />
        </div>
      </div>
    </div>
  );
}

function TableColumns7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader7 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody42 key={i} />
      ))}
    </div>
  );
}

function TableCellsHeader8() {
  return (
    <div className="bg-[#f1f5fd] box-border content-stretch flex gap-[4px] h-[32px] items-center min-w-[178px] px-[54px] py-0 relative shrink-0 w-[178px]" data-name="Table / Cells / Header">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f7588] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[20px] whitespace-pre">CPK</p>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Prompt:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25262c] text-[12px] text-nowrap text-right tracking-[0.24px]">
        <p className="leading-[18px] whitespace-pre">R$ 13,59</p>
      </div>
    </div>
  );
}

function TableItensText48() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Table / Itens / Text">
      <Text48 />
    </div>
  );
}

function TableCellsBody48() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center justify-end min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensText48 />
        </div>
      </div>
    </div>
  );
}

function TableColumns8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[52px] overflow-clip relative shrink-0" data-name="Table / Columns">
      <TableCellsHeader8 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody48 key={i} />
      ))}
    </div>
  );
}

function FilterSlider() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="filter-slider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter-slider">
          <path d={svgPaths.p3c10fc60} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TableCellsHeader9() {
  return (
    <div className="bg-[#f1f5fd] h-[32px] min-w-[32px] relative shrink-0 w-full" data-name="Table / Cells / Header">
      <div className="flex flex-row items-center justify-end min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-end min-w-inherit px-[16px] py-0 relative w-full">
          <FilterSlider />
        </div>
      </div>
    </div>
  );
}

function EllipsisVertical() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ellipsis-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ellipsis-vertical">
          <g id="Vector">
            <path d={svgPaths.p3af0dbf2} fill="var(--fill-0, #3D5FD9)" />
            <path d={svgPaths.p124be700} fill="var(--fill-0, #3D5FD9)" />
            <path d={svgPaths.p29ada180} fill="var(--fill-0, #3D5FD9)" />
            <path d={svgPaths.p3af0dbf2} stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p124be700} stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p29ada180} stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <EllipsisVertical />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent3 />
    </div>
  );
}

function TableItensButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Table / Itens / Button">
      <Button3 />
    </div>
  );
}

function TableCellsBody54() {
  return (
    <div className="bg-white h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Table / Cells / Body">
      <div aria-hidden="true" className="absolute border-[#e9ecec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end min-h-inherit size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center justify-end min-h-inherit px-[16px] py-[2px] relative w-full">
          <TableItensButton />
        </div>
      </div>
    </div>
  );
}

function TableColumns9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start min-w-[52px] overflow-clip relative shadow-[-8px_0px_16px_0px_rgba(197,215,248,0.3)] shrink-0" data-name="Table / Columns">
      <TableCellsHeader9 />
      {[...Array(6).keys()].map((_, i) => (
        <TableCellsBody54 key={i} />
      ))}
    </div>
  );
}

function PneusAplicadosNoVeiculo() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Pneus aplicados no veículo">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableColumns />
        <TableColumns1 />
        <TableColumns2 />
        <TableColumns3 />
        <TableColumns4 />
        <TableColumns5 />
        <TableColumns6 />
        <TableColumns7 />
        <TableColumns8 />
        <TableColumns9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2098() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full z-[3]">
      <Title5 />
      <PneusAplicadosNoVeiculo />
    </div>
  );
}

function ChevronDown() {
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

function ButtonContent9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3d5fd9] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Mais recentes</p>
      <ChevronDown />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent9 />
    </div>
  );
}

function DropdownButton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="Dropdown Button">
      <Button9 />
    </div>
  );
}

function Order2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Order">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Ordenar por:</p>
      <DropdownButton />
    </div>
  );
}

function Frame10576() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Prompt:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3f424d] text-[22px] text-center text-nowrap tracking-[0.44px] whitespace-pre">
        <span>{`Históricos da placa: `}</span>ABC123
      </p>
      <Order2 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.p2d49ba80} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-white h-[40px] min-w-[64px] relative rounded-[100px] shrink-0" data-name="inputField">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-inherit overflow-clip px-[17px] py-[13px] relative rounded-[inherit]">
        <Search />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 z-[3]" data-name="InputField">
      <InputField />
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

function ButtonContent10() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">13/07/2024 — 13/09/2024</p>
      <ChevronDown1 />
    </div>
  );
}

function PillButton() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[100px] shrink-0" data-name="PillButton">
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ButtonContent10 />
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

function ButtonContent11() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-0 relative rounded-[100px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Tipo de edição</p>
      <ChevronDown2 />
    </div>
  );
}

function PillButton1() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[100px] shrink-0" data-name="PillButton">
      <div aria-hidden="true" className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ButtonContent11 />
    </div>
  );
}

function FilterRow() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px overflow-x-auto overflow-y-clip relative rounded-[100px] shrink-0 z-[2]" data-name="FilterRow">
      <PillButton />
      <PillButton1 />
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-center relative shrink-0 w-full" data-name="FilterBar">
      <InputField1 />
      <FilterRow />
    </div>
  );
}

function EditLine1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-line">
          <path d={svgPaths.p2c699300} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconBox() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="icon box">
      <EditLine1 />
    </div>
  );
}

function ProcessIndicator() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="process indicator">
      <div className="absolute bottom-[-18.41%] left-0 right-0 top-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 49">
          <g id="process indicator">
            <path d={svgPaths.p12cb0180} fill="var(--stroke-0, #DEE7FB)" id="arrow line" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeftIndicator() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="left indicator">
      <IconBox />
      <ProcessIndicator />
    </div>
  );
}

function Frame10834() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Edição do veículo via Prolog Web</p>
    </div>
  );
}

function Frame10826() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29/09/2024 - 16:21</p>
    </div>
  );
}

function TittleAndMainData() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="tittle and main data">
      <Frame10834 />
      <Frame10826 />
    </div>
  );
}

function CollapseButton() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="collapse button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="collapse button">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RightItems() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="right items">
      <CollapseButton />
    </div>
  );
}

function Header19() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="header">
      <TittleAndMainData />
      <RightItems />
    </div>
  );
}

function ItemHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">Placa</p>
    </div>
  );
}

function ItemData() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">PRO1A22 → PRO3B44</p>
    </div>
  );
}

function DynamicItem() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader />
      <ItemData />
    </div>
  );
}

function ItemHeader1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">Responsável</p>
    </div>
  );
}

function ItemData1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Glauber Franco</p>
    </div>
  );
}

function DynamicItem1() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader1 />
      <ItemData1 />
    </div>
  );
}

function ItemsGrid() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[52px] relative shrink-0 w-full" data-name="items grid">
      <DynamicItem />
      <DynamicItem1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="main content">
      <Header19 />
      <ItemsGrid />
    </div>
  );
}

function MainProcess() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="main process">
      <LeftIndicator />
      <MainContent />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <MainProcess />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36px]" data-name="Divider">
      <div className="absolute bottom-[-6.25%] left-0 right-[-2.78%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 18">
          <g id="Divider">
            <path d="M36 1V17" id="connector" stroke="var(--stroke-0, #DEE7FB)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Process() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Container16 />
      <Divider />
    </div>
  );
}

function EditLine2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-line">
          <path d={svgPaths.p2c699300} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconBox1() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="icon box">
      <EditLine2 />
    </div>
  );
}

function ProcessIndicator1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="process indicator">
      <div className="absolute bottom-[-18.41%] left-0 right-0 top-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 49">
          <g id="process indicator">
            <path d={svgPaths.p12cb0180} fill="var(--stroke-0, #DEE7FB)" id="arrow line" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeftIndicator1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="left indicator">
      <IconBox1 />
      <ProcessIndicator1 />
    </div>
  );
}

function Frame10832() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Edição do veículo via Prolog Web</p>
    </div>
  );
}

function Frame10827() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29/09/2024 - 16:21</p>
    </div>
  );
}

function TittleAndMainData1() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="tittle and main data">
      <Frame10832 />
      <Frame10827 />
    </div>
  );
}

function CollapseButton1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="collapse button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="collapse button">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RightItems1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="right items">
      <CollapseButton1 />
    </div>
  );
}

function Header20() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="header">
      <TittleAndMainData1 />
      <RightItems1 />
    </div>
  );
}

function ItemHeader2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">placa</p>
    </div>
  );
}

function ItemData2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<placa> → <placa>`}</p>
    </div>
  );
}

function DynamicItem2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader2 />
      <ItemData2 />
    </div>
  );
}

function ItemHeader3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">quilometragem</p>
    </div>
  );
}

function ItemData3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<km> → <km>`}</p>
    </div>
  );
}

function DynamicItem3() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader3 />
      <ItemData3 />
    </div>
  );
}

function ItemHeader4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">id frota</p>
    </div>
  );
}

function ItemData4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<id_frota> → <id_frota>`}</p>
    </div>
  );
}

function DynamicItem4() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader4 />
      <ItemData4 />
    </div>
  );
}

function ItemHeader5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">código auxiliar</p>
    </div>
  );
}

function ItemData5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<cód> → <cód>`}</p>
    </div>
  );
}

function DynamicItem5() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader5 />
      <ItemData5 />
    </div>
  );
}

function ItemHeader6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">marca do veículo</p>
    </div>
  );
}

function ItemData6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<marca> → <marca>`}</p>
    </div>
  );
}

function DynamicItem6() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader6 />
      <ItemData6 />
    </div>
  );
}

function ItemHeader7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">modelo do veículo</p>
    </div>
  );
}

function ItemData7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<modelo> → <modelo>`}</p>
    </div>
  );
}

function DynamicItem7() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader7 />
      <ItemData7 />
    </div>
  );
}

function ItemHeader8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">tipo do veículo</p>
    </div>
  );
}

function ItemData8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<tipo> → <tipo>`}</p>
    </div>
  );
}

function DynamicItem8() {
  return (
    <div className="[grid-area:2_/_3] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader8 />
      <ItemData8 />
    </div>
  );
}

function ItemHeader9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">hubodômetro</p>
    </div>
  );
}

function ItemData9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Possui → Não possui</p>
    </div>
  );
}

function DynamicItem9() {
  return (
    <div className="[grid-area:2_/_4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader9 />
      <ItemData9 />
    </div>
  );
}

function ItemHeader10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item header">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f7588] text-[12px] text-nowrap tracking-[1.2px] uppercase whitespace-pre">Responsável</p>
    </div>
  );
}

function ItemData10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="item data">
      <p className="font-['Prompt:Light',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#25262c] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">{`<responsável>`}</p>
    </div>
  );
}

function DynamicItem10() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="dynamic item">
      <ItemHeader10 />
      <ItemData10 />
    </div>
  );
}

function ItemsGrid1() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[188px] relative shrink-0 w-full" data-name="items grid">
      <DynamicItem2 />
      <DynamicItem3 />
      <DynamicItem4 />
      <DynamicItem5 />
      <DynamicItem6 />
      <DynamicItem7 />
      <DynamicItem8 />
      <DynamicItem9 />
      <DynamicItem10 />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="main content">
      <Header20 />
      <ItemsGrid1 />
    </div>
  );
}

function MainProcess1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="main process">
      <LeftIndicator1 />
      <MainContent1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <MainProcess1 />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36px]" data-name="Divider">
      <div className="absolute bottom-[-6.25%] left-0 right-[-2.78%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 18">
          <g id="Divider">
            <path d="M36 1V17" id="connector" stroke="var(--stroke-0, #DEE7FB)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Process1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Container17 />
      <Divider1 />
    </div>
  );
}

function EditLine3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-line">
          <path d={svgPaths.p2c699300} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconBox2() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="icon box">
      <EditLine3 />
    </div>
  );
}

function LeftIndicator2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="left indicator">
      <IconBox2 />
    </div>
  );
}

function Frame10831() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Edição do veículo via API</p>
    </div>
  );
}

function Frame10835() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29/09/2024 - 16:21</p>
    </div>
  );
}

function TittleAndMainData2() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="tittle and main data">
      <Frame10831 />
      <Frame10835 />
    </div>
  );
}

function CollapseButton2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="collapse button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="collapse button">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RightItems2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="right items">
      <CollapseButton2 />
    </div>
  );
}

function Header21() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="header">
      <TittleAndMainData2 />
      <RightItems2 />
    </div>
  );
}

function MainContent2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="main content">
      <Header21 />
    </div>
  );
}

function MainProcess2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="main process">
      <LeftIndicator2 />
      <MainContent2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[16px] relative w-full">
          <MainProcess2 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36px]" data-name="Divider">
      <div className="absolute bottom-[-6.25%] left-0 right-[-2.78%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 18">
          <g id="Divider">
            <path d="M36 1V17" id="connector" stroke="var(--stroke-0, #DEE7FB)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Process2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Container18 />
      <Divider2 />
    </div>
  );
}

function EditLine4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-line">
          <path d={svgPaths.p2c699300} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconBox3() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="icon box">
      <EditLine4 />
    </div>
  );
}

function LeftIndicator3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="left indicator">
      <IconBox3 />
    </div>
  );
}

function Frame10836() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Edição do veículo via Sistema Interno</p>
    </div>
  );
}

function Frame10852() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29/09/2024 - 16:21</p>
    </div>
  );
}

function TittleAndMainData3() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="tittle and main data">
      <Frame10836 />
      <Frame10852 />
    </div>
  );
}

function CollapseButton3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="collapse button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="collapse button">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RightItems3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="right items">
      <CollapseButton3 />
    </div>
  );
}

function Header22() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="header">
      <TittleAndMainData3 />
      <RightItems3 />
    </div>
  );
}

function MainContent3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="main content">
      <Header22 />
    </div>
  );
}

function MainProcess3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="main process">
      <LeftIndicator3 />
      <MainContent3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[16px] relative w-full">
          <MainProcess3 />
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36px]" data-name="Divider">
      <div className="absolute bottom-[-6.25%] left-0 right-[-2.78%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 18">
          <g id="Divider">
            <path d="M36 1V17" id="connector" stroke="var(--stroke-0, #DEE7FB)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Process3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Container19 />
      <Divider3 />
    </div>
  );
}

function EditLine5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-line">
          <path d={svgPaths.p2c699300} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconBox4() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="icon box">
      <EditLine5 />
    </div>
  );
}

function LeftIndicator4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="left indicator">
      <IconBox4 />
    </div>
  );
}

function Frame10853() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Edição do veículo via Suporte</p>
    </div>
  );
}

function Frame10855() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29/09/2024 - 16:21</p>
    </div>
  );
}

function TittleAndMainData4() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="tittle and main data">
      <Frame10853 />
      <Frame10855 />
    </div>
  );
}

function CollapseButton4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="collapse button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="collapse button">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RightItems4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="right items">
      <CollapseButton4 />
    </div>
  );
}

function Header23() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="header">
      <TittleAndMainData4 />
      <RightItems4 />
    </div>
  );
}

function MainContent4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="main content">
      <Header23 />
    </div>
  );
}

function MainProcess4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="main process">
      <LeftIndicator4 />
      <MainContent4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[16px] relative w-full">
          <MainProcess4 />
        </div>
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36px]" data-name="Divider">
      <div className="absolute bottom-[-6.25%] left-0 right-[-2.78%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 18">
          <g id="Divider">
            <path d="M36 1V17" id="connector" stroke="var(--stroke-0, #DEE7FB)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Process4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Container20 />
      <Divider4 />
    </div>
  );
}

function EditLine6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-line">
          <path d={svgPaths.p2c699300} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconBox5() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="icon box">
      <EditLine6 />
    </div>
  );
}

function LeftIndicator5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="left indicator">
      <IconBox5 />
    </div>
  );
}

function Frame10856() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Edição do veículo via Prolog Android</p>
    </div>
  );
}

function Frame10858() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29/09/2024 - 16:21</p>
    </div>
  );
}

function TittleAndMainData5() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="tittle and main data">
      <Frame10856 />
      <Frame10858 />
    </div>
  );
}

function CollapseButton5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="collapse button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="collapse button">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RightItems5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="right items">
      <CollapseButton5 />
    </div>
  );
}

function Header24() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="header">
      <TittleAndMainData5 />
      <RightItems5 />
    </div>
  );
}

function MainContent5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="main content">
      <Header24 />
    </div>
  );
}

function MainProcess5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="main process">
      <LeftIndicator5 />
      <MainContent5 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[16px] relative w-full">
          <MainProcess5 />
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36px]" data-name="Divider">
      <div className="absolute bottom-[-6.25%] left-0 right-[-2.78%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 18">
          <g id="Divider">
            <path d="M36 1V17" id="connector" stroke="var(--stroke-0, #DEE7FB)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Process5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Container21 />
      <Divider5 />
    </div>
  );
}

function EditLine7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-line">
          <path d={svgPaths.p2c699300} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconBox6() {
  return (
    <div className="bg-[#dee7fb] box-border content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="icon box">
      <EditLine7 />
    </div>
  );
}

function LeftIndicator6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="left indicator">
      <IconBox6 />
    </div>
  );
}

function Frame10859() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f424d] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">Edição do veículo via Prolog iOS</p>
    </div>
  );
}

function Frame10861() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3f424d] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">29/09/2024 - 16:21</p>
    </div>
  );
}

function TittleAndMainData6() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="tittle and main data">
      <Frame10859 />
      <Frame10861 />
    </div>
  );
}

function CollapseButton6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="collapse button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="collapse button">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RightItems6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="right items">
      <CollapseButton6 />
    </div>
  );
}

function Header25() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="header">
      <TittleAndMainData6 />
      <RightItems6 />
    </div>
  );
}

function MainContent6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="main content">
      <Header25 />
    </div>
  );
}

function MainProcess6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="main process">
      <LeftIndicator6 />
      <MainContent6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[16px] relative w-full">
          <MainProcess6 />
        </div>
      </div>
    </div>
  );
}

function Process6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Container22 />
    </div>
  );
}

function Process7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Process">
      <Process />
      <Process1 />
      <Process2 />
      <Process3 />
      <Process4 />
      <Process5 />
      <Process6 />
    </div>
  );
}

function MoveUp1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="move-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="move-up">
          <path d={svgPaths.p1e7ab640} id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Voltar ao topo</p>
      <MoveUp1 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonContent12 />
    </div>
  );
}

function FooterListing() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Footer listing">
      <div className="basis-0 flex flex-col font-['Prompt:Light',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6f7588] text-[16px] tracking-[0.32px]">
        <p className="leading-[22px]">Exibindo 7 de 7 itens</p>
      </div>
      <Button10 />
    </div>
  );
}

function LinhaDoTempo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full z-[1] mt-[0px] mr-[0px] mb-[24px] ml-[0px] pb-[24px]" data-name="Linha do tempo">
      <Frame10576 />
      <FilterBar />
      <Process7 />
      <FooterListing />
    </div>
  );
}

function DrawerDeVisualizacaoDeVeiculos() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[2647px] isolate items-start overflow-clip pb-[24px] pt-0 px-0 relative shrink-0 w-full z-[1]" data-name="Drawer de visualização de veículos">
      <Header1 />
      <DadosDoVeiculo />
      <InformacoesDoVeiculo />
      <KpiRow />
      <Frame427318296 />
      <DadosDoPneu />
      <Frame2098 />
      <LinhaDoTempo />
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="content">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] isolate items-center pb-0 pt-[24px] px-[24px] relative w-full">
          <DrawerDeVisualizacaoDeVeiculos />
        </div>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #3D5FD9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="buttonContent">
      <ChevronLeft />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3d5fd9] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Voltar</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-0 mt-0 relative rounded-[8px]" data-name="Button">
      <ButtonContent13 />
    </div>
  );
}

function Group5019() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button11 />
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

function EditLine8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="edit-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="edit-line">
          <path d={svgPaths.p213765f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent14() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <EditLine8 />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Editar veículo</p>
    </div>
  );
}

function ButtonA() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ButtonA">
      <ButtonContent14 />
    </div>
  );
}

function CircleOff() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_123983)" id="circle-off">
          <path d={svgPaths.p25b06d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_7_123983">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonContent15() {
  return (
    <div className="bg-[#3d5fd9] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="buttonContent">
      <CircleOff />
      <p className="font-['Prompt:Light',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] whitespace-pre">Desativar veículo</p>
    </div>
  );
}

function ButtonB() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="buttonB">
      <ButtonContent15 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="right">
      <ButtonA />
      <ButtonB />
    </div>
  );
}

function DrawerFooter() {
  return (
    <div className="bg-[#f1f5fd] h-[60px] relative shrink-0 w-full z-[1]" data-name="_drawerFooter">
      <div aria-hidden="true" className="absolute border-[#dee7fb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[14px] relative w-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 bg-[#fafcff] content-stretch flex flex-col grow isolate items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0" data-name="container">
      <DrawerHeader />
      <Content20 />
      <DrawerFooter />
    </div>
  );
}

export default function DrawerSlot() {
  return (
    <div className="relative size-full" data-name="drawerSlot">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex items-start max-w-inherit p-[8px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}