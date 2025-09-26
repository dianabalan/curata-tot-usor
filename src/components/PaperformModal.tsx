import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PaperformModalProps {
  isOpen: boolean;
  onClose: () => void;
  formId: string;
  title?: string;
}

export const PaperformModal: React.FC<PaperformModalProps> = ({
  isOpen,
  onClose,
  formId,
  title = "Completează comanda"
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && formRef.current) {
      // Ensure Paperform script is loaded
      const script = document.querySelector('script[src="https://paperform.co/__embed.min.js"]');
      if (!script) {
        const newScript = document.createElement('script');
        newScript.src = 'https://paperform.co/__embed.min.js';
        newScript.async = true;
        document.body.appendChild(newScript);
        
        newScript.onload = () => {
          // Reinitialize form after script loads
          if (formRef.current) {
            formRef.current.innerHTML = '';
            const formDiv = document.createElement('div');
            formDiv.setAttribute('data-paperform-id', formId);
            formRef.current.appendChild(formDiv);
          }
        };
      } else {
        // Script already loaded, just add the form
        formRef.current.innerHTML = '';
        const formDiv = document.createElement('div');
        formDiv.setAttribute('data-paperform-id', formId);
        formRef.current.appendChild(formDiv);
      }
    }
  }, [isOpen, formId]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-6 w-6 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div ref={formRef} className="min-h-[400px]" />
      </DialogContent>
    </Dialog>
  );
};
