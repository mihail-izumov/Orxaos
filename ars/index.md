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
.mobile-break { display: none; }
@media (max-width: 767px) {
  .mobile-break { display: inline; }
}
.vp-doc { max-width: 100% !important; }
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
<br>
<ArsCards />
<br>
<div class="actions-grid">
  <div class="project-card project-card-1">
    <div>
      <h3 class="card-title">Дьявол в Деталях</h3>
      <p class="card-description">Избранные клиенты, проекты и кейсы по годам</p>
    </div>
    <a href="/ars/by-the-numbers" class="btn btn-secondary">
      Изучить
    </a>
  </div>
  <div class="project-card project-card-2">
    <div>
      <h3 class="card-title">Галерея</h3>
      <p class="card-description">Видео и графика</p>
    </div>
    <a href="/ars/the-wonderful-stories-we-make" class="btn btn-secondary">
      Смотреть
    </a>
  </div>
</div>
<div align="center">
Вопрос не в том, готовы ли вы к новому логотипу или сайту. А в том, каким вы видите ваш бизнес или проект.
**Опишите видение → Обсудим возможности**
<div class="start-button-container">
  <a href="/start#для-консультации-и-новых-проектов" class="btn btn-primary">
    Начать 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  </a>
</div>
</div>
<style>
/* Сетка блока "Действовать" */
.actions-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  gap: 1.5rem !important;
  margin: 2rem 0 !important;
}
/* ===== Orxaos palette (тихий premium) ===== */
:root {
  --orx-bg: rgba(20, 22, 28, 0.72);
  --orx-bg-solid: #14161c;
  --orx-gold-1: rgba(196, 163, 115, 0.55);
  --orx-gold-2: rgba(245, 223, 177, 0.70);
  --orx-text: rgba(245, 223, 177, 0.92);
  --orx-text-muted: rgba(245, 223, 177, 0.72);
}
/* --- Карточки --- */
.project-card {
  background: var(--orx-bg) !important;
  backdrop-filter: blur(10px) saturate(120%) !important;
  -webkit-backdrop-filter: blur(10px) saturate(120%) !important;
  border-radius: 16px !important;
  padding: 28px !important;
  min-height: 200px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  position: relative !important;
  border: 1px solid rgba(196, 163, 115, 0.35) !important;
  box-shadow:
    0 10px 30px rgba(0,0,0,0.38),
    0 0 18px rgba(196, 163, 115, 0.10) !important;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.project-card-1::after {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  border-radius: 16px !important;
  background: radial-gradient(
    ellipse 600px 400px at 15% 80%,
    rgba(196, 163, 115, 0.18) 0%,
    rgba(245, 223, 177, 0.08) 35%,
    transparent 70%
  ) !important;
  pointer-events: none !important;
  z-index: 0 !important;
}
.project-card-2::after {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  border-radius: 16px !important;
  background: radial-gradient(
    ellipse 500px 450px at 85% 75%,
    rgba(245, 223, 177, 0.16) 0%,
    rgba(196, 163, 115, 0.10) 40%,
    transparent 70%
  ) !important;
  pointer-events: none !important;
  z-index: 0 !important;
}
.project-card:hover {
  transform: translateY(-4px) !important;
  border-color: rgba(245, 223, 177, 0.45) !important;
  box-shadow:
    0 16px 40px rgba(0,0,0,0.45),
    0 0 30px rgba(196, 163, 115, 0.18) !important;
}
.project-card > div,
.project-card > a {
  position: relative !important;
  z-index: 2 !important;
}
.card-title {
  color: var(--orx-text) !important;
  margin: 0 0 1rem 0 !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.2px !important;
}
.card-description {
  margin: 0 !important;
  line-height: 1.6 !important;
  color: var(--orx-text-muted) !important;
}
/* ===== Сброс VitePress для ссылок-кнопок ===== */
.vp-doc a.btn,
.vp-doc a.btn * {
  all: unset !important;
}
/* База кнопок */
.vp-doc a.btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
  padding: 12px 20px !important;
  border-radius: 10px !important;
  font-family: inherit !important;
  font-weight: 650 !important;
  font-size: 15px !important;
  line-height: 1.4 !important;
  text-align: center !important;
  margin-top: 1.5rem !important;
  cursor: pointer !important;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent !important;
  touch-action: manipulation !important;
  position: relative !important;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.vp-doc a.btn:hover { transform: translateY(-2px) !important; }
.vp-doc a.btn:active { transform: translateY(0px) !important; }
/* ===== Secondary (кнопки в карточках) ===== */
.vp-doc a.btn-secondary {
  color: var(--orx-text) !important;
  background:
    linear-gradient(
      135deg,
      rgba(245, 223, 177, 0.06) 0%,
      rgba(196, 163, 115, 0.06) 18%,
      rgba(20, 22, 28, 0.92) 55%,
      rgba(245, 223, 177, 0.04) 100%
    ),
    rgba(20, 22, 28, 0.68) !important;
  backdrop-filter: blur(10px) saturate(120%) !important;
  -webkit-backdrop-filter: blur(10px) saturate(120%) !important;
  box-shadow:
    inset 0 1px 0 rgba(245, 223, 177, 0.06),
    inset 0 0 0 1px rgba(196, 163, 115, 0.35),
    0 10px 22px rgba(0,0,0,0.26) !important;
}
.vp-doc a.btn-secondary:hover {
  background:
    linear-gradient(
      135deg,
      rgba(245, 223, 177, 0.10) 0%,
      rgba(196, 163, 115, 0.10) 18%,
      rgba(20, 22, 28, 0.88) 55%,
      rgba(245, 223, 177, 0.07) 100%
    ),
    rgba(20, 22, 28, 0.70) !important;
  box-shadow:
    inset 0 1px 0 rgba(245, 223, 177, 0.10),
    inset 0 0 0 1px rgba(245, 223, 177, 0.45),
    0 14px 28px rgba(0,0,0,0.32),
    0 0 24px rgba(196, 163, 115, 0.14) !important;
}
.vp-doc a.btn-secondary:active {
  box-shadow:
    inset 0 1px 0 rgba(245, 223, 177, 0.08),
    inset 0 0 0 1px rgba(245, 223, 177, 0.40),
    0 8px 18px rgba(0,0,0,0.28),
    0 0 18px rgba(196, 163, 115, 0.10) !important;
}
/* ===== Primary (Начать) ===== */
.vp-doc a.btn-primary {
  color: #14161c !important;
  background: linear-gradient(135deg,
    rgba(196, 163, 115, 0.95) 0%,
    rgba(245, 223, 177, 0.90) 45%,
    rgba(196, 163, 115, 0.92) 100%
  ) !important;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.20),
    inset 0 0 0 1px rgba(245, 223, 177, 0.30),
    0 12px 26px rgba(0,0,0,0.32),
    0 0 20px rgba(196, 163, 115, 0.14) !important;
  transition:
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.5s ease-out !important;
}
.vp-doc a.btn-primary:hover {
  background: linear-gradient(135deg,
    rgba(245, 223, 177, 0.98) 0%,
    rgba(196, 163, 115, 0.92) 45%,
    rgba(245, 223, 177, 0.95) 100%
  ) !important;
  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.30),
    inset 0 0 0 1px rgba(245, 223, 177, 0.45),
    0 18px 40px rgba(0,0,0,0.42),
    0 0 45px rgba(196, 163, 115, 0.35) !important;
}
.vp-doc a.btn-primary:active {
  background: linear-gradient(135deg,
    rgba(196, 163, 115, 0.90) 0%,
    rgba(245, 223, 177, 0.85) 45%,
    rgba(196, 163, 115, 0.88) 100%
  ) !important;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    inset 0 0 0 1px rgba(245, 223, 177, 0.35),
    0 10px 22px rgba(0,0,0,0.32),
    0 0 18px rgba(196, 163, 115, 0.14) !important;
}
/* Контейнер "Начать" фиксированной высоты */
.start-button-container {
  margin-top: 2.5rem !important;
  min-height: 80px !important;
  height: 80px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.start-button-container .btn {
  padding: 16px 48px !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  border-radius: 12px !important;
}
/* Мобилка */
@media (max-width: 768px) {
  .project-card {
    padding: 24px !important;
    min-height: 180px !important;
  }
 
  .card-title {
    font-size: 1.15rem !important;
  }
  .vp-doc a.btn {
    padding: 10px 16px !important;
    font-size: 14px !important;
  }
  /* ИСПРАВЛЕНИЕ: радикально перебиваем все для контейнера */
  .start-button-container {
    margin-left: calc(-50vw + 50%) !important;
    margin-right: calc(-50vw + 50%) !important;
    width: 100vw !important;
    max-width: 100vw !important;
   
    /* Отступы по бокам как у контента */
    padding-left: 24px !important;
    padding-right: 24px !important;
    box-sizing: border-box !important;
   
    min-height: 78px !important;
    height: 78px !important;
   
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .start-button-container .btn {
    flex: 1 1 auto !important;
    width: 100% !important;
    max-width: 100% !important;
   
    padding: 16px 24px !important;
    font-size: 17px !important;
  }
}
@media (max-width: 480px) {
  .project-card {
    padding: 20px !important;
  }
 
  .card-title {
    font-size: 1.1rem !important;
    margin-bottom: 0.75rem !important;
  }
 
  .vp-doc a.btn {
    margin-top: 1rem !important;
  }
  .start-button-container {
    min-height: 72px !important;
    height: 72px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
 
  .start-button-container .btn {
    padding: 14px 20px !important;
    font-size: 16px !important;
  }
}
</style>
<br>
<div style="text-align: center; margin: 2rem 0;">
  <img
    src="/ars/ars-orxaos_main_banner.png"
    alt="ARS Orxaos"
    style="
      width: 100%;
      max-width: 800px;
      height: auto;
      border-radius: max(12px, min(24px, 3vw));
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.30), 0 0 20px rgba(196, 163, 115, 0.10);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    "
    onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 12px 35px rgba(0, 0, 0, 0.40), 0 0 30px rgba(196, 163, 115, 0.18)'"
    onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.30), 0 0 20px rgba(196, 163, 115, 0.10)'"
  />
</div>
