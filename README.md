# AI-Powered Intelligent Talent Acquisition System
## SLIIT Research Project Academic Documentation Website
**Project ID:** R26-IT-082  
**Academic Period:** 2025/2026  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT)  
**Faculty:** Faculty of Computing  
**Department:** Department of Information Technology  

---

## 1. Project Overview

This website serves as the official academic research information and documentation showcase for our undergraduate final-year research project: **"AI-Powered Intelligent Talent Acquisition System"** (Research Paper Title: *An Integrated Multimodal AI Framework for Technical Recruitment and Workforce Retention Analytics*).

This website documents the scientific problem, literature survey, research gap, component architecture, experimental benchmarks, academic deliverables, and presentation materials. It is independent of the operational enterprise software product.

### The Research Group 
- **Gehan Fonseka (IT22248794):** Hiring Risk & Early Attrition Prediction Module (`gehanfonseka@gmail.com`)
- **Chamudi Jayantha (IT22226914):** Intelligent Resume Parsing & Skill Proficiency Analysis (`chamuhimasha29471@gmail.com`)
- **Kavishka Deshan (IT22195616):** Job–Candidate Matching & Explainable AI Engine (`kavishkadeshan428@gmail.com`)
- **Sajani Tennakoon (IT22197832):** AI-Based Interview Evaluation & Soft Skill Analysis (`sapurnat@gmail.com`)

### Academic Supervisors
- **Research Supervisor:** Mr. Dhammika De Silva (`dhammika.d@sliit.lk`)
- **Research Co-Supervisor:** Mr. Samantha Rajapaksha (`samantha.r@sliit.lk`)

---

## 2. Seven Navigation Sections 

1. **Home (`index.html`):** Project hero, research problem, 4 core subsystems, multimodal pipeline diagram, quantitative benchmarks, threshold comparison explorer, and team summary.
2. **Domain (`domain.html`):** In-depth academic domain analysis, literature survey with 17 verified references, scientific gaps, formal objectives, 5-tier architecture, technology inventory, feature ablation results, and explicit evidence boundaries.
3. **Milestones (`milestones.html`):** Interactive dropdown milestone selector and timeline nodes (Proposal, Progress 1, Progress 2, Final Assessment, Viva Voce) with dates, mark allocations, deliverables, Gantt chart, and WBS.
4. **Documents (`documents.html`):** Document library with real-time text search, category filters, download actions, and in-browser modal PDF previews.
5. **Slides (`presentations.html`):** Slide presentation archive featuring an interactive in-browser 33-slide deck viewer with keyboard arrow navigation and download actions.
6. **About Us (`about.html`):** Detailed group profiles with clearly labelled sample photo placeholders, individual technical contributions, and supervisor credentials.
7. **Contact Us (`contact.html`):** Academic correspondence channels and an interactive email template generator with working `mailto:` client integration and clipboard copying.

---

## 3. Directory Structure

```
research-website/
├── index.html                   # Home page overview
├── domain.html                  # Academic domain & methodology
├── milestones.html              # Milestones & assessment selector
├── documents.html               # Digital document library
├── presentations.html           # Past presentations & slide viewer
├── about.html                   # Team members & supervisor profiles
├── contact.html                 # Contact desk & email template builder
├── README.md                    # Project documentation & instructions
├── CONTENT_REVIEW.md            # Detailed academic content review
└── assets/
    ├── css/
    │   └── styles.css           # Responsive design system & glassmorphism
    ├── js/
    │   ├── data.js              # Centralized data source of truth
    │   └── main.js              # Client-side UI & interactive logic
    ├── images/
    │   ├── sliit-crest.png      # Official university crest
    │   ├── project-logo.svg     # Vector project branding emblem
    │   ├── placeholders/        # Clearly labelled sample member avatars
    │   │   ├── gehan-placeholder.svg
    │   │   ├── jayantha-placeholder.svg
    │   │   ├── deshan-placeholder.svg
    │   │   └── tennakoon-placeholder.svg
    │   └── diagrams/            # Architecture & workflow figures
    │       ├── recruitment-lifecycle.svg
    │       ├── system-architecture.svg
    │       ├── attrition-architecture.jpg
    │       ├── resume-parsing-architecture.png
    │       ├── matching-architecture.png
    │       ├── interview-architecture.jpg
    │       ├── gantt-chart.png
    │       └── wbs-chart.png
    ├── documents/               # Real & sample PDF deliverables
    │   ├── Multimodal-AI-Talent-Acquisition-Research-Paper.pdf
    │   ├── Topic-Assessment-Form-TAF_R26-IT-082.pdf
    │   ├── R26-IT-082_IT22248794_Fonseka_WGK_Proposal.pdf
    │   ├── R26-IT-082_IT22226914_Jayantha_CH_Proposal.pdf
    │   ├── R26-IT-82_IT22195616_Deshan_MAK_Proposal.pdf
    │   ├── R26-IT-82_IT22197832_Tennakoon_TMSS_Proposal.pdf
    │   ├── Project-Charter-Sample.pdf
    │   └── Ethics-Clearance-Checklist-Sample.pdf
    └── presentations/           # Slide decks & templates
        ├── R26-IT-082-Proposal-Presentation.pptx
        └── Proposal-Presentation-Template.potm
```

---

## 4. Local Preview & Running Instructions

The website is implemented using lightweight, standard **HTML5, CSS3, and Vanilla JavaScript**. It requires no build tools, no Node.js compilation, and no external database connection.

### Option A: Direct Browser Opening
Simply double-click `index.html` or open it with any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Option B: Local HTTP Server (Recommended for PDF Previews)
Using Python from within the `research-website/` directory:
```bash
cd "c:\Users\acer\Desktop\Research Website\research-website"
python -m http.server 8000
```
Then open your browser to:
`http://localhost:8000`

--
