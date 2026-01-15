---
outline: false
prev: false
next: false
pageClass: centered-page
title: Ars Orxaos
description: ДНК бренда в сайте, вывеске и интерьере. Меняет не просто восприятие, а саму реальность вашего бизнеса.
---

<div align="center">
  <OrxaosBadge>Ars (лат.) — мастерство + технология</OrxaosBadge>
  <h1 class="orxaos-heading">Ars Orxaos</h1>
  <p>
    <strong>ДНК бренда в сайте, вывеске и интерьере.</strong><br class="mobile-break">
    Меняет не просто восприятие, а саму реальность вашего бизнеса.<br class="mobile-break">
    Помогает притянуть нужных людей и воплотить смелые идеи.
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
@media screen and (min-width: 601px) and (max-width: 768px) {
  .vp-doc h1.orxaos-heading { font-size: 42px !important; margin-bottom: 15px !important; }
}
@media screen and (max-width: 600px) {
  .vp-doc h1.orxaos-heading { font-size: 38px !important; margin-bottom: 15px !important; }
}
.mobile-break { display: none; }
@media (max-width: 767px) { .mobile-break { display: inline; } }
.vp-doc { max-width: 100% !important; }
.vp-doc .content-container, .vp-doc .container { max-width: 100% !important; }
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

<br>

<ArsCards />

<br><br>

<div class="actions-grid">
  <div class="project-card project-card-1">
    <div>
      <h3 class="card-title">Дьявол в Деталях</h3>
      <p class="card-description">Избранные клиенты, проекты и кейсы по годам</p>
    </div>
    <a href="/ars/by-the-numbers" class="btn btn-secondary">Изучить</a>
  </div>

  <div class="project-card project-card-2">
    <div>
      <h3 class="card-title">Галерея</h3>
      <p class="card-description">Видео и графика</p>
    </div>
    <a href="/ars/the-wonderful-stories-we-make" class="btn btn-secondary">Смотреть</a>
  </div>
</div>

<div align="center">
  <p>
    Вопрос не в том, готовы ли вы к новому логотипу или сайту.<br>
    А в том, <strong>каким вы видите</strong> ваш бизнес или проект.
  </p>
  <p><strong>Опишите видение → Обсудим возможности</strong></p>

  <div class="start-button-container">
    <a href="/start#для-консультации-и-новых-проектов" class="btn btn-primary">
      Начать
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
    </a>
  </div>
</div>

<style>
/* ────────────────────────────────────────────── */
/*                Orxaos Premium Style            */
/* ────────────────────────────────────────────── */

.actions-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  gap: 1.5rem !important;
  margin: 2.5rem 0 !important;
}

:root {
  --orx-bg: rgba(20, 22, 28, 0.72);
  --orx-bg-solid: #14161c;
  --orx-gold-1: rgba(196, 163, 115, 0.55);
  --orx-gold-2: rgba(245, 223, 177, 0.70);
  --orx-text: rgba(245, 223, 177, 0.92);
  --orx-text-muted: rgba(245, 223, 177, 0.72);
}

/* Карточки */
.project-card {
  background: var(--orx-bg) !important;
  backdrop-filter: blur(10px) saturate(120%) !important;
  border-radius: 16px !important;
  padding: 28px !important;
  min-height: 200px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  border: 1px solid rgba(196, 163, 115, 0.35) !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.38), 0 0 18px rgba(196,163,115,0.10) !important;
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1) !important;
  position: relative !important;
  overflow: hidden !important;
}

.project-card:hover {
  transform: translateY(-6px) !important;
  border-color: rgba(245, 223, 177, 0.45) !important;
  box-shadow: 0 20px 50px rgba(0,0,0,0.48), 0 0 35px rgba(196,163,115,0.22) !important;
}

/* Кнопки */
.vp-doc a.btn,
.vp-doc a.btn * { all: unset !important; }

.vp-doc a.btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  padding: 14px 28px !important;
  border-radius: 12px !important;
  font-weight: 680 !important;
  font-size: 15.5px !important;
  cursor: pointer !important;
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) !important;
  position: relative !important;
  overflow: hidden !important;
}

.vp-doc a.btn svg {
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) !important;
  flex-shrink: 0 !important;
}

.vp-doc a.btn:hover svg {
  transform: translateX(6px) !important;
}

.vp-doc a.btn::before {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent) !important;
  transform: translateX(-100%) !important;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) !important;
}

.vp-doc a.btn:hover::before {
  transform: translateX(100%) !important;
}

/* Primary кнопка "Начать" */
.vp-doc a.btn-primary {
  color: #14161c !important;
  background: linear-gradient(135deg, #c4a373 0%, #f5dfb1 48%, #c4a373 100%) !important;
  box-shadow: 
    inset 0 1px 2px rgba(255,255,255,0.35),
    inset 0 0 0 1px rgba(245,223,177,0.4),
    0 14px 32px rgba(0,0,0,0.38),
    0 0 24px rgba(196,163,115,0.22) !important;
}

.vp-doc a.btn-primary:hover {
  background: linear-gradient(135deg, #f5dfb1 0%, #e8d4a0 48%, #f5dfb1 100%) !important;
  box-shadow: 
    inset 0 2px 4px rgba(255,255,255,0.4),
    inset 0 0 0 1px rgba(245,223,177,0.55),
    0 22px 48px rgba(0,0,0,0.48),
    0 0 50px rgba(196,163,115,0.38) !important;
  transform: translateY(-3px) scale(1.015) !important;
}

/* Контейнер кнопки Начать — полноэкранный на мобильных */
.start-button-container {
  margin: 2.8rem 0 3.2rem !important;
  min-height: 80px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

@media (max-width: 768px) {
  .start-button-container {
    margin-left: calc(-50vw + 50%) !important;
    margin-right: calc(-50vw + 50%) !important;
    width: 100vw !important;
    padding: 0 24px !important;
    box-sizing: border-box !important;
  }

  .start-button-container .btn {
    width: 100% !important;
    max-width: 480px !important;
    padding: 18px 32px !important;
    font-size: 17px !important;
  }
}

@media (max-width: 480px) {
  .start-button-container {
    padding: 0 16px !important;
  }
  .start-button-container .btn {
    padding: 16px 24px !important;
    font-size: 16px !important;
  }
}
</style>

<br>

<div style="text-align: center; margin: 3rem 0;">
  <img
    src="/ars/ars-orxaos_main_banner.png"
    alt="ARS Orxaos"
    style="
      width: 100%;
      max-width: 820px;
      height: auto;
      border-radius: 16px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(196,163,115,0.15);
      transition: all 0.4s ease;
    "
    onmouseover="this.style.transform='scale(1.015)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.5), 0 0 50px rgba(196,163,115,0.28)'"
    onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(196,163,115,0.15)'"
  />
</div>
