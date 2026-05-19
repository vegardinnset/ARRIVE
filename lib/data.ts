export type WorkflowSlug =
  | "nie-tie"
  | "student-visa"
  | "housing"
  | "banking"
  | "healthcare"
  | "sim-setup";

export type Workflow = {
  slug: WorkflowSlug;
  title: string;
  eyebrow: string;
  summary: string;
  timeframe: string;
  status: "Critical" | "Active" | "Ready" | "Optional";
  progress: number;
  dependency: string;
  officialLink: string;
  documents: string[];
  steps: {
    title: string;
    detail: string;
    estimate: string;
    state: "done" | "active" | "waiting" | "locked";
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const persona = {
  name: "Anika Rao",
  city: "Bangalore",
  destination: "Barcelona",
  university: "Universitat Pompeu Fabra",
  program: "MSc Data Science",
  arrival: "Aug 24, 2026",
  profile: "Non-EU master student",
};

export const phases = [
  {
    title: "Before Arrival",
    window: "Now - Aug 23",
    copy: "Visa, housing, insurance, documents, and appointment prep.",
    progress: 68,
  },
  {
    title: "First Week",
    window: "Aug 24 - Aug 31",
    copy: "City registration, SIM, bank setup, transit, and campus arrival.",
    progress: 18,
  },
  {
    title: "First Month",
    window: "September",
    copy: "TIE appointment, healthcare access, housing stabilization.",
    progress: 10,
  },
  {
    title: "Stabilization",
    window: "Oct - Nov",
    copy: "Renewal reminders, service setup, and bureaucracy follow-through.",
    progress: 4,
  },
  {
    title: "Integration",
    window: "Winter",
    copy: "Language support, peer network, local knowledge, and confidence.",
    progress: 0,
  },
];

export const workflows: Workflow[] = [
  {
    slug: "nie-tie",
    title: "NIE / TIE",
    eyebrow: "Identity card workflow",
    summary:
      "Book cita previa, prepare the EX-17 form, pay Modelo 790 codigo 012, and complete fingerprinting for the TIE after arrival.",
    timeframe: "First 30 days",
    status: "Critical",
    progress: 42,
    dependency: "Requires student visa approval and Barcelona address",
    officialLink: "https://sede.administracionespublicas.gob.es/",
    documents: [
      "Passport and visa page",
      "EX-17 application form",
      "Modelo 790 codigo 012 payment receipt",
      "Recent passport photo",
      "University enrollment proof",
      "Padron or address proof when requested",
    ],
    steps: [
      {
        title: "Confirm visa entry date",
        detail: "Use the entry stamp and visa validity to calculate the TIE filing window.",
        estimate: "5 min",
        state: "done",
      },
      {
        title: "Monitor cita previa availability",
        detail: "Track appointments for Policia - Toma de Huellas in Barcelona province.",
        estimate: "Ongoing",
        state: "active",
      },
      {
        title: "Prepare EX-17 and Modelo 790",
        detail: "Complete the application and pay the official fee before the appointment.",
        estimate: "45 min",
        state: "waiting",
      },
      {
        title: "Attend fingerprinting appointment",
        detail: "Bring originals and copies. Keep the resguardo after submission.",
        estimate: "1-2 hours",
        state: "locked",
      },
    ],
    faqs: [
      {
        question: "Is NIE the same as TIE?",
        answer:
          "The NIE is the foreigner identification number. The TIE is the physical residence card issued to many non-EU students.",
      },
      {
        question: "What if no appointments appear?",
        answer:
          "Availability changes frequently. The product keeps the task open, stores documents, and reminds you when common booking windows reopen.",
      },
    ],
  },
  {
    slug: "student-visa",
    title: "Student Visa",
    eyebrow: "Consulate preparation",
    summary:
      "Organize admission proof, private health insurance, financial means, accommodation evidence, and consulate appointment requirements.",
    timeframe: "6-10 weeks before arrival",
    status: "Critical",
    progress: 76,
    dependency: "Requires university admission letter",
    officialLink: "https://www.exteriores.gob.es/",
    documents: [
      "Admission letter",
      "Passport",
      "Proof of financial means",
      "Private health insurance",
      "Accommodation evidence",
      "Criminal record certificate when required",
      "Medical certificate when required",
    ],
    steps: [
      {
        title: "Validate consulate checklist",
        detail: "Match the Spanish consulate in India requirements to Anika's program length.",
        estimate: "20 min",
        state: "done",
      },
      {
        title: "Collect financial proof",
        detail: "Upload bank statement, sponsor letter, and official translations if needed.",
        estimate: "2-3 days",
        state: "active",
      },
      {
        title: "Confirm insurance coverage",
        detail: "Ensure the policy is valid in Spain and has no copay language that could be rejected.",
        estimate: "30 min",
        state: "waiting",
      },
      {
        title: "Prepare appointment packet",
        detail: "Export a clean consulate packet with originals, copies, and order checklist.",
        estimate: "40 min",
        state: "locked",
      },
    ],
    faqs: [
      {
        question: "Can the school admission letter be digital?",
        answer:
          "Many consulates accept digital letters, but the safest workflow keeps a printed copy and proof that the program is full time.",
      },
      {
        question: "When should the visa be started?",
        answer:
          "The demo timeline starts 8 weeks before arrival because document legalization, insurance, and appointments can introduce delays.",
      },
    ],
  },
  {
    slug: "housing",
    title: "Housing",
    eyebrow: "Safe arrival base",
    summary:
      "Compare verified rooms, identify deposit risk, store contracts, and connect address proof to later TIE and banking steps.",
    timeframe: "Before arrival",
    status: "Active",
    progress: 58,
    dependency: "Supports banking, padron, and TIE workflows",
    officialLink: "https://www.habitatge.barcelona/",
    documents: [
      "Rental contract or booking confirmation",
      "Landlord contact",
      "Deposit receipt",
      "Passport copy",
      "University admission proof",
    ],
    steps: [
      {
        title: "Shortlist verified neighborhoods",
        detail: "Balance commute, budget, lease flexibility, and student safety signals.",
        estimate: "25 min",
        state: "done",
      },
      {
        title: "Review deposit risk",
        detail: "Flag pressure tactics, unverified listings, unusual transfer requests, and missing contracts.",
        estimate: "15 min",
        state: "active",
      },
      {
        title: "Store arrival address",
        detail: "Connect the address to SIM, banking, university registration, and TIE prep.",
        estimate: "10 min",
        state: "waiting",
      },
      {
        title: "Prepare padron path",
        detail: "Identify whether the housing document can support municipal registration.",
        estimate: "20 min",
        state: "locked",
      },
    ],
    faqs: [
      {
        question: "Can a temporary room work for TIE?",
        answer:
          "It can help with initial onboarding, but longer-term address proof is often needed for municipal or administrative steps.",
      },
      {
        question: "How does the product reduce scam risk?",
        answer:
          "It converts peer reports, document checks, and verified listing signals into visible risk states before payment.",
      },
    ],
  },
  {
    slug: "banking",
    title: "Banking",
    eyebrow: "Financial setup",
    summary:
      "Prepare account options, required identification, proof of study, and temporary alternatives while waiting for NIE/TIE.",
    timeframe: "First week",
    status: "Ready",
    progress: 24,
    dependency: "May require passport, admission letter, and Spanish address",
    officialLink: "https://www.bde.es/",
    documents: [
      "Passport",
      "Admission letter",
      "Spanish address",
      "NIE or visa page when available",
      "Phone number",
    ],
    steps: [
      {
        title: "Choose banking path",
        detail: "Compare student-friendly options and temporary fintech bridge accounts.",
        estimate: "15 min",
        state: "done",
      },
      {
        title: "Prepare identity packet",
        detail: "Keep passport, visa page, admission letter, and address together.",
        estimate: "10 min",
        state: "active",
      },
      {
        title: "Open account or bridge wallet",
        detail: "Use the lowest-friction option until TIE is issued.",
        estimate: "45 min",
        state: "waiting",
      },
      {
        title: "Connect rent and tuition payments",
        detail: "Set reminders for first rent, deposit, tuition, and local transfers.",
        estimate: "20 min",
        state: "locked",
      },
    ],
    faqs: [
      {
        question: "Can Anika open an account before TIE?",
        answer:
          "Some options accept passport and student proof, while others ask for NIE/TIE. The workflow keeps both routes visible.",
      },
      {
        question: "Why connect banking to housing?",
        answer:
          "Deposits, rent, and fraud risk become easier to manage when banking tasks understand housing status.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    eyebrow: "Coverage and care",
    summary:
      "Track private insurance validity, university clinic options, pharmacy basics, and the path toward local care access.",
    timeframe: "Before arrival and first month",
    status: "Ready",
    progress: 36,
    dependency: "Visa insurance should satisfy consulate requirements",
    officialLink: "https://catsalut.gencat.cat/",
    documents: [
      "Insurance certificate",
      "Policy terms",
      "Passport",
      "University enrollment",
      "Address proof",
    ],
    steps: [
      {
        title: "Check visa-compatible policy",
        detail: "Confirm dates, coverage area, and rejection-risk wording.",
        estimate: "20 min",
        state: "done",
      },
      {
        title: "Save emergency care map",
        detail: "Store nearby urgent care, pharmacies, and university health resources.",
        estimate: "10 min",
        state: "active",
      },
      {
        title: "Create medication plan",
        detail: "Prepare prescriptions, translated names, and refill timing.",
        estimate: "30 min",
        state: "waiting",
      },
      {
        title: "Review local access after arrival",
        detail: "Understand when and how Catalan public health access may apply.",
        estimate: "25 min",
        state: "locked",
      },
    ],
    faqs: [
      {
        question: "Does private insurance replace all local care?",
        answer:
          "For visa purposes it may be required, but daily care depends on the policy, university support, and local eligibility.",
      },
      {
        question: "Why include healthcare in relocation infrastructure?",
        answer:
          "Health uncertainty is one of the fastest ways relocation becomes emotionally unsafe, so the workflow is visible early.",
      },
    ],
  },
  {
    slug: "sim-setup",
    title: "SIM Setup",
    eyebrow: "Connectivity on day one",
    summary:
      "Plan roaming, eSIM backup, local SIM activation, Spanish phone number needs, and appointment dependencies.",
    timeframe: "Arrival day",
    status: "Optional",
    progress: 12,
    dependency: "Banking and appointments often need a reachable phone number",
    officialLink: "https://www.usuariosteleco.gob.es/",
    documents: ["Passport", "Local address", "Payment card", "Unlocked phone"],
    steps: [
      {
        title: "Check phone compatibility",
        detail: "Confirm eSIM support, unlocked status, and roaming fallback.",
        estimate: "5 min",
        state: "done",
      },
      {
        title: "Select arrival connectivity plan",
        detail: "Choose eSIM bridge or local prepaid SIM for the first week.",
        estimate: "10 min",
        state: "active",
      },
      {
        title: "Activate Spanish number",
        detail: "Use passport registration and store the number in Open Transition.",
        estimate: "30 min",
        state: "waiting",
      },
      {
        title: "Attach number to appointments",
        detail: "Update university, banking, housing, and TIE reminders.",
        estimate: "15 min",
        state: "locked",
      },
    ],
    faqs: [
      {
        question: "Is a Spanish number required immediately?",
        answer:
          "Not always, but it reduces friction for delivery, banking, appointments, and local support.",
      },
      {
        question: "Why is this a workflow?",
        answer:
          "Connectivity touches every stressful first-week action, so the product treats it as infrastructure.",
      },
    ],
  },
];

export const tasks = [
  {
    title: "Upload financial means proof",
    workflow: "Student Visa",
    urgency: "Due in 3 days",
    status: "Needs review",
    duration: "18 min",
    docs: ["Bank statement", "Sponsor letter"],
    tip: "Students from India often prepare one extra stamped copy for the consulate packet.",
  },
  {
    title: "Monitor TIE fingerprint appointments",
    workflow: "NIE / TIE",
    urgency: "High priority",
    status: "In progress",
    duration: "Ongoing",
    docs: ["Passport", "Visa approval", "EX-17 draft"],
    tip: "Most students keep alerts active during early morning and late evening appointment releases.",
  },
  {
    title: "Verify housing deposit before transfer",
    workflow: "Housing",
    urgency: "Before payment",
    status: "Risk check",
    duration: "12 min",
    docs: ["Contract", "Landlord ID", "Payment request"],
    tip: "Never send a deposit when the contract address, landlord name, and payment recipient do not match.",
  },
  {
    title: "Choose arrival SIM backup",
    workflow: "SIM Setup",
    urgency: "Arrival day",
    status: "Ready",
    duration: "7 min",
    docs: ["Unlocked phone", "Passport"],
    tip: "A temporary eSIM keeps maps, messaging, and appointment codes working before a Spanish number is active.",
  },
];

export const reminders = [
  {
    title: "Consulate packet review",
    time: "Tomorrow, 16:30",
    type: "Document check",
  },
  {
    title: "Housing deposit risk scan",
    time: "Friday",
    type: "Before transfer",
  },
  {
    title: "TIE cita availability sweep",
    time: "Daily",
    type: "Appointment monitor",
  },
];

export const communityUpdates = [
  {
    title: "Cita previa release pattern updated",
    author: "Verified student contributor",
    detail: "Barcelona fingerprinting appointments have appeared more often after 08:00 this week.",
    status: "Verified",
    time: "2 hours ago",
  },
  {
    title: "Insurance wording warning",
    author: "University mobility office",
    detail: "Policies with explicit copay language are being flagged by some consulate reviewers.",
    status: "University reviewed",
    time: "Yesterday",
  },
  {
    title: "Housing scam report clustered",
    author: "Peer network",
    detail: "Three students reported the same deposit request pattern around unverified Eixample listings.",
    status: "Moderating",
    time: "2 days ago",
  },
];
