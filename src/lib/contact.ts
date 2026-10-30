import contact from "@/data/contact.json";

export const contactDetails = {
  email: contact.email,
  phone: contact.phone,
  phoneHref: contact.phoneHref,
};
export const contactOffices = contact.offices;
export type ContactOffice = (typeof contactOffices)[number];

export function officeMapUrl(office: ContactOffice) {
  const query = [...office.address, office.country].join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
