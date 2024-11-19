import { createContext, useContext } from "react";

interface ModalContextProps<T = unknown> {
  modal: {
    mode: string | null;
    isOpen: boolean;
    content: T | null;
  };
  setModal: (options: { mode: string | null; isOpen: boolean; content: T | null }) => void;
  closeModal: () => void;
}

const defaultModalContext: ModalContextProps = {
  modal: {
    mode: null,
    isOpen: false,
    content: null,
  },
  setModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext<ModalContextProps>(defaultModalContext);

export function useModalContext<T>() {
  const context = useContext(ModalContext) as ModalContextProps<T>;

  if (!context) {
    throw new Error("error in useModalContext");
  }

  return context;
}
