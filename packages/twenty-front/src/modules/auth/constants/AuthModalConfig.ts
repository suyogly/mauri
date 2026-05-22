import { AppPath } from 'twenty-shared/types';
import { type ModalOverlay, type ModalSize } from 'twenty-ui/layout';

type AuthModalConfigType = {
  size: ModalSize;
  overlay: ModalOverlay;
  showScrollWrapper: boolean;
};

export const AUTH_MODAL_CONFIG: {
  default: AuthModalConfigType;
  [key: string]: AuthModalConfigType;
} = {
  default: {
    size: 'medium',
    overlay: 'dark',
    showScrollWrapper: true,
  },
  [AppPath.BookCall]: {
    size: 'extraLarge',
    overlay: 'dark',
    showScrollWrapper: false,
  },
};
