import { ReactNode } from 'react';

export interface ModalOverlayProps {
  onClick: () => void;
  safeHeight: number;
  overlayProps?: Record<string, unknown>;
  children: ReactNode;
}

export interface ModalContainerProps {
  safeHeight: number;
  onClose: () => void;
  modalWidth?: string;
  containerProps?: Record<string, unknown>;
  children: ReactNode;
}

export interface ModalHeaderProps {
  title: string;
  titleAlign?: 'left' | 'center' | 'right';
  showTitleOnMobile?: boolean;
  handleClose: () => void;
}
