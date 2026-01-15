<template>
  <div :class="$style.imageSlider">
    <div 
      :class="$style.sliderContainer"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <img 
        v-for="(image, index) in images" 
        :key="index"
        :src="image" 
        :alt="`Slide ${index + 1}`"
        :class="[$style.sliderImage, { [$style.active]: currentIndex === index }]"
        loading="eager"
      />
    </div>
    
    <!-- Точки для десктопа -->
    <div :class="$style.sliderDots">
      <span 
        v-for="(image, index) in images" 
        :key="index"
        :class="[$style.dot, { [$style.active]: currentIndex === index }]"
        @click="goToSlide(index)"
      />
    </div>
    
    <!-- Интерактивная полоса прогресса для мобильных -->
    <div 
      :class="$style.sliderProgressBar"
      @click="handleProgressClick"
      @touchstart="handleProgressTouchStart"
      @touchmove="handleProgressTouchMove"
      @touchend="handleProgressTouchEnd"
    >
      <div 
        :class="$style.progressFill"
        :style="{ width: progressWidth + '%' }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [
      '/ars/gallery/dhf_main_desktop.jpg',
      '/ars/gallery/gala-russe-main-desktop.jpg',
      '/ars/gallery/galarusse-web-cmrsd.jpg',
      '/ars/gallery/wps-web-cmrsd.jpg',
      '/ars/gallery/modelex-web-cmrsd.jpg',
      '/ars/gallery/tanurkova-insta-profile-pack-squashed.jpg',
      '/ars/gallery/tanurkova-main-desktop(2).jpg',
      '/ars/gallery/easyhome-main-desktop.jpg'
    ]
  },
  autoplayDelay: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let timer = null
let touchStartX = 0
let touchEndX = 0
let isDraggingProgress = false

const progressWidth = computed(() => {
  return ((currentIndex.value + 1) / props.images.length) * 100
})

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

// Свайп изображений пальцем
const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
  stopAutoplay()
}

const handleTouchMove = (e) => {
  touchEndX = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const swipeDistance = touchStartX - touchEndX
  const minSwipeDistance = 50
  
  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      // Свайп влево - следующий слайд
      nextSlide()
    } else {
      // Свайп вправо - предыдущий слайд
      prevSlide()
    }
  }
  
  resetAutoplay()
}

// Взаимодействие с полосой прогресса
const handleProgressClick = (e) => {
  const progressBar = e.currentTarget
  const clickPosition = e.offsetX
  const barWidth = progressBar.offsetWidth
  const clickPercent = clickPosition / barWidth
  const newIndex = Math.floor(clickPercent * props.images.length)
  
  currentIndex.value = Math.min(newIndex, props.images.length - 1)
  resetAutoplay()
}

const handleProgressTouchStart = (e) => {
  isDraggingProgress = true
  stopAutoplay()
  e.stopPropagation()
}

const handleProgressTouchMove = (e) => {
  if (!isDraggingProgress) return
  
  const progressBar = e.currentTarget
  const touch = e.touches[0]
  const rect = progressBar.getBoundingClientRect()
  const touchPosition = touch.clientX - rect.left
  const barWidth = progressBar.offsetWidth
  const touchPercent = Math.max(0, Math.min(1, touchPosition / barWidth))
  const newIndex = Math.floor(touchPercent * props.images.length)
  
  currentIndex.value = Math.min(newIndex, props.images.length - 1)
  e.preventDefault()
  e.stopPropagation()
}

const handleProgressTouchEnd = (e) => {
  isDraggingProgress = false
  resetAutoplay()
  e.stopPropagation()
}

const startAutoplay = () => {
  timer = setInterval(nextSlide, props.autoplayDelay)
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style module>
.imageSlider {
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.sliderContainer {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  background: #2c2c2c;
  touch-action: pan-y pinch-zoom;
}

.sliderImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

.sliderImage:first-child {
  position: relative;
}

.sliderImage.active {
  opacity: 1;
  z-index: 1;
}

/* Точки для десктопа */
.sliderDots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  
  /* Неактивная точка: нейтральный темно-серый */
  background-color: #525252; 
  
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Убрана обводка */
  border: none;
}

.dot:hover {
  /* При наведении: средний серый */
  background-color: #737373; 
  transform: scale(1.2);
}

.dot.active {
  /* Активная точка: светло-серый (без оттенков) */
  background-color: #d4d4d4;
  width: 12px;
  height: 12px;
}

/* Интерактивная полоса прогресса для мобильных */
.sliderProgressBar {
  display: none;
  width: 100%;
  height: 3.5px;
  
  /* Фон прогресс-бара: нейтральный темно-серый */
  background-color: #525252;
  
  border-radius: 2px;
  margin-top: 16px;
  overflow: hidden;
  cursor: pointer;
  touch-action: none;
}

.progressFill {
  height: 100%;
  
  /* Заполнение прогресс-бара: светло-серый */
  background-color: #d4d4d4;
  
  transition: width 0.3s ease;
  border-radius: 4px;
  pointer-events: none;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
  .sliderDots {
    display: none;
  }
  
  .sliderProgressBar {
    display: block;
  }
}
</style>
