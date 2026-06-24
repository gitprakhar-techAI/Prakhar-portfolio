/* ===========================
   THEME PERSISTENCE — theme.js
   Include this in every page BEFORE </body>
   =========================== */

   (function () {
    // Apply saved theme immediately on load (prevents flash)
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.dataset.theme = saved;
  
    window.addEventListener('DOMContentLoaded', function () {
      const toggle = document.getElementById('themeToggle');
      if (!toggle) return;
  
      toggle.addEventListener('click', function () {
        const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('portfolio-theme', next);
      });
    });
  })();