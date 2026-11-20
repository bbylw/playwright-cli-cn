'use client';

import { useEffect } from 'react';

/**
 * Progressive-enhancement behaviors for the landing page:
 * native Popover API menu (with fallback), marquee pause control,
 * and sentinel-driven back-to-top visibility. All listeners are
 * torn down on unmount so nothing leaks into the docs SPA routes.
 */
export function LandingEffects() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    // Smooth anchor scrolling only on the landing page, and only when allowed.
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) document.documentElement.classList.add('scroll-smooth');

    // Mobile menu: native Popover API with a lightweight fallback.
    const menu = document.getElementById('mobile-menu')!;
    const menuBtn = document.getElementById('mobile-menu-btn')!;
    const supportsPopover = Object.hasOwn(HTMLElement.prototype, 'popover');
    if (!supportsPopover) {
      document.documentElement.classList.add('no-popover');
      menu.removeAttribute('popover');
      menu.hidden = true;
      menuBtn.addEventListener('click', () => { menu.hidden = !menu.hidden; }, { signal });
    }
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (supportsPopover) menu.hidePopover();
        else menu.hidden = true;
      }, { signal });
    });

    // Marquee pause/play control (WCAG 2.2.2 Pause, Stop, Hide).
    const track = document.getElementById('marquee-track')!;
    const marqueeToggle = document.getElementById('marquee-toggle')!;
    marqueeToggle.addEventListener('click', () => {
      const paused = track.classList.toggle('marquee-paused');
      marqueeToggle.classList.toggle('is-paused', paused);
      marqueeToggle.setAttribute('aria-label', paused ? '播放滚动字幕' : '暂停滚动字幕');
    }, { signal });

    // Back-to-top visibility via a top sentinel (no scroll listeners).
    const backToTop = document.getElementById('back-to-top')!;
    const observer = new IntersectionObserver(([entry]) => {
      backToTop.classList.toggle('is-hidden', entry.isIntersecting);
    });
    observer.observe(document.getElementById('top-sentinel')!);
    // Scroll explicitly so an in-flight smooth scroll is retargeted
    // (fragment navigation alone can lose to an ongoing programmatic scroll).
    backToTop.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0 });
    }, { signal });

    return () => {
      controller.abort();
      observer.disconnect();
      document.documentElement.classList.remove('scroll-smooth', 'no-popover');
    };
  }, []);

  return null;
}