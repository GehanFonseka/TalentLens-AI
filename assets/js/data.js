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
        { title: "View Final Documents Catalogue", url: "documents.html#final" }
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
        { title: "Presentations Portal", url: "presentations.html" }
      ]
    }
  ],

  // Document Library Catalog
  documents: [
    {
      id: "doc-taf",
      title: "Topic Assessment Form (TAF) — Project R26-IT-082",
      category: "Topic Assessment / Charter",
      component: "All Components",
      date: "January 2026",
      type: "PDF",
      size: "417 KB",
      status: "Available",
      url: "assets/documents/Topic-Assessment-Form-TAF_R26-IT-082.pdf",
      description: "Official SLIIT IT4010 Topic Assessment Form detailing initial research problem definition, novelty, component distribution, and supervisor approvals."
    },
    {
      id: "doc-prop-gehan",
      title: "Project Proposal Report — Fonseka W.G.K. (IT22248794)",
      category: "Project Proposal",
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
      category: "Project Proposal",
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
      category: "Project Proposal",
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
      category: "Project Proposal",
      component: "AI-Based Interview Evaluation & Soft Skill Analysis",
      date: "March 2026",
      type: "PDF",
      size: "1.03 MB",
      status: "Available",
      url: "assets/documents/R26-IT-82_IT22197832_Tennakoon_TMSS_Proposal.pdf",
      description: "Individual proposal report covering speech-to-text transcription via Whisper, automated short-answer grading, and candidate readiness scoring."
    },
    {
      id: "doc-charter-sample",
      title: "Project Charter Specification (Group R26-IT-082)",
      category: "Project Charter",
      component: "All Components",
      date: "February 2026",
      type: "PDF",
      size: "18 KB",
      status: "SAMPLE — Replace Before Submission",
      url: "assets/documents/Project-Charter-Sample.pdf",
      description: "Sample project charter outline establishing project scope, governance boundaries, ethical guidelines, and milestone targets."
    },
    {
      id: "doc-ethics-sample",
      title: "Ethics Clearance Checklist (Group R26-IT-082)",
      category: "Checklists",
      component: "All Components",
      date: "February 2026",
      type: "PDF",
      size: "16 KB",
      status: "SAMPLE — Replace Before Submission",
      url: "assets/documents/Ethics-Clearance-Checklist-Sample.pdf",
      description: "Sample ethics clearance checklist confirming anonymization, sensitive attribute exclusion, and human decision authority."
    },
    {
      id: "doc-pp1-rep",
      title: "Progress Presentation 1 Report",
      category: "Progress Reports",
      component: "Core Pipelines",
      date: "June 2026",
      type: "PDF",
      size: "Pending",
      status: "Pending Upload",
      url: null,
      description: "Mid-term progress report documenting 50% milestone development and preliminary containerized microservices."
    },
    {
      id: "doc-pp2-rep",
      title: "Progress Presentation 2 Report",
      category: "Progress Reports",
      component: "Advanced Models",
      date: "August 2026",
      type: "PDF",
      size: "Pending",
      status: "Pending Upload",
      url: null,
      description: "Advanced progress report documenting 90% milestone, cross-validation metrics, and TreeSHAP results."
    },
    {
      id: "doc-final-group",
      title: "Final Research Report (Group Comprehensive Volume)",
      category: "Final Report",
      component: "All Components",
      date: "October 2026",
      type: "PDF",
      size: "Pending",
      status: "Pending Upload",
      url: null,
      description: "Full group final thesis consolidating the 4 research areas, architecture, benchmarks, and commercialization plan."
    },
    {
      id: "doc-indiv-final",
      title: "Individual Final Reports (4 Student Dissertations)",
      category: "Individual Final Reports",
      component: "Individual Subsystems",
      date: "October 2026",
      type: "PDF",
      size: "Pending",
      status: "Pending Upload",
      url: null,
      description: "Four separate undergraduate dissertation books covering individual component contributions."
    }
  ],

  // Presentations Library
  presentations: [
    {
      id: "pres-proposal",
      title: "Project Proposal Presentation (R26-IT-082)",
      stage: "Project Proposal",
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
      id: "pres-template",
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
    },
    {
      id: "pres-pp1",
      title: "Progress Presentation 1 (50% Milestone)",
      stage: "Progress Presentation 1",
      date: "June 2026",
      slidesCount: "TBC",
      status: "Pending Upload",
      type: "PPTX",
      size: "Pending",
      url: null,
      summary: "Presentation slides documenting pipeline prototype, ingestion benchmarks, and Whisper transcription tests.",
      previewAvailable: false
    },
    {
      id: "pres-pp2",
      title: "Progress Presentation 2 (90% Milestone)",
      stage: "Progress Presentation 2",
      date: "August 2026",
      slidesCount: "TBC",
      status: "Pending Upload",
      type: "PPTX",
      size: "Pending",
      url: null,
      summary: "Presentation slides detailing CatBoost threshold tuning (τ = 0.33), TreeSHAP attributions, and feature ablation.",
      previewAvailable: false
    },
    {
      id: "pres-viva",
      title: "Final Viva Voce Presentation",
      stage: "Viva / Final Presentation",
      date: "November 2026",
      slidesCount: "TBC",
      status: "Pending Upload",
      type: "PPTX",
      size: "Pending",
      url: null,
      summary: "Final oral defense slide deck to be presented before the examination committee during the final viva voce.",
      previewAvailable: false
    }
  ],

  // 33 Slides text index for the in-browser interactive slide deck viewer
  slidesIndex: [
    { num: 1, title: "Title Slide", desc: "AI-Powered Intelligent Talent Acquisition System • R26-IT-082", tag: "Overview" },
    { num: 2, title: "Introduction to the Problem", desc: "Recruitment challenges, high application volume, manual screening, subjective decisions", tag: "Problem" },
    { num: 3, title: "Impact of the Problem", desc: "Recruiter burnout, hiring bias, talent mismatch, organizational turnover losses", tag: "Impact" },
    { num: 4, title: "Existing Solutions & Limitations", desc: "Keyword filtering in ATS, basic remote tools, lack of explainability, credential fraud", tag: "Gap" },
    { num: 5, title: "Fonseka W.G.K. — Contribution & Novelty", desc: "Hiring Risk & Early Attrition Prediction Module • Pre-hire predictors & XAI", tag: "Member 1" },
    { num: 6, title: "Fonseka W.G.K. — Objectives", desc: "Extract candidate attributes, identify tenure indicators, train predictive ML models", tag: "Member 1" },
    { num: 7, title: "Fonseka W.G.K. — Technologies", desc: "Python, Scikit-learn, XGBoost, CatBoost, SHAP, LIME, Pandas, NumPy", tag: "Member 1" },
    { num: 8, title: "Fonseka W.G.K. — Validation & Data", desc: "IBM HR dataset, adapted benchmark, synthetic records, role-based security, ethical clearance", tag: "Member 1" },
    { num: 9, title: "Fonseka W.G.K. — Architecture Diagram", desc: "Hiring Risk & Early Attrition Prediction Model Architecture (Figure 2 in Proposal)", tag: "Member 1" },
    { num: 10, title: "Fonseka W.G.K. — Dependencies", desc: "Inter-module dependency connections with resume parsing and candidate repository", tag: "Member 1" },
    { num: 11, title: "Jayantha C.H. — Contribution & Novelty", desc: "Intelligent Resume Parsing & Skill Proficiency Analysis • Context-aware skill depth", tag: "Member 2" },
    { num: 12, title: "Jayantha C.H. — Objectives", desc: "Multi-format extraction, SpaCy NLP pipeline, CRF NER, context-aware skill proficiency", tag: "Member 2" },
    { num: 13, title: "Jayantha C.H. — Technologies", desc: "Python, SpaCy, sklearn-crfsuite, pdfplumber, PyMuPDF, MongoDB", tag: "Member 2" },
    { num: 14, title: "Jayantha C.H. — Validation & Data", desc: "Extraction accuracy, precision, recall, F1, skill relevance scoring, anonymization", tag: "Member 2" },
    { num: 15, title: "Jayantha C.H. — Architecture Diagram", desc: "Resume Parsing & Skill Proficiency Analysis System Architecture (Figure 4 in Proposal)", tag: "Member 2" },
    { num: 16, title: "Jayantha C.H. — Dependencies", desc: "Supplies structured candidate profiles to matching, interview, and attrition modules", tag: "Member 2" },
    { num: 17, title: "Deshan M.A.K. — Contribution & Novelty", desc: "Job–Candidate Matching & Explainable AI Engine • Bidirectional semantic token scoring", tag: "Member 3" },
    { num: 18, title: "Deshan M.A.K. — Objectives", desc: "Compute semantic similarity, provide transparent explanations, rank recommendations", tag: "Member 3" },
    { num: 19, title: "Deshan M.A.K. — Technologies", desc: "Sentence-BERT / BERT Cross-Encoder, ONNX runtime, Fast-API, React dashboard", tag: "Member 3" },
    { num: 20, title: "Deshan M.A.K. — Validation & Data", desc: "Similarity score accuracy, ranking precision, XAI interpretability, correlation analysis", tag: "Member 3" },
    { num: 21, title: "Deshan M.A.K. — Architecture Diagram", desc: "Job–Candidate Matching & Explainable AI Engine Architecture (Figure 2 in Proposal)", tag: "Member 3" },
    { num: 22, title: "Deshan M.A.K. — Dependencies", desc: "Consumes structured profiles from parser, outputs match scores to recruiter dashboard", tag: "Member 3" },
    { num: 23, title: "Tennakoon T.M.S.S. — Contribution & Novelty", desc: "AI-Based Interview Evaluation & Soft Skill Analysis • Speech transcription & ASAG", tag: "Member 4" },
    { num: 24, title: "Tennakoon T.M.S.S. — Objectives", desc: "Whisper speech transcription, DeBERTa answer grading, communication pattern metrics", tag: "Member 4" },
    { num: 25, title: "Tennakoon T.M.S.S. — Technologies", desc: "Python, Faster-Whisper, SpaCy, Transformers, TextBlob/VADER, Flask/FastAPI", tag: "Member 4" },
    { num: 26, title: "Tennakoon T.M.S.S. — Validation & Data", desc: "Word Error Rate (WER), semantic rubric alignment, human correlation benchmark", tag: "Member 4" },
    { num: 27, title: "Tennakoon T.M.S.S. — Architecture Diagram", desc: "AI-Based Interview Evaluation & Soft Skill Analysis Architecture (Figure 2 in Proposal)", tag: "Member 4" },
    { num: 28, title: "Tennakoon T.M.S.S. — Dependencies", desc: "Integrates candidate transcripts, ASAG rubric scores, and certificate validation", tag: "Member 4" },
    { num: 29, title: "Unified System Integration", desc: "Overall AI-Driven Intelligent Talent Acquisition System Architecture (Figure 1)", tag: "Integration" },
    { num: 30, title: "Commercialization & Intellectual Property", desc: "SaaS subscription model, corporate licensing, copyright & algorithmic IP governance", tag: "Business" },
    { num: 31, title: "Project Gantt Chart", desc: "12-month research execution timeline spanning November 2025 – November 2026", tag: "Timeline" },
    { num: 32, title: "Work Breakdown Structure", desc: "Hierarchical decomposition of research, design, implementation, and testing tasks", tag: "WBS" },
    { num: 33, title: "Conclusion & Thank You", desc: "Summary of contributions and acknowledgment of supervisors and SLIIT faculty", tag: "Conclusion" }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.PROJECT_DATA = PROJECT_DATA;
}
