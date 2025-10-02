import { DivProps } from '@stylin.js/elements';
import { ReactNode } from 'react';
import { create } from 'zustand';

type MotionProps = Omit<
  DivProps,
  'transition' | 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'
>;

interface UseModal {
  title: string;
  content: ReactNode;
  onClose?: () => void;
  allowClose?: boolean;
  modalWidth?: string;
  mobileOnly?: boolean;
  handleClose: () => void;
  overlayProps?: MotionProps;
  showTitleOnMobile?: boolean;
  containerProps?: MotionProps;
  titleAlign?: 'left' | 'center';
  setContent: (
    content: ReactNode,
    options: {
      title: string;
      onClose?: () => void;
      allowClose?: boolean;
      showTitleOnMobile?: boolean;
      titleAlign?: 'left' | 'center';
      mobileOnly?: boolean;
      modalWidth?: string;
      overlayProps?: DivProps;
      containerProps?: DivProps;
    }
  ) => void;
}

const defaultValues = {
  title: '',
  content: null,
  allowClose: true,
  mobileOnly: false,
  onClose: undefined,
  overlayProps: undefined,
  containerProps: undefined,
};

export const useModal = create<UseModal>((set) => ({
  ...defaultValues,
  handleClose: () => set(defaultValues),
  setContent: (content, options) => set({ content, ...options }),
}));
