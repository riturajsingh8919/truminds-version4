export type PageHeaderImage = { src: string; alt: string; width: number; height: number };

// Shared landscape assets for inner-page headers and related service cards; homepage images remain separate.
export const pageHeaderImages: Record<string, PageHeaderImage> = {
  "/about-us": {
    "src": "/pageHeader/about.jpg",
    "alt": "Three healthcare professionals standing together",
    "width": 8192,
    "height": 5464
  },
  "/services": {
    "src": "/pageHeader/services.jpg",
    "alt": "Clinical professionals collaborating in a healthcare setting",
    "width": 6192,
    "height": 4128
  },
  "/services/full-service-cro": {
    "src": "/pageHeader/full-service-cro.jpg",
    "alt": "Clinical professionals discussing research at a computer",
    "width": 8688,
    "height": 5792
  },
  "/services/truminds-ai": {
    "src": "/pageHeader/truminds-ai.jpg",
    "alt": "Researchers reviewing digital brain imaging together",
    "width": 5472,
    "height": 3648
  },
  "/services/fsp-services": {
    "src": "/pageHeader/fsp-services.jpg",
    "alt": "A team of clinical specialists working together in a laboratory",
    "width": 5568,
    "height": 3712
  },
  "/services/clinical-staffing": {
    "src": "/pageHeader/clinical-staffing.jpg",
    "alt": "A multidisciplinary team of healthcare professionals",
    "width": 5200,
    "height": 3470
  },
  "/therapeutic-areas": {
    "src": "/pageHeader/therapeutic-areas.jpg",
    "alt": "Healthcare professionals supporting a patient at their bedside",
    "width": 8256,
    "height": 5504
  },
  "/therapeutic-areas/oncology-hematology": {
    "src": "/pageHeader/oncology.jpg",
    "alt": "A clinician consulting with a patient",
    "width": 5500,
    "height": 3667
  },
  "/therapeutic-areas/cardiovascular": {
    "src": "/pageHeader/Cardiovascular.jpg",
    "alt": "Clinical researchers discussing heart and cardiovascular findings",
    "width": 5530,
    "height": 3687
  },
  "/therapeutic-areas/neuroscience": {
    "src": "/pageHeader/Neuroscience.JPG",
    "alt": "Researchers reviewing brain scans on a digital display",
    "width": 6000,
    "height": 4000
  },
  "/therapeutic-areas/immunology": {
    "src": "/pageHeader/Immunology.jpg",
    "alt": "Researchers discussing molecular findings in a laboratory",
    "width": 8256,
    "height": 5504
  },
  "/therapeutic-areas/infectious-diseases": {
    "src": "/pageHeader/infectious-disease.jpg",
    "alt": "Medical professionals wearing protective equipment",
    "width": 6000,
    "height": 4000
  },
  "/therapeutic-areas/rare-diseases": {
    "src": "/pageHeader/rare-disease.JPG",
    "alt": "A medical team examining a child with their family",
    "width": 5616,
    "height": 3744
  },
  "/therapeutic-areas/endocrinology": {
    "src": "/pageHeader/Endocrinology.jpg",
    "alt": "Clinicians reviewing an anatomical model together",
    "width": 6842,
    "height": 4561
  },
  "/therapeutic-areas/ophthalmology": {
    "src": "/pageHeader/Ophthalmology.jpg",
    "alt": "A clinician examining an anatomical eye model",
    "width": 8192,
    "height": 4881
  },
  "/products": {
    "src": "/pageHeader/Products.jpg",
    "alt": "Clinical research samples and laboratory supplies",
    "width": 5184,
    "height": 3539
  },
  "/truminds-ai/truform-edc": {
    "src": "/pageHeader/EDC.jpg",
    "alt": "Clinical researchers reviewing information on a laboratory display",
    "width": 7000,
    "height": 4667
  },
  "/truminds-ai/truform-sdtm": {
    "src": "/pageHeader/SDTM.jpg",
    "alt": "Laboratory researchers discussing study findings at a computer",
    "width": 7887,
    "height": 5261
  },
  "/truminds-ai/truform-adam": {
    "src": "/pageHeader/ADaM.jpg",
    "alt": "Researchers reviewing clinical information together",
    "width": 6845,
    "height": 4278
  },
  "/truminds-ai/truform-tlf": {
    "src": "/pageHeader/TLF.jpg",
    "alt": "Laboratory scientists examining a sample together",
    "width": 8000,
    "height": 5336
  },
  "/truminds-ai/truform-docuvault": {
    "src": "/pageHeader/DocuVault.jpg",
    "alt": "A laboratory researcher reviewing study information",
    "width": 8554,
    "height": 5703
  },
  "/truminds-ai/truform-econsent": {
    "src": "/pageHeader/eConsent.jpg",
    "alt": "A clinician discussing information with a patient",
    "width": 7008,
    "height": 4672
  },
  "/truminds-ai/truform-adjudication": {
    "src": "/pageHeader/Adjudication.jpg",
    "alt": "Laboratory scientists examining samples together",
    "width": 6000,
    "height": 4000
  },
  "/truminds-ai/truform-rbqm": {
    "src": "/pageHeader/RBQM.jpg",
    "alt": "Researchers assessing samples and laboratory findings",
    "width": 5805,
    "height": 3870
  },
  "/truminds-ai/truform-ctms": {
    "src": "/pageHeader/CTMS.jpg",
    "alt": "Clinical researchers discussing study activities",
    "width": 5147,
    "height": 3431
  },
  "/truminds-ai/truform-rtsm": {
    "src": "/pageHeader/RTSM.jpg",
    "alt": "Laboratory researchers reviewing a sample vial",
    "width": 6240,
    "height": 4160
  },
  "/giving-back": {
    "src": "/pageHeader/giving-back.jpg",
    "alt": "A group of healthcare professionals joining hands",
    "width": 7008,
    "height": 4672
  },
  "/giving-back/non-profit-research-organizations": {
    "src": "/pageHeader/non-profit.jpg",
    "alt": "A diverse group of healthcare professionals standing together",
    "width": 5360,
    "height": 3574
  },
  "/giving-back/employee-volunteer-programs": {
    "src": "/pageHeader/volunterr-program.jpg",
    "alt": "Community members supporting and connecting with one another",
    "width": 8153,
    "height": 5435
  },
  "/giving-back/community-outreach": {
    "src": "/pageHeader/community-outreach.jpg",
    "alt": "Healthcare professionals collaborating around a meeting table",
    "width": 6720,
    "height": 4480
  },
  "/giving-back/mentorship-programs": {
    "src": "/pageHeader/mentorship.jpg",
    "alt": "Clinical colleagues sharing knowledge in a team discussion",
    "width": 6720,
    "height": 4168
  },
  "/resources": {
    "src": "/pageHeader/resources.jpg",
    "alt": "A healthcare professional carrying research documents",
    "width": 6008,
    "height": 4092
  },
  "/contact-us": {
    "src": "/pageHeader/contact-us.jpg",
    "alt": "Two healthcare professionals reviewing information on a laptop",
    "width": 7732,
    "height": 5155
  },
  "/non-profit": {
    "src": "/pageHeader/non-profit.jpg",
    "alt": "A diverse group of healthcare professionals standing together",
    "width": 5360,
    "height": 3574
  },
  "/careers": {
    "src": "/pageHeader/clinical-staffing.jpg",
    "alt": "A multidisciplinary team of healthcare professionals",
    "width": 5200,
    "height": 3470
  }
};

export function getPageHeaderImage(path: string) {
  const image = pageHeaderImages[path];
  if (!image) throw new Error(`Missing page header image for ${path}`);
  return image;
}
