"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { headerNavigation, isHeaderItemActive, type HeaderItem } from "@/data/header-navigation";
import { shell } from "@/lib/site-styles";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const suppressFocus = useRef(false);
  const touchActivation = useRef<{ href: string; wasOpen: boolean } | null>(null);
  const [desktopSection, setDesktopSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  function closeMenus() {
    touchActivation.current = null;
    setDesktopSection(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  useEffect(() => {
    const navigationBreakpoint = window.matchMedia("(min-width: 768px)");
    function breakpointChanged() {
      touchActivation.current = null;
      setDesktopSection(null);
      setMobileOpen(false);
      setMobileSection(null);
    }
    function outside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setDesktopSection(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
    }
    function escape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (headerRef.current?.querySelector("#mobile-navigation")) mobileToggleRef.current?.focus();
      setDesktopSection(null);
      setMobileOpen(false);
      setMobileSection(null);
    }
    window.addEventListener("pointerdown", outside);
    window.addEventListener("keydown", escape);
    navigationBreakpoint.addEventListener("change", breakpointChanged);
    return () => {
      window.removeEventListener("pointerdown", outside);
      window.removeEventListener("keydown", escape);
      navigationBreakpoint.removeEventListener("change", breakpointChanged);
    };
  }, []);

  function keyboard(event: KeyboardEvent<HTMLDivElement>, item: HeaderItem) {
    touchActivation.current = null;
    if (!item.children) return;
    const parent = event.currentTarget.querySelector<HTMLAnchorElement>("[data-parent-link]");
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
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Home" && event.key !== "End") return;
    const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("[data-submenu] a"));
    if (!links.length) return;
    event.preventDefault();
    setDesktopSection(item.href);
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    let next = event.key === "ArrowDown" ? (index + 1) % links.length : (index < 0 ? links.length - 1 : (index - 1 + links.length) % links.length);
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = links.length - 1;
    requestAnimationFrame(() => links[next]?.focus());
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-80 bg-white shadow-[0_1px_0_#dce8eb]">
      <div className={`${shell} ${styles.bar} flex min-h-18.25 items-center justify-between gap-6 sm:min-h-20.5`}>
        <Link href="/" aria-label="TruMinds Clinical home" onClick={closeMenus} className="inline-flex shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008995]"><Image src="/logo.png" alt="TruMinds Clinical" width={205} height={57} priority className={`${styles.logo} h-auto w-46.25 xl:w-51.25`} style={{ height: "auto" }} /></Link>
        <nav aria-label="Main navigation" className={`${styles.desktopNav} hidden flex-1 items-center justify-end md:flex`}>
          {headerNavigation.map((item, index) => {
            const active = isHeaderItemActive(pathname, item);
            const expanded = desktopSection === item.href;
            const menuId = `desktop-nav-${index}`;
            return (
              <div key={item.href} className="relative" onMouseEnter={() => setDesktopSection(item.children ? item.href : null)} onMouseLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setDesktopSection(null); }} onFocusCapture={() => {
                if (suppressFocus.current) { suppressFocus.current = false; return; }
                setDesktopSection(item.children ? item.href : null);
              }} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setDesktopSection(null); }} onKeyDown={event => keyboard(event, item)}>
                <Link href={item.href} data-parent-link data-active={active} aria-current={pathname === item.href ? "page" : active ? "true" : undefined} aria-expanded={item.children ? expanded : undefined} aria-controls={item.children ? menuId : undefined} onPointerDown={event => {
                  touchActivation.current = event.pointerType === "touch" ? { href: item.href, wasOpen: expanded } : null;
                }} onClick={event => {
                  const touch = touchActivation.current;
                  touchActivation.current = null;
                  // First touch opens the dropdown; a second touch follows its parent page.
                  if (item.children && touch?.href === item.href && !touch.wasOpen) {
                    event.preventDefault();
                    setDesktopSection(item.href);
                    return;
                  }
                  closeMenus();
                }} className={`${styles.topLink} ${item.href === "/contact-us" ? styles.contactLink : ""} whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008995]`}>{item.label}</Link>
                {item.children && <div id={menuId} data-submenu hidden={!expanded} className={`${item.href === "/services" ? styles.leadingMenu : ""} absolute top-full right-0 z-10 w-80 max-w-[calc(100vw-40px)] pt-2`}><div className={`${styles.menuPanel} max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-xl border border-[#d3e4e9] bg-white p-2 shadow-[0_16px_40px_rgba(8,43,67,.14)]`}>{item.children.map(child => <Link key={child.href} href={child.href} aria-current={pathname === child.href ? "page" : undefined} onClick={closeMenus} className={`${styles.submenuLink} focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#008995]`}>{child.label}</Link>)}</div></div>}
              </div>
            );
          })}
        </nav>
        <button ref={mobileToggleRef} type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen(!mobileOpen); setMobileSection(null); }} className="grid size-11 cursor-pointer place-items-center rounded-xl border border-[#cfdee2] bg-white text-[#173b50] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#008995] md:hidden">{mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}</button>
      </div>
      {mobileOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-88px)] overflow-y-auto border-t border-[#dce8eb] bg-white px-5 pt-2 pb-6 shadow-[0_18px_35px_rgba(8,43,67,.12)] md:hidden">
        {headerNavigation.map((item, index) => {
          const active = isHeaderItemActive(pathname, item);
          const expanded = mobileSection === item.href;
          const menuId = `mobile-nav-${index}`;
          return <div key={item.href} className="border-b border-[#e0ebef]"><div className="flex items-center justify-between gap-4 py-1"><Link href={item.href} data-active={active} aria-current={pathname === item.href ? "page" : active ? "true" : undefined} onClick={closeMenus} className={`${styles.topLink} min-w-0 flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008995]`}>{item.label}</Link>{item.children && <button type="button" aria-label={`${expanded ? "Hide" : "View"} ${item.label} pages`} aria-expanded={expanded} aria-controls={menuId} onClick={() => setMobileSection(expanded ? null : item.href)} className={`${styles.disclosure} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008995]`}>{expanded ? "Hide" : "View"}</button>}</div>{item.children && <div id={menuId} hidden={!expanded} className="mb-2 rounded-xl border border-[#dbe9ed] bg-[#f5fafb] p-1.5">{item.children.map(child => <Link key={child.href} href={child.href} aria-current={pathname === child.href ? "page" : undefined} onClick={closeMenus} className={`${styles.submenuLink} focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#008995]`}>{child.label}</Link>)}</div>}</div>;
        })}
      </nav>}
    </header>
  );
}
