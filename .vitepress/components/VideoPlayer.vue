<style scoped>
.video-player-container {
  position: relative;
  max-width: 100%;
  margin: 1rem 0;
}

.video-wrapper {
  position: relative;
  background: transparent; /* Изменено с #000 на transparent */
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: transparent; /* Добавлено для прозрачности */
}

/* Скрываем нативные контролы ТОЛЬКО до инициализации */
video:not(.video-initialized)::-webkit-media-controls {
  display: none !important;
}

video:not(.video-initialized)::-webkit-media-controls-enclosure {
  display: none !important;
}

video:not(.video-initialized)::-webkit-media-controls-panel {
  display: none !important;
}

video:not(.video-initialized)::-webkit-media-controls-play-button {
  display: none !important;
}

video:not(.video-initialized)::-webkit-media-controls-start-playback-button {
  display: none !important;
}

video:not(.video-initialized)::-webkit-media-controls-overlay-play-button {
  display: none !important;
}

/* Для Firefox */
video:not(.video-initialized)::-moz-media-controls {
  display: none !important;
}

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
  background: rgba(0, 0, 0, 0.1);
}

.play-button {
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.9;
}

.play-overlay:hover .play-button {
  transform: scale(1.1);
  opacity: 1;
}

.play-button svg {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
}

.video-controls {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}

/* ЗОЛОТОЙ Liquid Fluid переключатель */
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
  background: linear-gradient(135deg, #1a1d24 0%, #0f1115 100%);
  border-radius: 20px;
  position: relative;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 8px rgba(196, 163, 115, 0.2);
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
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
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
  background: linear-gradient(90deg, 
    rgba(196, 163, 115, 0.9) 0%, 
    rgba(245, 223, 177, 0.95) 50%, 
    rgba(196, 163, 115, 0.9) 100%
  );
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: 
    0 2px 8px rgba(196, 163, 115, 0.4),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);
  transform: translateX(0);
}

.quality-checkbox:checked + .quality-label .quality-slider-inner::before {
  transform: translateX(100%);
  background: linear-gradient(90deg, 
    rgba(196, 163, 115, 1) 0%, 
    rgba(245, 223, 177, 1) 50%, 
    rgba(196, 163, 115, 1) 100%
  );
  box-shadow: 
    0 2px 12px rgba(196, 163, 115, 0.5),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
}

.quality-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 600;
  color: rgba(196, 163, 115, 0.5);
  transition: all 0.3s ease;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  width: 50%;
  text-align: center;
}

.quality-sd {
  left: 0;
}

.quality-hd {
  right: 0;
}

.quality-text.active {
  color: #1a1d24;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
  font-weight: 700;
}

.quality-label:hover .quality-slider {
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.3),
    0 0 16px rgba(196, 163, 115, 0.4);
  border-color: rgba(196, 163, 115, 0.5);
}

.quality-slider:active {
  transform: scale(0.98);
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  border-radius: 12px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(196, 163, 115, 0.3);
  border-radius: 50%;
  border-top-color: #c4a373;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 16px;
}

.loading-text {
  color: #f5dfb1;
  font-size: 16px;
}

.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 25;
  border-radius: 12px;
}

.error-content {
  text-align: center;
  color: white;
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

.retry-button, .direct-link {
  background: #c4a373;
  color: #1a1d24;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.retry-button:hover, .direct-link:hover {
  background: #f5dfb1;
  box-shadow: 0 0 12px rgba(196, 163, 115, 0.4);
}

.direct-link {
  background: #a89168;
}

.direct-link:hover {
  background: #c4a373;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Адаптивный дизайн */
@media (max-width: 1024px) and (min-width: 769px) {
  .video-wrapper {
    border-radius: 10px;
  }
  
  .video-controls {
    top: 12px;
    right: 12px;
  }
  
  .quality-slider {
    width: 75px;
    height: 30px;
  }
  
  .quality-text {
    font-size: 9px;
  }
  
  .play-button svg {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 768px) {
  .video-wrapper {
    border-radius: 8px;
  }
  
  video {
    object-fit: cover;
  }
  
  .video-controls {
    top: 8px;
    right: 8px;
  }
  
  .quality-slider {
    width: 70px;
    height: 28px;
  }
  
  .quality-text {
    font-size: 8px;
  }
  
  .play-button svg {
    width: 60px;
    height: 60px;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .retry-button, .direct-link {
    width: 100%;
    max-width: 200px;
  }
  
  .loading-text {
    font-size: 14px;
  }
  
  .error-content {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .video-player-container {
    margin: 0.5rem 0;
  }
  
  .video-wrapper {
    border-radius: 6px;
  }
  
  .quality-slider {
    width: 65px;
    height: 26px;
  }
  
  .quality-text {
    font-size: 7px;
  }
  
  .play-button svg {
    width: 50px;
    height: 50px;
  }
  
  .loading-spinner {
    width: 32px;
    height: 32px;
    border-width: 2px;
  }
  
  .error-icon {
    font-size: 36px;
  }
  
  .error-text {
    font-size: 16px;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .video-wrapper {
    aspect-ratio: unset;
    height: 100vh;
    max-height: 400px;
  }
  
  .video-controls {
    top: 12px;
    right: 12px;
  }
}

@media (prefers-color-scheme: dark) {
  .video-player-container {
    background: transparent;
  }
}
</style>
