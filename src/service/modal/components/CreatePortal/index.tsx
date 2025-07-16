"use client";

import { createPortal } from "react-dom";

import Queue from "../../core";

export default function CreatePortal() {
  if (typeof document === "undefined") return null;

  const modalRoot = document?.getElementById("modal-root");
  if (!modalRoot) return null;

  if (!Queue.queueItems.length) return null;

  const currentModal = Queue.queueItems[0];

  if (!currentModal) return null;

  return createPortal(<>{currentModal.modalComponent}</>, modalRoot);
}
