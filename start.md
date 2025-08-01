# Начните Здесь

<br>
<form id="myForm" class="custom-form">
  <div class="form-group">
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" class="form-input" required>
  </div>
  
  <div class="form-group">
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" class="form-input" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-input" required>
  </div>

  <!-- Добавленное поле "Сообщение" -->
  <div class="form-group">
    <label for="message">Сообщение:</label>
    <textarea id="message" name="message" class="form-input" rows="5" required></textarea>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="consent" name="consent" required>
    <label for="consent">
      Нажимая на кнопку, вы соглашаетесь с 
      <a href="/terms/policy" target="_blank" class="policy-link">политикой конфиденциальности</a>, 
      <a href="/terms/privacy" target="_blank" class="policy-link">согласием на обработку персональных данных</a>
    </label>
  </div>
  
  <button type="submit" class="submit-btn" disabled>
    Отправить →
  </button>
</form>

<div id="successMessage" class="success-message" style="display: none;">
  Заявка успешно отправлена. Скоро свяжемся.
</div>

<style>
.custom-form {
  max-width: 500px;
  margin: 0;
  padding: 20px;
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;
}

.form-group {
  margin-bottom: 15px;
}

/* Стили .form-input применятся и к input, и к textarea */
.form-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  /* Для textarea убираем возможность изменения размера */
  resize: vertical; 
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
}

.checkbox-group input {
  margin-top: 3px;
  width: auto;
}

.checkbox-group label {
  font-size: 14px;
  line-height: 1.4;
}

.policy-link {
  color: #4CAF50;
  text-decoration: underline;
}

.submit-btn {
  background-color: #ffffff;
  color: #000000;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  font-weight: bold;
  transition: opacity 0.3s;
}

.submit-btn:hover {
  opacity: 0.9;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message {
  margin-top: 15px;
  color: white;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.success-message::before {
  content: "✓";
  color: white;
  font-size: 18px;
}
</style>

<script>
// Используем export default для совместимости с VitePress
export default {
  mounted() {
    this.initForm();
  },
  methods: {
    initForm() {
      // Проверка выполнения в браузере
      if (typeof document === 'undefined') return;
      
      const form = document.getElementById('myForm');
      if (!form) return;
      
      const successMessage = document.getElementById('successMessage');
      const submitBtn = form.querySelector('.submit-btn');
      // Теперь textarea с required тоже попадет в этот массив
      const requiredInputs = Array.from(form.querySelectorAll('[required]'));
      const checkbox = document.getElementById('consent');
      
      // Функция проверки валидности формы
      const checkFormValidity = () => {
        const nameValid = document.getElementById('name').value.trim() !== '';
        const phoneValid = document.getElementById('phone').value.trim() !== '';
        const emailValid = document.getElementById('email').value.trim() !== '';
        // Добавляем проверку для поля "Сообщение"
        const messageValid = document.getElementById('message').value.trim() !== '';
        const consentValid = checkbox.checked;
        
        // Обновляем условие для активации кнопки
        submitBtn.disabled = !(nameValid && phoneValid && emailValid && messageValid && consentValid);
      };
      
      // Назначение обработчиков событий
      requiredInputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
      });
      
      checkbox.addEventListener('change', checkFormValidity);
      
      // Обработка отправки формы
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (submitBtn.disabled) return;
        
        const formData = {
          name: form.name.value,
          phone: form.phone.value,
          email: form.email.value,
          // Добавляем данные из поля "Сообщение"
          message: form.message.value, 
          consent: checkbox.checked ? 'Да' : 'Нет',
          _subject: 'Новая заявка с сайта'
        };
        
        // Очищаем форму сразу
        form.reset();
        successMessage.style.display = 'flex';
        submitBtn.disabled = true;
        
        fetch('https://formspree.io/f/mdkzjopz', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) throw new Error('Ошибка сервера');
        })
        .catch(error => {
          console.error('Error:', error);
          // Добавляем сообщение в тело письма для резервной отправки
          const mailtoBody = `Имя: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AСообщение: ${formData.message}`;
          window.location.href = `mailto:theorchestramanco@gmail.com?subject=Заявка&body=${mailtoBody}`;
        })
        .finally(() => {
          // Скрываем сообщение через 15 секунд
          setTimeout(() => {
            successMessage.style.display = 'none';
            checkFormValidity();
          }, 15000);
        });
      });
      
      checkFormValidity();
    }
  }
}
</script>

<br>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">

  <div class="project-card">
    <div>
      <h3 style="color: #C5F946; margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Заявка на бренд</h3>
      <p style="margin: 0; line-height: 1.6; color: var(--vp-c-text-1);">Знаете, что хотите? Подробная форма заявки + калькулятор на айдентику, сайт и стратегию.</p>
    </div>
    <a href="https://forms.fillout.com/t/3FfWoFXwKeus" class="project-button" target="_blank">
      Отправить заявку →
    </a>
  </div>

  <div class="project-card">
    <div>
      <h3 style="color: #C5F946; margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Экспресс-аудит бренда</h3>
      <p style="margin: 0; line-height: 1.6; color: var(--vp-c-text-1);">Глубокий аудит за 1 день – айдентика и дизайн коммуникации бренда с аудиторией</p>
    </div>
    <a href="https://forms.fillout.com/t/14NhL22Rj3us" class="project-button" target="_blank">
      Провести Аудит Сейчас →
    </a>
  </div>

  <div class="project-card">
    <div>
      <h3 style="color: #C5F946; margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Ключ к Цифровому Дневнику – Гид</h3>
      <p style="margin: 0; line-height: 1.6; color: var(--vp-c-text-1);">Ваш личный инструмент, чтобы навести порядок в мыслях. Только суть. И ничего лишнего.</p>
    </div>
    <a href="/projects/diary-guide/unlock/pay/form" class="project-button">
      Получить доступ за ₽1990 →
    </a>
  </div>

  <div class="project-card">
    <div>
      <h3 style="color: #C5F946; margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Чекап Модуля Роста®</h3>
      <p style="margin: 0; line-height: 1.6; color: var(--vp-c-text-1);">Cистемный анализ бизнеса шаг за шагом. <br><br> чекап → план DMAIC → быстрые внедрения → постоянные улучшения</p>
    </div>
    <a href="https://runscale.ru/checkup/overview.html" class="project-button" target="_blank">
      Получить ответ →
    </a>
  </div>

</div>

<style>
.project-card {
  background: rgba(52, 123, 108, 0.3);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.project-button {
  background-color: #347b6c;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  display: block;
  margin-top: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-button:hover {
  background-color: #C5F946 !important;
  color: #000 !important;
  transform: translateY(-2px);
  text-decoration: none !important;
  font-weight: 700 !important;
}
</style>
