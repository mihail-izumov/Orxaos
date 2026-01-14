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
    iconSrc: '/img/korzh/gifts/signalka-gift.png',
    iconAlt: 'Signalka Gift'
  },
  {
    badge: '₽150.000',
    status: 'Хочу',
    description: 'Кофейни сейчас и целевой масштаб сети',
    iconSrc: '/img/korzh/gifts/heartdrop-gift.png',
    iconAlt: 'Heartdrop Gift'
  },
  {
    badge: '₽250.000',
    status: 'Хочу',
    description: 'Сила эффекта на рынок Самары',
    iconSrc: '/img/korzh/gifts/signalka-gift.png',
    iconAlt: 'Signalka Gift'
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

  return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="signal-radio-icon" style="display:inline-block;vertical-align:middle;margin-right:4px;"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg> ${day}.${month} → ${monthName} ${year}`
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
      <div class="signal-establishment-header">
        <h3 class="signal-cafe-name">{{ establishment.name }}</h3>
        <div class="signal-status-badge" v-html="currentDateBadge"></div>
      </div>

      <div class="stats-grid">
        <div v-for="(card, idx) in cards" :key="idx" class="stat-card">
          <div class="stat-content">
            <!-- ДЕСКТОП: фон-картинка строго по центру карточки -->
            <div class="stat-bg-icon" aria-hidden="true">
              <img :src="card.iconSrc" :alt="card.iconAlt" />
            </div>

            <!-- МОБИЛКА: отдельная инлайн-иконка в первой строке -->
            <div class="stat-header">
              <div class="stat-title">{{ card.badge }}</div>
              <div class="stat-inline-icon" aria-hidden="true">
                <img :src="card.iconSrc" :alt="card.iconAlt" />
              </div>
            </div>

            <div class="stat-main">
              <a
                v-if="card.status === 'Хочу'"
                class="stat-metric-badge want-badge"
                href="/start"
              >
                {{ card.status }}
              </a>

              <div v-else class="stat-metric-badge busy-badge">
                {{ card.status }}
              </div>
            </div>

            <div class="stat-description">{{ card.description }}</div>
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

/* Монохром */
.main-card {
  --bg: #2a2a2a;
  --card: #1f1f1f;
  --text: rgba(255,255,255,0.92);
  --muted: rgba(255,255,255,0.62);
  --muted2: rgba(255,255,255,0.48);

  background: var(--bg);
  border-radius: 24px;
  padding: 48px;
  width: 100%;
  box-sizing: border-box;
  color: var(--text);
}

/* Хедер */
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

.signal-radio-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
}

/* Сетка */
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

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0) 100%);
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
  background: linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.14) 60%, rgba(255,255,255,0) 100%);
}

/* ДЕСКТОП: всё по центру */
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

  /* контролируем вертикальные интервалы, чтобы не "схлопывались" */
  gap: 18px;

  background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%);
  transition: background 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Свечение поверх картинки */
.stat-content::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  pointer-events: none;
  z-index: 3; /* выше картинки */
  background:
    radial-gradient(120% 85% at 22% 0%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 38%, rgba(255,255,255,0) 70%),
    radial-gradient(100% 70% at 55% 0%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 72%);
  mix-blend-mode: screen;
  opacity: 0.95;
}

.stat-card:hover .stat-content {
  background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.09) 0%, transparent 70%);
}

.stat-card:hover .stat-content::after {
  opacity: 1;
  background:
    radial-gradient(120% 85% at 22% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0) 72%),
    radial-gradient(100% 70% at 55% 0%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.00) 72%);
}

/* ФОН-КАРТИНКА: строго в центре карточки + масштаб 1.5 */
.stat-bg-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2; /* под свечением (::after), но над фоном карточки */
  opacity: 0.34;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1.5);
  transform-origin: center center;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.stat-bg-icon img {
  width: 210px;   /* базовый размер, scale(1.5) даст ~315px */
  height: 210px;
  object-fit: contain;
  display: block;
}

.stat-card:hover .stat-bg-icon {
  opacity: 0.50;
  transform: translate(-50%, -58%) scale(1.5);
}

/* Заголовок */
.stat-header {
  width: 100%;
  position: relative;
  z-index: 4; /* выше свечения */
  display: flex;
  justify-content: center;
  align-items: center;
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

/* МОБИЛЬНАЯ инлайн-иконка по умолчанию скрыта на десктопе */
.stat-inline-icon {
  display: none;
}

/* Бейдж-центр */
.stat-main {
  width: 100%;
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Бейджи */
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
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

/* ХОЧУ: shimmer */
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

/* ЗАНЯТО: не подсвечивать при hover */
.busy-badge {}

/* Описание: на десктопе визуально ближе к низу, но без схлопывания */
.stat-description {
  width: 100%;
  position: relative;
  z-index: 4;
  margin-top: 22px; /* фиксируем «воздух» */
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

/* Пульт */
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

/* Мобильная версия: 3 ряда + нормальные расстояния (НЕ схлопываем) */
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
    gap: 14px; /* возвращаем воздух между рядами */
  }

  /* На мобилке фон-картинку выключаем, чтобы не мешала */
  .stat-bg-icon { display: none; }

  /* Ряд 1: цена слева, иконка справа */
  .stat-header {
    justify-content: space-between;
  }

  .stat-title {
    font-size: 12px;
    letter-spacing: 1.6px;
  }

  .stat-inline-icon {
    display: block;
    opacity: 0.85;
    flex: 0 0 auto;
  }

  .stat-inline-icon img {
    width: 46px;
    height: 46px;
    object-fit: contain;
    display: block;
  }

  /* Ряд 2: бейдж */
  .stat-main {
    justify-content: flex-start;
    margin-top: 4px; /* чуть воздуха после первого ряда */
  }

  /* Ряд 3: описание — увеличенный отступ от бейджа */
  .stat-description {
    text-align: left;
    margin-top: 10px;
  }

  .stat-metric-badge {
    font-size: 1.05rem !important;
    padding: 8px 14px !important;
  }

  .button-container { flex-direction: column; gap: 8px; }
}
</style>
