<template>
  <div class="video-player-container">
    <div class="video-wrapper">
      <video 
        ref="videoElement"
        :poster="poster"
        :controls="videoLoaded"
        :class="{ 'video-initialized': videoLoaded }"
        preload="none"
        playsinline
        @loadstart="onLoadStart"
        @loadeddata="onLoadedData"
        @canplay="onCanPlay"
        @error="onError"
        @play="onPlay"
        @pause="onPause"
        @ended="onVideoEnded"
      >
        <!-- Источник добавляется динамически после первого клика -->
        <source 
          v-if="videoLoaded"
          :src="currentVideoSrc"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео элемент.
      </video>
      
      <!-- Кастомная кнопка Play поверх постера -->
      <div 
        v-if="!videoLoaded && !hasError" 
        class="play-overlay"
        @click="initializeVideo"
      >
        <div class="play-button">
          <!-- Заменили белую кнопку на золотую -->
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="rgba(26, 29, 36, 0.8)"/>
            <path d="M32 25L57 40L32 55V25Z" fill="#f5dfb1"/>
            <!-- Золотая обводка -->
            <circle cx="40" cy="40" r="39" stroke="#c4a373" stroke-width="2"/>
          </svg>
        </div>
      </div>
      
      <!-- Liquid Fluid переключатель качества (Золотая версия) -->
      <div class="video-controls" v-if="videoLoaded">
        <div class="quality-toggle">
          <input 
            type="checkbox" 
            id="quality-switch" 
            v-model="isHDQuality"
            @change="toggleQuality"
            class="quality-checkbox"
          />
          <label for="quality-switch" class="quality-label">
            <div class="quality-slider">
              <div class="quality-slider-inner">
                <div class="quality-text quality-sd" :class="{ active: !isHDQuality }">SD</div>
                <div class="quality-text quality-hd" :class="{ active: isHDQuality }">HD</div>
              </div>
            </div>
          </label>
        </div>
      </div>
      
      <!-- Индикатор загрузки (Золотой спиннер) -->
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
        <div class="loading-text">Загрузка...</div>
      </div>
      
      <!-- Ошибка -->
      <div v-if="hasError" class="error-overlay">
        <div class="error-content">
          <div class="error-icon">⚠️</div>
          <div class="error-text">Не удалось загрузить видео</div>
          <div class="error-details">{{ errorMessage }}</div>
          <div class="error-actions">
            <button @click="retryLoad" class="retry-button">
              Попробовать снова
            </button>
            <a :href="currentVideoSrc" target="_blank" class="direct-link">
              Открыть напрямую
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  poster: {
    type: String,
    default: ''
  },
  hdSrc: {
    type: String,
    required: true
  },
  sdSrc: {
    type: String,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})

const videoElement = ref(null)
const isHDQuality = ref(false)
const isLoading = ref(false)
const hasError = ref(false)
const errorMessage = ref('')
const currentTime = ref(0)
const isPlaying = ref(false)
const videoLoaded = ref(false)

const currentVideoSrc = computed(() => {
  return isHDQuality.value ? props.hdSrc : props.sdSrc
})

const initializeVideo = () => {
  if (!videoElement.value || videoLoaded.value) return
  
  videoLoaded.value = true
  
  setTimeout(() => {
    if (videoElement.value) {
      videoElement.value.load()
      videoElement.value.play().catch(e => {
        console.log('Autoplay заблокирован:', e)
        isLoading.value = false
      })
    }
  }, 0)
}

const toggleQuality = () => {
  if (!videoElement.value) return
  
  currentTime.value = videoElement.value.currentTime
  isPlaying.value = !videoElement.value.paused
  
  hasError.value = false
  errorMessage.value = ''
  
  videoElement.value.load()
  
  videoElement.value.addEventListener('loadeddata', () => {
    if (currentTime.value > 0) {
      videoElement.value.currentTime = currentTime.value
    }
    if (isPlaying.value) {
      videoElement.value.play().catch(e => {
        console.log('Autoplay заблокирован:', e)
      })
    }
  }, { once: true })
}

const onLoadStart = () => {
  if (videoLoaded.value) {
    isLoading.value = true
  }
  hasError.value = false
  errorMessage.value = ''
}

const onLoadedData = () => {
  isLoading.value = false
  hasError.value = false
}

const onCanPlay = () => {
  isLoading.value = false
  hasError.value = false
}

const onError = (event) => {
  console.error('Ошибка видео:', event)
  isLoading.value = false
  hasError.value = true
  
  const video = event.target
  const error = video.error
  
  if (error) {
    switch (error.code) {
      case error.MEDIA_ERR_ABORTED:
        errorMessage.value = 'Загрузка прервана пользователем'
        break
      case error.MEDIA_ERR_NETWORK:
        errorMessage.value = 'Ошибка сети при загрузке'
        break
      case error.MEDIA_ERR_DECODE:
        errorMessage.value = 'Ошибка декодирования видео'
        break
      case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
        errorMessage.value = 'Формат видео не поддерживается'
        break
      default:
        errorMessage.value = 'Неизвестная ошибка'
    }
  } else {
    errorMessage.value = 'Проверьте доступность файла'
  }
}

const onPlay = () => {
  isPlaying.value = true
}

const onPause = () => {
  isPlaying.value = false
}

// Новый обработчик окончания видео
const onVideoEnded = () => {
  console.log('Видео закончилось, возвращаемся к постеру')
  
  // Сбрасываем состояние в исходное
  videoLoaded.value = false
  isPlaying.value = false
  isLoading.value = false
  
  // Сбрасываем время воспроизведения
  if (videoElement.value) {
    videoElement.value.currentTime = 0
    videoElement.value.pause()
    
    // Удаляем источник, чтобы вернуть постер
    videoElement.value.removeAttribute('src')
    videoElement.value.load()
  }
}

const retryLoad = () => {
  hasError.value = false
  errorMessage.value = ''
  videoLoaded.value = false
  isLoading.value = false
  
  if (videoElement.value) {
    videoElement.value.pause()
    videoElement.value.removeAttribute('src')
    videoElement.value.load()
  }
}
</script>

<style scoped>
.video-player-container {
  position: relative;
  max-width: 100%;
  margin: 1rem 0;
  background: transparent !important; 
}

.video-wrapper {
  position: relative;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: #000;
}

/* Скрываем нативные контролы ТОЛЬКО до инициализации */
video:not(.video-initialized)::-webkit-media-controls { display: none !important; }
video:not(.video-initialized)::-webkit-media-controls-enclosure { display: none !important; }
video:not(.video-initialized)::-webkit-media-controls-panel { display: none !important; }
video:not(.video-initialized)::-webkit-media-controls-play-button { display: none !important; }
video:not(.video-initialized)::-webkit-media-controls-start-playback-button { display: none !important; }
video:not(.video-initialized)::-webkit-media-controls-overlay-play-button { display: none !important; }
video:not(.video-initialized)::-moz-media-controls { display: none !important; }

/* Оверлей с кнопкой Play */
.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 15;
  background: transparent;
  transition: background 0.3s ease;
}

.play-overlay:hover {
  background: rgba(0, 0, 0, 0.2);
}

.play-button {
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.9;
}

.play-overlay:hover .play-button {
  transform: scale(1.05);
  opacity: 1;
}

.play-button svg {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
}

.video-controls {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}

/* --- ЗОЛОТОЙ ПЕРЕКЛЮЧАТЕЛЬ КАЧЕСТВА --- */
.quality-toggle {
  position: relative;
}

.quality-checkbox {
  display: none;
}

.quality-label {
  cursor: pointer;
  display: block;
}

.quality-slider {
  width: 80px;
  height: 32px;
  background: #1a1d24; 
  border-radius: 20px;
  position: relative;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.5),
    0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  border: 1px solid rgba(196, 163, 115, 0.3);
}

.quality-slider-inner {
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border-radius: 18px;
  background: transparent;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.quality-slider-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, #c4a373 0%, #a88b60 100%);
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.4),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);
  transform: translateX(0);
}

.quality-checkbox:checked + .quality-label .quality-slider-inner::before {
  transform: translateX(100%);
  background: linear-gradient(135deg, #c4a373 0%, #a88b60 100%);
}

.quality-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 700;
  color: #6b7280; 
  transition: all 0.3s ease;
  z-index: 2;
  text-shadow: none;
  width: 50%;
  text-align: center;
}

.quality-sd { left: 0; }
.quality-hd { right: 0; }

.quality-text.active {
  color: #1a1d24;
  text-shadow: none;
}

.quality-label:hover .quality-slider {
  border-color: rgba(196, 163, 115, 0.6);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.5),
    0 0 12px rgba(196, 163, 115, 0.2);
}

.quality-slider:active {
  transform: scale(0.98);
}

/* Золотой лоадер */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(196, 163, 115, 0.3);
  border-radius: 50%;
  border-top-color: #f5dfb1;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 16px;
  box-shadow: 0 0 15px rgba(196, 163, 115, 0.2);
}

.loading-text {
  color: #f5dfb1;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 29, 36, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 25;
}

.error-content {
  text-align: center;
  color: #f5dfb1;
  padding: 20px;
  max-width: 400px;
}

.error-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.error-text {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.error-details {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 20px;
}

.error-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.retry-button {
  background: linear-gradient(135deg, #c4a373 0%, #a88b60 100%);
  color: #1a1d24;
  font-weight: 600;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(196, 163, 115, 0.3);
}

.direct-link {
  background: transparent;
  color: #c4a373;
  border: 1px solid #c4a373;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.direct-link:hover {
  background: rgba(196, 163, 115, 0.1);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Адаптивный дизайн */
@media (max-width: 1024px) and (min-width: 769px) {
  .video-wrapper { border-radius: 10px; }
  .video-controls { top: 12px; right: 12px; }
  .quality-slider { width: 75px; height: 30px; }
  .quality-text { font-size: 9px; }
  .play-button svg { width: 70px; height: 70px; }
}

@media (max-width: 768px) {
  .video-wrapper { border-radius: 8px; }
  video { object-fit: cover; }
  .video-controls { top: 8px; right: 8px; }
  .quality-slider { width: 70px; height: 28px; }
  .quality-text { font-size: 8px; }
  .play-button svg { width: 60px; height: 60px; }
  .error-actions { flex-direction: column; align-items: center; }
  .retry-button, .direct-link { width: 100%; max-width: 200px; }
  .loading-text { font-size: 14px; }
  .error-content { padding: 16px; }
}

@media (max-width: 480px) {
  .video-player-container { margin: 0.5rem 0; }
  .video-wrapper { border-radius: 6px; }
  .quality-slider { width: 65px; height: 26px; }
  .quality-text { font-size: 7px; }
  .play-button svg { width: 50px; height: 50px; }
  .loading-spinner { width: 32px; height: 32px; border-width: 2px; }
  .error-icon { font-size: 36px; }
  .error-text { font-size: 16px; }
}

@media (max-width: 768px) and (orientation: landscape) {
  .video-wrapper {
    aspect-ratio: unset;
    height: 100vh;
    max-height: 400px;
  }
  .video-controls { top: 12px; right: 12px; }
}

@media (prefers-color-scheme: dark) {
  .video-player-container {
    background: transparent !important;
  }
}
</style>
