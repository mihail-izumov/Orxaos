<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const establishment = {
  name: 'Корж – лидер Индекса Роста',
  firstBadge: '₽50.000',
  firstStatus: 'Занято',
  secondBadge: '₽150.000',
  secondStatus: 'Хочу',
  thirdBadge: '₽150.000',
  thirdStatus: 'Хочу'
}

const showInfoModal = ref(false)
const onKeydown = (e) => {
  if (e.key === 'Escape') {
    showInfoModal.value = false
  }
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
    
    <!-- SVG Definitions -->
    <svg width="0" height="0" style="position: absolute; pointer-events: none;">
      <defs>
        <linearGradient 
          id="gold-bronze-gradient-fixed" 
          gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2="24" y2="24"
        >
          <stop offset="0%" style="stop-color:#D4AF37; stop-opacity:1" />
          <stop offset="45%" style="stop-color:#C19A6B; stop-opacity:1" />
          <stop offset="100%" style="stop-color:#9B7653; stop-opacity:1" />
        </linearGradient>

        <filter id="depth-effect-soft">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
          <feOffset dx="0" dy="1.5" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        <filter id="depth-effect-hover">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>

    <div class="main-card">
      
      <!-- HEADER SECTION -->
      <div class="header-section">
        <h3 class="cafe-name">{{ establishment.name }}</h3>
        <p class="cafe-subtitle">
           Сигнал непрерывно анализирует отзывы гостей кофеен в Самаре и превращает их в данные. Индекс Роста точно отражает, что на самом деле думают жители Самары.
        </p>
      </div>

      <div class="stats-grid">
        <!-- Карточка 1 -->
        <div class="stat-card">
          <div class="stat-content">
            <div class="stat-header">
              <svg class="stat-icon icon-3d" width="32" height="32" viewBox="0 0 24 24" fill="none" 
                   stroke="url(#gold-bronze-gradient-fixed)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   filter="url(#depth-effect-soft)">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
              </svg>
              <div class="stat-title">₽50.000</div>
            </div>
            <div class="stat-main">
              <div class="stat-metric-badge">{{ establishment.firstStatus }}</div>
            </div>
            <div class="stat-description">Аналитика 29,600+ уникальных отзывов</div>
          </div>
        </div>

        <!-- Карточка 2 -->
        <div class="stat-card">
          <div class="stat-content">
            <div class="stat-header">
              <svg class="stat-icon icon-3d" width="32" height="32" viewBox="0 0 24 24" fill="none" 
                   stroke="url(#gold-bronze-gradient-fixed)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   filter="url(#depth-effect-soft)">
                <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/>
                <path d="m15.194 13.707 3.814 1.86-1.86 3.814"/>
                <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/>
              </svg>
              <div class="stat-title">₽150.000</div>
            </div>
            <div class="stat-main">
              <div class="stat-metric-badge">{{ establishment.secondStatus }}</div>
            </div>
            <div class="stat-description">Кофейни сейчас и целевой масштаб сети</div>
          </div>
        </div>

        <!-- Карточка 3 -->
        <div class="stat-card">
          <div class="stat-content">
            <div class="stat-header">
              <svg class="stat-icon icon-3d" width="32" height="32" viewBox="0 0 24 24" fill="none" 
                   stroke="url(#gold-bronze-gradient-fixed)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   filter="url(#depth-effect-soft)">
                <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/>
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
              </svg>
              <div class="stat-title">₽150.000</div>
            </div>
            <div class="stat-main">
              <div class="stat-metric-badge">{{ establishment.thirdStatus }}</div>
            </div>
            <div class="stat-description">Сила эффекта на рынок Самары</div>
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
              <path d="m9 18 6-6-6-6"/>
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

/* HEADER SECTION */
.header-section {
  text-align: center;
  margin-bottom: 48px;
}

.cafe-name { 
  margin: 0 0 16px 0; 
  color: #FFFFFF; 
  font-size: 32px; 
  font-weight: 700; 
  line-height: 1.4;
}

.cafe-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 auto;
  line-height: 1.5;
  max-width: 600px;
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

/* HEADER СТАТИСТИКИ */
.stat-header { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 12px;
  height: auto;
  justify-content: flex-start;
}

.stat-icon { 
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  flex-shrink: 0;
}

.stat-card:hover .stat-icon { 
  transform: scale(1.1) translateY(-2px);
  filter: url(#depth-effect-hover) drop-shadow(0 4px 12px rgba(193, 154, 107, 0.3));
}

.stat-title { 
  font-size: 14px; 
  font-weight: 400; 
  color: rgba(255,255,255,0.8); 
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s ease;
}

.stat-card:hover .stat-title { 
  color: #D4AF37;
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

.stat-card:hover .stat-metric-badge {
  border-color: #C19A6B;
  background: rgba(193, 154, 107, 0.2);
  color: #D4AF37;
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

.control-panel { margin-top: 24px; }

.button-container { display: flex; gap: 10px; background-color: #1f1f1f; border-radius: 20px; padding: 8px; }

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

/* КНОПКА 1: Поделиться */
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

/* КНОПКА 2: Заявка на проект */
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

/* МОДАЛЬНОЕ ОКНО */
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

/* МОБИЛЬНАЯ ВЕРСИЯ */
@media (max-width: 768px) {
  .main-card { padding: 20px; border-radius: 20px; }
  
  .header-section {
    padding-top: 20px;
    margin-bottom: 32px;
  }
  
  .cafe-name { font-size: 24px; }
  .cafe-subtitle { font-size: 16px; }

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
  
  .stat-card:hover { transform: none; }
  
  .stat-content { 
    padding: 20px;
    min-height: auto;
    background: radial-gradient(circle at 20% 50%, rgba(193, 154, 107, 0.08) 0%, transparent 70%) !important;
    gap: 16px;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
  }
  
  .stat-header { 
    flex-direction: row; 
    align-items: center; 
    gap: 12px; 
    width: 100%;
    justify-content: flex-start;
  }
  
  .stat-icon { width: 24px; height: 24px; }
  .stat-title { font-size: 12px; margin: 0; }
  
  .stat-main {
    width: 100%;
    flex: none;
    justify-content: flex-start;
  }
  
  .stat-metric-badge { 
    font-size: 1.2rem !important;
    padding: 8px 16px !important;
    border-color: rgba(255,255,255,0.15);
  }
  
  .stat-description { 
    text-align: left;
    margin: 0;
    width: 100%;
  }
  
  .button-container { flex-direction: column; gap: 8px; }
}
</style>
