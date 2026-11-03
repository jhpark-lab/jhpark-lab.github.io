/* =========================================================================
   PUBLICATIONS  (newest first)
   - id:      short unique name. Projects link to papers by this id.
   - kind:    "journal" | "conference"
   - scope:   "International" | "Domestic"
   - role:    "first" | "co"
   - status:  "Published" | "Accepted" | "Submitted" | "Under review"
   - best:    true shows "★ Best Paper" under the status
   - url:     link for the title (DBpia, arXiv, DOI ...). Leave "" for no link.
   - index:   indexing badges, e.g. ["SCIE"], ["SCIE", "Scopus"], ["KCI"].
              SCI/SCIE, Scopus and KCI get their own color; anything else
              (ESCI, EI, KCI candidate ...) is shown in gray. Leave [] for none.
   The summary numbers at the top are counted from this list automatically.
   ========================================================================= */
window.PUBLICATIONS = [
  /* ---------- KISM 2026 Fall ---------- */
  {
    id: "timbre-short",
    year: 2026,
    title: "Micro-Timbral Similarity Measurement Based on Instrument Playing Technique Embeddings for Popular Music Recommendation",
    authors: "Junhyuk Park, Hyo-Beom Ahn",
    venue: "Proceedings of the KISM 2026 Fall Conference",
    kind: "conference", scope: "Domestic",
    role: "first", status: "Accepted", best: false,
    url: "",
    index: []
  },
  {
    id: "ics-capsule-qat",
    year: 2026,
    title: "Lightweight Attention Capsule Autoencoder based on Partial Quantization for Anomaly Detection in Industrial Control Systems",
    authors: "Jaehee Lee, Junhyuk Park, Haneul Jo, Hyo-Beom Ahn",
    venue: "Proceedings of the KISM 2026 Fall Conference",
    kind: "conference", scope: "Domestic",
    role: "co", status: "Accepted", best: false,
    url: "",
    index: []
  },
  {
    id: "n2sf-gaps",
    year: 2026,
    title: "Analysis of AI Security Control Gaps in the N2SF Using an Integrated AI Security Control Matrix",
    authors: "Haneul Jo, Junhyuk Park, Jaehee Lee, Wan-Bok Lee, Hyo-Beom Ahn",
    venue: "Proceedings of the KISM 2026 Fall Conference",
    kind: "conference", scope: "Domestic",
    role: "co", status: "Accepted", best: false,
    url: "",
    index: []
  },

  /* ---------- CISC-W'26 ---------- */
  {
    id: "cvss-xai",
    year: 2026,
    title: "An Application of Local eXplainable AI and Contribution Analysis for CVSS Metric Prediction based on Multi-Task SLM",
    authors: "Junhyuk Park, Jaehee Lee, Haneul Jo, Hyo-Beom Ahn",
    venue: "Conference on Information Security and Cryptography Winter 2026 (CISC-W'26)",
    kind: "conference", scope: "Domestic",
    role: "first", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "ids-ctgan",
    year: 2026,
    title: "Performance Analysis of Intrusion Detection Using Synthetic Data in Imbalanced Data Environments",
    authors: "Jaehee Lee, Junhyuk Park, Haneul Jo, Hyo-Beom Ahn",
    venue: "Conference on Information Security and Cryptography Winter 2026 (CISC-W'26)",
    kind: "conference", scope: "Domestic",
    role: "co", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "ai-sec-guidelines",
    year: 2026,
    title: "Comparative Analysis of Domestic and International AI Security Guidelines and Proposal of an Integrated Security Control Matrix",
    authors: "Haneul Jo, Junhyuk Park, Jaehee Lee, Hyo-Beom Ahn",
    venue: "Conference on Information Security and Cryptography Winter 2026 (CISC-W'26)",
    kind: "conference", scope: "Domestic",
    role: "co", status: "Published", best: false,
    url: "",
    index: []
  },

  /* ---------- Earlier 2026 ---------- */
  {
    id: "sdv-fl-defense",
    year: 2026,
    title: "A Layer-wise Hybrid Defense against Gradient Leakage for Federated Learning-based SDV NLU Models",
    authors: "Junhyuk Park, Jaehee Lee, Hyo-Beom Ahn",
    venue: "Conference on Information Security and Cryptography Summer 2026 (CISC-S'26)",
    kind: "conference", scope: "Domestic",
    role: "first", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "disability-trends",
    year: 2026,
    title: "Analysis of Dynamical Trends in Disability Issues based on High-dimensional Text Embedding",
    authors: "Junhyuk Park, Minju Noh, Hyo-Beom Ahn, Seungwon Oh",
    venue: "Journal of the Korean Data Analysis Society (JKDAS), Vol. 28, No. 2",
    kind: "journal", scope: "Domestic",
    role: "first", status: "Published", best: false,
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12744179",
    index: ["KCI"]
  },
  {
    id: "redtide-multimodal",
    year: 2026,
    title: "A Study on the Analysis and Improvement of Artificial Intelligence Based Multimodal Red Tide Prediction",
    authors: "Jaehee Lee, Junhyuk Park, Seungyong Seong, Chaeeun Seo, Hyo-Beom Ahn",
    venue: "Journal of The Korea Society of Computer and Information (JKSCI), Vol. 31, No. 4",
    kind: "journal", scope: "Domestic",
    role: "co", status: "Published", best: false,
    url: "https://doi.org/10.9708/jksci.2026.31.04.011",
    index: ["KCI"]
  },
  {
    id: "sdv-fl-attack",
    year: 2026,
    title: "Vulnerability Analysis of Gradient Leakage Attacks on NLU Models in FL-based SDV Frameworks",
    authors: "Junhyuk Park, Jaehee Lee, Haneul Jo, Hyo-Beom Ahn",
    venue: "Proceedings of the KISM&KSDI 2026 Spring Conference",
    kind: "conference", scope: "Domestic",
    role: "first", status: "Published", best: true,
    url: "",
    index: []
  },

  /* ---------- 2025 ---------- */
  {
    id: "sdv-fl-framework",
    year: 2025,
    title: "A Study on a Federated Learning Based NLU–LLM Framework for Enhancing Security Robustness in Software Defined Vehicles",
    authors: "Junhyuk Park, Jaehee Lee, Hyo-Beom Ahn",
    venue: "Conference on Information Security and Cryptography Winter 2025 (CISC-W'25)",
    kind: "conference", scope: "Domestic",
    role: "first", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "poc-packages",
    year: 2025,
    title: "Package Usage Patterns in Network-Based PoC Exploits and Defensive Implications",
    authors: "Jaehee Lee, Junhyuk Park, Hyo-Beom Ahn",
    venue: "Conference on Information Security and Cryptography Winter 2025 (CISC-W'25)",
    kind: "conference", scope: "Domestic",
    role: "co", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "cvss-multitask",
    year: 2025,
    title: "A Study on Multi-Task CVSS Metric Prediction via Fine-Tuned SLM",
    authors: "Junhyuk Park, Jaehee Lee, Hyo-Beom Ahn",
    venue: "Journal of The Korea Society of Computer and Information (JKSCI), Vol. 30, No. 11",
    kind: "journal", scope: "Domestic",
    role: "first", status: "Published", best: false,
    url: "https://doi.org/10.9708/jksci.2025.30.11.063",
    index: ["KCI"]
  },
  {
    id: "music-emotion",
    year: 2025,
    title: "A Study on Implementation Strategies for Music Emotion Models Based on Playing-Technique Labels",
    authors: "Junhyuk Park, Jaehee Lee, Hyo-Beom Ahn",
    venue: "Proceedings of the KISM 2025 Fall Conference",
    kind: "conference", scope: "Domestic",
    role: "first", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "redtide-review",
    year: 2025,
    title: "An Analytical Review of the Improvement of AI-Based Red Tide Prediction",
    authors: "Jaehee Lee, Junhyuk Park, Chaeeun Seo, Seungyong Seong, Hyo-Beom Ahn",
    venue: "Proceedings of the KISM 2025 Fall Conference",
    kind: "conference", scope: "Domestic",
    role: "co", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "cvss-algorithms",
    year: 2025,
    title: "Algorithmic Suitability of Automated Classification Models for CVSS Metric Prediction",
    authors: "Junhyuk Park, Hyunseoung Kang, Jaehee Lee, Gwonsang Ryu, Hyo-Beom Ahn",
    venue: "Conference on Information Security and Cryptography Summer 2025 (CISC-S'25)",
    kind: "conference", scope: "Domestic",
    role: "first", status: "Published", best: false,
    url: "",
    index: []
  },
  {
    id: "cvss-av-ml",
    year: 2025,
    title: "A Study of CVSS Score Prediction Model based Machine Learning using CVE Data",
    authors: "Hyo-Beom Ahn, Hyeonseong Kang, Junhyuk Park",
    venue: "Winter Conference of the Korea Society of Computer and Information (KSCI) 2025",
    kind: "conference", scope: "Domestic",
    role: "co", status: "Published", best: true,
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12098786",
    index: []
  }
];