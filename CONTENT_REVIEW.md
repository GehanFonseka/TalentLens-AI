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

### Documents
- **Available:** Group Research Paper, Topic Assessment Form, 4 Individual Proposals, Proposal Presentation Deck, Template.
- **Sample Deliverables:** `Project-Charter-Sample.pdf` and `Ethics-Clearance-Checklist-Sample.pdf` (explicitly marked with red placeholder headers).
- **Pending Deliverables:** Progress Reports 1 & 2, Individual Final Dissertations, Final Comprehensive Report.

---

## 7. Package Size Audit (< 20 MB Limit)

- **Total Upload Package Size:** ~14.6 MB (comfortably below the SLIIT 20 MB limit).
- **Optimization Strategy:** The embedded 8.5 MB high-bitrate video within `R26-IT-082.pptx` was re-encoded with H.264/AAC, reducing the presentation deck from 13.06 MB to 6.50 MB with zero loss of slide fidelity or visual layout. The uncompressed video master is preserved locally.
