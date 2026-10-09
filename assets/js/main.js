/**
 * SLIIT Research Project Academic Website
 * Client-Side Interactive Logic (main.js)
 * 
 * Project ID: R26-IT-082
 * Title: AI-Powered Intelligent Talent Acquisition System
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAccordion();
  initDocumentCatalogue();
  initMilestonesPage();
  initPresentationViewer();
  initContactForm();
  initThresholdExplorer();
  initModalViewer();
});

/* ==========================================================================
   1. NAVBAR & ACCESSIBILITY
   ========================================================================== */
function initNavbar() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Close mobile menu on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active link highlighter based on current URL path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================================================
   1.1 ACCORDION LOGIC (Matches cse-stock-insight-six)
   ========================================================================== */
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (!accordionItems.length) return;

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Toggle clicked item
        if (isOpen) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
}

/* ==========================================================================
   2. DOCUMENTS CATALOGUE (FILTERING & SEARCH)
   ========================================================================== */
function initDocumentCatalogue() {
  const searchInput = document.getElementById('doc-search');
  const filterPills = document.querySelectorAll('.filter-pills .pill-btn');
  const docGrid = document.getElementById('documents-grid');
  const docCountEl = document.getElementById('doc-count-display');

  if (!docGrid || !window.PROJECT_DATA) return;

  const docs = window.PROJECT_DATA.documents || [];
  let currentCategory = 'All';
  let currentSearchQuery = '';

  function renderDocs() {
    const filtered = docs.filter(doc => {
      const matchesCategory = (currentCategory === 'All') || 
        (doc.category.toLowerCase().includes(currentCategory.toLowerCase())) ||
        (currentCategory === 'Proposals' && doc.category.includes('Proposal')) ||
        (currentCategory === 'Charter' && (doc.category.includes('Charter') || doc.category.includes('Topic Assessment'))) ||
        (currentCategory === 'Final' && doc.category.includes('Final'));

      const query = currentSearchQuery.toLowerCase();
      const matchesSearch = !query || 
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.component.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (docCountEl) {
      docCountEl.textContent = `Showing ${filtered.length} of ${docs.length} deliverables`;
    }

    if (filtered.length === 0) {
      docGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
          <p style="color: var(--text-white); font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">No deliverables found</p>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Try adjusting your keyword search or category filter.</p>
        </div>
      `;
      return;
    }

    docGrid.innerHTML = filtered.map(doc => {
      let statusBadge = '';
      if (doc.status === 'Available') {
        statusBadge = '<span class="badge badge-green">✓ Available</span>';
      } else if (doc.status.includes('SAMPLE')) {
        statusBadge = '<span class="badge badge-amber">⚠ Sample Template</span>';
      } else {
        statusBadge = '<span class="badge badge-blue">⏳ Pending Upload</span>';
      }

      const actionBtn = doc.url 
        ? `<a href="${doc.url}" class="btn btn-secondary btn-sm" download target="_blank">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
             Download
           </a>
           <button class="btn btn-primary btn-sm preview-btn" data-url="${doc.url}" data-title="${encodeURIComponent(doc.title)}">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
             Preview
           </button>`
        : `<span style="font-size: 0.78rem; color: var(--text-dim); font-style: italic;">Awaiting institutional sign-off</span>`;

      return `
        <article class="doc-card" id="${doc.id}">
          <div>
            <div class="doc-header">
              <div class="doc-type-icon ${doc.type.toLowerCase()}">${doc.type}</div>
              ${statusBadge}
            </div>
            <h3 class="doc-title">${escapeHTML(doc.title)}</h3>
            <div class="doc-meta">
              <strong>${escapeHTML(doc.category)}</strong> • ${escapeHTML(doc.component)} • ${doc.date || 'TBD'} • ${doc.size}
            </div>
            <p class="doc-desc">${escapeHTML(doc.description)}</p>
          </div>
          <div class="doc-footer">
            ${actionBtn}
          </div>
        </article>
      `;
    }).join('');

    // Attach preview event listeners
    docGrid.querySelectorAll('.preview-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url');
        const title = decodeURIComponent(btn.getAttribute('data-title'));
        openModalViewer(url, title);
      });
    });
  }

  // Filter Pills Event
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category') || 'All';
      renderDocs();
    });
  });

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      renderDocs();
    });
  }

  // Initial render
  renderDocs();
}

/* ==========================================================================
   3. MILESTONES PAGE LOGIC (SELECT & TABS)
   ========================================================================== */
function initMilestonesPage() {
  const milestoneSelect = document.getElementById('milestone-select');
  const trackerNodes = document.querySelectorAll('.tracker-node');
  const detailCard = document.getElementById('milestone-detail-card');

  if (!detailCard || !window.PROJECT_DATA) return;

  const milestones = window.PROJECT_DATA.milestones || [];

  function updateMilestoneView(selectedId) {
    const item = milestones.find(m => m.id === selectedId) || milestones[0];
    if (!item) return;

    // Update Dropdown value
    if (milestoneSelect) {
      milestoneSelect.value = item.id;
    }

    // Update Tracker Nodes active state
    trackerNodes.forEach(node => {
      if (node.getAttribute('data-id') === item.id) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    // Populate Detail Card
    const deliverablesList = (item.deliverables || []).map(d => `<li>${escapeHTML(d)}</li>`).join('');
    const evidenceButtons = (item.evidence || []).map(e => `
      <a href="${e.url}" class="btn btn-secondary btn-sm" target="_blank">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        ${escapeHTML(e.title)}
      </a>
    `).join('');

    detailCard.innerHTML = `
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 1rem;">
        <div>
          <span class="badge badge-blue" style="margin-bottom: 8px;">${item.assessmentCode} • ${item.category}</span>
          <h2 style="color: var(--text-white); margin-bottom: 4px;">${escapeHTML(item.name)}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${escapeHTML(item.summary)}</p>
        </div>
        <div>
          <span class="badge ${item.status === 'Completed' ? 'badge-green' : (item.status.includes('Progress') ? 'badge-blue' : 'badge-amber')}">
            ${escapeHTML(item.status)}
          </span>
        </div>
      </div>

      <div class="milestone-meta-grid">
        <div>
          <span style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Scheduled / Completed Date</span>
          <p style="color: var(--text-white); font-weight: 700; font-size: 1.1rem; margin-top: 4px;">${item.date}</p>
        </div>
        <div>
          <span style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">SLIIT Marks Allocated</span>
          <p style="color: var(--primary-blue-glow); font-weight: 700; font-size: 1.1rem; margin-top: 4px;">${item.marksAllocated}</p>
        </div>
        <div>
          <span style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Deliverable Count</span>
          <p style="color: var(--text-white); font-weight: 700; font-size: 1.1rem; margin-top: 4px;">${item.deliverables.length} Specific Items</p>
        </div>
      </div>

      <div style="margin-top: 1.75rem;">
        <h4 style="color: var(--text-white); margin-bottom: 0.75rem;">Assessment Deliverables &amp; Output Scope</h4>
        <ul style="list-style: none; padding: 0;">
          ${deliverablesList}
        </ul>
      </div>

      <div style="margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px;">
        <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">Verified Supporting Evidence &amp; Materials:</span>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${evidenceButtons || '<span style="font-size: 0.8rem; color: var(--text-dim);">No digital artifacts linked yet</span>'}
        </div>
      </div>
    `;
  }

  if (milestoneSelect) {
    milestoneSelect.addEventListener('change', (e) => {
      updateMilestoneView(e.target.value);
    });
  }

  trackerNodes.forEach(node => {
    node.addEventListener('click', () => {
      const id = node.getAttribute('data-id');
      updateMilestoneView(id);
    });
  });

  // Initialize with first milestone
  if (milestones.length > 0) {
    updateMilestoneView(milestones[0].id);
  }
}

/* ==========================================================================
   4. PRESENTATIONS PAGE (33-SLIDE VIEWER)
   ========================================================================== */
function initPresentationViewer() {
  const slideStage = document.getElementById('slide-stage');
  const slideNumEl = document.getElementById('slide-num-indicator');
  const slideTitleEl = document.getElementById('slide-title-display');
  const slideDescEl = document.getElementById('slide-desc-display');
  const slideTagEl = document.getElementById('slide-tag-display');
  const prevBtn = document.getElementById('slide-prev-btn');
  const nextBtn = document.getElementById('slide-next-btn');
  const slideSelect = document.getElementById('slide-jump-select');

  if (!slideStage || !window.PROJECT_DATA) return;

  const slides = window.PROJECT_DATA.slidesIndex || [];
  let currentIndex = 0;

  // Populate slide jump select
  if (slideSelect && slideSelect.options.length === 0) {
    slides.forEach((s, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `Slide ${s.num}: ${s.title.substring(0, 32)}`;
      slideSelect.appendChild(opt);
    });
    slideSelect.addEventListener('change', (e) => {
      currentIndex = parseInt(e.target.value, 10);
      renderSlide();
    });
  }

  function renderSlide() {
    if (slides.length === 0) return;
    const s = slides[currentIndex];

    if (slideNumEl) slideNumEl.textContent = `Slide ${s.num} of ${slides.length}`;
    if (slideTitleEl) slideTitleEl.textContent = s.title;
    if (slideDescEl) slideDescEl.textContent = s.desc;
    if (slideTagEl) slideTagEl.textContent = s.tag;
    if (slideSelect) slideSelect.value = currentIndex;

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderSlide();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        renderSlide();
      }
    });
  }

  // Keyboard navigation for presentation slides
  document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
      currentIndex++;
      renderSlide();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      currentIndex--;
      renderSlide();
    }
  });

  renderSlide();
}

/* ==========================================================================
   5. OPERATING THRESHOLD & WHAT-IF INTERACTIVE EXPLORER
   ========================================================================== */
function initThresholdExplorer() {
  const toggle033 = document.getElementById('thresh-btn-033');
  const toggle050 = document.getElementById('thresh-btn-050');
  const recallVal = document.getElementById('dyn-recall-val');
  const precisionVal = document.getElementById('dyn-prec-val');
  const f1Val = document.getElementById('dyn-f1-val');
  const rocAucVal = document.getElementById('dyn-roc-val');
  const noteEl = document.getElementById('dyn-thresh-note');

  if (!toggle033 || !toggle050) return;

  function setThreshold(tau) {
    if (tau === 0.33) {
      toggle033.classList.add('active');
      toggle050.classList.remove('active');
      if (recallVal) recallVal.textContent = '50.62%';
      if (precisionVal) precisionVal.textContent = '50.44%';
      if (f1Val) f1Val.textContent = '50.34%';
      if (rocAucVal) rocAucVal.textContent = '0.8071 (Invariant)';
      if (noteEl) {
        noteEl.innerHTML = `<strong>Tuned Operating Threshold (τ=0.33):</strong> Captures <strong>50.62%</strong> of departures (+15.16% points vs default). Balances false positives vs false negatives for proactive retention dialogues without changing underlying ranking discrimination (ROC-AUC remains 0.8071).`;
      }
    } else {
      toggle050.classList.add('active');
      toggle033.classList.remove('active');
      if (recallVal) recallVal.textContent = '35.46%';
      if (precisionVal) precisionVal.textContent = '65.33%';
      if (f1Val) f1Val.textContent = '45.50%';
      if (rocAucVal) rocAucVal.textContent = '0.8071 (Invariant)';
      if (noteEl) {
        noteEl.innerHTML = `<strong>Standard Default Threshold (τ=0.50):</strong> Suffers from severe minority-class suppression under 1:5.20 class imbalance. Captures only <strong>35.46%</strong> of true turnover cases, leading to costly missed departures.`;
      }
    }
  }

  toggle033.addEventListener('click', () => setThreshold(0.33));
  toggle050.addEventListener('click', () => setThreshold(0.50));
}

/* ==========================================================================
   6. CONTACT US FORM & EMAIL TEMPLATE GENERATOR
   ========================================================================== */
function initContactForm() {
  // Support for modern clean contact form (matching reference)
  const directForm = document.getElementById('contact-direct-form');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-counter');

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len}/1000`;
    });
  }

  if (directForm) {
    directForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim() || 'Colleague';
      const email = document.getElementById('contact-email')?.value.trim() || '';
      const message = messageInput ? messageInput.value.trim() : '';
      const recipient = window.PROJECT_DATA?.meta?.contactEmail || 'TalentLensAI@gmail.com';
      const subject = `[TalentLens AI Inquiry] From ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via TalentLens AI Contact Portal`;

      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      const submitBtn = document.getElementById('submit-contact-btn');
      if (submitBtn) {
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = `✓ Opening Email...`;
        setTimeout(() => {
          submitBtn.innerHTML = originalHTML;
        }, 3000);
      }

      window.location.href = mailtoUrl;
    });
  }

  // Template Form fallback
  const form = document.getElementById('contact-template-form');
  const previewBox = document.getElementById('email-template-preview');
  const copyBtn = document.getElementById('copy-template-btn');
  const mailtoBtn = document.getElementById('open-mailto-btn');

  if (!form || !previewBox) return;

  const nameInput = document.getElementById('sender-name');
  const affilInput = document.getElementById('sender-affiliation');
  const purposeSelect = document.getElementById('enquiry-purpose');
  const msgInput = document.getElementById('sender-message');

  function generateTemplate() {
    const name = nameInput ? nameInput.value.trim() || '[Your Name]' : '[Your Name]';
    const affil = affilInput ? affilInput.value.trim() || '[Your Institution / Organization]' : '[Your Organization]';
    const purpose = purposeSelect ? purposeSelect.value : 'Academic Research Inquiry';
    const msg = msgInput ? msgInput.value.trim() || '[Detail your research question or viva inquiry here...]' : '';

    const subject = `[SLIIT Research R26-IT-082] ${purpose} - ${name}`;
    const body = `Dear Research Supervisors (Mr. Dhammika De Silva / Mr. Samantha Rajapaksha) and Project Team (R26-IT-082),

I am writing regarding your final-year research project titled "AI-Powered Intelligent Talent Acquisition System".

Sender Name: ${name}
Affiliation: ${affil}
Purpose of Enquiry: ${purpose}

Enquiry Details:
${msg}

Thank you.
Respectfully,
${name}
${affil}`;

    previewBox.textContent = `Subject: ${subject}\n\n${body}`;

    if (mailtoBtn) {
      const recipient = window.PROJECT_DATA?.meta?.contactEmail || 'dhammika.d@sliit.lk';
      mailtoBtn.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return { subject, body };
  }

  form.addEventListener('input', generateTemplate);
  generateTemplate();

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const { subject, body } = generateTemplate();
      const textToCopy = `Subject: ${subject}\n\n${body}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `✓ Copied to Clipboard!`;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2500);
      }).catch(err => {
        alert('Failed to copy text. Please select and copy from the preview box.');
      });
    });
  }
}

/* ==========================================================================
   7. MODAL PDF / DOCUMENT PREVIEWER
   ========================================================================== */
function initModalViewer() {
  const modal = document.getElementById('document-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModalViewer);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalViewer();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModalViewer();
    }
  });
}

function openModalViewer(url, title) {
  const modal = document.getElementById('document-modal');
  if (!modal) return;

  const titleEl = modal.querySelector('.modal-title');
  const bodyEl = modal.querySelector('.modal-body');

  if (titleEl) titleEl.textContent = title || 'Document Preview';
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="height: 60vh; min-height: 400px; width: 100%;">
        <iframe src="${url}#toolbar=0" style="width: 100%; height: 100%; border: none; border-radius: var(--radius-md); background: #ffffff;" title="${escapeHTML(title)}"></iframe>
      </div>
      <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.8rem; color: var(--text-muted);">Serving directly from local research workspace.</span>
        <a href="${url}" class="btn btn-primary btn-sm" download target="_blank">Download Original File</a>
      </div>
    `;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModalViewer() {
  const modal = document.getElementById('document-modal');
  if (!modal) return;

  modal.classList.remove('open');
  document.body.style.overflow = '';
  const bodyEl = modal.querySelector('.modal-body');
  if (bodyEl) bodyEl.innerHTML = '';
}

// Security / HTML Escaping Utility
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
