export type Locale = "en" | "it";

const translationsData = {
  en: {
    // Header
    header: {
      nav: {
        services: "Services",
        approach: "Approach",
        work: "Work",
        contact: "Contact",
      },
      cta: "Get in Touch",
    },

    // Hero
    hero: {
      eyebrow: "",
      headline: {
        line1: "We Build What",
        line2: "Others Can't",
      },
      subheadline:
        "Premium software development, AI solutions, design and strategic consulting. We transform ambitious ideas into exceptional digital products.",
      cta: {
        primary: "Request a Consultation",
        secondary: "View Our Work",
      },
      stats: {
        projects: { value: "", label: "" },
        countries: { value: "", label: "" },
        retention: { value: "", label: "" },
        founded: { value: "", label: "" },
      },
      scroll: "Scroll",
    },

    // About
    about: {
      eyebrow: "Who We Are",
      headline: "A team obsessed with craft and precision",
      description: {
        p1: "We're a software studio that partners with ambitious companies to build products that matter. No templates. No shortcuts. Just exceptional engineering and design that stands apart.",
        p2: "From early-stage startups to enterprise organizations, we bring the same level of intensity and attention to detail. Every project is treated as if our reputation depends on it—because it does.",
      },
      values: [
        {
          number: "01",
          title: "Excellence Over Compromise",
          description:
            "We don't do 'good enough'. Every line of code, every pixel, every interaction is crafted to exceed expectations.",
        },
        {
          number: "02",
          title: "Partners, Not Vendors",
          description:
            "We invest in understanding your business deeply. Your success is our success—we're in this together.",
        },
        {
          number: "03",
          title: "Clarity Through Complexity",
          description:
            "Complex problems require elegant solutions. We simplify without dumbing down, and explain without jargon.",
        },
      ],
      quote:
        "We don't just build software. We build the competitive advantage that sets you apart.",
    },

    // Services
    services: {
      eyebrow: "Services",
      headline: "Full-spectrum digital capabilities",
      description:
        "From initial concept to production deployment and beyond. We handle the complexity so you can focus on what matters most—your business.",
      items: [
        {
          title: "Web & App Development",
          description:
            "Pixel-perfect websites, progressive web apps, and native mobile applications built with the latest technologies.",
          capabilities: [
            "Next.js & React",
            "iOS & Android",
            "Progressive Web Apps",
            "E-commerce",
          ],
        },
        {
          title: "Design & Branding",
          description:
            "Distinctive visual identities and user experiences that set your brand apart. From concept to final execution.",
          capabilities: [
            "Brand Identity",
            "UI/UX Design",
            "Graphic Design",
            "Motion Design",
          ],
        },
        {
          title: "AI & Automation",
          description:
            "Intelligent solutions that transform how you work. From predictive analytics to conversational AI.",
          capabilities: [
            "Machine Learning",
            "Process Automation",
            "Chatbots & Assistants",
            "Data Analytics",
          ],
        },
        {
          title: "Custom Software & CRM",
          description:
            "Tailored systems that automate your operations and scale with your business. No off-the-shelf limitations.",
          capabilities: [
            "Enterprise Software",
            "CRM Systems",
            "API Development",
            "System Integration",
          ],
        },
      ],
      techLabel: "Technologies",
    },

    // Approach
    approach: {
      eyebrow: "Our Approach",
      headline: "A process refined over years",
      description:
        "Every project follows a proven methodology designed to minimize risk, maximize clarity, and deliver exceptional results.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "We dive deep into your business, users, and market. Understanding the 'why' before the 'what' ensures we build the right solution.",
          duration: "1-2 weeks",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "Clear roadmap, defined milestones, tech stack decisions. No surprises, no scope creep—just a solid plan you can count on.",
          duration: "1 week",
        },
        {
          number: "03",
          title: "Design",
          description:
            "User-centered design that balances aesthetics with function. Every interaction is intentional, every detail considered.",
          duration: "2-4 weeks",
        },
        {
          number: "04",
          title: "Development",
          description:
            "Agile sprints with continuous delivery. You see progress in real-time, not just at the end. Quality is non-negotiable.",
          duration: "4-12 weeks",
        },
        {
          number: "05",
          title: "Launch & Scale",
          description:
            "Rigorous testing, seamless deployment, ongoing optimization. We stay with you well after launch to ensure success.",
          duration: "Ongoing",
        },
      ],
      cta: {
        question: "Ready to start your project?",
        button: "Let's Talk",
      },
    },

    // Work
    work: {
      eyebrow: "Selected Work",
      headline: "Projects that moved the needle",
      description:
        "A selection of projects that demonstrate our capabilities across different industries and technologies.",
      projects: [
        {
          title: "Nexus Platform",
          category: "Enterprise SaaS",
          description:
            "A unified workspace that streamlined operations for a Fortune 500 company, reducing process time by 60%.",
          tags: ["React", "Node.js", "PostgreSQL", "AWS"],
          year: "2024",
          featured: true,
        },
        {
          title: "Velocity AI",
          category: "Machine Learning",
          description:
            "Predictive analytics engine that processes 10M+ transactions daily with 99.9% accuracy.",
          tags: ["Python", "TensorFlow", "GCP", "Redis"],
          year: "2024",
          featured: true,
        },
        {
          title: "Nova Commerce",
          category: "E-commerce",
          description:
            "Headless commerce platform that increased conversion rates by 40% through personalization.",
          tags: ["Next.js", "Shopify", "Stripe", "Algolia"],
          year: "2023",
          featured: false,
        },
        {
          title: "Pulse Health",
          category: "Healthcare",
          description:
            "HIPAA-compliant patient management system serving 200+ clinics nationwide.",
          tags: ["React Native", "Node.js", "MongoDB", "AWS"],
          year: "2023",
          featured: false,
        },
      ],
      nda: {
        text: "Due to NDA agreements, we can't share all our work publicly.",
        link: "Request full case studies",
      },
    },

    // Contact
    contact: {
      eyebrow: "Start a Project",
      headline: "Let's build something extraordinary",
      description:
        "Share your vision with us. We'll respond within 24 hours with an initial assessment and next steps.",
      info: {
        email: {
          label: "Email",
          value: "info@midastouch.it",
        },
        phone: {
          label: "Phone",
          value: "+39 392 924 0999",
        },
        location: {
          label: "Location",
          value: "Via Arrigo Davila 61, 00179 Roma",
        },
        vat: {
          label: "VAT Number",
          value: "IT 17203491000",
        },
      },
      trust: {
        label: "",
        items: [],
      },
      form: {
        name: "Name",
        email: "Email",
        company: "Company (optional)",
        projectType: "Project Type",
        projectTypes: [
          "Web Development",
          "Mobile App",
          "Custom Software",
          "AI Solution",
          "Consulting",
          "Other",
        ],
        budget: "Budget Range",
        budgetRanges: ["< €25k", "€25k - €50k", "€50k - €100k", "€100k+"],
        message: "Tell us about your project",
        submit: "Send Message",
        sending: "Sending...",
      },
      success: {
        title: "Message Received",
        description:
          "Thank you for reaching out. We'll review your project and get back to you within 24 hours.",
      },
      error: "An error occurred. Please try again later.",
    },

    // Footer
    footer: {
      brand: {
        name: "Midas Touch",
        description:
          "Turning ambitious ideas into exceptional digital products. Premium software development for companies that refuse to settle.",
      },
      links: {
        services: {
          title: "Services",
          items: [
            { label: "Web Development", href: "#services" },
            { label: "Mobile Apps", href: "#services" },
            { label: "Custom Software", href: "#services" },
            { label: "AI Solutions", href: "#services" },
          ],
        },
        company: {
          title: "Company",
          items: [
            { label: "About", href: "#about" },
            { label: "Work", href: "#work" },
            { label: "Approach", href: "#approach" },
            { label: "Contact", href: "#contact" },
          ],
        },
        social: {
          title: "Connect",
          items: [
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Twitter", href: "https://twitter.com" },
            { label: "GitHub", href: "https://github.com" },
          ],
        },
      },
      legal: {
        copyright: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      decorative: "MIDAS TOUCH",
    },

    // Meta
    meta: {
      title: "Midas Touch — We Build What Others Can't",
      description:
        "Premium software development, AI solutions, and strategic consulting. We transform ambitious ideas into exceptional digital products.",
      keywords: [
        "software development",
        "web development",
        "mobile apps",
        "AI solutions",
        "digital transformation",
        "custom software",
        "consulting",
      ],
    },
  },

  it: {
    // Header
    header: {
      nav: {
        services: "Servizi",
        approach: "Metodo",
        work: "Portfolio",
        contact: "Contatti",
      },
      cta: "Inizia un Progetto",
    },

    // Hero
    hero: {
      eyebrow: "",
      headline: {
        line1: "Realizziamo Ciò Che",
        line2: "Altri Non Possono",
      },
      subheadline:
        "Sviluppo software di alto livello, soluzioni AI, design e consulenza strategica. Trasformiamo visioni ambiziose in prodotti digitali d'eccellenza.",
      cta: {
        primary: "Richiedi una Consulenza",
        secondary: "Scopri i Nostri Lavori",
      },
      stats: {
        projects: { value: "", label: "" },
        countries: { value: "", label: "" },
        retention: { value: "", label: "" },
        founded: { value: "", label: "" },
      },
      scroll: "Scorri",
    },

    // About
    about: {
      eyebrow: "Chi Siamo",
      headline: "Un team ossessionato dalla perfezione e dal dettaglio",
      description: {
        p1: "Siamo uno studio software che affianca aziende ambiziose nella creazione di prodotti che fanno la differenza. Niente template. Niente scorciatoie. Solo ingegneria e design d'eccellenza che si distinguono.",
        p2: "Dalle startup emergenti alle grandi imprese, portiamo la stessa intensità e cura del dettaglio. Ogni progetto viene trattato come se ne dipendesse la nostra reputazione — perché è così.",
      },
      values: [
        {
          number: "01",
          title: "Eccellenza, Mai Compromessi",
          description:
            "Non ci accontentiamo del 'sufficiente'. Ogni riga di codice, ogni pixel, ogni interazione è progettata per superare le aspettative.",
        },
        {
          number: "02",
          title: "Partner, Non Fornitori",
          description:
            "Investiamo nella comprensione profonda del tuo business. Il tuo successo è il nostro successo — siamo nella stessa squadra.",
        },
        {
          number: "03",
          title: "Chiarezza nella Complessità",
          description:
            "I problemi complessi richiedono soluzioni eleganti. Semplifichiamo senza banalizzare, spieghiamo senza tecnicismi.",
        },
      ],
      quote:
        "Non costruiamo solo software. Costruiamo il vantaggio competitivo che ti distingue.",
    },

    // Services
    services: {
      eyebrow: "Servizi",
      headline: "Competenze digitali a 360 gradi",
      description:
        "Dal concept iniziale al deployment in produzione e oltre. Gestiamo la complessità per permetterti di concentrarti su ciò che conta davvero — il tuo business.",
      items: [
        {
          title: "Sviluppo Web & App",
          description:
            "Siti web pixel-perfect, progressive web app e applicazioni mobile native costruite con le tecnologie più avanzate.",
          capabilities: [
            "Next.js & React",
            "iOS & Android",
            "Progressive Web Apps",
            "E-commerce",
          ],
        },
        {
          title: "Design & Branding",
          description:
            "Identità visive distintive e user experience che distinguono il tuo brand. Dal concept all'esecuzione finale.",
          capabilities: [
            "Brand Identity",
            "UI/UX Design",
            "Graphic Design",
            "Motion Design",
          ],
        },
        {
          title: "AI & Automazione",
          description:
            "Soluzioni intelligenti che trasformano il modo in cui lavori. Dalla predictive analytics all'AI conversazionale.",
          capabilities: [
            "Machine Learning",
            "Automazione Processi",
            "Chatbot & Assistenti",
            "Data Analytics",
          ],
        },
        {
          title: "Software Custom & CRM",
          description:
            "Sistemi su misura che automatizzano le tue operazioni e scalano con il tuo business. Nessun limite dei prodotti standard.",
          capabilities: [
            "Software Enterprise",
            "Sistemi CRM",
            "Sviluppo API",
            "System Integration",
          ],
        },
      ],
      techLabel: "Tecnologie",
    },

    // Approach
    approach: {
      eyebrow: "Il Nostro Metodo",
      headline: "Un processo affinato negli anni",
      description:
        "Ogni progetto segue una metodologia collaudata, pensata per minimizzare i rischi, massimizzare la chiarezza e garantire risultati eccezionali.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Ci immergiamo nel tuo business, nei tuoi utenti e nel tuo mercato. Capire il 'perché' prima del 'cosa' garantisce di costruire la soluzione giusta.",
          duration: "1-2 settimane",
        },
        {
          number: "02",
          title: "Strategia",
          description:
            "Roadmap chiara, milestone definite, scelte tecnologiche precise. Niente sorprese, niente scope creep — solo un piano solido su cui contare.",
          duration: "1 settimana",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Design centrato sull'utente che bilancia estetica e funzionalità. Ogni interazione è intenzionale, ogni dettaglio è curato.",
          duration: "2-4 settimane",
        },
        {
          number: "04",
          title: "Sviluppo",
          description:
            "Sprint agili con delivery continuo. Vedi i progressi in tempo reale, non solo alla fine. La qualità non è negoziabile.",
          duration: "4-12 settimane",
        },
        {
          number: "05",
          title: "Lancio & Crescita",
          description:
            "Testing rigoroso, deployment senza intoppi, ottimizzazione continua. Restiamo al tuo fianco ben oltre il lancio per garantire il successo.",
          duration: "Continuo",
        },
      ],
      cta: {
        question: "Pronto a iniziare il tuo progetto?",
        button: "Parliamone",
      },
    },

    // Work
    work: {
      eyebrow: "Portfolio Selezionato",
      headline: "Progetti che hanno fatto la differenza",
      description:
        "Una selezione di progetti che dimostrano le nostre competenze in diversi settori e tecnologie.",
      projects: [
        {
          title: "Nexus Platform",
          category: "Enterprise SaaS",
          description:
            "Un workspace unificato che ha ottimizzato le operazioni di un'azienda Fortune 500, riducendo i tempi di processo del 60%.",
          tags: ["React", "Node.js", "PostgreSQL", "AWS"],
          year: "2024",
          featured: true,
        },
        {
          title: "Velocity AI",
          category: "Machine Learning",
          description:
            "Motore di analytics predittivo che elabora oltre 10 milioni di transazioni al giorno con una precisione del 99,9%.",
          tags: ["Python", "TensorFlow", "GCP", "Redis"],
          year: "2024",
          featured: true,
        },
        {
          title: "Nova Commerce",
          category: "E-commerce",
          description:
            "Piattaforma commerce headless che ha aumentato i tassi di conversione del 40% grazie alla personalizzazione.",
          tags: ["Next.js", "Shopify", "Stripe", "Algolia"],
          year: "2023",
          featured: false,
        },
        {
          title: "Pulse Health",
          category: "Healthcare",
          description:
            "Sistema di gestione pazienti conforme HIPAA che serve oltre 200 cliniche in tutto il territorio nazionale.",
          tags: ["React Native", "Node.js", "MongoDB", "AWS"],
          year: "2023",
          featured: false,
        },
      ],
      nda: {
        text: "A causa di accordi NDA, non possiamo condividere pubblicamente tutti i nostri lavori.",
        link: "Richiedi i case study completi",
      },
    },

    // Contact
    contact: {
      eyebrow: "Inizia un Progetto",
      headline: "Costruiamo insieme qualcosa di straordinario",
      description:
        "Condividi la tua visione con noi. Ti risponderemo entro 24 ore con una valutazione iniziale e i prossimi passi.",
      info: {
        email: {
          label: "Email",
          value: "info@midastouch.it",
        },
        phone: {
          label: "Telefono",
          value: "+39 392 924 0999",
        },
        location: {
          label: "Sede",
          value: "Via Arrigo Davila 61, 00179 Roma",
        },
        vat: {
          label: "P.IVA",
          value: "IT 17203491000",
        },
      },
      trust: {
        label: "",
        items: [],
      },
      form: {
        name: "Nome",
        email: "Email",
        company: "Azienda (opzionale)",
        projectType: "Tipo di Progetto",
        projectTypes: [
          "Sviluppo Web",
          "App Mobile",
          "Software Custom",
          "Soluzione AI",
          "Consulenza",
          "Altro",
        ],
        budget: "Budget Indicativo",
        budgetRanges: ["< €25k", "€25k - €50k", "€50k - €100k", "€100k+"],
        message: "Raccontaci il tuo progetto",
        submit: "Invia Messaggio",
        sending: "Invio in corso...",
      },
      success: {
        title: "Messaggio Ricevuto",
        description:
          "Grazie per averci contattato. Analizzeremo il tuo progetto e ti risponderemo entro 24 ore.",
      },
      error: "Si è verificato un errore. Riprova più tardi.",
    },

    // Footer
    footer: {
      brand: {
        name: "Midas Touch",
        description:
          "Trasformiamo idee ambiziose in prodotti digitali d'eccellenza. Sviluppo software premium per aziende che non accettano compromessi.",
      },
      links: {
        services: {
          title: "Servizi",
          items: [
            { label: "Sviluppo Web", href: "#services" },
            { label: "App Mobile", href: "#services" },
            { label: "Software Custom", href: "#services" },
            { label: "Soluzioni AI", href: "#services" },
          ],
        },
        company: {
          title: "Azienda",
          items: [
            { label: "Chi Siamo", href: "#about" },
            { label: "Portfolio", href: "#work" },
            { label: "Metodo", href: "#approach" },
            { label: "Contatti", href: "#contact" },
          ],
        },
        social: {
          title: "Social",
          items: [
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Twitter", href: "https://twitter.com" },
            { label: "GitHub", href: "https://github.com" },
          ],
        },
      },
      legal: {
        copyright: "Tutti i diritti riservati.",
        privacy: "Privacy Policy",
        terms: "Termini di Servizio",
      },
      decorative: "MIDAS TOUCH",
    },

    // Meta
    meta: {
      title: "Midas Touch — Realizziamo Ciò Che Altri Non Possono",
      description:
        "Sviluppo software di alto livello, soluzioni AI e consulenza strategica. Trasformiamo visioni ambiziose in prodotti digitali d'eccellenza.",
      keywords: [
        "sviluppo software",
        "sviluppo web",
        "app mobile",
        "soluzioni AI",
        "trasformazione digitale",
        "software custom",
        "consulenza",
      ],
    },
  },
};

// Create a type that represents the structure of translations
export interface Translations {
  header: {
    nav: {
      services: string;
      approach: string;
      work: string;
      contact: string;
    };
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: {
      line1: string;
      line2: string;
    };
    subheadline: string;
    cta: {
      primary: string;
      secondary: string;
    };
    stats: {
      projects: { value: string; label: string };
      countries: { value: string; label: string };
      retention: { value: string; label: string };
      founded: { value: string; label: string };
    };
    scroll: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    description: {
      p1: string;
      p2: string;
    };
    values: {
      number: string;
      title: string;
      description: string;
    }[];
    quote: string;
  };
  services: {
    eyebrow: string;
    headline: string;
    description: string;
    items: {
      title: string;
      description: string;
      capabilities: string[];
    }[];
    techLabel: string;
  };
  approach: {
    eyebrow: string;
    headline: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
      duration: string;
    }[];
    cta: {
      question: string;
      button: string;
    };
  };
  work: {
    eyebrow: string;
    headline: string;
    description: string;
    projects: {
      title: string;
      category: string;
      description: string;
      tags: string[];
      year: string;
      featured: boolean;
    }[];
    nda: {
      text: string;
      link: string;
    };
  };
  contact: {
    eyebrow: string;
    headline: string;
    description: string;
    info: {
      email: {
        label: string;
        value: string;
      };
      phone: {
        label: string;
        value: string;
      };
      location: {
        label: string;
        value: string;
      };
      vat: {
        label: string;
        value: string;
      };
    };
    trust: {
      label: string;
      items: string[];
    };
    form: {
      name: string;
      email: string;
      company: string;
      projectType: string;
      projectTypes: string[];
      budget: string;
      budgetRanges: string[];
      message: string;
      submit: string;
      sending: string;
    };
    success: {
      title: string;
      description: string;
    };
    error: string;
  };
  footer: {
    brand: {
      name: string;
      description: string;
    };
    links: {
      services: {
        title: string;
        items: { label: string; href: string }[];
      };
      company: {
        title: string;
        items: { label: string; href: string }[];
      };
      social: {
        title: string;
        items: { label: string; href: string }[];
      };
    };
    legal: {
      copyright: string;
      privacy: string;
      terms: string;
    };
    decorative: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const translations: Record<Locale, Translations> = translationsData;
