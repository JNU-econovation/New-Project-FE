"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";

import StackContext from "../context/stackContext";
import type { PathTuple } from "../types";

export default function StackLinkProvider({ children }: PropsWithChildren) {
  const [history, setHistory] = useState<PathTuple[]>([]);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  const push = useCallback((pathTuple: PathTuple) => {
    setHistory((prev) => [...prev, pathTuple]);
  }, []);

  const pop = useCallback(() => {
    setHistory((prev) => prev.slice(0, -1));
  }, []);

  useEffect(() => {
    const element = document.getElementById("stack-root");
    setPortalElement(element);
  }, []);

  return (
    <StackContext.Provider value={{ portalElement, history, push, pop }}>
      <div id="stack-main" className="relative bg-white transform-gpu">
        {children}
      </div>
      <div id="stack-root" />
    </StackContext.Provider>
  );
}
