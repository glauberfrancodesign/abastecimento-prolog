import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Mail, Send } from "lucide-react";

interface ShareAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ShareIcon() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path
            d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z"
            stroke="#3D5FD9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-[#e1ecfd] relative rounded-[28px] shrink-0 size-[48px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border-8 border-[#f1f5fd] border-solid inset-[-4px] pointer-events-none rounded-[32px]" />
      <ShareIcon />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <p className="font-['Prompt:Regular',_sans-serif] leading-[28px] relative shrink-0 text-[#101828] text-[18px] tracking-[0.36px] w-full">Compartilhar alerta</p>
      <p className="font-['Prompt:Light',_sans-serif] leading-[20px] relative shrink-0 text-[#475467] text-[14px] tracking-[0.28px] w-full">Escolha como deseja compartilhar este alerta</p>
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

function ShareButton({ 
  icon: Icon, 
  label, 
  onClick,
  color 
}: { 
  icon: React.ElementType; 
  label: string; 
  onClick: () => void;
  color: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity`}
      data-name="shareButton"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col items-center justify-center size-full gap-[8px] py-[16px]">
        <Icon className="w-[24px] h-[24px] text-white" strokeWidth={1.5} />
        <p className="font-['Prompt:Light',_sans-serif] leading-[20px] not-italic text-[14px] text-nowrap text-white tracking-[0.28px] whitespace-pre">{label}</p>
      </div>
    </button>
  );
}

function ModalActions({ onClose }: { onClose: () => void }) {
  const handleShare = (platform: string) => {
    // Aqui você pode adicionar a lógica real de compartilhamento
    console.log(`Compartilhando via ${platform}`);
    onClose();
  };

  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="_ModalActions">
      <div className="relative shrink-0 w-full" data-name="Content">
        <div className="size-full">
          <div className="box-border content-stretch flex gap-[12px] items-start pb-[24px] pt-0 px-[24px] relative w-full">
            <ShareButton 
              icon={MessageCircle} 
              label="WhatsApp" 
              onClick={() => handleShare('WhatsApp')}
              color="#25D366"
            />
            <ShareButton 
              icon={Mail} 
              label="E-mail" 
              onClick={() => handleShare('E-mail')}
              color="#3D5FD9"
            />
            <ShareButton 
              icon={Send} 
              label="Telegram" 
              onClick={() => handleShare('Telegram')}
              color="#0088cc"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShareAlertModal({ isOpen, onClose }: ShareAlertModalProps) {
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
            className="fixed inset-0 bg-black/50 z-[10000]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[10001] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto w-[480px] max-w-[calc(100vw-32px)]"
            >
              <div className="bg-white relative rounded-[8px] w-full" data-name="Modal">
                <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
                  <ModalHeader onClose={onClose} />
                  <ModalActions onClose={onClose} />
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
