/**
 * SLIIT Research Project Academic Website
 * Centralized Project Data Source (data.js)
 * 
 * Project ID: R26-IT-082
 * Official Title: AI-Powered Intelligent Talent Acquisition System
 * Institution: Sri Lanka Institute of Information Technology (SLIIT)
 * Faculty: Faculty of Computing
 * Department: Department of Information Technology
 * Academic Period: 2025/2026
 */

const PROJECT_DATA = {
  meta: {
    projectId: "R26-IT-082",
    officialTitle: "AI-Powered Intelligent Talent Acquisition System",
    paperTitle: "An Integrated Multimodal AI Framework for Technical Recruitment and Workforce Retention Analytics",
    shortSubtitle: "An integrated research platform for intelligent recruitment, multimodal candidate assessment, and explainable workforce retention analytics.",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    faculty: "Faculty of Computing",
    department: "Department of Information Technology",
    academicPeriod: "2025/2026",
    supervisors: [
      {
        name: "Mr. Dhammika De Silva",
        role: "Research Supervisor",
        affiliation: "Faculty of Computing, SLIIT",
        email: "dhammika.d@sliit.lk"
      },
      {
        name: "Mr. Samantha Rajapaksha",
        role: "Research Co-Supervisor",
        affiliation: "Faculty of Computing, SLIIT",
        email: "samantha.r@sliit.lk"
      }
    ],
    contactEmail: "talentlens.rp@gmail.com", // Representative research enquiry desk
    contactPhone: "+94 71 879 4765", // 0718794765
    brandTitle: "TalentLens AI",
    location: "Malabe, Sri Lanka"
  },

  // Four research group members with verified component allocations
  members: [
    {
      id: "IT22248794",
      name: "Gehan Fonseka",
      formalName: "Fonseka W.G.K.",
      email: "gehanfonseka@gmail.com",
      component: "Hiring Risk & Early Attrition Prediction Module",
      shortComponent: "Retention Analytics & XAI",
      photoPlaceholder: "assets/images/team/gehan.png",
      isSamplePhoto: false,
      bio: "Focuses on tabular turnover modeling, operational threshold calibration, and explainability mechanisms for post-hire retention forecasting.",
      responsibilities: [
        "Formulation and training of Optuna-tuned Ordered CatBoost classifier across 52 tabular features.",
        "Threshold optimization establishing operating boundary τ = 0.33 to re-balance minority turnover recall (50.62%) under 1:5.20 class imbalance.",
        "Empirical feature ablation demonstrating that adding 7 interaction variables reduced F1 by 3.85 percentage points (p = 0.026).",
        "Implementation of local TreeSHAP feature attributions and What-If scenario simulation for advisory policy exploration."
      ],
      deliverables: {
        proposalPdf: "assets/documents/R26-IT-082_IT22248794_Fonseka_WGK_Proposal.pdf",
        finalThesisPdf: "assets/documents/R26-IT-082_IT22248794_Fonseka_WGK_Final_Thesis.pdf",
        status: "Available"
      }
    },
    {
      id: "IT22226914",
      name: "Chamudi Jayantha",
      formalName: "Jayantha C.H.",
      email: "chamuhimasha29471@gmail.com",
      component: "Intelligent Resume Parsing & Skill Proficiency Analysis",
      shortComponent: "Resume Intelligence & NER",
      photoPlaceholder: "assets/images/team/chamudi.jpeg",
      isSamplePhoto: false,
      bio: "Specializes in multi-format resume text extraction, Named Entity Recognition, and contextual skill depth estimation.",
      responsibilities: [
        "Multi-stage ingestion pipeline processing PDF, DOCX, and TXT resumes with format and section preservation.",
        "SpaCy tokenization and Conditional Random Field (CRF NER via sklearn-crfsuite) for structured entity tagging.",
        "Context-aware proficiency estimation mapping experience duration, project descriptions, and role responsibilities.",
        "DeBERTa-v3-small 3-target heuristic quality regressor trained on 15,000 pseudo-labeled records (MAE: 5.44)."
      ],
      deliverables: {
        proposalPdf: "assets/documents/R26-IT-082_IT22226914_Jayantha_CH_Proposal.pdf",
        finalThesisPdf: "assets/documents/R26-IT-082_IT22226914_Jayantha_CH_Final_Thesis.pdf",
        status: "Available"
      }
    },
    {
      id: "IT22195616",
      name: "Kavishka Deshan",
      formalName: "Deshan M.A.K.",
      email: "kavishkadeshan428@gmail.com",
      component: "Job–Candidate Matching & Explainable AI Engine",
      shortComponent: "Cross-Encoder Matching",
      photoPlaceholder: "assets/images/team/kavishka.jpeg",
      isSamplePhoto: false,
      bio: "Focuses on deep semantic similarity modeling between unstructured candidate profiles and job descriptions.",
      responsibilities: [
        "Deployment of a 6-layer BERT Cross-Encoder (d=384, 12 heads, seq length L≤256) capturing token-to-token interactions.",
        "ONNX Runtime acceleration for low-latency inference in an isolated Node.js container (:4002).",
        "Calibrated operational thresholding at τ = 0.44 for automated candidate compatibility scoring.",
        "Explainable matching justification identifying matched proficiencies, experience alignment, and missing job criteria."
      ],
      deliverables: {
        proposalPdf: "assets/documents/R26-IT-82_IT22195616_Deshan_MAK_Proposal.pdf",
        finalThesisPdf: "assets/documents/R26-IT-082_IT22195616_Deshan_MAK_Final_Thesis.pdf",
        status: "Available"
      }
    },
    {
      id: "IT22197832",
      name: "Sajani Tennakoon",
      formalName: "Tennakoon T.M.S.S.",
      email: "sapurnat@gmail.com",
      component: "AI-Based Interview Evaluation & Soft Skill Analysis",
      shortComponent: "Speech & ASAG Intelligence",
      photoPlaceholder: "assets/images/team/sajani.jpeg",
      isSamplePhoto: false,
      bio: "Investigates audio speech transcription, automated short-answer grading, and candidate readiness scoring.",
      responsibilities: [
        "WebRTC audio acquisition segmented via Silero VAD and transcribed using Faster-Whisper (Tiny INT8 CPU, 16 kHz).",
        "Automated Short-Answer Grading (ASAG) with 12-layer DeBERTa-v3 mapping candidate answers to rubric references across 5 ordinal tiers.",
        "Post-hoc Platt calibration (Scal = clip(0.9666 * Sraw + 0.0110, 0, 1)) partitioned into rubric tiers [0.24, 0.47, 0.58, 0.84].",
        "Credential validation and zero-shot NLI concept verification."
      ],
      deliverables: {
        proposalPdf: "assets/documents/R26-IT-82_IT22197832_Tennakoon_TMSS_Proposal.pdf",
        finalThesisPdf: "assets/documents/R26-IT-082_IT22197832_Tennakoon_TMSS_Final_Thesis.pdf",
        status: "Available"
      }
    }
  ],

  // Distinct quantitative research data lines
  metrics: {
    lineA_benchmark: {
      name: "Adapted Workforce HR Benchmark",
      datasetScope: "Synthetic / Adapted benchmark based on standard IBM HR attributes augmented with regional Sri Lankan hiring attributes",
      records: 1470,
      attritionPositive: 237,
      attritionNegative: 1233,
      prevalence: "16.12%",
      imbalanceRatio: "1 : 5.20",
      validationProtocol: "5-fold stratified cross-validation (random_state=42)",
      operatingThreshold: 0.33,
      defaultThreshold: 0.50,
      rocAuc: "0.8071 ± 0.0239",
      prAuc: "0.5753 ± 0.0475",
      operatingResults: {
        accuracy: "83.81 ± 1.90%",
        balancedAccuracy: "70.40 ± 1.50%",
        precision: "50.44 ± 5.55%",
        recall: "50.62 ± 2.72%",
        f1Score: "50.34 ± 3.11%"
      },
      defaultResults: {
        accuracy: "86.33 ± 1.48%",
        balancedAccuracy: "65.78 ± 2.24%",
        precision: "65.33 ± 11.14%",
        recall: "35.46 ± 4.78%",
        f1Score: "45.50 ± 4.77%"
      },
      recallGain: "+15.16% points",
      f1Gain: "+4.84% points",
      ablationTable: [
        {
          config: "Config A: IBM Baseline",
          features: 26,
          accuracy: "84.22 ± 0.90%",
          balancedAccuracy: "73.21 ± 1.20%",
          f1: "53.78 ± 1.26%",
          rocAuc: "0.816 ± 0.020",
          prAuc: "0.583 ± 0.040",
          description: "Core workplace, tenure, and satisfaction ratings from IBM benchmark."
        },
        {
          config: "Config B: + Regional Attributes",
          features: 45,
          accuracy: "85.58 ± 2.41%",
          balancedAccuracy: "72.14 ± 1.39%",
          f1: "54.18 ± 3.29%",
          rocAuc: "0.814 ± 0.009",
          prAuc: "0.582 ± 0.052",
          description: "Added 19 regional hiring attributes (LKR salary, work arrangement, location). ΔF1 = +0.40% (p = 0.83)."
        },
        {
          config: "Config C: + 7 Interaction Ratios",
          features: 52,
          accuracy: "83.81 ± 1.90%",
          balancedAccuracy: "70.40 ± 1.50%",
          f1: "50.34 ± 3.11%",
          rocAuc: "0.807 ± 0.024",
          prAuc: "0.575 ± 0.048",
          description: "Added 7 interaction ratios. Statistically significant fold-level decline ΔF1 = -3.85% (p = 0.026)."
        }
      ],
      topShap: [
        { rank: 1, name: "OverTime", value: 0.5935, engineered: false, desc: "Working hours beyond standard contract" },
        { rank: 2, name: "StockOptionLevel", value: 0.4723, engineered: false, desc: "Equity grant incentive tier" },
        { rank: 3, name: "AverageSatisfaction", value: 0.3167, engineered: true, desc: "Blended satisfaction rating (sole engineered feature in top 10)" },
        { rank: 4, name: "NumCompaniesWorked", value: 0.2189, engineered: false, desc: "Historical employer transitions count" },
        { rank: 5, name: "DistanceFromHome", value: 0.1908, engineered: false, desc: "Commuting distance to workplace" },
        { rank: 6, name: "BusinessTravel", value: 0.1826, engineered: false, desc: "Travel frequency expectation" },
        { rank: 7, name: "OfferedSalaryLKR", value: 0.1796, engineered: false, desc: "Offered compensation in Sri Lankan Rupees" },
        { rank: 8, name: "Department", value: 0.1583, engineered: false, desc: "Organizational functional unit" },
        { rank: 9, name: "EducationField", value: 0.1579, engineered: false, desc: "Academic specialization area" },
        { rank: 10, name: "DailyRate", value: 0.1551, engineered: false, desc: "Standardized daily billing rate" }
      ]
    },

    lineB_survey: {
      name: "Empirical Sri Lankan Workforce Survey",
      datasetScope: "Empirical survey dataset gathered from local IT industry professionals; completely separate modelling line",
      responses: 835,
      holdoutSet: 167,
      holdoutDescription: "Untouched holdout evaluation set",
      model: "Logistic Regression",
      rocAuc: "0.9029",
      prAuc: "0.6577",
      f1Score: "64.15%",
      criticalNote: "This empirical survey dataset is a distinct model-development line and is never combined with the 1,470 benchmark."
    }
  },

  // Project Milestones aligned with SLIIT assessment criteria
  milestones: [
    {
      id: "m1",
      name: "Project Proposal",
      assessmentCode: "PROP-01",
      category: "Proposal Defense",
      date: "March 2026",
      status: "Completed",
      marksAllocated: "12% (12 Marks)",
      summary: "Comprehensive defense of research problem, literature survey, research gap, objectives, methodology, and component allocation.",
      deliverables: [
        "Individual Proposal Reports (4 members)",
        "Topic Assessment Form (TAF)",
        "Proposal Presentation Deck (33 slides)",
        "Gantt Chart & Work Breakdown Structure"
      ],
      evidence: [
        { title: "Proposal Slides (R26-IT-082.pptx)", url: "assets/presentations/R26-IT-082-Proposal-Presentation.pptx" },
        { title: "Topic Assessment Form (PDF)", url: "assets/documents/Topic-Assessment-Form-TAF_R26-IT-082.pdf" },
        { title: "Individual Proposal Reports", url: "documents.html#proposals" }
      ]
    },
    {
      id: "m2",
      name: "Progress Presentation 1",
      assessmentCode: "PP-01",
      category: "50% Milestone Review",
      date: "June 2026",
      status: "Completed / In Review",
      marksAllocated: "15% (15 Marks)",
      summary: "Evaluation of initial architecture implementation: CV extraction pipeline, Faster-Whisper audio transcription, and baseline ML models.",
      deliverables: [
        "Progress Report 1",
        "Progress Presentation 1 Slides",
        "Pipeline Integration Demo (Ingestion & Audio)",
        "Initial Cross-Encoder Token Setup"
      ],
      evidence: [
        { title: "Progress Presentation 1 Deck (PP1.pptx)", url: "assets/presentations/R26-IT-082-Progress-Presentation-1.pptx" },
        { title: "Progress Report 1 (Pending Final Upload)", url: "documents.html#progress" }
      ]
    },
    {
      id: "m3",
      name: "Progress Presentation 2",
      assessmentCode: "PP-02",
      category: "90% Milestone Review",
      date: "August 2026",
      status: "Completed / In Review",
      marksAllocated: "18% (18 Marks)",
      summary: "Evaluation of advanced model fine-tuning, CatBoost threshold calibration (τ = 0.33), TreeSHAP attributions, and empirical evaluation.",
      deliverables: [
        "Progress Report 2",
        "Progress Presentation 2 Slides",
        "Empirical Benchmark Report",
        "Feature Ablation & Threshold Results"
      ],
      evidence: [
        { title: "Progress Presentation 2 Deck (PP2.pptx)", url: "assets/presentations/R26-IT-082-Progress-Presentation-2.pptx" },
        { title: "View Milestones Catalogue", url: "milestones.html#milestone-pp2" }
      ]
    },
    {
      id: "m4",
      name: "Final Assessment",
      assessmentCode: "FA-01",
      category: "Final Report Submission",
      date: "October 2026",
      status: "In Progress",
      marksAllocated: "40% (Final Thesis & Group Deliverables)",
      summary: "Comprehensive academic submission comprising group final report, individual dissertation chapters, logbook, and research website.",
      deliverables: [
        "Final Group Research Report (Soft & Hard Bound)",
        "Individual Final Theses (4 Books)",
        "Project Status Document & Student Logbook",
        "Research Website Source Package (< 20 MB)"
      ],
      evidence: [
        { title: "Common Integrated Solution Report (Group Final Report)", url: "assets/documents/R26-IT-082_Common_Integrated_Solution_Report.pdf" },
        { title: "Individual Final Theses (4 Subsystems)", url: "documents.html" },
        { title: "Final Viva Presentation Deck (PPTX)", url: "assets/presentations/R26-IT-082-Final-Presentation.pptx" }
      ]
    },
    {
      id: "m5",
      name: "Viva / Final Presentation",
      assessmentCode: "VIVA-01",
      category: "Oral Defense & Demonstration",
      date: "November 2026",
      status: "Scheduled",
      marksAllocated: "15% (Viva Presentation & System Defense)",
      summary: "Final oral examination, live system demonstration, and defense before the SLIIT Faculty of Computing examination board.",
      deliverables: [
        "Final Viva Slide Deck",
        "Live 12-Container Microservice Demonstration",
        "Examiner Q&A Defense Protocol"
      ],
      evidence: [
        { title: "Final Viva Presentation Deck (PPTX)", url: "assets/presentations/R26-IT-082-Final-Presentation.pptx" },
        { title: "Presentations Portal", url: "presentations.html" }
      ]
    }
  ],

  // Document Library Catalog
  documents: [
    // Final Group Report & 4 Individual Dissertations
    {
      id: "doc-final-group",
      title: "AI-Powered Intelligent Talent Acquisition System — Common Integrated Solution Report",
      category: "Final Reports & Theses",
      component: "All Components (Group Integration)",
      date: "October 2026",
      type: "PDF",
      size: "775 KB",
      status: "Available",
      url: "assets/documents/R26-IT-082_Common_Integrated_Solution_Report.pdf",
      description: "Official SLIIT group comprehensive solution report (41 pages) consolidating the multi-agent architecture, shared data contracts, cross-module evaluations, and unified recruiter workspace across all 4 research areas."
    },
    {
      id: "doc-thesis-fonseka",
      title: "Individual Final Thesis — Fonseka W.G.K. (IT22248794)",
      category: "Final Reports & Theses",
      component: "Hiring Risk & Early Attrition Prediction Module",
      date: "October 2026",
      type: "PDF",
      size: "1.39 MB",
      status: "Available",
      url: "assets/documents/R26-IT-082_IT22248794_Fonseka_WGK_Final_Thesis.pdf",
      description: "Official undergraduate dissertation (48 pages) detailing CatBoost turnover modeling, operational threshold calibration (τ=0.33), TreeSHAP local feature attributions, and interactive What-If scenario simulations."
    },
    {
      id: "doc-thesis-jayantha",
      title: "Individual Final Thesis — Jayantha C.H. (IT22226914)",
      category: "Final Reports & Theses",
      component: "Intelligent Resume Parsing & Skill Proficiency Analysis",
      date: "October 2026",
      type: "PDF",
      size: "898 KB",
      status: "Available",
      url: "assets/documents/R26-IT-082_IT22226914_Jayantha_CH_Final_Thesis.pdf",
      description: "Official undergraduate dissertation (46 pages) covering multi-format CV extraction, canonical skill ontology normalization, and multi-task DeBERTa-v3 proficiency estimation across 24,567 skill-context rows."
    },
    {
      id: "doc-thesis-deshan",
      title: "Individual Final Thesis — Deshan M.A.K. (IT22195616)",
      category: "Final Reports & Theses",
      component: "Job–Candidate Matching & Explainable AI Engine",
      date: "October 2026",
      type: "PDF",
      size: "1.11 MB",
      status: "Available",
      url: "assets/documents/R26-IT-082_IT22195616_Deshan_MAK_Final_Thesis.pdf",
      description: "Official undergraduate dissertation (61 pages) on bidirectional sequence-level BERT Cross-Encoder candidate matching, calibrated decision threshold (τ=0.44), and grounded natural-language explanations."
    },
    {
      id: "doc-thesis-tennakoon",
      title: "Individual Final Thesis — Tennakoon T.M.S.S. (IT22197832)",
      category: "Final Reports & Theses",
      component: "AI-Based Interview Evaluation & Certificate Validation",
      date: "October 2026",
      type: "PDF",
      size: "777 KB",
      status: "Available",
      url: "assets/documents/R26-IT-082_IT22197832_Tennakoon_TMSS_Final_Thesis.pdf",
      description: "Official undergraduate dissertation (64 pages) on local Faster-Whisper audio transcription, DeBERTa-v3 automatic short-answer grading (QWK=0.758), concept coverage, and independent expert rubric pilot."
    },

    // Institutional Topic Assessment Form (TAF)
    {
      id: "doc-taf",
      title: "Topic Assessment Form (TAF) — Project R26-IT-082",
      category: "Topic Assessment (TAF)",
      component: "All Components",
      date: "January 2026",
      type: "PDF",
      size: "417 KB",
      status: "Available",
      url: "assets/documents/Topic-Assessment-Form-TAF_R26-IT-082.pdf",
      description: "Official SLIIT IT4010 Topic Assessment Form detailing initial research problem definition, novelty, component distribution, and supervisor approvals."
    },

    // Individual Proposals
    {
      id: "doc-prop-gehan",
      title: "Project Proposal Report — Fonseka W.G.K. (IT22248794)",
      category: "Proposals",
      component: "Hiring Risk & Early Attrition Prediction Module",
      date: "March 2026",
      type: "PDF",
      size: "616 KB",
      status: "Available",
      url: "assets/documents/R26-IT-082_IT22248794_Fonseka_WGK_Proposal.pdf",
      description: "Individual proposal report for the retention intelligence subsystem, covering pre-hire indicators, machine learning formulations, and XAI."
    },
    {
      id: "doc-prop-jayantha",
      title: "Project Proposal Report — Jayantha C.H. (IT22226914)",
      category: "Proposals",
      component: "Intelligent Resume Parsing & Skill Proficiency Analysis",
      date: "March 2026",
      type: "PDF",
      size: "1.10 MB",
      status: "Available",
      url: "assets/documents/R26-IT-082_IT22226914_Jayantha_CH_Proposal.pdf",
      description: "Individual proposal report for resume parsing, CRF Named Entity Recognition, and context-aware skill proficiency estimation."
    },
    {
      id: "doc-prop-deshan",
      title: "Project Proposal Report — Deshan M.A.K. (IT22195616)",
      category: "Proposals",
      component: "Job–Candidate Matching & Explainable AI Engine",
      date: "March 2026",
      type: "PDF",
      size: "1.06 MB",
      status: "Available",
      url: "assets/documents/R26-IT-82_IT22195616_Deshan_MAK_Proposal.pdf",
      description: "Individual proposal report detailing deep transformer matching between candidate profiles and job requisitions, with explainable justifications."
    },
    {
      id: "doc-prop-tennakoon",
      title: "Project Proposal Report — Tennakoon T.M.S.S. (IT22197832)",
      category: "Proposals",
      component: "AI-Based Interview Evaluation & Soft Skill Analysis",
      date: "March 2026",
      type: "PDF",
      size: "1.03 MB",
      status: "Available",
      url: "assets/documents/R26-IT-82_IT22197832_Tennakoon_TMSS_Proposal.pdf",
      description: "Individual proposal report covering speech-to-text transcription via Whisper, automated short-answer grading, and candidate readiness scoring."
    },

    // Milestone Presentation Decks (.pptx)
    {
      id: "doc-pres-final",
      title: "Final Assessment & Viva Voce Slide Deck",
      category: "Presentations",
      component: "All Components",
      date: "October / November 2026",
      type: "PPTX",
      size: "2.01 MB",
      status: "Available",
      url: "assets/presentations/R26-IT-082-Final-Presentation.pptx",
      description: "Official 9-slide final oral defense and viva voce presentation deck covering multi-agent system execution, component achievements, and evaluation."
    },
    {
      id: "doc-pres-pp2",
      title: "Progress Presentation 2 Deck — 90% Milestone Review",
      category: "Presentations",
      component: "All Components",
      date: "August 2026",
      type: "PPTX",
      size: "4.60 MB",
      status: "Available",
      url: "assets/presentations/R26-IT-082-Progress-Presentation-2.pptx",
      description: "Advanced 9-slide milestone presentation presenting CatBoost threshold calibration (τ=0.33), TreeSHAP feature attributions, and microservices."
    },
    {
      id: "doc-pres-pp1",
      title: "Progress Presentation 1 Deck — 50% Milestone Review",
      category: "Presentations",
      component: "All Components",
      date: "June 2026",
      type: "PPTX",
      size: "7.37 MB",
      status: "Available",
      url: "assets/presentations/R26-IT-082-Progress-Presentation-1.pptx",
      description: "Mid-term 23-slide milestone defense reviewing parser extraction, Faster-Whisper audio transcription, candidate matching, and attrition modeling."
    },
    {
      id: "doc-pres-prop",
      title: "Project Proposal Defense Slide Deck (R26-IT-082)",
      category: "Presentations",
      component: "All Components",
      date: "March 2026",
      type: "PPTX",
      size: "6.50 MB",
      status: "Available",
      url: "assets/presentations/R26-IT-082-Proposal-Presentation.pptx",
      description: "Official 33-slide proposal defense deck presented before the SLIIT Examination Panel covering problem definition, component allocation, and methodology."
    }
  ],

  // Presentations Library
  presentations: [
    {
      id: "pres-proposal",
      deckKey: "proposal",
      title: "Project Proposal Presentation (R26-IT-082)",
      stage: "Project Proposal (12% Marks)",
      date: "March 2026",
      slidesCount: 33,
      status: "Available",
      type: "PPTX",
      size: "6.50 MB",
      url: "assets/presentations/R26-IT-082-Proposal-Presentation.pptx",
      summary: "Official proposal presentation slides covering problem definition, existing solutions, individual novelty, technical methodologies, budget, Gantt chart, and WBS.",
      previewAvailable: true
    },
    {
      id: "pres-pp1",
      deckKey: "pp1",
      title: "Progress Presentation 1 (50% Milestone)",
      stage: "Progress Presentation 1 (15% Marks)",
      date: "June 2026",
      slidesCount: 23,
      status: "Available",
      type: "PPTX",
      size: "7.37 MB",
      url: "assets/presentations/R26-IT-082-Progress-Presentation-1.pptx",
      summary: "Mid-term 50% milestone defense slides presenting initial subsystem prototypes, multi-format CV parsing pipeline, audio transcription via Faster-Whisper, and baseline ML models.",
      previewAvailable: true
    },
    {
      id: "pres-pp2",
      deckKey: "pp2",
      title: "Progress Presentation 2 (90% Milestone)",
      stage: "Progress Presentation 2 (18% Marks)",
      date: "August 2026",
      slidesCount: 9,
      status: "Available",
      type: "PPTX",
      size: "4.60 MB",
      url: "assets/presentations/R26-IT-082-Progress-Presentation-2.pptx",
      summary: "Advanced 90% milestone review slides detailing CatBoost threshold tuning (τ = 0.33), TreeSHAP attributions, and empirical feature ablation results.",
      previewAvailable: true
    },
    {
      id: "pres-final",
      deckKey: "final",
      title: "Final Assessment & Viva Voce Presentation",
      stage: "Final Presentation (15% Marks / Defense)",
      date: "October / November 2026",
      slidesCount: 9,
      status: "Available",
      type: "PPTX",
      size: "2.01 MB",
      url: "assets/presentations/R26-IT-082-Final-Presentation.pptx",
      summary: "Comprehensive final evaluation and oral defense slide deck presented before the examination board, demonstrating end-to-end integration across all four research subsystems.",
      previewAvailable: true
    },
    {
      id: "pres-template",
      deckKey: null,
      title: "SLIIT Proposal Presentation Template",
      stage: "Official Template",
      date: "2026",
      slidesCount: 14,
      status: "Available (Template)",
      type: "POTM",
      size: "458 KB",
      url: "assets/presentations/Proposal-Presentation-Template.potm",
      summary: "Institutional slide master template provided by SLIIT Faculty of Computing for proposal preparation.",
      previewAvailable: false
    }
  ],

  // Deck metadata configurations for interactive viewer & cards
  decks: {
    proposal: {
      id: "proposal",
      title: "Project Proposal Defense Deck",
      code: "PROP-01",
      date: "March 2026",
      marks: "12% Marks",
      slidesCount: 33,
      size: "6.50 MB",
      url: "assets/presentations/R26-IT-082-Proposal-Presentation.pptx",
      badge: "Official Deck • Approved",
      stageTag: "SLIIT IT4010 RESEARCH PROPOSAL • R26-IT-082",
      leadDesc: "Delivered before the SLIIT Examination Panel • 33 Slides • March 2026 • 6.50 MB Optimized PowerPoint Presentation"
    },
    pp1: {
      id: "pp1",
      title: "Progress Presentation 1 Deck (50% Milestone)",
      code: "PP-01",
      date: "June 2026",
      marks: "15% Marks",
      slidesCount: 23,
      size: "7.37 MB",
      url: "assets/presentations/R26-IT-082-Progress-Presentation-1.pptx",
      badge: "50% Milestone • Completed",
      stageTag: "SLIIT IT4010 PROGRESS PRESENTATION 1 • R26-IT-082",
      leadDesc: "Delivered for 50% Milestone Review • 23 Slides • June 2026 • 7.37 MB Optimized PowerPoint Presentation"
    },
    pp2: {
      id: "pp2",
      title: "Progress Presentation 2 Deck (90% Milestone)",
      code: "PP-02",
      date: "August 2026",
      marks: "18% Marks",
      slidesCount: 9,
      size: "4.60 MB",
      url: "assets/presentations/R26-IT-082-Progress-Presentation-2.pptx",
      badge: "90% Milestone • Completed",
      stageTag: "SLIIT IT4010 PROGRESS PRESENTATION 2 • R26-IT-082",
      leadDesc: "Delivered for 90% Milestone Review • 9 Slides • August 2026 • 4.60 MB Optimized PowerPoint Presentation"
    },
    final: {
      id: "final",
      title: "Final Assessment & Viva Voce Slide Deck",
      code: "FA-01 / VIVA",
      date: "October / November 2026",
      marks: "15% Marks (Viva) / 40% (Final Assessment)",
      slidesCount: 9,
      size: "2.01 MB",
      url: "assets/presentations/R26-IT-082-Final-Presentation.pptx",
      badge: "Final Defense • Approved",
      stageTag: "SLIIT IT4010 FINAL DEFENSE & VIVA VOCE • R26-IT-082",
      leadDesc: "Delivered before the SLIIT Examination Board • 9 Slides • October 2026 • 2.01 MB PowerPoint Presentation"
    }
  },

  // Slides collections across all decks
  decksSlides: {
    "proposal": [
        {
            "num": 1,
            "title": "Title Slide: AI-Powered Talent Acquisition",
            "desc": "AI-Powered Intelligent Talent Acquisition System \u2022 SLIIT Research Project R26-IT-082.",
            "tag": "Overview"
        },
        {
            "num": 2,
            "title": "Introduction to the Problem",
            "desc": "High application volume, manual screening bottlenecks, and need for data-driven recruitment intelligence.",
            "tag": "Problem"
        },
        {
            "num": 3,
            "title": "Impact of the Recruitment Gap",
            "desc": "Recruiter burnout, hiring bias, talent mismatches, and organizational cost of early employee turnover.",
            "tag": "Impact"
        },
        {
            "num": 4,
            "title": "Existing Solutions & Critical Limitations",
            "desc": "Keyword filtering in legacy ATS, remote video portals lacking objective scoring, and black-box recommendations.",
            "tag": "Gap"
        },
        {
            "num": 5,
            "title": "Fonseka W.G.K. \u2014 Contribution & Novelty",
            "desc": "Hiring Risk & Early Attrition Prediction Module \u2022 Pre-hire tenure indicators and Explainable AI (XAI).",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 6,
            "title": "Fonseka W.G.K. \u2014 Research Objectives",
            "desc": "Formulate feature vectors, establish operating thresholds (\u03c4=0.33), and train predictive ML classifiers.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 7,
            "title": "Fonseka W.G.K. \u2014 Technologies & Domain",
            "desc": "Human Resource Analytics, Machine Learning (CatBoost, XGBoost, Scikit-learn), TreeSHAP, and Python.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 8,
            "title": "Fonseka W.G.K. \u2014 Validation & Datasets",
            "desc": "IBM HR benchmark adaptation, class imbalance handling (1:5.20), stratified cross-validation, and metrics.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 9,
            "title": "Fonseka W.G.K. \u2014 Subsystem Architecture",
            "desc": "Detailed pipeline architecture for candidate ingestion, risk scoring, and What-If scenario simulation.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 10,
            "title": "Fonseka W.G.K. \u2014 Inter-Module Dependencies",
            "desc": "Consumes structured candidate profiles from parser and match scores from matching engine for holistic risk review.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 11,
            "title": "Jayantha C.H. \u2014 Contribution & Novelty",
            "desc": "Intelligent Resume Parsing & Skill Proficiency Analysis \u2022 Context-aware skill depth beyond keyword presence.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 12,
            "title": "Jayantha C.H. \u2014 Research Objectives",
            "desc": "Multi-format resume text extraction, SpaCy NLP pipeline, CRF Named Entity Recognition, and proficiency scoring.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 13,
            "title": "Jayantha C.H. \u2014 Technologies & Domain",
            "desc": "Python, SpaCy, sklearn-crfsuite, pdfplumber, PyMuPDF, DeBERTa-v3, and MongoDB candidate store.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 14,
            "title": "Jayantha C.H. \u2014 Validation & Datasets",
            "desc": "Field extraction precision/recall, skill normalization against canonical catalogues, and benchmark corpora.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 15,
            "title": "Jayantha C.H. \u2014 Subsystem Architecture",
            "desc": "Resume parsing pipeline architecture from document ingestion to structured, explainable skill profiles.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 16,
            "title": "Jayantha C.H. \u2014 Inter-Module Dependencies",
            "desc": "Feeds structured candidate profiles, verified skills, and experience to matching, interview, and attrition modules.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 17,
            "title": "Deshan M.A.K. \u2014 Contribution & Novelty",
            "desc": "Job\u2013Candidate Matching & Explainable AI Engine \u2022 Deep semantic token interactions and grounded explanations.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 18,
            "title": "Deshan M.A.K. \u2014 Research Objectives",
            "desc": "Contextual candidate-job similarity scoring, rank generation, and transparent justifications for shortlisting.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 19,
            "title": "Deshan M.A.K. \u2014 Technologies & Domain",
            "desc": "BERT Cross-Encoder architecture, ONNX Runtime acceleration, FastAPI, Node.js gateway, and React interface.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 20,
            "title": "Deshan M.A.K. \u2014 Validation & Datasets",
            "desc": "Ranking evaluation metrics (Precision@K, Recall@K, MRR, NDCG@5) and similarity distribution benchmarking.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 21,
            "title": "Deshan M.A.K. \u2014 Subsystem Architecture",
            "desc": "Component architecture of the semantic matching engine, threshold evaluator (\u03c4=0.44), and XAI module.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 22,
            "title": "Deshan M.A.K. \u2014 Inter-Module Dependencies",
            "desc": "Consumes structured resume output, matches against active vacancies, and transmits match scores to application records.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 23,
            "title": "Tennakoon T.M.S.S. \u2014 Contribution & Novelty",
            "desc": "AI-Based Interview Evaluation & Soft Skill Analysis \u2022 Spoken answer transcription and DeBERTa ASAG scoring.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 24,
            "title": "Tennakoon T.M.S.S. \u2014 Research Objectives",
            "desc": "Local audio transcription via Whisper, DeBERTa short-answer grading against rubrics, and speech pattern metrics.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 25,
            "title": "Tennakoon T.M.S.S. \u2014 Technologies & Domain",
            "desc": "Python, Faster-Whisper (INT8 CPU), DeBERTa-v3, NLI Cross-Encoder, LiveKit WebRTC, and Bloom's Revised Taxonomy.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 26,
            "title": "Tennakoon T.M.S.S. \u2014 Validation & Datasets",
            "desc": "Held-out public ASAG grading benchmarks (QWK=0.758, r=0.795) and tri-blind expert validation pilot.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 27,
            "title": "Tennakoon T.M.S.S. \u2014 Subsystem Architecture",
            "desc": "Five-stage interview evaluation pipeline from live audio streaming to question-level technical scoring.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 28,
            "title": "Tennakoon T.M.S.S. \u2014 Inter-Module Dependencies",
            "desc": "Coordinates with job vacancy context, records independent interview assessment, and preserves scoring boundaries.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 29,
            "title": "Unified Platform Architecture",
            "desc": "High-level integrated multi-container microservice topology binding all 4 analytical pipelines through Express gateway.",
            "tag": "Architecture"
        },
        {
            "num": 30,
            "title": "Commercialization & IP Strategy",
            "desc": "Subscription and enterprise licensing models, customer segments, data privacy compliance, and student IP governance.",
            "tag": "Commercialization"
        },
        {
            "num": 31,
            "title": "Project Gantt Schedule",
            "desc": "12-month timeline tracking development milestones across all four research subsystems (Nov 2025 \u2013 Nov 2026).",
            "tag": "Planning"
        },
        {
            "num": 32,
            "title": "Work Breakdown Structure (WBS)",
            "desc": "Hierarchical decomposition of research, architectural design, implementation, and empirical testing packages.",
            "tag": "Planning"
        },
        {
            "num": 33,
            "title": "Conclusion & Acknowledgment",
            "desc": "Synthesis of research achievements and gratitude to supervisors Mr. Dhammika De Silva and Mr. Samantha Rajapaksha.",
            "tag": "Conclusion"
        }
    ],
    "pp1": [
        {
            "num": 1,
            "title": "Title Slide: Progress Presentation 1 (50%)",
            "desc": "AI-Powered Intelligent Talent Acquisition System \u2022 50% Milestone Assessment \u2022 Group R26-IT-082.",
            "tag": "Overview"
        },
        {
            "num": 2,
            "title": "Addressing Proposal Feedback",
            "desc": "Responses to examiners' comments: Sri Lankan dataset investigation, model selection, and empirical scope refinement.",
            "tag": "Feedback"
        },
        {
            "num": 3,
            "title": "Problem Review & Platform Motivation",
            "desc": "Recruitment bottlenecks in manual screening, subjective evaluation, and absence of proactive retention forecasting.",
            "tag": "Problem"
        },
        {
            "num": 4,
            "title": "Overall Solution Design Excellence",
            "desc": "Architectural principles: modular microservices, decoupled scoring pipelines, and explainable decision support.",
            "tag": "Architecture"
        },
        {
            "num": 5,
            "title": "Comparative Impact of Proposed Solution",
            "desc": "Eliminating keyword brittleness, providing inspectable evidence, and reducing turnover risk before offer issuance.",
            "tag": "Impact"
        },
        {
            "num": 6,
            "title": "Hiring Risk & Early Attrition: Fonseka W.G.K.",
            "desc": "IT22248794 \u2022 Gehan Fonseka \u2022 Hiring Risk & Early Attrition Prediction Module mid-term progress.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 7,
            "title": "Attrition Sub-Problem & Solution Approach",
            "desc": "Identification of pre-hire turnover patterns using career stability, compensation alignment, and workplace satisfaction.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 8,
            "title": "Attrition User Requirements Addressed",
            "desc": "ML turnover classification, probability estimation, role mismatch indicators, and What-If salary/work scenario analysis.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 9,
            "title": "Resume Intelligence: Jayantha C.H.",
            "desc": "IT22226914 \u2022 Chamudi Jayantha \u2022 Intelligent Resume Parsing & Skill Proficiency Analysis mid-term progress.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 10,
            "title": "Resume Sub-Problem & Solution Approach",
            "desc": "Moving beyond keyword presence to evaluate semantic skill depth, project complexity, and experience context.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 11,
            "title": "Resume User Requirements & Contribution",
            "desc": "Multi-format document parsing (PDF, DOCX, TXT), section segmentation, and context-aware skill extraction.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 12,
            "title": "Job\u2013Candidate Matching: Deshan M.A.K.",
            "desc": "IT22195616 \u2022 Kavishka Deshan \u2022 Job\u2013Candidate Matching & Explainable AI Engine mid-term progress.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 13,
            "title": "Matching Sub-Problem & Solution Approach",
            "desc": "Addressing vocabulary mismatch between resumes and job postings through transformer-based semantic alignment.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 14,
            "title": "Matching User Requirements & Contribution",
            "desc": "Cross-encoder candidate ranking, explainable justification of recommendations, and prototype recruiter feedback.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 15,
            "title": "Interview Evaluation: Tennakoon T.M.S.S.",
            "desc": "IT22197832 \u2022 Sajani Tennakoon \u2022 AI-Based Interview Evaluation & Soft Skill Analysis mid-term progress.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 16,
            "title": "Interview Sub-Problem & Solution Approach",
            "desc": "Replacing subjective interviewer bias with structured speech transcription and automated short-answer grading.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 17,
            "title": "Interview User Requirements & Contribution",
            "desc": "Faster-Whisper speech-to-text, question-answer pairing, DeBERTa rubric scoring, and speech delivery metrics.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 18,
            "title": "Commercialization & Deployment Strategy",
            "desc": "Enterprise cloud deployment, integration APIs for third-party ATS platforms, and sustainable subscription models.",
            "tag": "Commercialization"
        },
        {
            "num": 19,
            "title": "Target Customer Personas",
            "desc": "Profiles of corporate talent acquisition teams, independent recruitment agencies, and enterprise HR managers.",
            "tag": "Commercialization"
        },
        {
            "num": 20,
            "title": "Market Opportunity & Industry Growth",
            "desc": "Global trends in AI-driven HR technology and regional recruitment adoption in Sri Lanka and South Asia.",
            "tag": "Commercialization"
        },
        {
            "num": 21,
            "title": "Integrated Multi-Task AI Pipeline",
            "desc": "Synergistic data flow connecting Resume Intelligence, Candidate Matching, Interview Evaluation, and Attrition.",
            "tag": "Architecture"
        },
        {
            "num": 22,
            "title": "Cost Recovery & Sustainable Business Model",
            "desc": "Tiered SaaS pricing, cost structure analysis, and return-on-investment justification for hiring organizations.",
            "tag": "Commercialization"
        },
        {
            "num": 23,
            "title": "Progress Presentation 1 Conclusion",
            "desc": "Summary of 50% milestone achievements, next sprint deliverables, and acknowledgment of academic guidance.",
            "tag": "Conclusion"
        }
    ],
    "pp2": [
        {
            "num": 1,
            "title": "Title Slide: Progress Presentation 2 (90%)",
            "desc": "AI-Powered Intelligent Talent Acquisition System \u2022 90% Milestone Review \u2022 Group R26-IT-082.",
            "tag": "Overview"
        },
        {
            "num": 2,
            "title": "Research Team & Component Allocation",
            "desc": "Lead Author Gehan Fonseka, Chamudi Jayantha, Kavishka Deshan, and Sajani Tennakoon with respective 90% progress.",
            "tag": "Overview"
        },
        {
            "num": 3,
            "title": "Advanced Research Context & Progress",
            "desc": "Comprehensive status of the four integrated subsystems approaching final system completion and validation.",
            "tag": "Overview"
        },
        {
            "num": 4,
            "title": "Solution Impact & Evaluation Overview",
            "desc": "Empirical validation metrics across attrition modeling, candidate matching, resume proficiency, and interview scoring.",
            "tag": "Impact"
        },
        {
            "num": 5,
            "title": "Research Gap & End-to-End Integration",
            "desc": "Closing the fragmentation gap by uniting 4 separate evidence streams into a single cohesive candidate dossier.",
            "tag": "Gap"
        },
        {
            "num": 6,
            "title": "Integrated Solution Architecture Summary",
            "desc": "Detailed review of containerized services, threshold calibration (\u03c4=0.33), TreeSHAP attributions, and XAI.",
            "tag": "Architecture"
        },
        {
            "num": 7,
            "title": "End-to-End System Microservice Architecture",
            "desc": "Production Docker Compose network with Express API Gateway, Python FastAPI ML services, and React UI.",
            "tag": "Architecture"
        },
        {
            "num": 8,
            "title": "Commercial Deployment & Integration Readiness",
            "desc": "ATS API hooks, enterprise cloud deployment roadmap, and scalability benchmarks for large candidate pools.",
            "tag": "Commercialization"
        },
        {
            "num": 9,
            "title": "Progress Presentation 2 Conclusion",
            "desc": "Key milestone takeaways, final thesis preparation roadmap, and acknowledgment of supervisors.",
            "tag": "Conclusion"
        }
    ],
    "final": [
        {
            "num": 1,
            "title": "Title Slide: Final Presentation & Defense",
            "desc": "AI-Powered Intelligent Talent Acquisition System \u2022 Final Viva Voce Presentation \u2022 Group R26-IT-082.",
            "tag": "Overview"
        },
        {
            "num": 2,
            "title": "The Problem in Brief & Motivation",
            "desc": "Summary of traditional recruitment inefficiencies, lack of explainability, and the need for multimodal intelligence.",
            "tag": "Problem"
        },
        {
            "num": 3,
            "title": "Fonseka W.G.K. \u2014 Hiring Risk & Attrition",
            "desc": "IT22248794 \u2022 Optuna-tuned CatBoost (ROC-AUC: 0.8071), \u03c4=0.33 calibration (+15.16% recall gain), TreeSHAP, and survey.",
            "tag": "Attrition (Fonseka)"
        },
        {
            "num": 4,
            "title": "Jayantha C.H. \u2014 Intelligent Resume Parsing",
            "desc": "IT22226914 \u2022 Multi-task DeBERTa-v3 proficiency regressor (MAE: 2.73, accuracy: 98.98%), CRF NER, and CV explanations.",
            "tag": "Resume (Jayantha)"
        },
        {
            "num": 5,
            "title": "Deshan M.A.K. \u2014 Job\u2013Candidate Matching & XAI",
            "desc": "IT22195616 \u2022 6-layer BERT Cross-Encoder, ONNX Runtime acceleration, \u03c4=0.44 thresholding, and grounded match explanations.",
            "tag": "Matching (Deshan)"
        },
        {
            "num": 6,
            "title": "Tennakoon T.M.S.S. \u2014 Interview Evaluation & ASAG",
            "desc": "IT22197832 \u2022 Faster-Whisper local speech transcription, DeBERTa-v3 ASAG scoring (QWK: 0.758), and tri-blind expert pilot.",
            "tag": "Interview (Tennakoon)"
        },
        {
            "num": 7,
            "title": "System Future Improvements & Roadmap",
            "desc": "Multilingual speech support (Sinhala/Tamil), automated cryptographic certificate validation, and GPU acceleration.",
            "tag": "Future Work"
        },
        {
            "num": 8,
            "title": "User Acceptance, Stakeholder Feedback & Ethics",
            "desc": "Human-in-the-loop decision boundaries, recruiter auditability, privacy protection, and ethical AI compliance.",
            "tag": "Validation"
        },
        {
            "num": 9,
            "title": "Final Defense Conclusion & Thank You",
            "desc": "Summary of group research achievements and sincere appreciation to the SLIIT Faculty of Computing and supervisors.",
            "tag": "Conclusion"
        }
    ]
},

  // Default slides index (Proposal Deck for backward compatibility)
  get slidesIndex() {
    return this.decksSlides ? this.decksSlides.proposal : [];
  }
};

// Export to window
if (typeof window !== 'undefined') {
  window.PROJECT_DATA = PROJECT_DATA;
}
