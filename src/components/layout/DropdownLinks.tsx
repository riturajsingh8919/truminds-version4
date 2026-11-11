"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";
import type { HeaderLink } from "@/data/header-navigation";
import styles from "./Header.module.css";

type Props = {
  links: HeaderLink[];
  idPrefix: string;
  pathname: string;
  fragment: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export function DropdownLinks({ links, idPrefix, pathname, fragment, onNavigate }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggles = useRef<Record<string, HTMLButtonElement | null>>({});
  function current(href: string) {
    return href.includes("#") ? pathname + fragment === href : pathname === href;
  }
  return <ul className="space-y-1">
    {links.map((link, index) => {
      const open = expanded === link.href;
      const id = `${idPrefix}-nested-${index}`;
      return <li key={link.href}>
        <div className="flex items-center gap-1">
          <Link href={link.href} prefetch={false} aria-current={current(link.href) ? "page" : undefined} onClick={event => onNavigate(event, link.href)} onMouseEnter={() => {
            if (link.children && window.matchMedia("(hover: hover)").matches) setExpanded(link.href);
          }} className={`${styles.submenuLink} min-w-0 flex-1 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#008995]`}>
            <span className="min-w-0">{link.label}</span>
            {!link.children && <ArrowRight size={17} className={styles.rowArrow} aria-hidden="true" />}
          </Link>
          {link.children && <button ref={element => { toggles.current[link.href] = element; }} type="button" aria-label={`${open ? "Hide" : "Show"} ${link.label} capabilities`} aria-controls={id} aria-expanded={open} onClick={() => setExpanded(open ? null : link.href)} onKeyDown={event => {
            if (event.key !== "ArrowDown") return;
            event.preventDefault();
            event.stopPropagation();
            setExpanded(link.href);
            requestAnimationFrame(() => document.getElementById(id)?.querySelector<HTMLAnchorElement>("a")?.focus());
          }} className={`${styles.nestedDisclosure} focus-visible:outline-2 focus-visible:outline-offset-2`}><ChevronDown size={20} aria-hidden="true" /></button>}
        </div>
        {link.children && <div id={id} hidden={!open} className={styles.nestedLinks} onKeyDown={event => {
          if (event.key !== "Escape") return;
          event.preventDefault();
          event.stopPropagation();
          setExpanded(null);
          toggles.current[link.href]?.focus();
        }}>{open && <ul aria-label={`${link.label} capabilities`} className={`${styles.flyoutSurface} space-y-1`}>{link.children.map(child => (
          <li key={child.href}>
            <Link href={child.href} prefetch={false} aria-current={current(child.href) ? "location" : undefined} onClick={event => onNavigate(event, child.href)} className={`${styles.submenuLink} ${styles.nestedLink} focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#008995]`}>
              <span>{child.label}</span>
              <ArrowRight size={16} className={styles.rowArrow} aria-hidden="true" />
            </Link>
          </li>
        ))}</ul>}</div>}
      </li>;
    })}
  </ul>;
}
