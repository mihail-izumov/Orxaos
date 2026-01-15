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
<strong>ДНК бренда в сайте, вывеске и интерьере. </strong> <br class="mobile-break"> Меняет не просто восприятие, а саму реальность вашего бизнеса. Помогает притянуть нужных людей и воплотить смелые идеи.
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
      <h3 style="color: #C5F946; margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Дьявол в Деталях</h3>
      <p style="margin: 0; line-height: 1.6; color: var(--vp-c-text-1);">Избранные клиенты, проекты и кейсы по годам</p>
    </div>
    <!-- Второстепенная кнопка (изменено) -->
    <a href="/ars/by-the-numbers" class="btn btn-secondary">
      Изучить
    </a>
  </div>

  <div class="project-card">
    <div>
      <h3 style="color: #C5F946; margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Галерея</h3>
      <p style="margin: 0; line-height: 1.6; color: var(--vp-c-text-1);">Видео и графика</p>
    </div>
    <!-- Второстепенная кнопка -->
    <a href="/ars/the-wonderful-stories-we-make" class="btn btn-secondary">
      Смотреть
    </a>
  </div>

</div>

<div align="center">

Вопрос не в том, готовы ли вы к новому логотипу или сайту. А в том, каким вы видите ваш бизнес или проект.

**Опишите видение → Обсудим возможности**

<div class="start-button-container">
  <!-- Основная кнопка -->
  <a href="/start#для-консультации-и-новых-проектов" class="btn btn-primary">Начать →</a>
</div>

</div>

<style>
/* --- Стили для карточек --- */
.project-card {
  background: rgba(52, 123, 108, 0.3);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

/* --- ОБЩИЕ СТИЛИ ДЛЯ ВСЕХ КНОПОК --- */
.btn {
  display: block;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-top: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn:hover {
  transform: translateY(-2px);
  text-decoration: none !important;
}

/* --- СТИЛЬ 1: ОСНОВНАЯ КНОПКА (ЯРКАЯ) --- */
.btn-primary {
  background-color: #C5F946; /* Яркий лаймовый */
  color: #000 !important;
}

.btn-primary:hover {
  background-color: #347b6c; /* Темный при наведении */
  color: white !important;
}

/* --- СТИЛЬ 2: ВТОРОСТЕПЕННАЯ КНОПКА (ТЕМНАЯ) --- */
.btn-secondary {
  background-color: #347b6c; /* Темный */
  color: white !important;
}

.btn-secondary:hover {
  background-color: #C5F946; /* Яркий при наведении */
  color: #000 !important;
}

/* --- Контейнер для отдельной кнопки "Начать" --- */
.start-button-container .btn {
  display: inline-block;
  padding: 12px 24px;
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
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    "
    onmouseover="this.style.transform='scale(1.02)'"
    onmouseout="this.style.transform='scale(1)'"
  />
</div>
