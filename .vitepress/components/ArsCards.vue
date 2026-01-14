<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const establishment = {
  name: 'Корж'
}

// Данные по 3 карточкам (иконки можно заменить на свои при необходимости)
const cards = [
  {
    badge: '₽50.000',
    status: 'Занято',
    description: 'Аналитика 29,600+ уникальных отзывов',
    iconSrc: '/izumov-orxaos-avatar-12-12-2025.png',
    iconAlt: 'Signalka Gift'
  },
  {
    badge: '₽150.000',
    status: 'Хочу',
    description: 'Кофейни сейчас и целевой масштаб сети',
    iconSrc: '/izumov-orxaos-avatar-12-12-2025.png',
    iconAlt: 'Heartdrop Gift'
  },
  {
    badge: '₽150.000',
    status: 'Хочу',
    description: 'Сила эффекта на рынок Самары',
    iconSrc: '/izumov-orxaos-avatar-12-12-2025.png',
    iconAlt: 'Signalka Gift'
  }
]

// Бейдж с датой — 1 в 1 по логике из второго компонента
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

  return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="signal-radio-icon" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg> ${day}.${month} → ${monthName} ${year}`
})

// Modal (оставлен как был)
const showInfoModal = ref(false)
const onKeydown = (e) => {
  if (e.key === 'Escape') showInfoModal.value = false
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="reviews-widget-content">
    <div class="main-card">
      <!-- Новый хедер: слева "Корж", справа бейдж с датой -->
      <div class="signal-establishment-header">
        <h3 class="signal-cafe-name">{{ establishment.name }}</h3>
        <div class="signal-status-badge" v-html="currentDateBadge"></div>
      </div>

      <div class="stats-grid">
        <div v-for="(card, idx) in cards" :key="idx" class="stat-card">
          <div class="stat-content">
            <!-- Иконка-картинка внутри карточки (эффект как в signal-stat-icon) -->
            <div class="stat-bg-icon">
              <img :src="card.iconSrc" :alt="card.iconAlt" />
            </div>

            <div class="stat-header">
              <div class="stat-title">{{ card.badge }}</div>
            </div>

            <div class="stat-main">
              <!-- Shimmer только для "Хочу" -->
              <div
                class="stat-metric-badge"
                :class="{ 'want-badge': card.status === 'Хочу' }"
              >
                {{ card.status }}
              </div>
            </div>

            <div class="stat-description">{{ card.description }}</div>
          </div>
        </div>
      </div>

      <div class="control-panel">
        <div class="button-container">
          <a
            href="/invest/sim"
            class="action-button ticket-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Поделиться
          </a>

          <a
            href="/invest/smr"
            class="action-button review-button"
            target="_blank"
            rel="noopener noreferrer"
          >
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

.main-card {
  background: #2a2a2a;
  border-radius: 24px;
  padding: 48px;
  width: 100%;
  box-sizing: border-box;
  color: #e0e0e0;
}

/* Хедер 1 в 1 по структуре/стилю из второго компонента */
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
  background: linear-gradient(135deg, rgba(169, 140, 246, 0.2), rgba(0, 0, 0, 0.2));
  color: rgba(220, 210, 255, 0.9);
  border: 1px solid rgba(169, 140, 246, 0.3);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3);
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

/* СЕТКА СТАТИСТИКИ */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

.stat-card {
  position: relative;
  background: #1f1f1f;
  border-radius: 22px;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
  border: none;
  background-clip: padding-box;
  box-shadow: inset 0 0 0 1px transparent;
}

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.35) 0%, rgba(193, 154, 107, 0.1) 50%, rgba(255, 255, 255, 0) 100%);
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
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.6) 0%, rgba(155, 118, 83, 0.3) 60%, rgba(255, 255, 255, 0) 100%);
}

.stat-content {
  background: radial-gradient(circle at 50% 0%, rgba(193, 154, 107, 0.08) 0%, transparent 70%);
  border-radius: 20px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 240px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  z-index: 2;
}

.stat-card:hover .stat-content {
  background: radial-gradient(circle at 50% 0%, rgba(193, 154, 107, 0.15) 0%, transparent 70%);
}

/* Иконка-картинка как в signal-stat-icon */
.stat-bg-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.35;
  pointer-events: none;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.stat-bg-icon img {
  width: 140px;
  height: 140px;
  object-fit: contain;
}

.stat-card:hover .stat-bg-icon {
  opacity: 0.5;
  transform: translate(-50%, -58%);
}

/* HEADER СТАТИСТИКИ */
.stat-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: auto;
  justify-content: flex-start;
}

.stat-title {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s ease;
}

.stat-card:hover .stat-title {
  color: #d4af37;
}

.stat-main {
  flex: 1;
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
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.05em;
  font-size: clamp(14px, 2.5vw, 18px);
  white-space: nowrap;
  transition: all 0.4s ease;
  text-transform: uppercase;
}

/* Shimmer-анимация для "Хочу" (как signal-100-badge) */
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
    transparent 20%,
    rgba(212, 175, 55, 0.28) 40%,
    rgba(193, 154, 107, 0.45) 50%,
    rgba(212, 175, 55, 0.28) 60%,
    transparent 80%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer-wave 6s ease-in-out infinite;
}

@keyframes shimmer-wave {
  0%, 100% { background-position: -100% 0; }
  50% { background-position: 200% 0; }
}

.stat-card:hover .stat-metric-badge {
  border-color: #c19a6b;
  background: rgba(193, 154, 107, 0.2);
  color: #d4af37;
}

.stat-description {
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
  text-align: center;
  transition: color 0.4s ease;
  margin-top: 12px;
}

.stat-card:hover .stat-description {
  color: rgba(255, 255, 255, 0.8);
}

.control-panel {
  margin-top: 24px;
}

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

/* КНОПКА 1 */
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

/* КНОПКА 2 */
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

.button-icon {
  transition: transform 0.3s ease;
}

.review-button:hover .button-icon {
  transform: translateX(4px);
}

/* МОДАЛЬНОЕ ОКНО */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #1f1f1f;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: min(520px, 90vw);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  padding: 24px;
}

.modal-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.modal-title {
  font-weight: 700;
  font-size: 18px;
}

.modal-body {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.modal-ok {
  background: #333;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}

.modal-ok:hover {
  background: #444;
}

/* МОБИЛЬНАЯ ВЕРСИЯ */
@media (max-width: 768px) {
  .main-card {
    padding: 20px;
    border-radius: 20px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-card {
    border-radius: 16px;
  }

  .stat-card::before {
    border-radius: 16px;
  }

  .stat-card:hover {
    transform: none;
  }

  .stat-content {
    padding: 20px;
    min-height: auto;
    background: radial-gradient(circle at 20% 50%, rgba(193, 154, 107, 0.08) 0%, transparent 70%) !important;
    gap: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  /* На мобилке делаем иконку компактной и обычной (без absolute-фона) */
  .stat-bg-icon {
    position: static;
    transform: none;
    z-index: auto;
    opacity: 0.6;
  }

  .stat-bg-icon img {
    width: 40px;
    height: 40px;
  }

  .stat-card:hover .stat-bg-icon {
    opacity: 0.6;
    transform: none;
  }

  .stat-header {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
    justify-content: flex-start;
  }

  .stat-title {
    font-size: 12px;
    margin: 0;
  }

  .stat-main {
    width: 100%;
    flex: none;
    justify-content: flex-start;
  }

  .stat-metric-badge {
    font-size: 1.2rem !important;
    padding: 8px 16px !important;
    border-color: rgba(255, 255, 255, 0.15);
  }

  .stat-description {
    text-align: left;
    margin: 0;
    width: 100%;
  }

  .button-container {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
