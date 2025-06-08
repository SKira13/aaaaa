const masters = [
    {
      name: 'Ліна',
      profession: '+3808658478543',
      images: [
        'https://i.pinimg.com/736x/6b/fb/01/6bfb01c83257f1ccb22aaf5b89b99e0b.jpg',
        'https://i.pinimg.com/736x/1a/a2/09/1aa2091a7052aa6fbab8e9cfdc6d54f4.jpg'
      ]
    },
    {
      name: 'Тарас',
      profession: '+3803567887576',
      images: [
        'https://i.pinimg.com/736x/29/66/a9/2966a9ce0bd625ac08a62d127928d9d0.jpg',
        'https://i.pinimg.com/736x/78/a9/d1/78a9d198efd0dd2735a848055a978e49.jpg'
      ]
    },
    {
      name: 'Катерина',
      profession: '+3807589684757',
      images: [
        'https://i.pinimg.com/736x/b8/29/47/b829476e8a6822d0def45ef15218f34b.jpg',
        'https://i.pinimg.com/736x/fb/94/41/fb9441b11df5964bb54a066eb1b99aa2.jpg'
      ]
    },


    {
        name: 'Олександр',
        profession: '+3808658478543',
        images: [
          'https://i.pinimg.com/736x/6b/fb/01/6bfb01c83257f1ccb22aaf5b89b99e0b.jpg',
          'https://i.pinimg.com/736x/1a/a2/09/1aa2091a7052aa6fbab8e9cfdc6d54f4.jpg'
        ]
      },
      {
        name: 'Станіслав',
        profession: '+3803567887576',
        images: [
          'https://i.pinimg.com/736x/29/66/a9/2966a9ce0bd625ac08a62d127928d9d0.jpg',
          'https://i.pinimg.com/736x/78/a9/d1/78a9d198efd0dd2735a848055a978e49.jpg'
        ]
      },
      {
        name: 'Святослав',
        profession: '+3807589684757',
        images: [
          'https://i.pinimg.com/736x/b8/29/47/b829476e8a6822d0def45ef15218f34b.jpg',
          'https://i.pinimg.com/736x/fb/94/41/fb9441b11df5964bb54a066eb1b99aa2.jpg'
        ]
      },
      {
        name: 'Ліна',
        profession: '+3808658478543',
        images: [
          'https://i.pinimg.com/736x/6b/fb/01/6bfb01c83257f1ccb22aaf5b89b99e0b.jpg',
          'https://i.pinimg.com/736x/1a/a2/09/1aa2091a7052aa6fbab8e9cfdc6d54f4.jpg'
        ]
      },
      {
        name: 'Худо',
        profession: '+3803567887576',
        images: [
          'https://i.pinimg.com/736x/29/66/a9/2966a9ce0bd625ac08a62d127928d9d0.jpg',
          'https://i.pinimg.com/736x/78/a9/d1/78a9d198efd0dd2735a848055a978e49.jpg'
        ]
      },
      {
        name: 'Валерія',
        profession: '+3807589684757',
        images: [
          'https://i.pinimg.com/736x/b8/29/47/b829476e8a6822d0def45ef15218f34b.jpg',
          'https://i.pinimg.com/736x/fb/94/41/fb9441b11df5964bb54a066eb1b99aa2.jpg'
        ]
      }
    
  ];
  
  const container = document.getElementById('mastersContainer');

masters.forEach(master => {
  const card = document.createElement('div');
  card.className = 'card';

  // Слайдер
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'slider-container';

  const slider = document.createElement('div');
  slider.className = 'slider';

  master.images.forEach((imgSrc, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    if (i === 0) slide.classList.add('active');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `${master.name} фото ${i + 1}`;
    slide.appendChild(img);
    slider.appendChild(slide);
  });

  const prevBtn = document.createElement('button');
  prevBtn.className = 'nav-btn prev-btn';
  prevBtn.textContent = '❮';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'nav-btn next-btn';
  nextBtn.textContent = '❯';

  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(prevBtn);
  sliderContainer.appendChild(nextBtn);
  card.appendChild(sliderContainer);

  const nameDiv = document.createElement('div');
  nameDiv.className = 'name';
  nameDiv.textContent = master.name;

  const profDiv = document.createElement('div');
  profDiv.className = 'profession';
  profDiv.textContent = master.profession;

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttons';

  const orderBtn = document.createElement('button');
  orderBtn.className = 'order-btn';
  orderBtn.textContent = 'Замовити';

  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '❤️';

  // ✅ Дії
  orderBtn.addEventListener('click', () => {
    alert(`Замовлено: ${master.name}`);
  });

  heart.addEventListener('click', () => {
    heart.classList.toggle('liked');
  });

  buttonsDiv.appendChild(orderBtn);
  buttonsDiv.appendChild(heart);

  card.appendChild(nameDiv);
  card.appendChild(profDiv);
  card.appendChild(buttonsDiv);
  container.appendChild(card);

  // Слайдер логіка
  let currentSlide = 0;
  const slides = slider.querySelectorAll('.slide');

  function updateSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  });
});
