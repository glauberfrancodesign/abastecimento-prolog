import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-hclzpvidui";

interface DeleteCommentModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

function Trash() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trash">
          <path d={svgPaths.p39008080} id="Vector" stroke="#E40F05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function XClose({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[10px] right-[16px] rounded-[8px] top-[16px] hover:bg-[#f5f6f8] transition-colors cursor-pointer" 
      data-name="Button close X"
    >
      <div className="relative shrink-0 size-[24px]" data-name="x-close">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="x-close">
            <path d="M18 6L6 18M6 6L18 18" id="Icon" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function ModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="_ModalHeader">
      <Content />
      <XClose onClick={onClose} />
    </div>
  );
}

function ButtonContent({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#fef3f2] transition-colors" 
      data-name="buttonContent"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e40f05] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Cancelar</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e40f05] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function ButtonContent1({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="basis-0 bg-[#be0d04] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#a00b03] transition-colors" 
      data-name="buttonContent"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">Exluir comentário</p>
        </div>
      </div>
    </button>
  );
}

function ModalActions({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="_ModalActions">
      <div className="relative shrink-0 w-full" data-name="Content">
        <div className="size-full">
          <div className="box-border content-stretch flex gap-[12px] items-start pb-[24px] pt-0 px-[24px] relative w-full">
            <ButtonContent onClick={onCancel} />
            <ButtonContent1 onClick={onConfirm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeleteCommentModal({ isOpen, onCancel, onConfirm }: DeleteCommentModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={onCancel}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto w-[400px] max-w-[calc(100vw-32px)]"
            >
              <div className="bg-white relative rounded-[8px] w-full" data-name="Modal">
                <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
                  <ModalHeader onClose={onCancel} />
                  <ModalActions onCancel={onCancel} onConfirm={onConfirm} />
                </div>
                <div aria-hidden="true" className="absolute border border-[#dee7fb] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
