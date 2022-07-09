"use strict"

const modalEl = document.querySelector('.modal');
const substrate = document.querySelector('.substrate');
const clicks = document.querySelectorAll('.forClick');
const closeEl = document.querySelector('.crossForClose');
const call = document.querySelector('.fillYourForm__callYouBack_button');
const accept = document.querySelector('.accept');
const inputEl = document.querySelectorAll('.fillYourForm__input');
const formEL = document.querySelector('.fillYourForm');
const phoneEl = document.querySelectorAll('.phoneCall');
const phoneCheck = document.querySelectorAll('.phoneCheck');
const checked = document.getElementsByClassName('inputChecked');
const clickAcceptEl = document.querySelector('.clickForAcceptClose');
const leftArrow = document.querySelector('.arrow__left');
const rightArrow = document.querySelector('.arrow__right');
const leftArrowInsurance = document.querySelector('.go__ahead__left');
const rightArrowInsurance = document.querySelector('.go__ahead__right');
const goLeftEl = document.querySelector('.go__left');
const goRightEl = document.querySelector('.go__right');
const logoEl = document.querySelectorAll('.logoStyle');
const tnt = document.querySelector('.tnt');
const ups = document.querySelector('.ups');
const date = document.querySelector('.date');
const widthWind = document.querySelector('body').offsetWidth;

if (widthWind <= 768) {
  call.style.fontSize = '12px';
}

date.innerText = new Date().getFullYear();
for (let i = 0; i < clicks.length; i += 1) {
  clicks[i].addEventListener('click', (event) => {
    event.preventDefault();
    modalEl.classList.add('openForModal');
    substrate.style.display = 'block';
  });
}

closeEl.addEventListener('click', () => {
  modalEl.classList.remove('openForModal');
  substrate.style.display = 'none';
});

/*  eslint-disable */
function checkRegExp(name, phone) {
  const patterns = {
    name: /^[a-zа-яё]+$/i,
    phone: /^\8\d{3}\d{3}\d{4}$/,
  };
  const chechedName = patterns.name.test(name);
  const chechedPhone = patterns.phone.test(phone);
  if (chechedName === false || chechedPhone === false) {
    return false;
  }
  if (chechedName === true && chechedPhone === true) {
    return true;
  }
}

formEL.addEventListener('submit', function (event) {

  event.preventDefault();
  inputEl[0].classList.remove('fieldStyle');
  inputEl[1].classList.remove('fieldStyle');

  if (inputEl[0].value !== "" && inputEl[1].value !== "" && isNaN(inputEl[0].value) && !isNaN(
      inputEl[1].value)) {

    let result = checkRegExp(inputEl[0].value, inputEl[1].value);

    if (result === true) {
      accept.style.display = 'flex';
      modalEl.classList.remove('openForModal');
      setTimeout(() => {
        accept.style.display = 'none';
        substrate.style.display = 'none';
        inputEl[0].value = "";
        inputEl[1].value = "";
      }, 1500);
    } else {
      call.innerText = 'Неккоректное имя или телефон формата 8963*******';
      inputEl[0].classList.add('fieldStyle');
      inputEl[1].classList.add('fieldStyle');
    }
  }
  if (inputEl[0].value === "" || !isNaN(inputEl[0].value)) {
    call.innerText = 'Укажите Имя';
    inputEl[0].classList.add('fieldStyle');
  }
  if (inputEl[1].value === "" || isNaN(inputEl[1].value)) {
    call.innerText = 'Укажите телефон';
    inputEl[1].classList.add('fieldStyle');
  }
  if (inputEl[0].value === "" && inputEl[1].value === "") {
    call.innerText = 'Укажите телефон и Ваше имя';
    inputEl[0].classList.add('fieldStyle');
    inputEl[1].classList.add('fieldStyle');
  }
});


call.addEventListener('mouseover', (event) => {
  // eslint-disable-next-line no-param-reassign
  event.target.innerText = 'Отправить';
});

call.addEventListener('mouseout', (event) => {
  // eslint-disable-next-line no-param-reassign
  event.target.innerText = 'заказать звонок';
});

clickAcceptEl.addEventListener('click', () => {
  substrate.style.display = 'none';
  accept.style.display = 'none';
});

phoneEl.forEach(function (item, i) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    if (phoneCheck[i].value === "") {
      phoneEl[i].innerText = 'Укажите телефон';
      phoneCheck[i].style.borderColor = 'red';
    } else if (!isNaN(phoneCheck[i].value) && checked[i].checked === false) {
      phoneEl[i].innerText = 'Подтвердите согласие на обработку данных';
    } else if (isNaN(phoneCheck[i].value)) {
      phoneEl[i].innerText = 'Недопустимый телефон';
      phoneCheck[i].style.borderColor = 'red';
    } else if (phoneCheck[i].value !== "" && !isNaN(phoneCheck[i].value) && checked[i]
      .checked === true) {
      accept.style.display = 'flex';
      substrate.style.display = 'block';
      setTimeout(() => {
        accept.style.display = 'none';
        substrate.style.display = 'none';
        phoneCheck[i].value = "";
        phoneCheck[i].style.borderColor = '';
        checked[i].checked = false;
      }, 1500);
    }
  });
});

phoneEl.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.innerText = 'Отправить';
  });
});

phoneEl.forEach((item) => {
  item.addEventListener('mouseout', (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.innerText = 'Заказать звонок';
  });
});

const images = {
  currentIdx: 0,
  slides: [],
  init() {
    this.slides = document.querySelectorAll('.slides');
  },

  showBlockWithCurrentIdx() {
    this.slides[this.currentIdx].classList.remove('hidden-slide');
  },
  hideVisibleBlock() {
    this.slides.forEach((slide) => {
      slide.classList.add('hidden-slide');
    });
  },
  setNextLeftBlock() {
    this.hideVisibleBlock();
    if (this.currentIdx === 0) {
      this.currentIdx = this.slides.length - 1;
    } else {
      this.currentIdx -= 1;
    }
    this.showBlockWithCurrentIdx();
  },
  setNextRightBlock() {
    this.hideVisibleBlock();
    if (this.currentIdx === this.slides.length - 1) {
      this.currentIdx = 0;
    } else {
      this.currentIdx += 1;
    }
    this.showBlockWithCurrentIdx();
  },
};

// для экранов более > 768px
const imagesBig = {
  currentIdx: 0,
  currentIdx2: 1,
  slides: [],
  initBigWidth() {
    this.slides = document.querySelectorAll('.slides');
    this.slides[1].classList.remove('hidden-slide');
  },
  showBlockWithCurrentIdx() {
    this.slides[this.currentIdx].classList.remove('hidden-slide');
    this.slides[this.currentIdx2].classList.remove('hidden-slide');
  },
  hideVisibleBlock() {
    this.slides.forEach((slide) => {
      slide.classList.add('hidden-slide');
    });
  },
  setNextLeftBlockBigWidth() {
    this.hideVisibleBlock();
    if (this.currentIdx === 0 && this.currentIdx2 === 1) {
      this.currentIdx = 2;
      this.currentIdx2 = 3;
    } else {
      this.currentIdx = 0;
      this.currentIdx2 = 1;
    }
    this.showBlockWithCurrentIdx();
  },
  setNextRightBlockBigWidth() {
    this.hideVisibleBlock();
    if (this.currentIdx === 2 && this.currentIdx2 === 3) {
      this.currentIdx = 0;
      this.currentIdx2 = 1;
    } else {
      this.currentIdx = 2;
      this.currentIdx2 = 3;
    }
    this.showBlockWithCurrentIdx();
  },
};

window.addEventListener('load', () => {
  if (widthWind <= 767.98) {
    leftArrow.addEventListener('click', () => {
      images.setNextLeftBlock();
    });

    rightArrow.addEventListener('click', () => {
      images.setNextRightBlock();
    });
    // Инициализация слайдера
    images.init();
  }
  if (widthWind >= 768) {
    leftArrow.addEventListener('click', () => {
      imagesBig.setNextLeftBlockBigWidth();
    });

    rightArrow.addEventListener('click', () => {
      imagesBig.setNextRightBlockBigWidth();
    });
    // Инициализация слайдера
    imagesBig.initBigWidth();
  }
});

const block = {
  currentIdx: 0,
  slidesInsurances: [],
  init() {
    this.slidesInsurances = document.querySelectorAll('.insurance');
  },
  showBlockWithCurrentIdx() {
    this.slidesInsurances[this.currentIdx].classList.remove('insurance__hidden');
  },
  hideVisibleBlock() {
    this.slidesInsurances.forEach((slide) => {
      slide.classList.add('insurance__hidden');
    });
  },
  setNextLeftBlock() {
    this.hideVisibleBlock();
    if (this.currentIdx === 0) {
      this.currentIdx = this.slidesInsurances.length - 1;
    } else {
      this.currentIdx -= 1;
    }
    this.showBlockWithCurrentIdx();
  },
  setNextRightBlock() {
    this.hideVisibleBlock();
    if (this.currentIdx === this.slidesInsurances.length - 1) {
      this.currentIdx = 0;
    } else {
      this.currentIdx += 1;
    }
    this.showBlockWithCurrentIdx();
  },
};

window.addEventListener('load', () => {
  leftArrowInsurance.addEventListener('click', () => {
    block.setNextLeftBlock();
  });
  rightArrowInsurance.addEventListener('click', () => {
    block.setNextRightBlock();
  });
  block.init();
});

window.addEventListener('load', () => {
  if (widthWind <= 767.98) {
    tnt.style.display = 'none';
    ups.style.display = 'none';

    let counter = 0;

    goLeftEl.addEventListener('click', () => {
      if (counter === 0) {
        logoEl.forEach((element) => {
          // eslint-disable-next-line no-param-reassign
          element.style.display = 'none';
        });
        tnt.style.display = 'block';
        ups.style.display = 'block';
        const companies = document.querySelector('.companies');
        companies.style.gridTemplateRows = '50px';
        companies.style.gridTemplateColumns = '90px';
        companies.style.gridColumnGap = '10px';
        goLeftEl.style.visibility = 'hidden';
      }
      if (counter !== 0) {
        logoEl.forEach((element) => {
          // eslint-disable-next-line no-param-reassign
          element.style.display = 'block';
        });
        tnt.style.display = 'none';
        ups.style.display = 'none';
        goLeftEl.style.visibility = 'visible';
        goRightEl.style.visibility = 'visible';
      }
      counter += 1;
    });

    goRightEl.addEventListener('click', () => {
      if (counter === 0) {
        logoEl.forEach((element) => {
          // eslint-disable-next-line no-param-reassign
          element.style.display = 'none';
        });
        tnt.style.display = 'block';
        ups.style.display = 'block';
        const companies = document.querySelector('.companies');
        companies.style.gridTemplateRows = '50px';
        companies.style.gridTemplateColumns = '90px';
        companies.style.gridColumnGap = '10px';
        goRightEl.style.visibility = 'hidden';
      }
      if (counter !== 0) {
        logoEl.forEach((elem) => {
          // eslint-disable-next-line no-param-reassign
          elem.style.display = 'block';
        });
        tnt.style.display = 'none';
        ups.style.display = 'none';
        goLeftEl.style.visibility = 'visible';
        goRightEl.style.visibility = 'visible';
      }
      counter -= 1;
    });
  }
  if (widthWind > 768) {
    tnt.style.display = 'block';
    ups.style.display = 'block';
    goRightEl.style.visibility = 'hidden';
    goLeftEl.style.visibility = 'hidden';
  }
});
