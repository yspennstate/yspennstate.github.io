/* Shared behaviour: paper rendering, filters, video cards, and the hero spectrum. */

(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const ICON = {
    pdf: '<svg viewBox="0 0 24 24"><path d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V9h5.5L13 3.5zM8 13h8v1.6H8V13zm0 3.2h8v1.6H8v-1.6z"/></svg>',
    arxiv: '<svg viewBox="0 0 24 24"><path d="M5 3l14 18h-2.6L5 3zm14 0L5 21h2.6L19 3z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 1 0 1.4l-1.2 1.2a4 4 0 0 1-5.7-5.7l2.5-2.5a4 4 0 0 1 5.7 0 1 1 0 0 1-1.4 1.4 2 2 0 0 0-2.9 0L5.1 11.7a2 2 0 0 0 2.9 2.9l1.2-1.2a1 1 0 0 1 1.4 0zm2.8-2.8a1 1 0 0 1 0-1.4l1.2-1.2a4 4 0 1 1 5.7 5.7l-2.5 2.5a4 4 0 0 1-5.7 0 1 1 0 0 1 1.4-1.4 2 2 0 0 0 2.9 0l2.5-2.5a2 2 0 0 0-2.9-2.9l-1.2 1.2a1 1 0 0 1-1.4 0z"/></svg>',
    text: '<svg viewBox="0 0 24 24"><path d="M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h10v2H4v-2zm0 4h16v2H4v-2z"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5z"/></svg>'
  };

  function boldSelf(authors) {
    return esc(authors).replace(/Yitzchak Shmalo/g, "<b>Yitzchak Shmalo</b>");
  }

  function paperHTML(p) {
    const verbatim = (typeof ABSTRACTS !== "undefined") && ABSTRACTS[p.id];
    const abs = verbatim || p.abstract || "";
    const label = verbatim ? "Abstract" : "In short";
    const acts = [];
    if (p.pdf) acts.push(`<a class="pdf" href="papers/${esc(p.pdf)}" download>${ICON.pdf} PDF</a>`);
    if (p.arxiv) acts.push(`<a href="https://arxiv.org/abs/${esc(p.arxiv)}" target="_blank" rel="noopener">${ICON.arxiv} arXiv</a>`);
    if (p.doi) acts.push(`<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">${ICON.link} Journal</a>`);
    if (p.rg) acts.push(`<a href="${esc(p.rg)}" target="_blank" rel="noopener">${ICON.link} ResearchGate</a>`);
    if (p.video) acts.push(`<a href="https://www.youtube.com/watch?v=${esc(p.video)}" target="_blank" rel="noopener">${ICON.play} Video</a>`);
    if (abs) acts.push(`<button type="button" data-toggle="abs">${ICON.text} ${label}</button>`);
    return `
      <article class="paper" data-theme="${esc(p.theme)}" id="p-${esc(p.id)}">
        <div class="year">${esc(p.year)}</div>
        <div>
          <h3>${esc(p.title)}</h3>
          <div class="authors">${boldSelf(p.authors)}</div>
          ${p.venue ? `<div class="venue">${esc(p.venue)}</div>` : (p.arxiv ? `<div class="venue">arXiv:${esc(p.arxiv)}</div>` : "")}
          ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
          <div class="actions">${acts.join("")}</div>
          ${abs ? `<div class="abstract"><span class="lbl">${label}</span>${esc(abs)}</div>` : ""}
        </div>
      </article>`;
  }

  function renderResearch(root) {
    const order = ["rmtdl", "rmt", "dyn", "top", "comb"];
    let html = "";
    for (const t of order) {
      const list = PAPERS.filter((p) => p.theme === t).sort((a, b) => b.year - a.year);
      if (!list.length) continue;
      html += `<div class="theme-block" data-theme="${t}">
        <div class="theme-head"><h2>${esc(THEMES[t].name)}</h2><span class="muted small">${list.length} paper${list.length > 1 ? "s" : ""}</span></div>
        <p class="blurb muted">${esc(THEMES[t].blurb)}</p>
        ${list.map(paperHTML).join("")}
      </div>`;
    }
    root.innerHTML = html;
    root.addEventListener("click", (e) => {
      const b = e.target.closest("[data-toggle=abs]");
      if (!b) return;
      const box = b.closest(".paper").querySelector(".abstract");
      box.classList.toggle("open");
    });
  }

  function wireFilters(bar, root) {
    bar.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      $$("button", bar).forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      const t = b.dataset.theme;
      $$(".theme-block", root).forEach((blk) => {
        blk.style.display = (t === "all" || blk.dataset.theme === t) ? "" : "none";
      });
    });
  }

  function renderFeatured(root, ids) {
    root.innerHTML = ids.map((id) => PAPERS.find((p) => p.id === id)).filter(Boolean).map(paperHTML).join("");
    root.addEventListener("click", (e) => {
      const b = e.target.closest("[data-toggle=abs]");
      if (!b) return;
      b.closest(".paper").querySelector(".abstract").classList.toggle("open");
    });
  }

  function renderThemeCards(root) {
    const glyphs = {
      rmtdl: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 52 C 12 52, 14 10, 24 10 S 36 52, 44 52 S 56 30, 60 30"/><circle cx="56" cy="20" r="3" fill="currentColor"/></svg>',
      rmt: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="22"/><g fill="currentColor" stroke="none"><circle cx="20" cy="28" r="1.6"/><circle cx="30" cy="40" r="1.6"/><circle cx="38" cy="22" r="1.6"/><circle cx="44" cy="36" r="1.6"/><circle cx="26" cy="18" r="1.6"/><circle cx="36" cy="46" r="1.6"/><circle cx="58" cy="12" r="2.4"/></g></svg>',
      dyn: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 56 C 8 20, 56 44, 56 8"/><path d="M8 8 C 20 40, 44 24, 56 56"/></svg>',
      top: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 32a20 20 0 1 0 40 0a20 20 0 1 0-40 0"/><path d="M22 32a10 6 0 1 0 20 0a10 6 0 1 0-20 0"/><path d="M8 32h8M48 32h8"/></svg>',
      comb: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M32 6 L58 56 H6 Z"/><path d="M32 6 L32 56 M19 31 H45 M6 56 L45 31 M58 56 L19 31"/></svg>'
    };
    root.innerHTML = Object.keys(THEMES).map((t) => {
      const n = PAPERS.filter((p) => p.theme === t).length;
      return `<a class="card theme" href="research.html#${t}" style="color:inherit">
        <div class="glyph">${glyphs[t]}</div>
        <div class="count">${n} paper${n > 1 ? "s" : ""}</div>
        <h3>${esc(THEMES[t].name)}</h3>
        <p class="small muted" style="margin:0">${esc(THEMES[t].blurb)}</p>
      </a>`;
    }).join("");
  }

  function renderVideos(root) {
    const byPaper = {};
    (typeof VIDEOS !== "undefined" ? VIDEOS : []).forEach((v) => { byPaper[v.paper] = v; });
    const list = PAPERS.slice().sort((a, b) => b.year - a.year);
    root.innerHTML = list.map((p) => {
      const v = byPaper[p.id];
      const frame = v
        ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtube)}" title="${esc(v.title || p.title)}" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
        : `<div class="soon"><span class="big">&#9654;</span>talk coming</div>`;
      return `<div class="video"><div class="frame">${frame}</div><div class="body">
        <h3>${esc(p.title)}</h3><span class="small">${esc(p.year)} &middot; <a href="research.html#p-${esc(p.id)}">paper</a></span></div></div>`;
    }).join("");
  }

  /* ---------- hero: a living Marchenko-Pastur spectrum ---------- */
  function spectrum(canvas) {
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, dpr = 1, pts = [], spikes = [], mouse = { x: -1, y: -1 }, t = 0;
    const c = 0.35;                       // aspect ratio n/m of the underlying matrix
    const lm = (1 - Math.sqrt(c)) ** 2, lp = (1 + Math.sqrt(c)) ** 2;
    const dens = (x) => (x <= lm || x >= lp) ? 0 : Math.sqrt((lp - x) * (x - lm)) / (2 * Math.PI * c * x);
    let dmax = 0; for (let x = lm; x <= lp; x += 0.001) dmax = Math.max(dmax, dens(x));

    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }
    function seed() {
      pts = []; spikes = [];
      const N = Math.round(Math.min(900, W * 0.7));
      while (pts.length < N) {                           // rejection-sample the MP law
        const x = lm + Math.random() * (lp - lm), y = Math.random() * dmax;
        if (y < dens(x)) pts.push({ x, y: y / dmax, hx: x, hy: y / dmax, r: 1 + Math.random() * 1.4, ph: Math.random() * 6.28 });
      }
      for (let i = 0; i < 4; i++) spikes.push({ x: lp + 0.35 + i * 0.5 + Math.random() * 0.3, y: 0.06 + Math.random() * 0.1, r: 2.6 });
    }
    const X = (x) => 40 + (x / (lp + 2.6)) * (W - 80);
    const Y = (y) => H - 26 - y * (H * 0.34);
    const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

    function draw() {
      const ink = css("--ink"), acc = css("--accent"), sp = css("--spike"), mut = css("--muted");
      ctx.clearRect(0, 0, W, H);
      // density curve
      ctx.beginPath();
      for (let x = lm; x <= lp; x += 0.004) { const px = X(x), py = Y(dens(x) / dmax); x === lm ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
      ctx.strokeStyle = acc; ctx.globalAlpha = 0.45; ctx.lineWidth = 1.2; ctx.stroke();
      // baseline + edge marks
      ctx.globalAlpha = 0.35; ctx.strokeStyle = mut; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(30, Y(0) + 8); ctx.lineTo(W - 30, Y(0) + 8); ctx.stroke();
      ctx.globalAlpha = 0.6; ctx.fillStyle = mut; ctx.font = "11px ui-monospace, Menlo, monospace";
      ctx.fillText("λ₋", X(lm) - 6, Y(0) + 22); ctx.fillText("λ₊", X(lp) - 6, Y(0) + 22);
      ctx.fillText("bulk (noise)", X((lm + lp) / 2) - 34, Y(0) + 22);
      ctx.fillText("outliers (signal)", X(lp + 0.9) - 30, Y(0) + 22);
      // bulk points
      ctx.fillStyle = ink;
      for (const p of pts) {
        const wob = reduce ? 0 : 0.012 * Math.sin(t * 0.9 + p.ph);
        const px = X(p.x + wob), py = Y(p.y + 0.5 * wob);
        ctx.globalAlpha = 0.28 + 0.5 * p.y;
        ctx.beginPath(); ctx.arc(px, py, p.r, 0, 6.28); ctx.fill();
      }
      // spikes: pulled by the pointer, otherwise drifting home
      ctx.fillStyle = sp;
      for (const s of spikes) {
        let tx = s.x;
        if (mouse.x >= 0) {
          const mx = (mouse.x - 40) / (W - 80) * (lp + 2.6);
          if (mx > lp) tx = lp + 0.25 + (mx - lp) * (0.4 + 0.25 * spikes.indexOf(s));
        }
        s.cx = s.cx === undefined ? s.x : s.cx + (tx - s.cx) * (reduce ? 1 : 0.06);
        const px = X(s.cx), py = Y(s.y + (reduce ? 0 : 0.02 * Math.sin(t * 1.3 + s.x)));
        ctx.globalAlpha = 0.95; ctx.beginPath(); ctx.arc(px, py, s.r, 0, 6.28); ctx.fill();
        ctx.globalAlpha = 0.25; ctx.beginPath(); ctx.arc(px, py, s.r * 3, 0, 6.28); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function loop() { t += 0.016; draw(); if (!reduce) requestAnimationFrame(loop); }
    canvas.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.addEventListener("pointerleave", () => { mouse.x = -1; });
    window.addEventListener("resize", () => { resize(); draw(); });
    resize(); loop();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const r = $("#research-list"); if (r) { renderResearch(r); const f = $("#filters"); if (f) wireFilters(f, r); }
    const feat = $("#featured"); if (feat) renderFeatured(feat, feat.dataset.ids.split(","));
    const tc = $("#theme-cards"); if (tc) renderThemeCards(tc);
    const v = $("#video-grid"); if (v) renderVideos(v);
    const cv = $("#hero-canvas"); if (cv) spectrum(cv);
    const n = $("#paper-count"); if (n) n.textContent = PAPERS.length;
    // deep link to a theme block
    if (location.hash && r) { const el = document.getElementById(location.hash.slice(1)); if (el) setTimeout(() => el.scrollIntoView({ block: "start" }), 50); }
  });
})();
