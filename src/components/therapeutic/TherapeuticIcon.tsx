import { Activity, Brain, Database, Dna, Eye, Globe2, HeartPulse, Microscope, Network, ShieldPlus, Stethoscope, Target, UsersRound } from "lucide-react";

const icons = {
  oncology: Dna,
  cardiovascular: HeartPulse,
  neuroscience: Brain,
  immunology: ShieldPlus,
  infectious: Microscope,
  rare: UsersRound,
  endocrinology: Activity,
  ophthalmology: Eye,
  research: Microscope,
  network: Network,
  activity: Activity,
  global: Globe2,
  people: UsersRound,
  target: Target,
  data: Database,
  clinical: Stethoscope,
};

export function TherapeuticIcon({name,size=24,className}:{name:string;size?:number;className?:string}) {
  const Icon = icons[name as keyof typeof icons] ?? Stethoscope;
  return <Icon size={size} strokeWidth={1.6} className={className} aria-hidden="true" />;
}
