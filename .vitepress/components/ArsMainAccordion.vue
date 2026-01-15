<script setup>
import { ref } from 'vue';

const sections = [
  {
    title: 'Свой Знак',
    content: `
<p>Иногда изменения начинаются с нового символа. Символ меняет не просто восприятие, а притягивает нужных людей и верные решения.</p>
<p>Есть люди, которые стоят на пороге перемен. Они смотрят на свой бизнес — успешный, работающий, приносящий доход — и чувствуют странное беспокойство. Словно что-то важное ускользает. Они видят, как вокруг все меняют логотипы, запускают ребрендинги, нанимают маркетинговые агентства. Результат обычно один: красивая оболочка, под которой прячется та же суть.</p>
<p>Но есть среди них те, кто понимает иначе. Они чувствуют, что настоящий бренд — это не то, что показывают миру. Это концентрированное выражение их видения и их правил. Не маска, а лицо.</p>
<p>Такие люди ищут не дизайнеров, а тех, кто владеет технологией превращения уникального видения в точный и ясный визуальный язык.</p>
`
  },
  {
    title: 'Рождение Своего Бренда',
    content: `
<p><strong>Сначала Хаос:</strong> когда видение есть, но нет четкой формы для его выражения. Бизнес успешен, но в нем нет системности. Ресурсы тратятся на разрозненные действия, которые не складываются в единую картину.</p>
<p><strong>Затем Порядок:</strong> когда находятся те, кто помогает кристаллизовать их видение. Кто создает для этого видения идеальную материальную форму — логотип, сайт, фирменный стиль. Кто не придумывает, а проявляет и дает нужную форму.</p>
<p>В результате рождается не просто «бренд». Рождается система визуальной коммуникации, которая работает как точный инструмент: притягивает нужных людей, отсекает чужих, служит компасом для решений.</p>
<p>Компании, которые проходят этот путь, обретают то, чего им не хватало — абсолютную уверенность.</p>
`
  },
  {
    title: 'Искусство точных решений',
    content: `
<ol style="margin: 0; padding-left: 24px; line-height: 1.8;">
<li>Начинать с главного.</li>
<li>Искать сигнал в шуме.</li>
<li>Создавать инструменты, а не украшения.</li>
<li>Верить, что новая форма создает новое будущее.</li>
<li>Выбирать партнеров, а не просто клиентов.</li>
<li>Соединять систему и смысл.</li>
<li>Искать причину, а не симптом.</li>
<li>Стремиться к яростной простоте.</li>
<li>Строить на десятилетия, а не на кварталы.</li>
<li>Мечтать и действовать.</li>
</ol>
`
  }
];

const detailsRefs = ref([]);
const handleToggle = (index) => {
  const currentDetails = detailsRefs.value[index];
  if (currentDetails && currentDetails.open) {
    detailsRefs.value.forEach((details, i) => {
      if (i !== index && details && details.open) {
        details.open = false;
      }
    });
  }
};
</script>

<template>
  <div class="tickets-accordion-wrapper">
    <details 
      v-for="(section, index) in sections" 
      :key="index" 
      class="tickets-instruction-block"
      :ref="el => { if (el) detailsRefs[index] = el }"
      @toggle="handleToggle(index)"
    >
      <summary class="tickets-summary">
        <h3 class="tickets-title">{{ section.title }}</h3>
        <span class="tickets-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </summary>
      <div class="tickets-content" v-html="section.content"></div>
    </details>
  </div>
</template>

<style scoped>
.tickets-accordion-wrapper {
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 0 !important;
}

.tickets-instruction-block {
  background: rgba(255, 255, 255, 0.03) !important;
  border: none !important;
  border-radius: 12px !important;
  margin-bottom: 12px !important;
  overflow: hidden !important;
  box-shadow: none !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.tickets-summary {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 16px 24px !important;
  cursor: pointer !important;
  list-style: none !important;
  user-select: none !important;
  background: transparent !important;
  border: none !important;
  margin: 0 !important;
  transition: none !important;
}

.tickets-summary::-webkit-details-marker,
.tickets-summary::marker,
.tickets-summary::before,
.tickets-summary::after {
  display: none !important;
  content: '' !important;
  width: 0 !important;
  height: 0 !important;
}

.tickets-instruction-block::-webkit-details-marker,
.tickets-instruction-block::marker,
.tickets-instruction-block::before,
.tickets-instruction-block::after {
  display: none !important;
  content: '' !important;
}

.tickets-summary > *:not(.tickets-title):not(.tickets-arrow) {
  display: none !important;
}

.tickets-title {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  color: #ffffff !important;
  border: none !important;
  line-height: 1.4 !important;
}

.tickets-title::before,
.tickets-title::after {
  display: none !important;
  content: '' !important;
}

.tickets-arrow {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  margin-left: 16px !important;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  color: #9ca3af !important;
}

.tickets-arrow svg {
  display: block !important;
  width: 20px !important;
  height: 20px !important;
}

.tickets-instruction-block[open] .tickets-arrow {
  transform: rotate(180deg) !important;
}

.tickets-content {
  padding: 0 24px 20px !important;
  color: #ffffff !important;
  line-height: 1.7 !important;
  background: transparent !important;
  border: none !important;
  animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tickets-content :deep(p) {
  margin: 0 0 16px !important;
  color: #ffffff !important;
}

.tickets-content :deep(ol) {
  color: #ffffff !important;
}

.tickets-content :deep(li) {
  color: #ffffff !important;
  margin-bottom: 8px !important;
}

.tickets-content :deep(strong) {
  color: #ffffff !important;
  font-weight: 600 !important;
}

.tickets-content :deep(table) {
  width: 100% !important;
  border-collapse: collapse !important;
  margin: 16px 0 !important;
  font-size: 14px !important;
  background: transparent !important;
}

.tickets-content :deep(th) {
  background: rgba(100, 100, 100, 0.15) !important;
  padding: 12px !important;
  text-align: left !important;
  font-weight: 600 !important;
  border: 1px solid rgba(120, 120, 120, 0.2) !important;
  color: #ffffff !important;
}

.tickets-content :deep(td) {
  padding: 12px !important;
  border: 1px solid rgba(100, 100, 100, 0.15) !important;
  color: #ffffff !important;
  background: transparent !important;
}

.tickets-content :deep(tr:hover) {
  background: rgba(100, 100, 100, 0.08) !important;
}
</style>
