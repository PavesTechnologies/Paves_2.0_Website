"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/* Mounted once in the root layout, so this is the central place to reset scroll
   on navigation — no per-page scroll logic needed anywhere else.

   Why it is needed: Lenis drives the scroll position itself every frame via
   autoRaf. Next's own scroll-to-top on route change calls window.scrollTo,
   which Lenis immediately overwrites with its retained target, so a new route
   opened at the previous page's offset. Resetting Lenis directly fixes it at
   the source. */
export default function LenisSetup() {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const isPopNavigation = useRef(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Back/forward should keep the browser's restored position, so flag pops and
  // let the next pathname change skip the reset.
  useEffect(() => {
    const onPopState = () => {
      isPopNavigation.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    // Skip the initial mount so a refresh keeps native scroll restoration.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isPopNavigation.current) {
      isPopNavigation.current = false;
      return;
    }

    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
