<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const establishment = {
  name: 'Свой Знак'
}

const cards = [
  {
    badge: '₽50.000',
    status: 'Февраль',
    description: 'Логотип. Одно решение.',
    iconSrc: '/orxaos-icon_1.png',
    iconAlt: 'Orxaos Icon',
    colorScheme: 'gray',
    isActive: false // НЕ активна - не открывает Telegram
  },
  {
    badge: '₽150.000',
    status: 'Февраль',
    description: 'Логотип, айдентика, соцсети/упаковка.',
    iconSrc: '/orxaos-icon_1.png',
    iconAlt: 'Orxaos Icon',
    colorScheme: 'blue',
    isActive: false // НЕ активна - не открывает Telegram
  },
  {
    badge: '₽250.000',
    status: 'Февраль',
    description: 'Всё + презентация и лендинг.',
    iconSrc: '/orxaos-icon_1.png',
    iconAlt: 'Orxaos Icon',
    colorScheme: 'purple',
    isActive: false // НЕ активна - не открывает Telegram
  }
]

// Реактивное текущее время
const currentTime = ref(new Date())

// Обновление времени каждую минуту
let timeInterval = null

const currentDateBadge = computed(() => {
  const today = currentTime.value
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  const monthNames = [
    'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
    'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'
  ]
  const monthName = monthNames[today.getMonth()]

  return `${day}.${month} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon" style="display:inline-block;vertical-align:middle;margin:0 4px;"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> ${monthName} ${year}`
})

// Вычисляемое значение для текущего месяца (для случаев когда места есть)
const currentMonthName = computed(() => {
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]
  return monthNames[currentTime.value.getMonth()]
})

// Вычисляемое значение следующего месяца + года (для случаев когда мест нет)
const nextMonthString = computed(() => {
  const nextDate = new Date(currentTime.value)
  // Переключаем на следующий месяц (JS сам обработает переход года, например Декабрь -> Январь)
  nextDate.setMonth(nextDate.getMonth() + 1)
  
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]
  
  const month = monthNames[nextDate.getMonth()]
  const year = nextDate.getFullYear()
  
  return `${month} ${year}`
})

// Подсчёт активных карточек (isActive: true)
const activeCardsCount = computed(() => {
  return cards.filter(card => card.isActive).length
})

// Склонение слова "место"
const placesWord = computed(() => {
  const count = activeCardsCount.value
  if (count === 1) return 'место'
  if (count >= 2 && count <= 4) return 'места'
  return 'мест'
})

const showInfoModal = ref(false)
const showShareModal = ref(false)
const showCopyToast = ref(false)
const showCopyTooltip = ref(false)
const showTelegramTooltip = ref(false)

// Открыть Telegram с нужным текстом
const openTelegramChat = (price) => {
  const text = `Хочу Свой Знак за ${price}`
  const url = `https://t.me/mikhail_izumov?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

// Модалка Share
const openShareModal = () => {
  showShareModal.value = true
}

const closeShareModal = () => {
  showShareModal.value = false
  showCopyTooltip.value = false
  showTelegramTooltip.value = false
}

watch(showShareModal, (isOpen) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    closeShareModal()
    showCopyToast.value = true
    setTimeout(() => (showCopyToast.value = false), 3000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

const shareTelegram = () => {
  let datePartText = ''
  
  if (activeCardsCount.value === 0) {
    // Если 0 мест -> "Февраль 2026"
    datePartText = nextMonthString.value
  } else {
    // Если есть места -> "Январь. 2 места"
    datePartText = `${currentMonthName.value}. ${activeCardsCount.value} ${placesWord.value}`
  }

  const text = `${datePartText}. Логотип + айдентика. Ars Orxaos`
  
  const url = window.location.href
  window.open(
    `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    '_blank'
  )
}

const onKeydown = (e) => {
  if (e.key === 'Escape') {
    if (showShareModal.value) closeShareModal()
    if (showInfoModal.value) showInfoModal.value = false
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', onKeydown)
    // Обновляем дату каждую минуту
    timeInterval = setInterval(() => {
      currentTime.value = new Date()
    }, 60000) // 60000ms = 1 минута
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onKeydown)
    if (timeInterval) clearInterval(timeInterval)
  }
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <div class="reviews-widget-content">
    <div class="main-card">
      <div class="signal-establishment-header">
        <h3 class="signal-cafe-name">{{ establishment.name }}</h3>
        <div class="signal-status-badge" v-html="currentDateBadge"></div>
      </div>

      <div class="stats-grid">
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="stat-card"
          :class="`color-${card.colorScheme}`"
        >
          <div class="stat-content">
            <!-- ДЕСКТОП: фон-картинка строго по центру -->
            <div class="stat-bg-icon" aria-hidden="true">
              <img :src="card.iconSrc" :alt="card.iconAlt" />
            </div>

            <!-- Заголовок -->
            <div class="stat-header">
              <div class="stat-title">{{ card.badge }}</div>
            </div>

            <!-- Бейдж -->
            <div class="stat-main">
              <!-- ИЗМЕНЕНО: теперь проверяем card.isActive -->
              <button
                v-if="card.isActive"
                class="stat-metric-badge want-badge"
                @click="openTelegramChat(card.badge)"
              >
                {{ card.status }}
              </button>

              <div v-else class="stat-metric-badge busy-badge">
                {{ card.status }}
              </div>
            </div>

            <!-- Описание -->
            <div class="stat-description">{{ card.description }}</div>

            <!-- МОБИЛКА: иконка справа с отступом -->
            <div class="stat-mobile-icon" aria-hidden="true">
              <img :src="card.iconSrc" :alt="card.iconAlt" />
            </div>
          </div>
        </div>
      </div>

      <div class="control-panel">
        <div class="button-container">
          <button class="action-button ticket-button" @click="openShareModal">
            Поделиться
            <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
            </svg>
          </button>

          <a href="/start#для-консультации-и-новых-проектов" class="action-button review-button" target="_blank" rel="noopener noreferrer">
            Заявка на проект
            <svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- МОДАЛКА Share -->
    <div v-if="showShareModal" class="modal-overlay blur-bg" @click.self="closeShareModal">
      <div class="modal-card white-theme">
        <button class="modal-close-icon" @click="closeShareModal" aria-label="Закрыть">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>

        <h3>Поделитесь</h3>
        <p>Поделитесь с теми, чей бизнес вырос, а бренд — нет</p>

        <div class="share-buttons">
          <div
            class="share-btn-circle"
            @click="copyLink"
            @mouseenter="showCopyTooltip = true"
            @mouseleave="showCopyTooltip = false"
            role="button"
            tabindex="0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            <div v-if="showCopyTooltip" class="tooltip">Скопировать ссылку</div>
          </div>

          <div
            class="share-btn-circle telegram"
            @click="shareTelegram"
            @mouseenter="showTelegramTooltip = true"
            @mouseleave="showTelegramTooltip = false"
            role="button"
            tabindex="0"
            style="background: #f0f0f0;"
          >
            <div class="niftybutton-telegram-black-white" style="display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:50%;color:#000;transition:.3s;opacity:1;padding:18px;pointer-events:none;">
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" style="display:block;fill:#000;width:100%;height:100%;" role="img" aria-label="telegram">
                <path d="M 200.894531 323.863281 L 192.425781 442.988281 C 204.542969 442.988281 209.792969 437.78125 216.085938 431.53125 L 272.894531 377.238281 L 390.613281 463.445312 C 412.203125 475.476562 427.414062 469.140625 433.238281 443.585938 L 510.507812 81.515625 L 510.527344 81.492188 C 517.375 49.578125 498.988281 37.097656 477.953125 44.929688 L 23.765625 218.816406 C -7.230469 230.847656 -6.761719 248.128906 18.496094 255.957031 L 134.613281 292.074219 L 404.332031 123.308594 C 417.023438 114.902344 428.566406 119.550781 419.070312 127.957031 Z M 200.894531 323.863281 " />
              </svg>
            </div>
            <div v-if="showTelegramTooltip" class="tooltip">Отправить в Telegram</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ТОСТ -->
    <Transition name="fade">
      <div v-if="showCopyToast" class="toast-notification">
        <div class="check-circle">✓</div>
        <div>
          <strong>Скопировано в буфер</strong><br />
          Поделитесь ссылкой с друзьями.
        </div>
      </div>
    </Transition>

    <!-- Modal Info -->
    <div v-if="showInfoModal" class="modal-overlay" @click.self="showInfoModal = false">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div class="modal-title">Что такое Индекс Роста</div>
        </div>
        <div class="modal-body">Интегральный score по десяткам показателей.</div>
        <div class="modal-footer">
          <button class="modal-ok" type="button" @click="showInfoModal = false">Понятно</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Весь CSS остается таким же, как в предыдущем коде */
.reviews-widget-content {
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

.main-card {
  --bg: #2a2a2a;
  --card: #1f1f1f;
  --text: rgba(255,255,255,0.92);

  background: var(--bg);
  border-radius: 24px;
  padding: 48px;
  width: 100%;
  box-sizing: border-box;
  color: var(--text);
}

.signal-establishment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.signal-cafe-name {
  margin: 0;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
}

.signal-status-badge {
  background: linear-gradient(135deg, rgba(255,255,255,0.10), rgba(0,0,0,0.15));
  color: rgba(255,255,255,0.78);
  border: 1px solid rgba(255,255,255,0.16);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: inset 0 1px 2px rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.35);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
}

.arrow-icon {
  display: inline-block;
  vertical-align: middle;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

.stat-card {
  position: relative;
  background: var(--card);
  border-radius: 22px;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
}

.stat-card.color-gray {
  --card-bg: #1f1f1f;
  --border-1: rgba(255,255,255,0.22);
  --border-2: rgba(255,255,255,0.08);
  --border-hover-1: rgba(255,255,255,0.35);
  --border-hover-2: rgba(255,255,255,0.14);
  --glow-base: rgba(255,255,255,0.06);
  --glow-hover: rgba(255,255,255,0.09);
  --glow-top-1: rgba(255,255,255,0.16);
  --glow-top-2: rgba(255,255,255,0.07);
  --glow-top-hover-1: rgba(255,255,255,0.22);
  --glow-top-hover-2: rgba(255,255,255,0.10);
}

.stat-card.color-blue {
  --card-bg: #1f1f1f;
  --border-1: rgba(100,200,255,0.35);
  --border-2: rgba(50,150,220,0.15);
  --border-hover-1: rgba(100,200,255,0.55);
  --border-hover-2: rgba(50,150,220,0.25);
  --glow-base: rgba(70,180,240,0.08);
  --glow-hover: rgba(70,180,240,0.14);
  --glow-top-1: rgba(100,200,255,0.20);
  --glow-top-2: rgba(50,150,220,0.10);
  --glow-top-hover-1: rgba(100,200,255,0.32);
  --glow-top-hover-2: rgba(50,150,220,0.16);
}

.stat-card.color-purple {
  --card-bg: #1f1f1f;
  --border-1: rgba(200,140,255,0.35);
  --border-2: rgba(150,80,220,0.15);
  --border-hover-1: rgba(200,140,255,0.55);
  --border-hover-2: rgba(150,80,220,0.25);
  --glow-base: rgba(180,110,240,0.08);
  --glow-hover: rgba(180,110,240,0.14);
  --glow-top-1: rgba(200,140,255,0.20);
  --glow-top-2: rgba(150,80,220,0.10);
  --glow-top-hover-1: rgba(200,140,255,0.32);
  --glow-top-hover-2: rgba(150,80,220,0.16);
}

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 1px;
  background: linear-gradient(135deg, var(--border-1) 0%, var(--border-2) 60%, rgba(255,255,255,0) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: all 0.4s ease;
  z-index: 1;
  pointer-events: none;
}

.stat-card:hover {
  transform: translateY(-6px);
}

.stat-card:hover::before {
  background: linear-gradient(135deg, var(--border-hover-1) 0%, var(--border-hover-2) 60%, rgba(255,255,255,0) 100%);
}

.stat-content {
  position: relative;
  z-index: 2;
  border-radius: 20px;
  padding: 24px 20px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: radial-gradient(circle at 50% 0%, var(--glow-base) 0%, transparent 70%);
  transition: background 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.stat-content::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  pointer-events: none;
  z-index: 3;
  background:
    radial-gradient(120% 85% at 22% 0%, var(--glow-top-1) 0%, var(--glow-top-2) 38%, rgba(255,255,255,0) 70%),
    radial-gradient(100% 70% at 55% 0%, var(--glow-top-2) 0%, rgba(255,255,255,0) 72%);
  mix-blend-mode: screen;
  opacity: 0.95;
}

.stat-card:hover .stat-content {
  background: radial-gradient(circle at 50% 0%, var(--glow-hover) 0%, transparent 70%);
}

.stat-card:hover .stat-content::after {
  opacity: 1;
  background:
    radial-gradient(120% 85% at 22% 0%, var(--glow-top-hover-1) 0%, var(--glow-top-hover-2) 40%, rgba(255,255,255,0) 72%),
    radial-gradient(100% 70% at 55% 0%, var(--glow-top-hover-2) 0%, rgba(255,255,255,0) 72%);
}

.stat-bg-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  opacity: 0.34;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1.5);
  transform-origin: center center;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.stat-bg-icon img {
  width: 210px;
  height: 210px;
  object-fit: contain;
  display: block;
}

.stat-card:hover .stat-bg-icon {
  opacity: 0.50;
  transform: translate(-50%, -58%) scale(1.5);
}

.stat-mobile-icon {
  display: none;
}

.stat-header {
  width: 100%;
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.stat-title {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255,255,255,0.78);
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.4s ease;
}

.stat-card:hover .stat-title {
  color: rgba(255,255,255,0.92);
}

.stat-main {
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-metric-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 12px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.95);
  font-weight: 700;
  letter-spacing: 0.06em;
  font-size: clamp(14px, 2.5vw, 18px);
  white-space: nowrap;
  text-transform: uppercase;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.want-badge {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.want-badge::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    transparent 22%,
    rgba(255,255,255,0.18) 42%,
    rgba(255,255,255,0.30) 50%,
    rgba(255,255,255,0.18) 58%,
    transparent 78%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer-wave 6s ease-in-out infinite;
}

@keyframes shimmer-wave {
  0%, 100% { background-position: -100% 0; }
  50% { background-position: 200% 0; }
}

.stat-card:hover .want-badge {
  border-color: rgba(255,255,255,0.28);
  background: rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.98);
  transform: translateY(-1px);
}

.want-badge:focus-visible {
  outline: 2px solid rgba(255,255,255,0.35);
  outline-offset: 2px;
}

.busy-badge {
  cursor: default;
}

.stat-description {
  width: 100%;
  position: relative;
  z-index: 4;
  margin-top: 0;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255,255,255,0.48);
  line-height: 1.4;
  text-align: center;
  transition: color 0.4s ease;
}

.stat-card:hover .stat-description {
  color: rgba(255,255,255,0.68);
}

.control-panel { margin-top: 24px; }

.button-container {
  display: flex;
  gap: 10px;
  background-color: #1f1f1f;
  border-radius: 20px;
  padding: 8px;
}

.action-button {
  flex: 1;
  padding: 14px 20px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  border: none;
}

.ticket-button {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.ticket-button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-color: transparent;
}

.review-button {
  background: #e0e0e0;
  color: #1a1a1a;
}
.review-button:hover {
  background: #ffffff;
  color: #000000;
  transform: translateY(-2px);
}

.button-icon { transition: transform 0.3s ease; }
.review-button:hover .button-icon { transform: translateX(4px); }
.ticket-button:hover .button-icon { transform: scale(1.1); }

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-overlay.blur-bg {
  backdrop-filter: blur(10px);
  background: rgba(0,0,0,0.6);
}

.modal-card {
  background: #fff;
  color: #000;
  padding: 40px;
  border-radius: 24px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
}

.modal-close-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: opacity 0.2s;
  opacity: 0.6;
  color: #000;
}

.modal-close-icon:hover {
  opacity: 1;
}

.modal-card h3 {
  margin-top: 12px;
  font-size: 24px;
  margin-bottom: 16px;
}

.modal-card p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
  opacity: 0.8;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.share-btn-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  color: #000;
}

.share-btn-circle:hover {
  transform: scale(1.1);
  background: #e0e0e0;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  margin-bottom: 10px;
}

.toast-notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 16px 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  z-index: 2000;
  width: max-content;
  max-width: 90vw;
  text-align: left;
}

.check-circle {
  width: 24px;
  height: 24px;
  background: #fff;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal {
  background: #1f1f1f;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  width: min(520px, 90vw);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  padding: 24px;
}
.modal-header { display: flex; align-items: center; margin-bottom: 12px; }
.modal-title { font-weight: 700; font-size: 18px; }
.modal-body { font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.5; }
.modal-footer { margin-top: 20px; display: flex; justify-content: flex-end; }

.modal-ok {
  background: #333;
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
.modal-ok:hover { background: #444; }

@media (max-width: 768px) {
  .main-card { padding: 20px; border-radius: 20px; }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-card,
  .stat-card::before { border-radius: 16px; }

  .stat-card:hover { transform: none; }

  .stat-content {
    padding: 18px 16px;
    min-height: auto;
    align-items: stretch;
    text-align: left;
    gap: 0;
  }

  .stat-bg-icon { display: none; }

  .stat-mobile-icon {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%) scale(1.3);
    z-index: 2;
    opacity: 0.38;
    pointer-events: none;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .stat-mobile-icon img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    display: block;
  }

  .stat-card:hover .stat-mobile-icon {
    opacity: 0.55;
    transform: translateY(-52%) scale(1.3);
  }

  .stat-header {
    justify-content: flex-start;
    margin-bottom: 10px;
  }

  .stat-title {
    font-size: 12px;
    letter-spacing: 1.6px;
  }

  .stat-main {
    flex: none;
    justify-content: flex-start;
    margin-bottom: 10px;
  }

  .stat-metric-badge {
    font-size: 1.05rem !important;
    padding: 8px 14px !important;
  }

  .stat-description {
    text-align: left;
    margin-top: 0;
  }

  .button-container { flex-direction: column; gap: 8px; }
}
</style>
