// Content scraped + lightly hand-cleaned from fraziergills.com (May 2026).
// Demo content only — replace anything identifying real engagements before
// any prospect actually reads this site.

export const firm = {
  name: "Frazier Gills, P.C.",
  shortName: "Frazier Gills",
  city: "Dallas",
  region: "Dallas–Fort Worth",
  founded: 1992,
  tagline: "Smart accounting. Real impact. Dallas roots.",
  description:
    "Independent Dallas–Fort Worth CPA firm specializing in IRS tax resolution, fractional CFO services, and accounting for small and mid-sized businesses, nonprofits, and contractors.",
  guarantee:
    "If anything we do falls short of your expectations, you decide what's fair — even if that means a refund.",
};

export const contact = {
  phone: "214-337-5000",
  phoneDisplay: "(214) 337-5000",
  email: "fgacontact@fraziergills.com",
  addressLines: ["400 S. Zang Blvd., Suite 330", "Dallas, TX 75208"],
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  detail: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "tax-irs-resolution",
    name: "Tax & IRS Resolution",
    short:
      "Behind on payroll taxes, six figures of debt, an audit notice in the mail — we've untangled all of it.",
    detail:
      "Frazier Gills is a Dallas-based IRS tax debt resolution practice. We work nationwide for businesses and individuals dealing with back taxes, payroll-tax exposure, audits, and penalty notices.",
    bullets: [
      "Back taxes & unfiled returns",
      "Offers in compromise",
      "Penalty abatement",
      "IRS audit defense",
      "Payroll-tax resolution",
      "Form 990 / 990-EZ",
    ],
  },
  {
    slug: "fractional-cfo",
    name: "Fractional CFO & Advisory",
    short:
      "Senior financial leadership without the senior salary — built for startups, growing SMBs, and contractors.",
    detail:
      "Outsourced CFO services for businesses that have outgrown their bookkeeper but aren't ready for a full-time hire. We sit in your monthly close, drive cash-flow planning, and translate financials for boards and lenders.",
    bullets: [
      "Cash-flow forecasting",
      "Budgeting & variance analysis",
      "Lender & investor reporting",
      "Strategic finance",
      "M&A diligence support",
      "Board-ready financials",
    ],
  },
  {
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    short:
      "Clean books, on time, every month — the foundation everything else is built on.",
    detail:
      "Monthly close, GAAP-aligned reporting, payroll, and QuickBooks management. Audit-ready records that hold up to lender, IRS, and grantor scrutiny.",
    bullets: [
      "Monthly close & reporting",
      "QuickBooks setup & cleanup",
      "Payroll administration",
      "1099 / W-2 filing",
      "AP / AR management",
      "Sales-tax filings",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

const UNSPLASH = "https://images.unsplash.com/photo-";
const IMG = "w=1200&q=80&auto=format&fit=crop";

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    blurb:
      "Job costing, percentage-of-completion accounting, and bonding-ready financials for GCs, subs, and developers across DFW.",
    image: `${UNSPLASH}1503387762-592deb58ef4e?${IMG}`,
  },
  {
    slug: "medical-healthcare",
    name: "Medical & Healthcare",
    blurb:
      "Practice accounting, physician compensation models, and tax planning for clinicians, dental groups, and specialty practices.",
    image: `${UNSPLASH}1576091160550-2173dba999ef?${IMG}`,
  },
  {
    slug: "nonprofit",
    name: "Nonprofit & 501(c)(3)",
    blurb:
      "Form 990s, functional expense allocation, and board-ready reporting for Dallas-area charities, churches, and advocacy groups.",
    image: `${UNSPLASH}1559523161-0fc0d8b38a7a?${IMG}`,
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    blurb:
      "PCs, LLCs, and LLPs — legal, real estate, consulting. Owner-comp planning, S-corp elections, and quarterly tax strategy.",
    image: `${UNSPLASH}1497366216548-37526070297c?${IMG}`,
  },
];

export type Differentiator = {
  title: string;
  detail: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "We're advisors, not just accountants",
    detail:
      "Our work doesn't end when the engagement does. We offer forward-thinking insights that help you make smarter decisions and grow with confidence.",
  },
  {
    title: "We show up when it matters",
    detail:
      "We're not just a Zoom firm. When you need us at your office, your bank, or in front of an IRS officer — we'll be there in person.",
  },
  {
    title: "We back it with a guarantee",
    detail:
      "If anything we do falls short of your expectations, you decide what's fair — even if that means a refund. Just tell us where we missed, so we can fix it.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// All quotes pulled verbatim from fraziergills.com/testimonials.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I can't say enough good things about Frazier Gills. My wife and I became very delinquent with taxes — over $100K, more than six years in exposure. We didn't think we could turn the corner. FGA was understanding, caring, and very strategic. They got us right.",
    name: "Tax-resolution client",
    role: "Dallas, TX",
  },
  {
    quote:
      "One of the smartest decisions I made as a business owner was engaging Frazier Gills. They've provided proactive information and wise counsel that has helped me make informed decisions for over twenty years.",
    name: "Long-time business client",
    role: "20-year relationship",
  },
  {
    quote:
      "Frazier Gills is the CPA firm you want on your side. Yolanda is the consummate professional. What we appreciate most is that she gives it to you straight — she doesn't make you feel good, she gives you the real scoop. That's why we hire her.",
    name: "Mid-sized firm CFO",
    role: "Texas",
  },
];

export const stats = [
  { value: "30+", label: "Years serving DFW" },
  { value: "500+", label: "Businesses & nonprofits served" },
  { value: "$100M+", label: "IRS debt resolved" },
  { value: "100%", label: "Satisfaction-or-refund guarantee" },
];

export const credentials = [
  "AICPA",
  "ASTPS",
  "NATP",
  "QuickBooks ProAdvisor",
  "Form 990",
  "Offer in Compromise",
  "Payroll-Tax Resolution",
  "IRS Audit Defense",
  "Penalty Abatement",
  "Fractional CFO",
  "GAAP Reporting",
  "Cash-Flow Forecasting",
  "501(c)(3) Compliance",
  "Texas Franchise Tax",
];

export const heroPortrait = `${UNSPLASH}1573497019940-1c28c88b4f3e?w=1200&q=85&auto=format&fit=crop`;

export type LifestyleShot = { image: string; title: string; caption: string };

export const lifestyle: LifestyleShot[] = [
  {
    image: `${UNSPLASH}1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop`,
    title: "Real conversations",
    caption:
      "We sit at the table. Twenty-minute scoping calls turn into real partnerships.",
  },
  {
    image: `${UNSPLASH}1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop`,
    title: "Books that hold up",
    caption:
      "Monthly closes that survive lender, IRS, and grantor scrutiny — without surprises.",
  },
  {
    image: `${UNSPLASH}1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop`,
    title: "On-site when it matters",
    caption:
      "We're not just a Zoom firm. When you need us in person, we'll be there.",
  },
];

export const cityscapeImage = `${UNSPLASH}1496449903678-68ddcb189a24?w=2000&q=80&auto=format&fit=crop`;
