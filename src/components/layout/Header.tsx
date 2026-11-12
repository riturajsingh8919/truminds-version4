"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { headerNavigation, isHeaderItemActive, type HeaderItem } from "@/data/header-navigation";
import { useUrlFragment } from "@/lib/use-url-fragment";
import { shell } from "@/lib/site-styles";
import { DropdownLinks } from "./DropdownLinks";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const fragment = useUrlFragment();
  const headerRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const suppressFocus = useRef(false);
  const hoverTimer = useRef<number | null>(null);
  const touchActivation = useRef<{ href: string; wasOpen: boolean } | null>(null);
  const [desktopSection, setDesktopSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  function cancelHover() {
    if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }

  function hover(item: HeaderItem) {
    cancelHover();
    const next = item.children ? item.href : null;
    if (!desktopSection || desktopSection === next) setDesktopSection(next);
    else hoverTimer.current = window.setTimeout(() => {
      hoverTimer.current = null;
      setDesktopSection(next);
    }, 115);
  }

  function leaveNavigation() {
    cancelHover();
    hoverTimer.current = window.setTimeout(() => {
      hoverTimer.current = null;
      setDesktopSection(null);
    }, 140);
  }

  function closeMenus() {
    cancelHover();
    touchActivation.current = null;
    setDesktopSection(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    // Native hash changes also notify the capability selector on the current page.
    if (href.startsWith(`${pathname}#`) && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      const hash = href.slice(href.indexOf("#"));
      if (window.location.hash === hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
      else window.location.assign(hash);
    }
    closeMenus();
  }

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 768px)");
    const header = headerRef.current;
    const resize = new ResizeObserver(() => {
      if (header) header.style.setProperty("--navigation-height", `${header.offsetHeight}px`);
    });
    if (header) resize.observe(header);
    function reset() {
      if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
      touchActivation.current = null;
      setDesktopSection(null);
      setMobileOpen(false);
      setMobileSection(null);
    }
    function outside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) reset();
    }
    function escape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (headerRef.current?.querySelector("#mobile-navigation")) mobileToggleRef.current?.focus();
      reset();
    }
    window.addEventListener("pointerdown", outside);
    window.addEventListener("keydown", escape);
    breakpoint.addEventListener("change", reset);
    return () => {
      if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
      window.removeEventListener("pointerdown", outside);
      window.removeEventListener("keydown", escape);
      breakpoint.removeEventListener("change", reset);
      resize.disconnect();
    };
  }, []);

  function keyboard(event: KeyboardEvent<HTMLDivElement>, item: HeaderItem) {
    cancelHover();
    touchActivation.current = null;
    if (!item.children) return;
    const owner = event.currentTarget;
    const parent = owner.querySelector<HTMLAnchorElement>("[data-parent-link]");
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      setDesktopSection(null);
      if (document.activeElement !== parent) {
        suppressFocus.current = true;
        parent?.focus();
      }
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const key = event.key;
    setDesktopSection(item.href);
    requestAnimationFrame(() => {
      const links = Array.from(owner.querySelectorAll<HTMLAnchorElement>("[data-submenu] a")).filter(link => link.getClientRects().length);
      if (!links.length) return;
      const index = links.indexOf(document.activeElement as HTMLAnchorElement);
      let next = key === "ArrowDown" ? (index + 1) % links.length : index < 0 ? links.length - 1 : (index - 1 + links.length) % links.length;
      if (key === "Home") next = 0;
      if (key === "End") next = links.length - 1;
      links[next]?.focus();
    });
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-80 bg-white shadow-[0_1px_0_#dce8eb]">
      <div className={`${shell} ${styles.bar} flex min-h-18.25 items-center justify-between gap-6 sm:min-h-20.5`}>
        <Link href="/" prefetch={false} aria-label="TruMinds Clinical home" onClick={closeMenus} className="inline-flex shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008995]"><Image src="/logo.png" alt="TruMinds Clinical" width={205} height={57} priority className={`${styles.logo} h-auto w-46.25 xl:w-51.25`} style={{ height: "auto" }} /></Link>
        <nav
          aria-label="Main navigation"
          className={`${styles.desktopNav} hidden flex-1 self-stretch justify-end md:flex`}
          onPointerLeave={event => {
            if (event.pointerType === "mouse" && !event.currentTarget.contains(document.activeElement)) leaveNavigation();
          }}
        >
          {headerNavigation.map((item, index) => {
            const active = isHeaderItemActive(pathname, item);
            const expanded = desktopSection === item.href;
            const menuId = `desktop-nav-${index}`;
            return (
              <div key={item.href} className="flex items-center" onPointerEnter={event => {
                if (event.pointerType === "mouse") hover(item);
              }} onFocusCapture={() => {
                cancelHover();
                if (suppressFocus.current) { suppressFocus.current = false; return; }
                setDesktopSection(item.children ? item.href : null);
              }} onBlurCapture={event => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setDesktopSection(current => current === item.href ? null : current);
                }
              }} onKeyDown={event => keyboard(event, item)}>
                <Link href={item.href} prefetch={false} data-parent-link data-active={active} aria-current={pathname === item.href ? "page" : active ? "true" : undefined} aria-expanded={item.children ? expanded : undefined} aria-controls={item.children ? menuId : undefined} onPointerDown={event => {
                  touchActivation.current = event.pointerType === "touch" ? { href: item.href, wasOpen: expanded } : null;
                }} onClick={event => {
                  const touch = touchActivation.current;
                  touchActivation.current = null;
                  if (item.children && touch?.href === item.href && !touch.wasOpen) {
                    event.preventDefault();
                    setDesktopSection(item.href);
                    return;
                  }
                  navigate(event, item.href);
                }} className={`${styles.topLink} ${item.href === "/contact-us" ? styles.contactLink : ""} whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008995]`}>
                  {item.label}
                  {item.children && <ChevronDown size={15} className={styles.parentCaret} aria-hidden="true" />}
                </Link>
                {item.children && <div id={menuId} data-submenu hidden={!expanded} className="absolute inset-x-0 top-full z-10" onPointerEnter={cancelHover}>
                  {expanded && <div data-dropdown-panel className={styles.menuPanel}>
                    <DropdownLinks item={item} idPrefix={menuId} pathname={pathname} fragment={fragment} onNavigate={navigate} />
                  </div>}
                </div>}
              </div>
            );
          })}
        </nav>
        <button ref={mobileToggleRef} type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen(!mobileOpen); setMobileSection(null); }} className="grid size-11 cursor-pointer place-items-center rounded-xl border border-[#cfdee2] bg-white text-[#173b50] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#008995] md:hidden">{mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}</button>
      </div>
      {mobileOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className={`${styles.mobileDrawer} absolute inset-x-0 top-full border-t border-[#dce8eb] bg-white px-5 pt-2 pb-6 shadow-[0_18px_35px_rgba(8,43,67,.12)] md:hidden`}>
        {headerNavigation.map((item, index) => {
          const active = isHeaderItemActive(pathname, item);
          const expanded = mobileSection === item.href;
          const menuId = `mobile-nav-${index}`;
          return <div key={item.href} className="border-b border-[#e0ebef]"><div className="flex items-center justify-between gap-4 py-1"><Link href={item.href} prefetch={false} data-active={active} aria-current={pathname === item.href ? "page" : active ? "true" : undefined} onClick={event => navigate(event, item.href)} className={`${styles.topLink} min-w-0 flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008995]`}>{item.label}</Link>{item.children && <button type="button" aria-label={`${expanded ? "Hide" : "View"} ${item.label} pages`} aria-expanded={expanded} aria-controls={menuId} onClick={() => setMobileSection(expanded ? null : item.href)} className={`${styles.disclosure} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008995]`}><ChevronDown size={20} aria-hidden="true" /></button>}</div>{item.children && <div id={menuId} hidden={!expanded} className={styles.mobileSubmenu}>{expanded && <DropdownLinks item={item} mobile idPrefix={menuId} pathname={pathname} fragment={fragment} onNavigate={navigate} />}</div>}</div>;
        })}
      </nav>}
    </header>
  );
}
