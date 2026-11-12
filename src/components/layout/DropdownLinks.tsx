"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";
import { headerFeatures } from "@/data/header-features";
import type { HeaderItem, HeaderLink } from "@/data/header-navigation";
import styles from "./Header.module.css";

type Props = {
  item: HeaderItem;
  idPrefix: string;
  pathname: string;
  fragment: string;
  mobile?: boolean;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const linkFocus = "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#008995]";

export function DropdownLinks({ item, idPrefix, pathname, fragment, mobile = false, onNavigate }: Props) {
  const links = item.children ?? [];
  const features = headerFeatures[item.href] ?? [];
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggles = useRef<Record<string, HTMLButtonElement | null>>({});

  function renderBranch(link: HeaderLink, index: number) {
    const open = expanded === link.href;
    const id = `${idPrefix}-nested-${index}`;
    return (
      <section
        key={link.href}
        id={id}
        hidden={!open}
        aria-labelledby={`${id}-title`}
        className={styles.nestedLinks}
        onKeyDown={event => {
          if (event.key !== "Escape") return;
          event.preventDefault();
          event.stopPropagation();
          setExpanded(null);
          toggles.current[link.href]?.focus();
        }}
      >
        <h2 id={`${id}-title`} className={styles.columnTitle}>{link.label} capabilities</h2>
        {open && <ul className={styles.branchGrid}>
          {link.children?.map(child => (
            <li key={child.href}>
              <Link
                href={child.href}
                prefetch={false}
                aria-current={pathname + fragment === child.href ? "location" : undefined}
                onClick={event => onNavigate(event, child.href)}
                className={`${styles.submenuLink} ${linkFocus}`}
              >
                <span>{child.label}</span>
                <ArrowRight size={16} className={styles.rowArrow} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>}
      </section>
    );
  }

  return (
    <div className={styles.megaInner} data-mobile-menu={mobile || undefined}>
      <div className={styles.megaPrimary}>
        {!mobile && <h2 className={styles.columnTitle}>{item.label}</h2>}
        <ul aria-label={`${item.label} pages`} className={styles.linkGrid} data-multi-column={links.length > 6 || undefined}>
          {links.map((link, index) => {
            const open = expanded === link.href;
            const id = `${idPrefix}-nested-${index}`;
            return (
              <li key={link.href}>
                <div className="flex items-center gap-1">
                  <Link
                    href={link.href}
                    prefetch={false}
                    aria-current={pathname === link.href ? "page" : undefined}
                    onClick={event => onNavigate(event, link.href)}
                    onPointerEnter={event => {
                      if (!mobile && event.pointerType === "mouse") {
                        setExpanded(link.children ? link.href : null);
                      }
                    }}
                    className={`${styles.submenuLink} min-w-0 flex-1 ${linkFocus}`}
                  >
                    <span>{link.label}</span>
                    {!link.children && <ArrowRight size={17} className={styles.rowArrow} aria-hidden="true" />}
                  </Link>
                  {link.children && (
                    <button
                      ref={element => { toggles.current[link.href] = element; }}
                      type="button"
                      aria-label={`${open ? "Hide" : "Show"} ${link.label} capabilities`}
                      aria-controls={id}
                      aria-expanded={open}
                      onClick={() => setExpanded(open ? null : link.href)}
                      onKeyDown={event => {
                        if (event.key !== "ArrowDown") return;
                        event.preventDefault();
                        event.stopPropagation();
                        setExpanded(link.href);
                        requestAnimationFrame(() => document.getElementById(id)?.querySelector<HTMLAnchorElement>("a")?.focus());
                      }}
                      className={`${styles.nestedDisclosure} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008995]`}
                    >
                      <ChevronDown size={18} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {mobile && link.children && renderBranch(link, index)}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.megaSecondary}>
        {!mobile && links.map((link, index) => link.children && renderBranch(link, index))}
        {(mobile || !expanded) && features.length > 0 && (
          <section aria-labelledby={`${idPrefix}-features`} className={styles.featureSection}>
            <h2 id={`${idPrefix}-features`} className={styles.featureHeading}>Explore further</h2>
            <ul className={styles.featureGrid}>
              {features.map(feature => (
                <li key={feature.href}>
                  <Link
                    href={feature.href}
                    prefetch={false}
                    onClick={event => onNavigate(event, feature.href)}
                    className={`${styles.featureCard} ${linkFocus}`}
                  >
                    <span className={styles.featurePhoto}>
                      <Image src={feature.image} alt="" fill sizes="(min-width: 1440px) 300px, (min-width: 1024px) 23vw, 88px" className="object-cover" />
                    </span>
                    <span className={styles.featureCopy}>
                      <span className={styles.featureLabel}>{feature.label}</span>
                      <span className={styles.featureTitle}>{feature.title}<ArrowUpRight size={17} aria-hidden="true" /></span>
                      <span className={styles.featureDescription}>{feature.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
