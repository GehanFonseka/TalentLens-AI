# SLIIT Research Project Academic Website — Content Review Report
**Project ID:** R26-IT-082  
**Project Title:** AI-Powered Intelligent Talent Acquisition System  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT), Faculty of Computing  
**Document Generated:** Academic Submission Verification

---

## 1. Executive Summary

This report establishes the academic provenance, data integrity verification, component mapping reconciliation, and asset disposition for the research documentation website representing SLIIT Final Year Project **R26-IT-082**.

In strict accordance with the SLIIT website requirements (`Website.pdf`) and research integrity principles, this document distinguishes verified facts from preliminary placeholders, identifies resolved discrepancies between proposal documents and final papers, and outlines guidelines for the viva voce examination.

---

## 2. Chronological Reconciliation of Member-to-Component Mapping

### The Observed Discrepancy
An inspection of the workspace documents revealed initial title and component variations across different project stages:
1. **Topic Assessment Form (TAF, Jan 2026):**
   - Fonseka W.G.K. (IT22248794): Listed under *Job–Candidate Matching & Explainable AI Engine*.
   - Deshan M.A.K. (IT22195616): Listed under *Hiring Risk & Early Attrition Prediction*.
2. **Deshan M.A.K. Proposal Report Cover Page (`R26-IT-82_IT22195616_Deshan M A K.pdf`):**
   - The cover page mistakenly carried the title *"AI Powered Interview Evaluation & Soft Skill Analysis Module"*.
   - However, the interior abstract, objectives, architecture diagrams, and methodology exclusively detailed the *Job–Candidate Matching & Explainable AI Engine*.
3. **Proposal Presentation Deck (`R26-IT-082.pptx`, March 2026):**
   - Slide 5–10: Gehan Fonseka (IT22248794) → *Hiring Risk & Early Attrition Prediction*.
   - Slide 11–16: Chamudi Jayantha (IT22226914) → *Intelligent Resume Parsing & Skill Proficiency Analysis*.
   - Slide 17–22: Kavishka Deshan (IT22195616) → *Job–Candidate Matching & Explainable AI Engine*.
   - Slide 23–28: Sajani Tennakoon (IT22197832) → *AI-Based Interview Evaluation & Soft Skill Analysis*.
4. **Group Final Research Paper (`Multimodal AI for Talent Acquisition and Workforce Retention.pdf`, Sept 2026):**
   - Lead author Gehan Fonseka authored the attrition prediction and feature ablation benchmark.
   - Kavishka Deshan developed the BERT Cross-Encoder candidate matching subsystem.
   - Chamudi Jayantha developed resume extraction and scoring.
   - Sajani Tennakoon developed speech transcription and DeBERTa ASAG answer grading.

### Resolution & Decision
Between the initial TAF stage (January 2026) and the proposal presentation / final paper stage, the team formally reallocated roles:
- **Member 1 (Fonseka W.G.K. / IT22248794):** *Hiring Risk & Early Attrition Prediction Module*
- **Member 2 (Jayantha C.H. / IT22226914):** *Intelligent Resume Parsing & Skill Proficiency Analysis*
- **Member 3 (Deshan M.A.K. / IT22195616):** *Job–Candidate Matching & Explainable AI Engine*
- **Member 4 (Tennakoon T.M.S.S. / IT22197832):** *AI-Based Interview Evaluation & Soft Skill Analysis*

The centralized `assets/js/data.js` encapsulates these roles, allowing instant adjustments if faculty coordinators require alternate labeling.

---

## 3. Separation of Empirical Data Lines

The website strictly separates two independent empirical data streams:

| Dimension | Primary Benchmark (Line A) | Empirical Survey (Line B) |
| :--- | :--- | :--- |
| **Dataset Title** | Adapted Workforce HR Benchmark | Sri Lankan IT Workforce Survey |
| **Sample Size ($N$)** | 1,470 records | 835 survey responses |
| **Attrition Cases** | 237 positive (16.12% prevalence) | Untouched holdout: 167 records |
| **Class Imbalance** | 1 : 5.20 | Empirical distribution |
| **Evaluated Model** | Optuna-tuned Ordered CatBoost | Logistic Regression (Holdout) |
| **Operating Threshold**| $\tau = 0.33$ ($\tau = 0.50$ baseline) | Standard default classification |
| **Discrimination** | ROC-AUC: 0.8071, PR-AUC: 0.5753 | ROC-AUC: 0.9029, PR-AUC: 0.6577 |
| **Minority Recall** | 50.62% ($\tau = 0.33$) vs 35.46% ($\tau = 0.50$) | Evaluated on holdout subset |
| **Minority F1** | 50.34% ($\tau = 0.33$) vs 45.50% ($\tau = 0.50$) | F1: 64.15% |
| **Scientific Rule** | **Never combine or conflate as a single composite dataset.** |

---

## 4. Feature Ablation & Scientific Findings

The website prominently details the findings from Table IV of the research paper:
- **Config A (26 IBM Features):** Baseline F1 = 53.78% $\pm$ 1.26%, ROC-AUC = 0.816.
- **Config B (45 Features with Regional LKR Attributes):** Modest improvement to F1 = 54.18% $\pm$ 3.29% ($\Delta = +0.40\%$, $p = 0.830$).
- **Config C (52 Features with 7 Derived Interaction Ratios):** Statistically significant decline to F1 = 50.34% $\pm$ 3.11% ($\Delta = -3.85\%$, $p = 0.026$).
- **Academic Takeaway:** Adding complex interaction ratios introduced collinear noise, supporting **feature parsimony** in shallow-tree ensembles.

---

## 5. Explicit Limitations & Boundaries of Evidence

In compliance with academic honesty requirements, the website discloses:
1. **Matching Validation:** The 6-layer BERT Cross-Encoder pipeline is operational on ONNX Runtime ($\tau=0.44$), but its independent human-labelled ranking benchmark remains incomplete.
2. **Interview Validation:** The 12-layer DeBERTa-v3 Platt-calibrated short-answer grading pipeline is functional, but completed multi-rater human trials were unavailable at submission.
3. **No Emotion/Facial Analysis:** The browser WebRTC implementation handles video feed display and audio streaming only. No facial expression recognition or visual emotion detection is conducted.
4. **Pseudo-Labels:** The DeBERTa-v3-small resume quality model was trained on 15,000 heuristic pseudo-labels (test MAE: 5.44), serving as advisory scoring rather than gold-standard annotations.
5. **Advisory Decision Support:** All model predictions serve strictly as advisory decision support; final hiring and retention decisions remain under human authority.

---

## 6. Sample Placeholders & Replacement Guide

### Identification Photographs
- **Current Status:** Authentic researcher portrait photographs extracted directly from the official research presentation deck (`assets/images/team/gehan.png`, `chamudi.jpeg`, `kavishka.jpeg`, `sajani.jpeg`) are active across `about.html` and `assets/js/data.js`.
- **Fallbacks:** SVG placeholders remain in `assets/images/placeholders/` as fallbacks if needed.

### Documents & Presentations
- **Available Decks:**
  1. **Proposal Presentation Deck (`R26-IT-082-Proposal-Presentation.pptx`):** 33 Slides • 6.50 MB (Delivered & Approved, March 2026).
  2. **Progress Presentation 1 Deck (`R26-IT-082-Progress-Presentation-1.pptx`):** 23 Slides • 7.37 MB (Completed 50% Milestone, June 2026).
  3. **Progress Presentation 2 Deck (`R26-IT-082-Progress-Presentation-2.pptx`):** 9 Slides • 4.60 MB (Completed 90% Milestone, August 2026).
  4. **Final Assessment & Viva Deck (`R26-IT-082-Final-Presentation.pptx`):** 9 Slides • 2.01 MB (Delivered Defense, October 2026).
  5. **Official SLIIT Template (`Proposal-Presentation-Template.potm`):** 14 Slides • 458 KB.
- **Available Documents & Deliverables (100% Authentic):**
  1. **Common Integrated Solution Report (`R26-IT-082_Common_Integrated_Solution_Report.pdf`):** 41 Pages • 775 KB (October 2026).
  2. **Individual Final Thesis — Fonseka W.G.K. (`R26-IT-082_IT22248794_Fonseka_WGK_Final_Thesis.pdf`):** 48 Pages • 1.39 MB.
  3. **Individual Final Thesis — Jayantha C.H. (`R26-IT-082_IT22226914_Jayantha_CH_Final_Thesis.pdf`):** 46 Pages • 898 KB.
  4. **Individual Final Thesis — Deshan M.A.K. (`R26-IT-082_IT22195616_Deshan_MAK_Final_Thesis.pdf`):** 61 Pages • 1.11 MB.
  5. **Individual Final Thesis — Tennakoon T.M.S.S. (`R26-IT-082_IT22197832_Tennakoon_TMSS_Final_Thesis.pdf`):** 64 Pages • 777 KB.
  6. **Topic Assessment Form (`Topic-Assessment-Form-TAF_R26-IT-082.pdf`):** 9 Pages • 417 KB (January 2026).
  7. **Four Student Research Proposals (March 2026):** Fonseka (616 KB), Jayantha (1.10 MB), Deshan (1.06 MB), Tennakoon (1.03 MB).
- **Clean Archive Notice:** All preliminary sample placeholders (`Project-Charter-Sample.pdf` and `Ethics-Clearance-Checklist-Sample.pdf`) have been completely purged from the document catalog and repository. Every linked file is a genuine, verified SLIIT research deliverable.

---

## 7. Presentation Decks Optimization & Distribution

- **All 4 Milestone Decks Active:** Proposal Defense (33 slides), PP1 (23 slides), PP2 (9 slides), and Final Presentation (9 slides).
- **Interactive Multi-Deck Viewer:** The in-browser slide player on `presentations.html` enables reviewers to toggle dynamically between all four presentation decks, view individual slide titles and structured abstracts, jump directly to any slide, and navigate via keyboard or mouse.
- **Optimization Strategy:** High-bitrate video streams inside `Proposal-Presentation.pptx`, `PP1.pptx`, and `PP2.pptx` were optimized using H.264/AAC, ensuring fast web downloads and responsiveness while maintaining 100% visual fidelity and original slide layout.

