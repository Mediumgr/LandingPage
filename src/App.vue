<template>
  <v-app>
    <v-main>
      <header class="header center">
        <div class="header__menu">
          <p class="logo"><img :src="require('./assets/img/logo.png')" alt="logo" /></p>
          <!-- eslint-disable  -->
          <input id="switcher" type="checkbox" />
          <label class="openSwitcher" for="switcher"><i class="fas fa-bars"></i></label>
          <nav class="nav">
            <img :src="require('./assets/img/sendit320.png')" alt="SendIt" class="hiddenLogo" />
            <ul class="nav__menu">
              <li class="nav__list">
                <p class="nav__link">Главная</p>
              </li>
              <li class="nav__list">
                <p class="nav__link">Описание</p>
              </li>
              <li class="nav__list">
                <p class="nav__link">Преимущества</p>
              </li>
              <li class="nav__list">
                <p class="nav__link">Отзывы</p>
              </li>
              <li class="nav__list">
                <p class="nav__link">Партнеры</p>
              </li>
              <li class="nav__list">
                <p class="nav__link">Гарантии</p>
              </li>
              <li class="nav__list">
                <p class="nav__link">FAQ</p>
              </li>
            </ul>
            <label class="close" for="switcher">
              <input id="switcher" type="checkbox" />
              <img :src="require('./assets/img/Vector.svg')" alt="close" />
            </label>
            <form action="#" class="hidden__form">
              <div class="questions__text hidden__question">
                <h2 class="questions">ОСТАЛИСЬ ВОПРОСЫ?</h2>
              </div>
              <input
                type="number"
                name="your__phone"
                id="your__phone"
                class="your__phone phoneCheck"
                placeholder="Ваш телефон"
                required
              />
              <button class="hidden__order phoneCall">заказать звонок</button>
              <div class="personalData">
                <label for="data" class="data">
                  Я согласен на обработку персональных данных
                  <input type="checkbox" name="data hidden__data" id="data" class="inputChecked" />
                </label>
              </div>
            </form>
            <div class="hidden__socialLinks">
              <p class="instagram">
                <img :src="require('./assets/img/instagram.png')" alt="instagram" />
              </p>
              <p class="vk"><img :src="require('./assets/img/vk.png')" alt="vk" /></p>
              <p class="facebook">
                <img :src="require('./assets/img/facebook.png')" alt="facebook" />
              </p>
            </div>
          </nav>
        </div>
        <div class="header__text">
          <h1 class="header__text_h1">придумайте что отправить</h1>
          <h2 class="header__text_h2">А посылка доедет сама</h2>
          <div class="header__text_button forClick">
            <a href="#" class="header__text_send">Отправить посылку</a>
          </div>
        </div>
      </header>
      <div class="deliveres center">
        <div class="deliveres__companies">
          <img :src="require('./assets/img/vector1.svg')" alt="company" />
        </div>
        <div class="deliveres__text">
          <h2 class="deliveres__h2">Мы – агрегатор служб доставки</h2>
          <p class="deliveres__p">
            С нами удобно вам, вашим клиентам и курьерским службам. Для вас наши услуги бесплатны,
            так как мы получаем бонусы от служб доставок за предоставленный объем заказов, а вы
            получаете надежный сервис в подарок!
          </p>
          <div class="header__text_button forClick">
            <a href="#" class="header__text_send">Отправить посылку</a>
          </div>
        </div>
      </div>
      <section class="content center">
        <div class="content__box">
          <img :src="require('./assets/img/1.png')" alt="step 1" class="content__img" />
          <h2 class="content__h2">Шаг 1</h2>
          <p class="content__text">Придумайте что и кому отправить</p>
        </div>
        <div class="content__box">
          <img :src="require('./assets/img/2.png')" alt="step 2" class="content__img" />
          <h2 class="content__h2">Шаг 2</h2>
          <p class="content__text">
            Создайте заявку на сайте SendIt - Ваш персональный менеджер позвонит и подтвердит
            запрос, уточнит все необходимые данные
          </p>
        </div>
        <div class="content__box">
          <img :src="require('./assets/img/3.png')" alt="step 3" class="content__img" />
          <h2 class="content__h2">Шаг 3</h2>
          <p class="content__text">
            К Вам приезжает курьер, забирает посылку, Вы подписываете один документ
          </p>
        </div>
        <div class="content__box">
          <img :src="require('./assets/img/4.png')" alt="step 4" class="content__img" />
          <h2 class="content__h2">Шаг 4</h2>
          <p class="content__text">
            Вы ждёте подтверждения доставки, слова радости и благодарности от адресата :)
          </p>
        </div>
      </section>
      <div class="takeCare center">
        <h2 class="takeCare__text">Мы берём все заботы по доставке на себя!</h2>
        <div class="PushButton forClick">
          <a href="#" class="button">Отправить посылку</a>
        </div>
      </div>
      <div class="callYouBack center">
        <div class="callYouBack__leftBlock">
          <h1 class="callYouBack__h1">хотите мы вам перезвоним?</h1>
          <p class="callYouBack__text">Закажите звонок, и менеджер вам всё расскажет и объяснит</p>
        </div>
        <form action="#" class="fillTheForm">
          <input
            type="text"
            name="phone"
            id="phone"
            class="phone phoneCheck"
            placeholder="Ваш телефон"
          />
          <button class="callYouBack__button phoneCall">заказать звонок</button>
          <label for="Agreed" class="agreed__text">
            <input type="checkbox" name="Agreed" id="Agreed" class="inputChecked" />
            Я согласен на обработку персональных данных
          </label>
        </form>
      </div>
      <article class="feedbacks center">
        <h2 class="review">Отзывы</h2>
        <div class="leaveYourComments slider">
          <!-- eslint-disable  -->
          <a class="arrow__left">
            <i class="fas fa-chevron-left fa-2x"></i>
          </a>
          <div class="first__review slides">
            <div class="firstGuest">
              <div class="foto__block">
                <img :src="require('./assets/img/girl.png')" alt="foto" class="foto" />
              </div>
              <div class="infoGuest">
                <h2 class="name">Дарья</h2>
                <h3 class="company">La Intuicion</h3>
                <h4 class="order">Посылка: товары</h4>
                <h4 class="order">Откуда: Москва</h4>
                <h4 class="order">Куда: Нижневартовск</h4>
              </div>
              <p class="comment">
                Отличный и качественный сервис. Долго искали курьерскую службу для доставки наших
                товаров. Решили попробовать и были приятно удивлены, что помимо удобного сайта,
                компания предоставляет доступ в личный кабинет, где реализованы многие наши
                потребности (ведение адресной базы, выбор и вызов курьера в пару кликов).
              </p>
            </div>
          </div>
          <div class="second__review hidden-slide slides">
            <div class="firstGuest">
              <div class="foto__block">
                <img :src="require('./assets/img/woman.png')" alt="foto" class="foto" />
              </div>
              <div class="infoGuest">
                <h2 class="name">Елена</h2>
                <h3 class="company">Global Logic</h3>
                <h4 class="order">Посылка: товары</h4>
                <h4 class="order">Откуда: Москва</h4>
                <h4 class="order">Куда: Калининград</h4>
              </div>
              <p class="comment">
                Мне нравится работать с SendIt, потому что это удобно: моментальный расчет стоимости
                доставки, удобный сайт, выборка среди основных надёжных логистических компаний и
                самый значимый фактор – всё это можно оперативно организовать и не волноваться. И
                ещё хочу сказать отдельное спасибо менеджеру за отзывчивость.
              </p>
            </div>
          </div>
          <div class="third__review hidden-slide slides makeDisplayForWoman">
            <div class="firstGuest grid__for_Marina">
              <div class="foto__block">
                <img :src="require('./assets/img/thirdwoman.jpg')" alt="foto" class="foto" />
              </div>
              <div class="infoGuest">
                <h2 class="name">Марина</h2>
                <h3 class="company">Cargo</h3>
                <h4 class="order">Посылка: товары</h4>
                <h4 class="order">Откуда: Кронштадт</h4>
                <h4 class="order">Куда: Владивосток</h4>
              </div>
              <p class="comment">
                Не один раз курьеры доставляли мне посылки, еще ни разу не опоздали! Всегда
                поражалась, как они укладываются в обозначенное время. Всегда вежливое отношение, ни
                разу не сталкивалась с грубостью. Спасибо!
              </p>
            </div>
          </div>
          <div class="forth__review hidden-slide slides">
            <div class="firstGuest">
              <div class="foto__block">
                <img :src="require('./assets/img/forthwoman.jpg')" alt="foto" class="foto" />
              </div>
              <div class="infoGuest">
                <h2 class="name">Света</h2>
                <h3 class="company">Сoffemania</h3>
                <h4 class="order">Посылка: товары</h4>
                <h4 class="order">Откуда: Волгоград</h4>
                <h4 class="order">Куда: Краснодар</h4>
              </div>
              <p class="comment">
                Пользуюсь услугами данной компании почти каждый день. Давно искала эту компанию по
                доставке, проблем никаких не возникает и цены на доставку недорогие, отличный и
                качественный сервис. Все менеджеры приятные, товар можно отследить онлайн и доставка
                очень быстрая! Отдельное спасибо менеджеру Валентине. Рекомендую.
              </p>
            </div>
          </div>
          <!-- eslint-disable -->
          <a class="arrow__right">
            <i class="fas fa-chevron-right fa-2x"></i>
          </a>
        </div>
      </article>
      <div class="ourAdvantages center">
        <h1 class="advantages">НАШИ ПРЕИМУЩЕСТВА</h1>
        <div class="ourAdvantages__grid">
          <div class="same__content">
            <div class="ourAdvantages__content">
              <img
                :src="require('./assets/img/11.png')"
                alt="Rapidity"
                class="ourAdvantages__image"
              />
            </div>
            <div class="text__of__advantages">
              <p class="ourAdvantages__text">Бесплатный сервис</p>
            </div>
          </div>
          <div class="same__content">
            <div class="ourAdvantages__content">
              <img
                :src="require('./assets/img/123.svg')"
                alt="Rapidity"
                class="ourAdvantages__image"
              />
            </div>
            <div class="text__of__advantages">
              <p class="ourAdvantages__text">Огромный выбор вариантов доставки</p>
            </div>
          </div>
          <div class="same__content">
            <div class="ourAdvantages__content">
              <img
                :src="require('./assets/img/Layer2.svg')"
                alt="Rapidity"
                class="ourAdvantages__image"
              />
            </div>
            <div class="text__of__advantages">
              <p class="ourAdvantages__text">4 параметра лучшего предложения</p>
            </div>
          </div>
          <div class="same__content">
            <div class="ourAdvantages__content">
              <img
                :src="require('./assets/img/Layer4.svg')"
                alt="Rapidity"
                class="ourAdvantages__image"
              />
            </div>
            <div class="text__of__advantages">
              <p class="ourAdvantages__text">Удобство заказа</p>
            </div>
          </div>
          <div class="same__content">
            <div class="ourAdvantages__content">
              <img
                :src="require('./assets/img/Layer5.svg')"
                alt="Rapidity"
                class="ourAdvantages__image"
              />
            </div>
            <div class="text__of__advantages">
              <p class="ourAdvantages__text">Online-поддержка</p>
            </div>
          </div>
          <div class="same__content">
            <div class="ourAdvantages__content">
              <img
                :src="require('./assets/img/Layer6.svg')"
                alt="Rapidity"
                class="ourAdvantages__image"
              />
            </div>
            <div class="text__of__advantages">
              <p class="ourAdvantages__text">Единый номер отслеживания</p>
            </div>
          </div>
        </div>
      </div>
      <section class="guarantee center">
        <h2 class="our__guarantees">НАШИ ГАРАНТИИ</h2>
        <div class="flex__container">
          <div class="go__ahead__left">
            <!-- eslint-disable -->
            <a class="arrow__companies__left">
              <i class="fas fa-chevron-left fa-2x"></i>
            </a>
          </div>
          <div class="information__block">
            <div class="insurance">
              <div class="insurance__flex">
                <div class="insurance__block">
                  <div class="insurance__foto">
                    <img
                      :src="require('./assets/img/mailbox.png')"
                      alt="mailbox"
                      class="foto__box"
                    />
                  </div>
                  <div class="insurance__dispatch">
                    <h2 class="insurance__header">Страховка отправлений</h2>
                  </div>
                </div>
              </div>
              <div class="bottom__text">
                <p class="insurance__text">
                  Контроль работы курьеров в онлайн режиме. Страхование по запросу клиента Каждый
                  куръер находится под пристальным вниманием менеджеров SendIt
                </p>
                <div class="insurance__button forClick">
                  <a href="#" class="details"> подробнее </a>
                </div>
              </div>
            </div>
            <div class="insurance insurance__hidden">
              <div class="insurance__block">
                <div class="insurance__foto">
                  <img :src="require('./assets/img/box.png')" alt="mailbox" class="foto__box" />
                </div>
                <div class="insurance__dispatch">
                  <h2 class="insurance__header">Прозрачность расчетов</h2>
                </div>
              </div>
              <div class="bottom__text">
                <p class="insurance__text price__text">
                  Чтобы узнать точную стоимость отправления вам не нужно связываться с каждой
                  курьерской службой в отдельности и сравнивать полученные предложения, просто
                  воспользуйтесь нашим сервисом
                </p>
                <div class="insurance__button forClick">
                  <a href="#" class="details">подробнее</a>
                </div>
              </div>
            </div>
            <div class="insurance insurance__hidden">
              <div class="insurance__block">
                <div class="insurance__foto">
                  <img :src="require('./assets/img/guys.png')" alt="mailbox" class="foto__box" />
                </div>
                <div class="insurance__dispatch">
                  <h2 class="insurance__header">Лучшие поставщики</h2>
                </div>
              </div>
              <div class="bottom__text">
                <p class="insurance__text">
                  Мы работаем с самыми надежными и известными операторами доставки. Проверка
                  надежности курьерской компании, экспертная оценка качества предоставляемых услуг
                </p>
                <div class="insurance__button forClick">
                  <a href="#" class="details">подробнее</a>
                </div>
              </div>
            </div>
          </div>
          <div class="go__ahead__right">
            <!-- eslint-disable -->
            <a class="arrow__companies__right">
              <i class="fas fa-chevron-right fa-2x"></i>
            </a>
          </div>
        </div>
      </section>
      <div class="doubts center">
        <h1 class="doubtsLeft">ОСТАЛИСЬ СОМНЕНИЯ?</h1>
        <div class="select__block">
          <v-container>
            <v-row v-for="(n, index) in 6">
              <v-col class="d-flex">
                <v-select
                class="select"
                :items="items[index]"
                :label="items[index][0]"
                dense
                solo
                rounded
                append-icon="fa-solid fa-arrow-down fa-2xs">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <div class="companies__block center">
        <div class="go__left">
          <!-- eslint-disable -->
          <a class="arrow__companies__left">
            <i class="fas fa-chevron-left fa-2x"></i>
          </a>
        </div>
        <div class="companies">
          <div class="bringo logoStyle slidesLogo">
            <p class="companies__link">
              <img :src="require('@/assets/img/bringo.png')" alt="bringo" class="bringo__img" />
            </p>
          </div>
          <div class="cdek logoStyle slidesLogo">
            <p class="companies__link">
              <img :src="require('./assets/img/cdek.png')" alt="cdek" class="cdek__img" />
            </p>
          </div>
          <div class="cityExpress logoStyle slidesLogo">
            <p class="companies__link">
              <img
                :src="require('./assets/img/city_express.png')"
                alt="city"
                class="cityExpress__img"
              />
            </p>
          </div>
          <div class="dpd logoStyle slidesLogo">
            <p class="companies__link">
              <img :src="require('./assets/img/dpd.png')" alt="dpd" class="dpd__img" />
            </p>
          </div>
          <div class="pony logoStyle slidesLogo">
            <p class="companies__link">
              <img :src="require('./assets/img/pony.png')" alt="pony" class="pony__img" />
            </p>
          </div>
          <div class="spsr logoStyle slidesLogo">
            <p class="companies__link">
              <img :src="require('./assets/img/spsr.png')" alt="spsr" class="spsr__img" />
            </p>
          </div>
          <div class="tnt logoStyle slidesLogo">
            <p class="companies__link">
              <img :src="require('./assets/img/tnt.png')" alt="tnt" class="tnt__img" />
            </p>
          </div>
          <div class="ups logoStyle slidesLogo">
            <p class="companies__link">
              <img :src="require('./assets/img/ups.png')" alt="ups" class="ups__img" />
            </p>
          </div>
        </div>
        <div class="go__right">
          <!--  eslint-disable -->
          <a class="arrow__companies__right">
            <i class="fas fa-chevron-right fa-2x"></i>
          </a>
        </div>
      </div>
      <div class="footer center">
        <div class="footer__upper">
          <form action="#" class="footer__form">
            <div class="field__form">
              <div class="questions__text">
                <h1 class="questions">ОСТАЛИСЬ ВОПРОСЫ?</h1>
              </div>
              <div class="footer__yourPhone">
                <label for="phoneNumber">
                  <input
                    type="number"
                    name="your__phone"
                    id="phoneNumber"
                    class="your__phone phoneCheck"
                    placeholder="Ваш телефон"
                  />
                </label>
              </div>
              <div class="footer__order">
                <button class="call__order phoneCall">заказать звонок</button>
              </div>
              <div class="personalData">
                <label for="footerData" class="data">
                  Я согласен на обработку персональных данных
                  <input type="checkbox" name="data" id="footerData" class="inputChecked" />
                </label>
              </div>
            </div>
          </form>
        </div>
        <div class="footer__middle">
          <img :src="require('./assets/img/footerimg.png')" alt="Send it" class="send__it" />
          <label class="openSwitcher" for="switcher">
            <input id="switcher" type="checkbox" />
            <i class="fas fa-bars bigMak"></i>
          </label>
          <ul class="nav__bottom">
            <li class="footer__list">
              <p class="footer__link">Главная</p>
            </li>
            <li class="footer__list">
              <p class="footer__link">Описание</p>
            </li>
            <li class="footer__list">
              <p class="footer__link">Преимущества</p>
            </li>
            <li class="footer__list">
              <p class="footer__link">Отзывы</p>
            </li>
            <li class="footer__list">
              <p class="footer__link">Партнёры</p>
            </li>
            <li class="footer__list">
              <p class="footer__link">Гарантии</p>
            </li>
            <li class="footer__list">
              <p class="footer__link">FAQ</p>
            </li>
          </ul>
        </div>
        <div class="footer__bottom">
          <div class="footer__bottom_copyright">
            <p class="copy">&#169; Все права защищены</p>
          </div>
          <div class="footer__bottom_year">
            <p class="text date"></p>
          </div>
          <div class="footer__bottom_socialLinks">
            <a href="https://github.com/Mediumgr" class="instagram"
              ><img :src="require('./assets/img/instagram.png')" alt="instagram" class="image"
            /></a>
            <a href="https://github.com/Mediumgr"
              ><img :src="require('./assets/img/vk.png')" alt="vk" class="image"
            /></a>
            <a href="https://github.com/Mediumgr"
              ><img :src="require('./assets/img/facebook.png')" alt="facebook" class="image"
            /></a>
          </div>
          <div class="footer__bottom_designer">
            <a href="https://github.com/Mediumgr" target="blank" class="text">
              <img :src="require('./assets/img/github.jpg')" alt="github" class="github" />
              <span class="myName">Ruslan Guseinov</span>
            </a>
          </div>
        </div>
      </div>
      <!-- подложка и модалка -->
      <div class="substrate"></div>
      <div class="modal">
        <form action="#" class="fillYourForm">
          <div class="crossForClose">
            <img :src="require('./assets/img/mycrossforclose.svg')" alt="close" class="myCross" />
          </div>
          <div class="fillYourForm__ofYourRequest">Оставьте заявку, и мы Вам перезвоним!</div>
          <label for="nameRequest">
            <input
              type="text"
              id="nameRequest"
              class="fillYourForm__input"
              placeholder="Ваше Имя"
            />
          </label>
          <input
            type="number"
            id="phoneRequest"
            name="phoneRequest"
            class="fillYourForm__input"
            placeholder="Ваш телефон"
          />
          <button class="fillYourForm__callYouBack_button">заказать звонок</button>
        </form>
      </div>
      <div class="accept">
        <div class="clickForAcceptClose">
          <img :src="require('./assets/img/mycrossforclose.svg')" alt="close" class="myCross" />
        </div>
        <p class="accept__text">Спасибо. Ваша заявка принята!</p>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [['Не уйдет много времени', 'Не сомневайтесь', 'Очень срочно'], ['Мне необходимо совершить доставку по нескольким адресам', 'Дом', 'Улица', 'Торговый центр'], ['Вы не сможете доставить посылку за границу', 'Сможем доставить посылку за границу', 'Очень срочно напишите нам', 'Мы отошлем ее за вас'], ['Вы не занимаетесь такими простыми грузами, как мебельsda', 'Мы занимаемся за вас', 'Хватит сомневаться! Звоните нам'], ['Нужно заполнять кучу документов', 'Выбрать вариант без заполнения', 'Выбрать этот вариант'], ['Я отправляю вместе с коллегами, мы можем запутаться где чье', 'Мы отправим отдельно ваш заказ и не перепутаем', 'Выбрать вариант срочного заказа', 'Выбрать вариант обычного заказа']],
  }),
  mounted() {
    const script = document.createElement('script');
    script.setAttribute('src', './store.js');
    document.body.appendChild(script);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
.v-icon.v-icon {
  font-size: 13px !important;
}
.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  min-height: 58px !important;
}
</style>
