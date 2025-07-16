"use client";

import { PropsWithChildren, useCallback, useState } from "react";

import Queue from "../core";
import ModalContext from "../context";
import CreatePortal from "../components/CreatePortal";

export const useFlush = () => {
  const setFlush = useState(0)[1];

  return useCallback(() => {
    setFlush((prev) => prev + 1);
  }, [setFlush]);
};

export default function ModalProvider({ children }: PropsWithChildren) {
  const flush = useFlush();

  const addModalAsync = useCallback(
    (modalComponent: React.ReactNode) => {
      Queue.enqueue(modalComponent);
      flush();
    },
    [flush]
  );

  const closeModalAsync = useCallback(() => {
    Queue.dequeue();
    flush();
  }, [flush]);

  const value = { addModalAsync, closeModalAsync };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <div id="modal-root" />
      <CreatePortal />
    </ModalContext.Provider>
  );
}
