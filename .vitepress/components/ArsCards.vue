<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const establishment = {
  name: 'Слоты на айдентику'
}

const cards = [
  {
    badge: '₽50.000',
    status: 'Занято',
    description: 'Аналитика 29,600+ уникальных отзывов',
    iconSrc: 'orxaos-icon_1.png',
    iconAlt: 'Orxaos icon',
    variant: 'inactive'
  },
  {
    badge: '₽150.000',
    status: 'Хочу',
    description: 'Кофейни сейчас и целевой масштаб сети',
    iconSrc: 'orxaos-icon_1.png',
    iconAlt: 'Orxaos icon',
    variant: 'blue'
  },
  {
    badge: '₽250.000',
    status: 'Хочу',
    description: 'Сила эффекта на рынок Самары',
    iconSrc: 'orxaos-icon_1.png',
    iconAlt: 'Orxaos icon',
    variant: 'purple'
  }
]

const currentDateBadge = computed(() => {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  const monthNames = [
    'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
    'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'
  ]
  const monthName = monthNames[today.getMonth()]

  const arrowSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="date-arrow-icon"
      style="display:inline-block;vertical-align:middle;margin:0 6px;">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  `

  return `<span class="date-text">${day}.${month}</span>${arrowSvg}<span class="date-text">${monthName} ${year}</span>`
})

const showInfoModal = ref(false)
const onKeydown = (e) => {
  if (e.key === 'Escape') showInfoModal.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="reviews-widget-content">
    <div class="main-card">
      <div class="top-header">
        <h3 class="title">{{ establishment.name }}</h3>
        <div class="date-badge" v-html="currentDateBadge"></div>
      </div>

      <div class="stats-grid">
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="stat-card"
          :class="[`card--${card.variant}`]"
        >
          <div class="stat-content">
            <!-- Цена сверху -->
            <div class="stat-price">{{ card.badge }}</div>

            <!-- Иконка внутри карточки -->
            <div class="stat-icon" aria-hidden="true">
              <img :src="card.iconSrc" :alt="card.iconAlt" />
            </div>

            <!-- Бейдж строго по центру X/Y -->
            <div class="stat-center">
              <a
                v-if="card.status === 'Хочу'"
                class="stat-badge want-badge"
                href="/start"
              >
                {{ card.status }}
              </a>

              <div
                v-else
                class="stat-badge busy-badge"
              >
                {{ card.status }}
              </div>
            </div>

            <!-- Описание прижато к низу -->
            <div class="stat-desc">{{ card.description }}</div>
          </div>
        </div>
      </div>

      <div class="control-panel">
        <div class="button-container">
          <a href="/invest/sim" class="action-button ticket-button" target="_blank" rel="noopener noreferrer">
            Поделиться
          </a>

          <a href="/invest/smr" class="action-button review-button" target="_blank" rel="noopener noreferrer">
            Заявка на проект
            <svg class="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showInfoModal" class="modal-overlay" @click.self="showInfoModal = false">
      <div class="modal" role="dialog" aria-modal="true" id="index-dialog" aria-label="Что такое Индекс Роста">
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
.reviews-widget-content {
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

/* Контейнер */
.main-card {
  background: #2a2a2a;
  border-radius: 24px;
  padding: 48px;
  width: 100%;
  box-sizing: border-box;
  color: rgba(255,255,255,0.92);
}

/* Верхний хедер */
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.title {
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Бейдж даты (компактнее) */
.date-badge {
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 10px 16px;
  border-radius: 999px;

  background: linear-gradient(135deg, rgba(255,255,255,0.10), rgba(0,0,0,0.12));
  border: 1px solid rgba(255,255,255,0.14);
  color: rgba(255,255,255,0.78);

  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  box-shadow: inset 0 1px 2px rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.35);
  white-space: nowrap;
}

.date-text {
  display: inline-block;
  vertical-align: middle;
}

/* Сетка карточек */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

/* Карточка */
.stat-card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  background: #1f1f1f;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.stat-card:hover {
  transform: translateY(-6px);
}

/* Контент карточки */
.stat-content {
  position: relative;
  border-radius: 22px;
  min-height: 320px; /* чтобы был чёткий центр по вертикали */
  padding: 26px 26px;
}

/* Рамка-градиент */
.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 1px;
  background: var(--card-border, linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06), rgba(255,255,255,0)));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: 1;
  pointer-events: none;
  transition: filter 0.5s ease, background 0.5s ease;
}

/* Свечение сверху, поверх иконки */
.stat-content::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 22px;
  pointer-events: none;
  z-index: 4; /* поверх иконки */
  background:
    radial-gradient(130% 85% at 20% 0%, var(--top-glow-1, rgba(255,255,255,0.16)) 0%, var(--top-glow-2, rgba(255,255,255,0.07)) 40%, rgba(255,255,255,0) 72%),
    radial-gradient(100% 75% at 55% 0%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 75%);
  mix-blend-mode: screen;
  opacity: 0.95;
  transition: opacity 0.5s ease;
}

.stat-card:hover .stat-content::after {
  opacity: 1;
}

/* Цена сверху */
.stat-price {
  position: relative;
  z-index: 5;
  color: rgba(255,255,255,0.78);
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

/* Иконка: десктоп — строго по центру, крупно */
.stat-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  opacity: 0.32;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1.55);
  transform-origin: center;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.stat-icon img {
  width: 220px;
  height: 220px;
  object-fit: contain;
  display: block;
}

.stat-card:hover .stat-icon {
  opacity: 0.48;
  transform: translate(-50%, -58%) scale(1.55);
}

/* Центр X/Y для бейджа */
.stat-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  pointer-events: none; /* чтобы не блокировать клик по ссылке вокруг */
}

.stat-badge {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 12px 26px;
  border-radius: 16px;

  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.22);

  color: rgba(255,255,255,0.96);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  text-decoration: none;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

/* Хочу: shimmer */
.want-badge {
  position: relative;
  overflow: hidden;
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
  background: rgba(255,255,255,0.10);
  border-color: rgba(255,255,255,0.32);
  transform: translateY(-1px);
}

/* Занято: не подсвечивать на hover — никаких правил для .busy-badge при hover */
.busy-badge {}

/* Описание прижато к низу */
.stat-desc {
  position: absolute;
  left: 26px;
  right: 26px;
  bottom: 22px;
  z-index: 5;

  color: rgba(255,255,255,0.48);
  font-size: 16px;
  line-height: 1.35;
}

/* Варианты карточек (1 — серая, 2/3 — apple-like) */
.card--inactive {
  --card-border: linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08), rgba(255,255,255,0));
  --top-glow-1: rgba(255,255,255,0.16);
  --top-glow-2: rgba(255,255,255,0.07);
}

.card--blue {
  background: #141518;
  --card-border: linear-gradient(135deg, rgba(110, 210, 255, 0.55), rgba(40, 120, 255, 0.28), rgba(255,255,255,0));
  --top-glow-1: rgba(90, 190, 255, 0.22);
  --top-glow-2: rgba(40, 120, 255, 0.10);
}

.card--purple {
  background: #141518;
  --card-border: linear-gradient(135deg, rgba(200, 120, 255, 0.55), rgba(120, 70, 255, 0.28), rgba(255,255,255,0));
  --top-glow-1: rgba(190, 110, 255, 0.22);
  --top-glow-2: rgba(140, 90, 255, 0.10);
}

/* Пульт кнопок */
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
  border: none;
  box-shadow: none;
}

.review-button:hover {
  background: #ffffff;
  color: #000000;
  transform: translateY(-2px);
}

.button-icon { transition: transform 0.3s ease; }
.review-button:hover .button-icon { transform: translateX(4px); }

/* Модалка */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
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

/* Мобильная: иконка с тем же эффектом, но крупно справа */
@media (max-width: 768px) {
  .main-card { padding: 20px; border-radius: 20px; }

  .top-header {
    align-items: flex-start;
    gap: 12px;
  }

  .title {
    font-size: 28px;
    line-height: 1.05;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-content {
    min-height: 220px;
    padding: 20px 18px;
  }

  .stat-desc {
    left: 18px;
    right: 18px;
    bottom: 18px;
    font-size: 15px;
  }

  /* Иконка уходит вправо и остаётся крупной (не мешает левым элементам) */
  .stat-icon {
    left: auto;
    right: 10px;
    top: 52%;
    transform: translate(0, -50%) scale(1.55);
    transform-origin: right center;
    opacity: 0.30;
  }

  .stat-card:hover .stat-icon {
    transform: translate(0, -58%) scale(1.55);
    opacity: 0.44;
  }

  .button-container {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
