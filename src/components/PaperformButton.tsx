import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PaperformModal } from './PaperformModal';
import { usePaperform } from '@/hooks/usePaperform';

interface PaperformButtonProps {
  formId: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  modalTitle?: string;
  usePopup?: boolean; // If true, uses Paperform's native popup instead of custom modal
}

export const PaperformButton: React.FC<PaperformButtonProps> = ({
  formId,
  children,
  className,
  size = "default",
  variant = "default",
  modalTitle,
  usePopup = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Load Paperform script
  usePaperform();

  const handleClick = () => {
    if (usePopup) {
      // Use Paperform's native popup functionality
      // This requires the button to have the data-paperform-popup attribute
      // and will be handled by Paperform's script
      return;
    } else {
      // Use custom modal
      setIsModalOpen(true);
    }
  };

  const buttonProps = usePopup 
    ? { 'data-paperform-popup': formId }
    : { onClick: handleClick };

  return (
    <>
      <Button
        {...buttonProps}
        className={className}
        size={size}
        variant={variant}
      >
        {children}
      </Button>
      
      {!usePopup && (
        <PaperformModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formId={formId}
          title={modalTitle}
        />
      )}
    </>
  );
};
