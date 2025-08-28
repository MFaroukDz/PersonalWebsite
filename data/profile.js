// Profile configuration for the personal website. Update these values
// to customise the content shown across the site. Many fields are
// arrays of objects to support rich, structured content.

const profileData = {
  name: "Mohammed Farouk Nakmouche",
  tagline: "PhD candidate specialising in machine learning‑aided design of antennas and RF components",
  highlight: "PhD Candidate at ÉTS Montréal",
  roles: [
    "Researcher",
    "Antenna Engineer",
    "Machine Learning Enthusiast"
  ],
  photo: "images/profile.png",
  links: {
    email: "mailto:mohammed-farouk.nakmouche.1@ens.etsmtl.ca",
    github: "",
    linkedin: "",
    scholar: "",
    orcid: "",
    cv: "cv.pdf"
  },
  bio:
    "With over eight years of research and engineering experience, I specialise in the design and integration of passive components and antennas for microwave and millimetre‑wave applications. My work advances the modelling and design of these components through machine learning, focusing on Substrate Integrated Waveguide (SIW), Ridge Gap Waveguide (RGW) and additive manufacturing. I optimise miniature, low‑cost system‑in‑package solutions for Internet‑of‑Space applications and bring a global perspective gained through collaborations in Algeria, France, Turkey, Egypt, Taiwan and Canada.",
  affiliations: [
    "PhD candidate – Electrical Engineering, École de technologie supérieure (ÉTS), Montréal",
    "Research intern – National Research Council Canada (NRC)",
    "MS and BS in Telecommunication Systems and Networks – University of Laghouat, Algeria"
  ],
  experiences: [
    {
      title: "Research Assistant – PhD Student",
      company: "ÉTS Montreal, Quebec University",
      location: "Montréal, QC, Canada",
      start: "Jan 2022",
      end: "Aug 2025 (Expected)",
      description:
        "Developing scalable machine learning‑aided synthesis approaches for fully metallic 3D printed ridge gap waveguides. Proposed novel modelling and design approaches for printed ridge gap waveguides and MIMO antennas, including foldable designs and vertical transitions from SIW to PRGW."
    },
    {
      title: "Research Intern",
      company: "National Research Council Canada (NRC)",
      location: "Canada",
      start: "May 2023",
      end: "Aug 2024",
      description:
        "Designed multiple‑input multiple‑output (MIMO) antennas for radar systems dedicated to elderly monitoring, and investigated 3D‑printed origami antennas for reconfigurable pattern applications. Explored 3D printing of SIW/PRWG multimode waveguides using flexible materials and screen printing."
    },
    {
      title: "Research Assistant",
      company: "Izmir University of Economics",
      location: "Turkey",
      start: "Sep 2020",
      end: "Dec 2021",
      description:
        "Developed innovative antenna design approaches using machine learning and genetic algorithms, and designed absorbers and filters based on ridge gap waveguide technology for Satcom applications."
    },
    {
      title: "Guest Research Intern",
      company: "National Taiwan University of Science and Technology",
      location: "Taiwan",
      start: "Jan 2020",
      end: "Mar 2020",
      description:
        "Proposed low‑cost antenna in package (AiP) design approaches for millimetre‑wave applications using machine learning, and collaborated on end‑fire AiP designs with wide bandwidth and stable radiation patterns."
    },
    {
      title: "Research Assistant",
      company: "Ege University",
      location: "Turkey",
      start: "Sep 2016",
      end: "Oct 2018",
      description:
        "Designed and experimentally validated miniature wideband bandpass filters and SIW antennas for IoT, sub‑6 GHz and satellite downlink applications."
    },
    {
      title: "RF System Engineer Intern",
      company: "LATYS Intelligence",
      location: "Canada",
      start: "Jun 2022",
      end: "Sep 2022",
      description:
        "Developed and simulated reconfigurable metasurfaces and full‑duplex antennas, fabricated prototypes and performed rigorous performance verification using vector network analysers and spectrum analysers."
    },
    {
      title: "Founder & R&D Engineer",
      company: "Fizari Lab Startup",
      location: "France",
      start: "Mar 2020",
      end: "Sep 2020",
      description:
        "Launched a deep‑tech start‑up to commercialise innovative research services accelerating antenna design for 5G and IoT applications using machine learning techniques."
    },
    {
      title: "R&D Engineer (Contract)",
      company: "TransferFi",
      location: "Singapore",
      start: "Oct 2018",
      end: "Mar 2019",
      description:
        "Developed rectifier circuits for ambient energy harvesting terminals using Keysight ADS and produced technical documentation and reports."
    },
    {
      title: "Antenna Engineer Junior",
      company: "Mobilis Laghouat Company HSC/BSC Communication Center",
      location: "Algeria",
      start: "May 2015",
      end: "Oct 2015",
      description:
        "Maintained and optimised base station antennas, monitoring performance to ensure effective communication across the network."
    }
  ],
  education: [
    {
      degree: "Ph.D. in Electrical Engineering",
      institution: "École de technologie supérieure (ÉTS) Montreal",
      location: "Montreal, Canada",
      start: "Jan 2022",
      end: "Sep 2025 (Expected)",
      description:
        "Research focused on machine learning‑aided antenna and waveguide design with additive manufacturing for Internet‑of‑Space applications."
    },
    {
      degree: "MSc in Telecommunication Systems and Network",
      institution: "University of Laghouat",
      location: "Laghouat, Algeria",
      start: "Sep 2013",
      end: "Jul 2015",
      description:
        "Specialised in telecommunication system design with a thesis on broadband antenna design and optimisation."
    },
    {
      degree: "BSc in Telecommunication Systems and Network",
      institution: "University of Laghouat",
      location: "Laghouat, Algeria",
      start: "Sep 2010",
      end: "Jul 2013",
      description:
        "Studied fundamental and advanced concepts of communication networks, signal processing and electromagnetics."
    }
  ],
  skills: [
    {
      category: "Programming & Frameworks",
      list: [
        { name: "Python", level: 90 },
        { name: "MATLAB", level: 85 },
        { name: "TensorFlow/Keras", level: 80 },
        { name: "PyTorch", level: 75 }
      ]
    },
    {
      category: "Simulation & Design Tools",
      list: [
        { name: "Ansys HFSS", level: 90 },
        { name: "CST Microwave Studio", level: 85 },
        { name: "Keysight ADS", level: 80 }
      ]
    },
    {
      category: "Design & Fabrication",
      list: [
        { name: "Antenna Design", level: 95 },
        { name: "Waveguides (SIW/RGW)", level: 90 },
        { name: "RF/Microwave Filters", level: 80 },
        { name: "3D & Screen Printing", level: 85 }
      ]
    }
  ],
  publications: [
    {
      title:
        "Machine Learning‑Aided Design of Defected Ground Structures for PRGW‑Based MIMO Antennas",
      authors: [
        "Mohammed Farouk Nakmouche",
        "Dominic Deslandes",
        "Mourad Nedil",
        "Ghyslain Gagnon"
      ],
      venue: "IEEE Transactions on Antennas and Propagation",
      year: "2025",
      doi: "10.1109/TAP.2025.3587540"
    },
    {
      title:
        "Design and Development of a Graphene‑Based Reconfigurable Patch Antenna Array for THz Applications",
      authors: [
        "Eddine Lamri",
        "Isam Ahmad Sarosh",
        "Mohammed Farouk Nakmouche",
        "Ghaffar Adnan Fawzy",
        "A.M.M.A. Allam",
        "Esraa Mousa",
        "Dalarsson Mariana",
        "Alibakhshikenari Mohammad"
      ],
      venue: "Frequenz",
      year: "2022"
    },
    {
      title:
        "Design and Measurement of Triple h‑Slotted DGS Printed Antenna with Machine Learning",
      authors: [
        "M. F. Nakmouche",
        "Abdemegeed Mahmoud Allam",
        "Diaa E. Fawzy",
        "Mahmoud Abdalla"
      ],
      venue: "Progress in Electromagnetics Research Letters",
      year: "2021"
    },
    {
      title:
        "A Novel Dual‑Band Printed SIW Antenna Design Based on Fishnet & CCRR DGS Using Machine Learning for Ku‑Band Applications",
      authors: [
        "M. F. Nakmouche",
        "Muhammad Idrees Magray",
        "Abdemegeed Mahmoud Allam",
        "Diaa E. Fawzy",
        "Ding‑Bing Lin",
        "Jenn‑Hwen Tarng"
      ],
      venue: "Progress In Electromagnetics Research C",
      year: "2021"
    },
    {
      title: "Fabry Perot Array Antenna Design Using Machine Learning",
      authors: [
        "Mohammed Farouk Nakmouche",
        "Dominic Deslandes",
        "Ghyslain Gagnon",
        "George Xiao",
        "Jianping Lu"
      ],
      venue: "IEEE International Symposium on Antennas and Propagation (AP‑S/URSI)",
      year: "2024"
    }
  ]

  ,

  // Latest articles or blog posts. Each entry may include a title, date,
  // summary and optional link. Update these entries to feature your own
  // blog posts or news.
  articles: [
    {
      title: "Integrating AI in Antenna Design: A Review",
      date: "2025-04-12",
      summary:
        "A short review of how machine learning techniques are being integrated into antenna design and synthesis.",
      link: "#"
    },
    {
      title: "3D Printed Waveguides: Opportunities & Challenges",
      date: "2024-11-08",
      summary:
        "Exploring the potential of additive manufacturing for designing high-performance waveguide structures.",
      link: "#"
    }
  ]
};