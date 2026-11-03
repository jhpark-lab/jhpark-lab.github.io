/* =========================================================================
   RESEARCH PROJECTS
   - Listed top to bottom in this order.
   - period:   e.g. "Mar. 26 – Present" or "Mar. 25 – Aug. 25"
   - images:   0–2 images. ratio is "4:3" or "16:9". Put files in /images.
   - metrics:  key numbers shown under the title (optional).
   - papers:   ids from data/publications.js. Each one links to the
               matching entry in the Publications section.
   ========================================================================= */
window.PROJECTS = [
  {
    period: "Oct. 25 – Present",
    title: "Securing Federated In-Vehicle Language Understanding in Software-Defined Vehicles",
    description: "Builds a federated learning based NLU–LLM framework for software-defined vehicles, where in-vehicle language models learn from transcribed voice commands without sharing raw data. The work first analyzes how gradient leakage attacks can reconstruct those commands from shared updates, then proposes a layer-wise hybrid defense that applies Differential Privacy to the embedding layer and a VAE to the classifier layer.",
    images: [
      { file: "images/05-a.jpg", ratio: "16:9", caption: "FL-based SDV framework: on-vehicle NLU modules share gradients with a server-side coordinator and a cloud infotainment LLM" }
    ],
    metrics: [
      { value: "0%", label: "Token recovery rate" },
      { value: "73.62%", label: "Intent accuracy" }
    ],
    tags: ["Federated Learning", "Privacy", "NLP", "SDV"],
    papers: ["sdv-fl-defense", "sdv-fl-attack", "sdv-fl-framework"]
  },
  {
    period: "Oct. 25 – Present",
    title: "Playing-Technique Embeddings for Timbre-Aware Music Understanding",
    description: "Studies how instrument playing techniques shape the timbre of a performance and how that signal can be used in music applications. The work first examines implementation strategies for music emotion models built on playing-technique labels, then learns playing-technique embeddings to measure micro-level timbral similarity between tracks for popular music recommendation.",
    images: [
      { file: "images/04-a.jpg", ratio: "4:3", caption: "Waveforms and log-mel spectrograms of fingerstyle, slap-thumb, and muted bass notes across attack, transition, and sustain" },
      { file: "images/04-b.jpg", ratio: "4:3", caption: "Bass-stem technique embeddings separate playing techniques (silhouette 0.30) where mixture-level features cannot (−0.03)" }
    ],
    metrics: [],
    tags: ["Audio", "Music Information Retrieval", "Representation Learning"],
    papers: ["timbre-short", "music-emotion"]
  },
  {
    period: "Aug. 25 – Nov. 25",
    title: "Red Tide Forecasting by Cross-Attention Fusion of GOCI Imagery and Ocean Data",
    description: "Reviews the limits of single-source red tide prediction models, then fuses GOCI satellite imagery and oceanographic time series through dual ConvLSTM and PhasedLSTM encoders, cross-modal attention, and multi-head prediction across 31 Korean coastal regions. The model outperforms BPNN, GRNN, SVM, ConvLSTM, Random Forest, and prior LSTM-based baselines.",
    images: [
      { file: "images/02-a.jpg", ratio: "4:3", caption: "GOCI image of the Korean coast (RGB) and the NDVI map computed from bands 5 and 8" },
      { file: "images/02-b.jpg", ratio: "16:9", caption: "ConvLSTM and Phased LSTM encoders fused by scaled dot-product attention, with one prediction head per coastal region" }
    ],
    metrics: [
      { value: "0.72", label: "F1-score (+0.146)" },
      { value: "0.82", label: "Recall" }
    ],
    tags: ["Multimodal", "Remote Sensing", "Time Series"],
    papers: ["redtide-multimodal", "redtide-review"]
  },
  {
    period: "May 25 – Apr. 26",
    title: "Topic-wise Trend Forecasting of Disability Issues in News",
    description: "Encodes news articles on disability issues with a high-dimensional text embedding model, reduces the embedding space, and groups the articles into topics with k-means clustering. Counting each topic's articles over time turns the clusters into time series, which NeuralProphet then uses to forecast how each issue will trend.",
    images: [
        { file: "images/03-a.jpg", ratio: "16:9", caption: "Pipeline: news article embeddings, dimensionality reduction, k-means topic clusters, and per-topic trend forecasting with NeuralProphet" }
    ],
    metrics: [],
    tags: ["NLP", "Text Embedding", "Clustering", "Time Series Forecasting"],
    papers: ["disability-trends"]
  },
  {
    period: "Apr. 2024 – Oct. 2026",
    title: "Explainable CVSS Metric Prediction from CVE Descriptions",
    description: "Automates CVSS v3.1 scoring from vulnerability descriptions, starting from an Attack Vector classifier built on noun-based keyword features and a comparison of classification algorithms, then moving to a multi-task DistilBERT that predicts all eight base metrics at once from about 220K NVD records. The latest work explains these predictions with SmoothGrad-based Integrated Gradients, aggregates local attributions into global keyword patterns, and turns them into writing guidelines for CVE descriptions.",
    images: [
      { file: "images/01-a.jpg", ratio: "16:9", caption: "Multi-task CVSS classifier: a fine-tuned DistilBERT with one head per base metric" },
      { file: "images/01-b.jpg", ratio: "16:9", caption: "Token attributions for CVE-2025-27561 under the PR, UI, and S metric heads" }
    ],
    metrics: [
      { value: "220K", label: "NVD records" },
      { value: "8", label: "Base metrics predicted jointly" }
    ],
    tags: ["Security", "NLP", "XAI"],
    papers: ["cvss-xai", "cvss-multitask", "cvss-algorithms", "cvss-av-ml"]
  },
];
