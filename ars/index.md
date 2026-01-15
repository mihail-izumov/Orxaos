---
outline: false
prev: false
next: false
pageClass: centered-page
title: Ars Orxaos
description: ДНК бренда в сайте, вывеске и интерьере. Меняет не просто восприятие, а саму реальность вашего бизнеса. Помогает притянуть нужных людей и воплотить смелые идеи.
---

<div align="center">

<OrxaosBadge>Ars (лат.) — мастерство + технология</OrxaosBadge>

<h1 class="orxaos-heading">Ars Orxaos</h1>

<p>
<strong>ДНК бренда в сайте, вывеске и интерьере. </strong> Меняет не просто восприятие, а саму реальность вашего бизнеса. <br class="mobile-break"> Помогает притянуть нужных людей и воплотить смелые идеи.
</p>

</div>

<style>

.vp-doc h1.orxaos-heading {
  font-size: 52px !important;
  line-height: 1.1 !important;
  margin: 0 0 20px 0 !important;
  padding-top: 0 !important;
  font-weight: 600 !important;
}

/* ПЛАНШЕТЫ (от 601px до 768px)
Используем min-width, чтобы это правило НЕ касалось телефонов */
@media screen and (min-width: 601px) and (max-width: 768px) {
  .vp-doc h1.orxaos-heading {
    font-size: 42px !important;
    line-height: 1.2 !important;
    margin-bottom: 15px !important;
  }
}

@media screen and (max-width: 600px) {
  .vp-doc h1.orxaos-heading {
    font-size: 38px !important;
    line-height: 1.2 !important;
    margin-bottom: 15px !important;
  }
}
</style>

<style>
/* По умолчанию скрываем тег <br> с классом .mobile-break */
.mobile-break {
  display: none;
}

/* Показываем <br> только на мобильных устройствах (экраны до 767px включительно) */
@media (max-width: 767px) {
  .mobile-break {
    display: inline;
  }
}

/* НОВОЕ: Убираем ограничение ширины VitePress для виджета */
.vp-doc {
  max-width: 100% !important;
}

.vp-doc .content-container,
.vp-doc .container {
  max-width: 100% !important;
}
</style>

<br>

<VideoPlayer 
  hd-src="https://orxaos.sbs/ars/video/ars-orxaos_ignite_1920x1080.mp4"
  sd-src="https://orxaos.sbs/ars/video/ars-orxaos_ignite_1920x1080.mp4"
  poster="/ars/ignite_video_ban.jpg"
  :autoplay="false"
/>

<br>

<div align="center">

# Искусство точных решений

</div>

<br>

<ArsMainAccordion />

<br>

<ArsGalleryImageSlider />

<br>

<div align="center">

# Действовать

</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">

  <div class="project-card">
    <div>
      <h3 class="card-title">Дьявол в Деталях</h3>
      <p class="card-description">Избранные клиенты, проекты и кейсы по годам</p>
    </div>
    <!-- Второстепенная кнопка -->
    <a href="/ars/by-the-numbers" class="btn btn-secondary">
      Изучить
    </a>
  </div>

  <div class="project-card">
    <div>
      <h3 class="card-title">Галерея</h3>
      <p class="card-description">Видео и графика</p>
    </div>
    <!-- Второстепенная кнопка -->
    <a href="/ars/the-wonderful-stories-we-make" class="btn btn-secondary">
      Смотреть
    </a>
  </div>

</div>

<div align="center">

Вопрос не в том, готовы ли вы к новому логотипу или сайту. А в том, каким вы видите ваш бизнес или проект.

**Опишите видение → Обсудим возможности**

<div class="start-button-container">
  <!-- Основная кнопка -->
  <a href="/start#для-консультации-и-новых-проектов" class="btn btn-primary">Начать →</a>
</div>

</div>

<style>
/* --- ЗОЛОТЫЕ КАРТОЧКИ С GLASSMORPHISM --- */
.project-card {
  background: #1a1d24;
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  position: relative;
  
  /* Золотая обводка с градиентом */
  border: 1px solid transparent;
  background-clip: padding-box;
  
  /* Тонкое золотое свечение */
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(196, 163, 115, 0.15);
  
  transition: all 0.3s ease;
}

/* Градиентная обводка через псевдоэлемент */
.project-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(
    135deg, 
    rgba(196, 163, 115, 0.6) 0%,
    rgba(245, 223, 177, 0.8) 50%,
    rgba(196, 163, 115, 0.6) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 30px rgba(0, 0, 0, 0.4),
    0 0 25px rgba(196, 163, 115, 0.3);
}

/* Заголовки карточек */
.card-title {
  color: #f5dfb1 !important;
  margin: 0 0 1rem 0 !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
}

/* Описание карточек */
.card-description {
  margin: 0 !important;
  line-height: 1.6 !important;
  color: rgba(245, 223, 177, 0.8) !important;
}

/* --- ОБЩИЕ СТИЛИ ДЛЯ ВСЕХ КНОПОК --- */
.btn {
  display: block;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  margin-top: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  /* Улучшение для тач-устройств */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.btn:hover {
  transform: translateY(-2px);
  text-decoration: none !important;
}

/* --- СТИЛЬ 1: ОСНОВНАЯ КНОПКА (ЗОЛОТАЯ ЯРКАЯ) --- */
.btn-primary {
  background: linear-gradient(135deg, #c4a373 0%, #f5dfb1 50%, #c4a373 100%);
  color: #1a1d24 !important;
  font-weight: 700;
  box-shadow: 
    0 4px 15px rgba(196, 163, 115, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #f5dfb1 0%, #c4a373 50%, #f5dfb1 100%);
  box-shadow: 
    0 6px 25px rgba(196, 163, 115, 0.5),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.btn-primary:active {
  transform: translateY(-1px);
  box-shadow: 
    0 2px 10px rgba(196, 163, 115, 0.3),
    inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* --- СТИЛЬ 2: ВТОРОСТЕПЕННАЯ КНОПКА (ТЕМНАЯ С ЗОЛОТОЙ ОБВОДКОЙ) --- */
.btn-secondary {
  background: #1a1d24;
  color: #f5dfb1 !important;
  border: 1px solid rgba(196, 163, 115, 0.5);
  box-shadow: 
    0 2px 10px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(245, 223, 177, 0.1);
}

.btn-secondary:hover {
  background: linear-gradient(135deg, rgba(196, 163, 115, 0.15) 0%, rgba(245, 223, 177, 0.1) 100%);
  border-color: rgba(196, 163, 115, 0.8);
  color: #f5dfb1 !important;
  box-shadow: 
    0 4px 20px rgba(196, 163, 115, 0.2),
    0 0 15px rgba(196, 163, 115, 0.15),
    inset 0 1px 2px rgba(245, 223, 177, 0.2);
}

.btn-secondary:active {
  transform: translateY(0);
  box-shadow: 
    0 1px 5px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* --- Контейнер для отдельной кнопки "Начать" --- */
.start-button-container {
  margin-top: 2rem;
}

.start-button-container .btn {
  display: inline-block;
  padding: 14px 32px;
  font-size: 16px;
}

/* Адаптив для мобильных */
@media (max-width: 768px) {
  .project-card {
    padding: 24px;
    min-height: 180px;
  }
  
  .card-title {
    font-size: 1.15rem !important;
  }
  
  .btn {
    padding: 10px 16px;
    font-size: 14px;
  }
  
  .start-button-container .btn {
    padding: 12px 24px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .project-card {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.1rem !important;
    margin-bottom: 0.75rem !important;
  }
  
  .btn {
    margin-top: 1rem;
  }
}
</style>

<br>

<div style="text-align: center; margin: 2rem 0;">
  <img 
    src="/ars/ars-orxaos_main_banner.png" 
    alt="BREW intro"
    style="
      width: 100%;
      max-width: 800px;
      height: auto;
      border-radius: max(12px, min(24px, 3vw));
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(196, 163, 115, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    "
    onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 12px 35px rgba(0, 0, 0, 0.4), 0 0 30px rgba(196, 163, 115, 0.2)'"
    onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(196, 163, 115, 0.1)'"
  />
</div>
