import { motion } from "motion/react";
import DrawerSlot from "../imports/DrawerSlot-7-117577";

interface VehicleDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VehicleDrawer({ isOpen, onClose }: VehicleDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-[10000]"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 bottom-0 w-[1278px] z-[10001]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="size-full overflow-y-auto custom-scrollbar" onClick={(e) => {
          // Check if the close button was clicked
          const target = e.target as HTMLElement;
          if (target.closest('[data-name="close"]')) {
            onClose();
          }
        }}>
          <DrawerSlot />
        </div>
      </motion.div>
    </>
  );
}
