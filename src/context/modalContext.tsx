import { useState } from "react";
import { ModalContext } from "./hooks/useModalContext";

interface ModalProviderProps {
  children: React.ReactNode;
}

interface ModalState<T> {
  mode: string | null;
  isOpen: boolean;
  content: T | null;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModalState] = useState<ModalState<unknown>>({
    mode: null,
    isOpen: false,
    content: null,
  });

  const setModal = <T,>({
    mode,
    isOpen,
    content,
  }: {
    mode: string | null;
    isOpen: boolean;
    content: T | null;
  }) => {
    setModalState({ mode, isOpen, content });
  };

  const closeModal = () => {
    setModalState({ mode: null, isOpen: false, content: null });
  };

  return (
    <ModalContext.Provider value={{ modal, setModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
