import { Accessibility, BookOpen, Boxes, GraduationCap, HandHeart, HeartHandshake, HeartPulse, House, Microscope, PawPrint, Sprout, UsersRound, Utensils, type LucideProps } from "lucide-react";

const icons = {
  research: Microscope,
  volunteer: HandHeart,
  community: UsersRound,
  mentorship: GraduationCap,
  meals: Utensils,
  housing: House,
  animals: PawPrint,
  food: Boxes,
  education: BookOpen,
  accessibility: Accessibility,
  care: HeartPulse,
  relief: HeartHandshake,
  purpose: Sprout,
};

export function GivingBackIcon({ name, ...props }: LucideProps & { name: string }) {
  const Icon = icons[name as keyof typeof icons] ?? HeartHandshake;
  return <Icon size={25} strokeWidth={1.65} aria-hidden="true" {...props} />;
}
