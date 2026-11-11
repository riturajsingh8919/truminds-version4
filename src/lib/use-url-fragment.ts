"use client";

import { useSyncExternalStore } from "react";

function subscribe(listener: () => void) {
  window.addEventListener("hashchange", listener);
  window.addEventListener("popstate", listener);
  return () => {
    window.removeEventListener("hashchange", listener);
    window.removeEventListener("popstate", listener);
  };
}

export function useUrlFragment() {
  return useSyncExternalStore(subscribe, () => window.location.hash, () => "");
}
