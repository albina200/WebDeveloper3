let hamburger = document.querySelector(".hamburger");
let NavLinks = document.querySelector(".nav__links");
let NavAllLinks = document.querySelectorAll("nav a");

// Получаем ссылки на кнопки и тексты
let showTextButtons = document.querySelectorAll('.showTextButton');
let hiddenTexts = document.querySelectorAll('.hiddenText');

// let projectsBlock document.querySelectorAll('.projects__block');



hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    NavLinks.classList.toggle('nav-links_active');
}

for (let i = 0; i < 5; i++) {
    NavAllLinks[i].onclick = function () {
        NavLinks.classList.remove("nav-links_active");
        hamburger.classList.remove("hamburger_active");
    }
}



// Добавляем обработчик события при нажатии на каждую кнопку
showTextButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // Если текущий текст виден, скрываем его
      if (hiddenTexts[index].style.display === 'block') {
        hiddenTexts[index].style.display = 'none'; // Скрываем текст
      } else {
        // Закрываем все тексты перед открытием текущего
        hiddenTexts.forEach(function(text) {
          text.style.display = 'none';
        });
  
        // Показываем текущий текст
        hiddenTexts[index].style.display = 'block';
      }
    });
  });
