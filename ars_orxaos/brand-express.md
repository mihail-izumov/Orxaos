<style>
/* --- ОБЩИЕ СТИЛИ КОНТЕЙНЕРА --- */
.dark-theme {
  background-color: #1a1a1a;
  color: #ffffff;
  max-width: 960px; /* Ограничиваем максимальную ширину для лучшей читаемости */
  margin: 0 auto;   /* Центрируем контейнер */
  padding: 2rem 0;  /* ИЗМЕНЕНО: только верхний и нижний отступы, боковые убраны */
}

/* --- Секции и отступы --- */
.hero-section, .problem-section, .results-section, .pricing-section, .final-cta-section {
  margin-bottom: 3rem; /* Отступы между секциями */
  padding: 0 1rem; /* Добавляем небольшие боковые отступы к секциям для читаемости */
}

.hero-section {
  text-align: left;
}

/* --- Карточки "Проблемы" --- */
.problem-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.problem-card {
  background: linear-gradient(135deg, #347b6c, #2a5c50);
  padding: 1.5rem;
  border-radius: 8px;
  color: white;
}

/* --- Колонки "Результат" --- */
.results-grid {
  display: grid;
  /* На мобильных устройствах будет 1 колонка, чтобы текст не сжимался */
  grid-template-columns: 1fr; 
  gap: 1.5rem; /* Уменьшаем расстояние между блоками */
  margin-top: 1.5rem;
}

/* Для экранов шире 768px возвращаем 3 колонки */
@media (min-width: 768px) {
  .results-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.result-column {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 0.9em;
}

/* --- Текстовые акценты и таблица --- */
.accent-text {
  color: #C5F946;
  font-weight: bold;
}

.price-table-container {
  overflow-x: auto; /* Добавляем прокрутку для таблицы на узких экранах */
}

.price-table {
  background: #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
}

/* --- Кнопки --- */
.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  margin-top: 1.5rem;
}

.btn:hover {
  transform: translateY(-2px);
  text-decoration: none !important;
}

.btn-primary {
  background-color: #C5F946;
  color: #000 !important;
}

.btn-primary:hover {
  background-color: #347b6c;
  color: white !important;
}

.final-cta-section {
    text-align: left;
}
</style>

<div class="dark-theme">

<div class="hero-section">
<h1>Экспресс-аудит бренда</h1>
<h2>Глубокий аудит за 1 день – айдентика и дизайн коммуникации бренда с аудиторией.</h2>
<a href="https://forms.fillout.com/t/14NhL22Rj3us" class="btn btn-primary">Провести Аудит Сейчас →</a>
</div>

<div class="problem-section">
<h3>Какие проблемы бизнеса решает <span class="accent-text">Экспресс-аудит</span></h3>
<div class="problem-cards">
  <div class="problem-card">
    <strong>Потеряно уникальное позиционирование бренда</strong>
    <p>Бренд размывается среди конкурентов</p>
  </div>
  <div class="problem-card">
    <strong>Слабая визуальная коммуникация</strong>
    <p>Дизайн продуктов, рекламы не согласованы со стратегией бренда</p>
  </div>
  <div class="problem-card">
    <strong>Низкая вовлеченность аудитории</strong>
    <p>Продукт, бренд и его коммуникация не вызывают у покупателей эмоции</p>
  </div>
  <div class="problem-card">
    <strong>Застой в идеях</strong>
    <p>Все есть и одновременно чего-то не хватает</p>
  </div>
</div>
</div>

<div class="results-section">
<h2>Результат</h2>
<h3>Уникальная аналитика <span class="accent-text">360°</span> от креативного директора Михаила Изюмова.</h3>
<p>24 года, тысяча проектов и много сил было потрачено на разработку уникального подхода, который теперь, объединяя дизайн-мышление и силу данных, позволяет делать бренды лучше за дни, а не недели.</p>

<div class="results-grid">
  <div class="result-column">
    <h4><strong>Что не так и как это исправить</strong></h4>
    <p>Точные рекомендации по каждому блоку в формате <span class="accent-text">«Бери и делай»</span>:</p>
    <ul>
      <li>как сделать бренд ярче и выделить его среди конкурентов</li>
      <li>как собрать всю визуальную коммуникацию в единый дизайн продуктов, рекламы, повышая их привлекательность для ЦА</li>
      <li>как привлечь внимание и удержать клиентов</li>
      <li>свежий взгляд на готовые идеи и гипотезы</li>
      <li>как согласовать стратегию и визуальный стиль бренда</li>
    </ul>
  </div>
  <div class="result-column">
    <h4><strong>Все виды коммуникации бренда</strong></h4>
    <p><span class="accent-text">Омни-канальный подход</span> – единый и согласованный опыт взаимодействия с аудиторией через все каналы коммуникации:</p>
    <ul>
      <li>пакет айдентики (логотип, цвета, шрифты, визуальные элементы)</li>
      <li>веб</li>
      <li>реклама</li>
      <li>соц. сети</li>
      <li>презентации</li>
      <li>интерьер</li>
      <li>витрины</li>
      <li>вывеска</li>
      <li>и товар</li>
    </ul>
  </div>
  <div class="result-column">
    <h4><strong>Самое Полезное Резюме</strong></h4>
    <p><span class="accent-text">Что хорошо – то хорошо. Что плохо – то плохо.</span> Что не плохо – то ещё не хорошо.</p>
    <ul>
      <li>неочевидные решения конкретных задач</li>
      <li>оценка в совокупности: стратегия, презентации, прототипы – все и сразу</li>
      <li>подходящие примеры, которые могут помочь</li>
      <li>доступно в формате гугл-документа</li>
      <li>можно продолжить в проекте и нанять креативного директора на аутсорс</li>
    </ul>
  </div>
</div>
</div>

<div class="pricing-section">
<h3>Для брендов, которые хотят <span class="accent-text">вдохновлять</span>.</h3>
<div class="price-table-container">
<table class="price-table">
  <thead>
    <tr>
      <th></th>
      <th><strong>Изюмов</strong></th>
      <th><strong>Агентство</strong></th>
      <th><strong>Эксперт</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Итог</strong></td>
      <td>✔️ аналитика 360°<br>✔️ неочевидные решения<br>✔️ план действий<br>✔️ видео-демонстрация<br>✔️ оплата картой</td>
      <td>Коллективное мнение</td>
      <td>Мнение</td>
    </tr>
    <tr>
      <td><strong>Цена</strong></td>
      <td><strong>от ₽19900</strong></td>
      <td>от ₽100000</td>
      <td>от ₽30000</td>
    </tr>
    <tr>
      <td><strong>Время</strong></td>
      <td><strong>48 часов</strong></td>
      <td>5–10 дней</td>
      <td>3–5 дней</td>
    </tr>
    <tr>
      <td><strong>Доработки</strong></td>
      <td><strong>24 часа</strong></td>
      <td>Нет</td>
      <td>Нет</td>
    </tr>
  </tbody>
</table>
</div>
</div>

<div class="final-cta-section">
  <a href="https://forms.fillout.com/t/14NhL22Rj3us" class="btn btn-primary">Отправить Заявку →</a>
</div>

</div>
