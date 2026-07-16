/* Landing-page section listing every city we serve. Cities without a
   dedicated page link here until one is built for them. */
export const CITY_SECTION_HREF = "/#cities";

export const CITIES = [
  { name: "Delhi", href: "/delhi" },
  { name: "Mumbai", href: CITY_SECTION_HREF },
  { name: "Bangalore", href: CITY_SECTION_HREF },
  { name: "Kolkata", href: CITY_SECTION_HREF },
  { name: "Ahmedabad", href: CITY_SECTION_HREF },
  { name: "Pune", href: CITY_SECTION_HREF },
  { name: "Lucknow", href: CITY_SECTION_HREF },
  { name: "Indore", href: CITY_SECTION_HREF },
  { name: "Bhopal", href: CITY_SECTION_HREF },
];

export const CITY_NAV_ITEMS = CITIES.map(({ name, href }) => ({
  label: name,
  href,
}));
