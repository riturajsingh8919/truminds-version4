export const therapeuticAreas = [
  {
    slug: "oncology-hematology",
    title: "Oncology & Hematology",
    image: "/images/editorial/area-oncology.jpg",
    imagePosition: "44% center",
    detail: "Study support for evolving therapies and complex clinical endpoints.",
    overview:
      "Oncology and hematology programs often involve changing standards of care, varied patient populations and endpoints that need careful interpretation.",
    approach:
      "A connected study team can bring clinical operations, data management and specialist review together around the evidence each program needs to build.",
    focus: [
      { title: "Patient pathways", text: "Plan study activities around the people and sites involved in complex care." },
      { title: "Endpoint clarity", text: "Keep assessment definitions and review needs visible across the study." },
      { title: "Connected evidence", text: "Link clinical observations and data workflows so decisions have context." },
    ],
  },
  {
    slug: "cardiovascular",
    title: "Cardiovascular",
    image: "/images/editorial/area-cardiovascular.jpg",
    imagePosition: "50% center",
    detail: "Thoughtful trial delivery across heart and vascular health.",
    overview:
      "Cardiovascular research depends on well-defined outcomes, consistent follow-up and coordination across clinical settings.",
    approach:
      "Study operations and data review work best when teams share a clear view of assessments, milestones and participant progress.",
    focus: [
      { title: "Outcome measures", text: "Align data collection with the clinical questions the study is designed to answer." },
      { title: "Site coordination", text: "Support consistent execution across participating clinical teams." },
      { title: "Follow-up data", text: "Keep longitudinal information organized for review and interpretation." },
    ],
  },
  {
    slug: "neuroscience",
    title: "Neuroscience",
    image: "/images/editorial/area-neuroscience.jpg",
    imagePosition: "61% center",
    detail: "Clearer evidence pathways for neurological and CNS programs.",
    overview:
      "Neuroscience studies can involve nuanced assessments, changing symptoms and outcomes measured over time.",
    approach:
      "Thoughtful planning helps clinical and data teams maintain consistency while staying attentive to the patient experience.",
    focus: [
      { title: "Assessment consistency", text: "Keep clinical measures clear for the people collecting and reviewing them." },
      { title: "Patient experience", text: "Consider the practical demands of visits and repeated assessments." },
      { title: "Data continuity", text: "Preserve context as observations are collected across time and sites." },
    ],
  },
  {
    slug: "immunology",
    title: "Immunology",
    image: "/images/editorial/area-immunology.jpg",
    imagePosition: "54% center",
    detail: "Adaptive research support for immune-mediated conditions.",
    overview:
      "Immune-mediated conditions can vary widely in presentation, treatment pathways and measures of response.",
    approach:
      "A study needs enough structure for consistent evidence, alongside the flexibility to handle the realities of each condition and patient population.",
    focus: [
      { title: "Study design context", text: "Keep disease characteristics visible when planning assessments and operations." },
      { title: "Response measures", text: "Support clear collection and review of the outcomes that matter to a program." },
      { title: "Team alignment", text: "Connect scientific, clinical and data perspectives throughout delivery." },
    ],
  },
  {
    slug: "infectious-diseases",
    title: "Infectious Diseases",
    image: "/images/editorial/area-infectious.jpg",
    imagePosition: "46% center",
    detail: "Agile study operations for infection and vaccine research.",
    overview:
      "Infectious disease programs may need to respond to changing patterns of disease, enrollment opportunities and time-sensitive assessments.",
    approach:
      "Clear operating plans and reliable information flow help teams act quickly without losing the rigor of the study.",
    focus: [
      { title: "Responsive operations", text: "Adapt site and study activity as conditions change." },
      { title: "Timely data", text: "Keep important observations available for prompt review." },
      { title: "Coordinated teams", text: "Maintain alignment across clinical, laboratory and data functions." },
    ],
  },
  {
    slug: "rare-diseases",
    title: "Rare Diseases",
    image: "/images/editorial/area-rare.jpg",
    imagePosition: "44% center",
    detail: "Careful execution when study populations are small and every data point matters.",
    overview:
      "Rare disease research often asks teams to work with small, widely distributed populations and highly specific clinical questions.",
    approach:
      "Every visit and observation carries weight. Thoughtful coordination can help reduce friction for patients and preserve the value of the evidence collected.",
    focus: [
      { title: "Participant pathways", text: "Plan around access, travel and the practical experience of taking part." },
      { title: "Focused evidence", text: "Keep assessments aligned with the condition and the study objectives." },
      { title: "Study continuity", text: "Support careful follow-up and clear handoffs across a distributed program." },
    ],
  },
  {
    slug: "endocrinology",
    title: "Endocrinology",
    image: "/images/editorial/area-endocrinology.jpg",
    imagePosition: "51% center",
    detail: "Evidence-led support for metabolic and hormonal research.",
    overview:
      "Endocrinology studies often rely on repeat measurements, participant routines and a clear view of change over time.",
    approach:
      "Connected collection and review workflows help teams make sense of metabolic and hormonal evidence in the context of each study.",
    focus: [
      { title: "Consistent measures", text: "Support reliable collection of clinical and patient-reported information." },
      { title: "Participant routines", text: "Consider how study requirements fit into everyday care and behavior." },
      { title: "Longitudinal view", text: "Keep trends and follow-up information clear across the program." },
    ],
  },
  {
    slug: "ophthalmology",
    title: "Ophthalmology",
    image: "/images/editorial/area-ophthalmology.jpg",
    imagePosition: "58% center",
    detail: "Specialist attention to vision outcomes and precise endpoints.",
    overview:
      "Ophthalmology research calls for precise assessments and careful attention to how vision outcomes are measured.",
    approach:
      "Clear methods, consistent site execution and organized review help teams connect clinical findings to the questions a study needs to answer.",
    focus: [
      { title: "Vision endpoints", text: "Keep outcome definitions and assessment methods consistent." },
      { title: "Specialist workflows", text: "Support the practical needs of eye-care sites and study teams." },
      { title: "Review clarity", text: "Organize findings so changes can be examined with the right context." },
    ],
  },
] as const;

export type TherapeuticArea = (typeof therapeuticAreas)[number];
