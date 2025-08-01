"use client";

import { Suspense } from "@suspensive/react";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface PrefetcherProps {
  hooks: {
    prefetchHook: (p: any) => void;
    params: Record<string, any>;
  }[];
}

export default Suspense.with(
  {
    name: "Prefetcher",
  },
  ({ hooks }: PrefetcherProps) => {
    hooks.forEach((hook) => {
      hook.prefetchHook(hook.params);
    });
    return null;
  }
);
