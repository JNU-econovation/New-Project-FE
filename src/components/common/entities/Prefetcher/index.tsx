"use client";

import { Suspense } from "@suspensive/react";
import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

type PrefetchHook = (p?: unknown) => void;

interface PrefetcherProps {
  hooks: {
    prefetchHook: PrefetchHook;
    args: Record<string, unknown>;
  }[];
}

export default Suspense.with(
  {
    name: "Prefetcher",
  },
  ({ hooks }: PrefetcherProps) => {
    useEffect(() => {
      hooks.forEach((hook) => {
        hook.prefetchHook(hook.args);
      });
    }, [hooks]);

    return null;
  }
);
