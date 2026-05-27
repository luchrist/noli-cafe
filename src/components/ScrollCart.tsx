"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ScrollCart() {
  const cartRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);

  const getScrollPct = () => {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? window.scrollY / docHeight : 0;
  };

  const getTrackHeight = () => {
    const cartSize = 50;
    const padding = 16;
    return window.innerHeight - padding * 2 - cartSize;
  };

  const updatePosition = useCallback(() => {
    if (!cartRef.current) return;
    const pct = getScrollPct();
    const trackHeight = getTrackHeight();
    const y = 16 + pct * trackHeight;
    cartRef.current.style.transform = `translateY(${y}px)`;
  }, []);

  useEffect(() => {
    // Use rAF for smooth updates
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [updatePosition]);

  // Drag handling
  useEffect(() => {
    const el = cartRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      dragging.current = true;
      dragStartY.current = e.clientY;
      dragStartScroll.current = window.scrollY;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const delta = e.clientY - dragStartY.current;
      const trackHeight = getTrackHeight();
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollDelta = (delta / trackHeight) * docHeight;
      window.scrollTo(0, dragStartScroll.current + scrollDelta);
    };

    const onPointerUp = () => {
      dragging.current = false;
      if (el) el.style.cursor = "grab";
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={cartRef}
      className="fixed top-0 right-2 z-[9999] will-change-transform"
      style={{ cursor: "grab" }}
    >
      <img
        src="/assets/cart-thumb.png"
        alt=""
        className="w-10 h-auto select-none"
        draggable={false}
      />
    </div>
  );
}
