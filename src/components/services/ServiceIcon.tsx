import {
  BadgeCheck,
  BookOpen,
  ChartColumn,
  ClipboardList,
  Code2,
  Database,
  FileCheck2,
  FlaskConical,
  Globe2,
  Layers3,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const icons = {
  project: ClipboardList,
  operations: Stethoscope,
  data: Database,
  statistics: ChartColumn,
  programming: Code2,
  regulatory: FileCheck2,
  medical: BookOpen,
  safety: ShieldCheck,
  quality: BadgeCheck,
  platform: Layers3,
  team: UsersRound,
  global: Globe2,
  scale: SlidersHorizontal,
  science: FlaskConical,
};

export function ServiceIcon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = icons[name as keyof typeof icons] ?? Layers3;
  return <Icon size={size} strokeWidth={1.6} className={className} aria-hidden="true" />;
}
