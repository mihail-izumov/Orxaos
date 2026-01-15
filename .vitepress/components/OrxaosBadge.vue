<template>
  <span class="orxaos-badge">
    <slot />
  </span>
</template>

<style scoped>
/* Фирменный золотой бейдж Orxaos */
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
  box-shadow: none;
  transition: none;
  cursor: default;
}

.orxaos-badge::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(90deg, #c4a373 0%, #f5dfb1 50%, #c4a373 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.orxaos-badge:hover {
  color: #f5dfb1;
}
</style>
