// Отримуємо елемент
all_categories = document.querySelectorAll('.product-category');
arrow = document.querySelectorAll('.product__arrow')

// Додаємо подію для наведення
all_categories[0].addEventListener('click', function() {
  all_categories[0].style.backgroundColor = '#e52a9a';
  arrow[0].style.display = "inline";
});

// Додаємо подію для покидання елементу
all_categories[0].addEventListener('click', function() {
  all_categories[0].style.backgroundColor = '';
  arrow[0].style.display = "none";
});

all_categories[1].addEventListener('mouseover', function() {
  all_categories[1].style.backgroundColor = '#e52a9a';
  arrow[1].style.display = "inline";
});

all_categories[1].addEventListener('mouseout', function() {
  all_categories[1].style.backgroundColor = '';
  arrow[1].style.display = "none";
});

all_categories[2].addEventListener('mouseover', function() {
    all_categories[2].style.backgroundColor = '#e52a9a';
    arrow[2].style.display = "inline";
  });
  
  all_categories[2].addEventListener('mouseout', function() {
    all_categories[2].style.backgroundColor = '';
    arrow[2].style.display = "none";
  });

  all_categories[3].addEventListener('mouseover', function() {
    all_categories[3].style.backgroundColor = '#e52a9a';
    arrow[3].style.display = "inline";
  });
  
  all_categories[3].addEventListener('mouseout', function() {
    all_categories[3].style.backgroundColor = '';
    arrow[3].style.display = "none";
  });


