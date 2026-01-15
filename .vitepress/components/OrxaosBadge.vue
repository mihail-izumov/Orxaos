<template>
  <span class="orxaos-badge">
    <slot />
  </span>
</template>

<style scoped>
/* Фирменный золотой бейдж Orxaos с эффектом свечения */
.orxaos-badge {
  display: inline-block;
  padding: 2px 12px;
  border-radius: 16px;
  background: #1a1d24;
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;
  color: #f5dfb1;
  font-weight: 500;
  font-size: 0.875em;
  line-height: 1.5;
  cursor: default;
  
  /* Отступ снизу для создания пространства перед заголовком */
  margin-bottom: 25px;
  
  /* Добавляем внешнее золотое свечение */
  box-shadow: 0 0 12px rgba(196, 163, 115, 0.3);
  transition: box-shadow 0.3s ease;
}

/* Градиентная обводка с полупрозрачными цветами для эффекта свечения */
.orxaos-badge::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 16px;
  padding: 1px;
  /* Полупрозрачный градиент от светлого к прозрачному */
  background: linear-gradient(
    90deg, 
    rgba(196, 163, 115, 0.8) 0%,    /* Золотой полупрозрачный */
    rgba(245, 223, 177, 0.9) 50%,   /* Светло-золотой более яркий */
    rgba(196, 163, 115, 0.8) 100%   /* Золотой полупрозрачный */
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.orxaos-badge:hover {
  /* Усиливаем свечение при наведении */
  box-shadow: 0 0 20px rgba(196, 163, 115, 0.5);
}
</style>
