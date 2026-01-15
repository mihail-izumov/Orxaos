<template>
  <span class="orxaos-badge">
    <slot />
  </span>
</template>

<style scoped>
/* Фирменный золотой бейдж Orxaos с Glassmorphism Border */
.orxaos-badge {
  display: inline-block;
  padding: 2px 12px;
  border-radius: 16px;
  color: #f5dfb1;
  font-weight: 500;
  font-size: 0.875em;
  line-height: 1.5;
  box-shadow: none;
  transition: none;
  cursor: default;
  
  /* Glassmorphism Border эффект */
  background-image: 
    linear-gradient(90deg, #c4a373 0%, #f5dfb1 50%, #c4a373 100%),
    linear-gradient(#1a1d24, #1a1d24);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: 1px solid transparent;
}

.orxaos-badge:hover {
  color: #f5dfb1;
}
</style>
