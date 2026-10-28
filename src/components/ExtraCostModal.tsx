import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { ExtraCostModalProps } from "@/types/extra-cost-modal";

const ExtraCostModal = ({
  title,
  description,
  open,
  onOpenChange,
}: ExtraCostModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ExtraCostModal;
