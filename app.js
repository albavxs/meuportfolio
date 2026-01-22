// Função para inicializar tudo quando o DOM estiver pronto
function initPortfolio() {
  // Initialize AOS with smoother settings
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 0,
      disable: false
    });
    AOS.refresh();
  }

  // Toggle Handler for Project Details
  function createToggleHandler(buttonId, textId) {
    const button = document.getElementById(buttonId);
    const text = document.getElementById(textId);

    if (!button || !text) return;

    button.addEventListener("click", () => {
      const isExpanding = !text.classList.contains("expande");
      text.classList.toggle("expande");
      button.innerText = isExpanding ? "Hide" : "Details";
      
      button.style.transform = "scale(0.95)";
      setTimeout(() => button.style.transform = "", 100);
    });
  }

  createToggleHandler("toggleButton", "texto1");
  createToggleHandler("toggleButton2", "texto2");
  createToggleHandler("toggleButton3", "texto3");
  createToggleHandler("toggleButton4", "texto4");

  // iOS Dock Hover Effect (Magnification)
  const dockItems = document.querySelectorAll('.dock-item');
  const dock = document.querySelector('.ios-dock');

  if (dock) {
    dock.addEventListener('mousemove', (e) => {
      dockItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const distance = Math.abs(e.clientX - centerX);
        
        const scale = Math.max(1, 1.5 - distance / 150);
        item.style.transform = `scale(${scale}) translateY(${(scale - 1) * -10}px)`;
      });
    });

    dock.addEventListener('mouseleave', () => {
      dockItems.forEach(item => {
        item.style.transform = '';
      });
    });
  }

  // Scroll to Skills Section when clicking the arrow
  const scrollTrigger = document.getElementById('scroll-trigger');
  const skillsSection = document.getElementById('skills-section');

  if (scrollTrigger && skillsSection) {
    scrollTrigger.addEventListener('click', () => {
      skillsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Executa a inicialização
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}

// Fallback adicional para garantir visibilidade local
window.addEventListener('load', () => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});
