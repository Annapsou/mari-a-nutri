/**
 * Mari a Nutri (Dra. Mariana Saldanha) - Interatividade do Site One Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Carousel de Passo a Passo (Passando de 3 em 3)
  const slide1 = document.getElementById('carousel-slide-1');
  const slide2 = document.getElementById('carousel-slide-2');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');
  const statusLabel = document.getElementById('carousel-status');

  let currentSlide = 1;

  function updateCarousel(slideIndex) {
    currentSlide = slideIndex;
    if (currentSlide === 1) {
      if (slide1) {
        slide1.classList.remove('hidden');
        slide1.classList.add('grid');
      }
      if (slide2) {
        slide2.classList.add('hidden');
        slide2.classList.remove('grid');
      }
      if (statusLabel) {
        statusLabel.textContent = 'Etapa 1 de 2 (Passos 1 a 3)';
      }
    } else {
      if (slide1) {
        slide1.classList.add('hidden');
        slide1.classList.remove('grid');
      }
      if (slide2) {
        slide2.classList.remove('hidden');
        slide2.classList.add('grid');
      }
      if (statusLabel) {
        statusLabel.textContent = 'Etapa 2 de 2 (Passos 4 a 6)';
      }
    }
  }

  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
      updateCarousel(currentSlide === 1 ? 2 : 1);
    });
    btnNext.addEventListener('click', () => {
      updateCarousel(currentSlide === 1 ? 2 : 1);
    });
  }

  // Autoplay automático do carrossel (passa de 3 em 3 a cada 4 segundos sem precisar clicar)
  setInterval(() => {
    updateCarousel(currentSlide === 1 ? 2 : 1);
  }, 4000);

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');
        
        // Close all
        faqItems.forEach(other => {
          const otherAns = other.querySelector('.faq-answer');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherAns && otherAns !== answer) {
            otherAns.classList.add('hidden');
            if (otherIcon) otherIcon.textContent = '▼';
          }
        });

        if (isOpen) {
          answer.classList.add('hidden');
          if (icon) icon.textContent = '▼';
        } else {
          answer.classList.remove('hidden');
          if (icon) icon.textContent = '▲';
        }
      });
    }
  });

  // 4. Header Shadow on Scroll
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (mainHeader) {
      if (window.scrollY > 20) {
        mainHeader.classList.add('shadow-md');
      } else {
        mainHeader.classList.remove('shadow-md');
      }
    }
  });

  // 5. Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        try {
          history.pushState(null, '', '#' + targetId);
        } catch (err) {}

        // Close mobile drawer if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
});
