export type HeaderFeature = {
  label: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

export const headerFeatures: Record<string, readonly HeaderFeature[]> = {
  "/services": [
    {
      label: "White paper",
      title: "Find the right study support",
      description: "Compare full-service CRO, FSP and clinical staffing around your next milestone.",
      href: "/resources/white-papers/choosing-study-support",
      image: "/pageHeader/services.jpg",
    },
    {
      label: "Products",
      title: "Explore TruForm",
      description: "See how ten tools support work across the clinical trial lifecycle.",
      href: "/products",
      image: "/pageHeader/Products.jpg",
    },
  ],
  "/therapeutic-areas": [
    {
      label: "Case study",
      title: "Cardiovascular endpoint review",
      description: "See how sites and an independent committee could coordinate review.",
      href: "/resources/case-studies/cardiovascular-endpoint-review",
      image: "/pageHeader/Cardiovascular.jpg",
    },
    {
      label: "Insight",
      title: "Rare disease study handoffs",
      description: "Follow the information that needs to move between sites and study teams.",
      href: "/resources/insights/rare-disease-study-handoffs",
      image: "/pageHeader/rare-disease.jpg",
    },
  ],
  "/products": [
    {
      label: "Platform spotlight",
      title: "Inside the TruForm ecosystem",
      description: "See where each module fits, from study setup and capture to analysis and reporting.",
      href: "/resources/news/inside-truform",
      image: "/pageHeader/truminds-ai.jpg",
    },
    {
      label: "Case study",
      title: "From capture to reporting",
      description: "Follow a study record through data standards, analysis and clinical reporting.",
      href: "/resources/case-studies/clinical-data-to-reporting",
      image: "/pageHeader/SDTM.jpg",
    },
  ],
  "/giving-back": [
    {
      label: "Community spotlight",
      title: "Mentorship and knowledge sharing",
      description: "Explore how mentorship helps people build practical skills in clinical research.",
      href: "/resources/news/mentorship-and-knowledge-sharing",
      image: "/pageHeader/mentorship.jpg",
    },
    {
      label: "Non-profit",
      title: "Partnerships with purpose",
      description: "Discover the priorities behind our non-profit work and community partnerships.",
      href: "/non-profit",
      image: "/pageHeader/non-profit.jpg",
    },
  ],
  "/resources": [
    {
      label: "Insight",
      title: "Data ready for the next decision",
      description: "Trace how a clinical observation moves from capture to a study review.",
      href: "/resources/insights/clinical-data",
      image: "/images/editorial/resources.jpg",
    },
    {
      label: "White paper",
      title: "Design a risk review workflow",
      description: "Connect study signals with clear owners, decisions and follow-up.",
      href: "/resources/white-papers/designing-a-risk-review-workflow",
      image: "/pageHeader/RBQM.jpg",
    },
  ],
};
