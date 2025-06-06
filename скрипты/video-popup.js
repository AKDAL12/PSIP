//Видео
function openPopup() {
  const popup = document.getElementById("video-popup");
  const video = document.getElementById("popup-video");
  popup.classList.remove("d-none");
  popup.style.display = "flex";
  video.currentTime = 0;
  video.play();
}

function closePopup() {
  const popup = document.getElementById("video-popup");
  const video = document.getElementById("popup-video");
  popup.classList.add("d-none");
  popup.style.display = "none";
  video.pause();
}

window.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("background-video");
  if (background) background.load(); // Прогреваем видео, если элемент существует
});

//Услуги
document.getElementById('toggleServicesBtn').addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.service-item.d-none');
  hiddenItems.forEach(item => item.classList.remove('d-none'));
  this.remove(); // Удаляет кнопку после показа всех услуг
});

//Вопросы
document.getElementById('showAllFaqs').addEventListener('click', function () {
  document.querySelectorAll('.accordion-item.d-none').forEach(item => {
    item.classList.remove('d-none');
  });
  this.remove();
});

//Отзывы
  const tabs = document.querySelectorAll('.review-tab');
  const contents = document.querySelectorAll('.review-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(btn => btn.classList.remove('active'));
      contents.forEach(c => c.classList.add('d-none'));

      tab.classList.add('active');
      document.getElementById(`review-${tab.dataset.target}`).classList.remove('d-none');
    });
  });
//Меню
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      const overlay = document.getElementById('menuOverlay');
      menu.classList.toggle('open');
      overlay.classList.toggle('show');
    }

        function toggleSubmenu(event) {
      const submenu = event.target.nextElementSibling;
      if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    }

    function changeCity(city) {
      const currentCity = document.getElementById('currentCity');
      currentCity.textContent = city;
    }

//Карусель
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#photoGalleryCarousel");
  const inner = carousel.querySelector(".carousel-inner");
  const bsCarousel = new bootstrap.Carousel(carousel);

  // Отключаем перетаскивание изображений
  carousel.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
  });

  let isDown = false;
  let startX = 0;
  let movedX = 0;

  inner.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.clientX;
    inner.style.cursor = "grabbing";
  });

  inner.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    movedX = e.clientX - startX;
  });

  inner.addEventListener("mouseup", () => {
    if (!isDown) return;
    inner.style.cursor = "grab";
    isDown = false;

    if (movedX > 50) {
      bsCarousel.prev();
    } else if (movedX < -50) {
      bsCarousel.next();
    }
    movedX = 0;
  });

  inner.addEventListener("mouseleave", () => {
    isDown = false;
    inner.style.cursor = "grab";
    movedX = 0;
  });

  inner.style.cursor = "grab";
});

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

    document.getElementById('faqForm').addEventListener('submit', function (e) {
    const form = e.target;

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    form.classList.add('was-validated');
  });

  //Add
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('promoPopup').classList.add('active');
    }, 3000);
  });

  function closePromo() {
    document.getElementById('promoPopup').classList.remove('active');
  }


