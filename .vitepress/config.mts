import { defineConfig, DefaultTheme } from 'vitepress'
import pkg from '../package.json' assert { type: 'json' }
const { version } = pkg

export default defineConfig({
  appearance: {
    initialValue: 'force-dark' as any
  },
  ignoreDeadLinks: true,
  title: 'От хаоса - к силе | Orxaos | Михаил Изюмов',
  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'От хаоса - к силе | Orxaos | Михаил Изюмов',
      description: 'Мечтать и действовать → Расти по своим правилам',
    },
  },

  transformPageData(pageData) {
    return pageData
  },

  buildEnd(siteConfig) {
    // Этот хук выполняется после сборки
  },

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['script', {}, `
    (function() {
      function createFooterContent() {
        const links = [
          { text: 'Контакт', href: '/Orxaos/start' },
          { text: 'Телеграм-канал', href: 'https://t.me/runscale', target: '_blank' },
          { text: 'Orxaos Supply', href: 'https://orxaos-shop.fourthwall.com/en-eur', target: '_blank' }
        ];

        let html = '<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 24px 0;">';
        html += '<div class="custom-footer-links"><div class="footer-row">';
        links.slice(0, 3).forEach((link, i) => {
          if (i > 0) html += '<span class="dot-separator">•</span>';
          html += '<a href="' + link.href + '"' + (link.target ? ' target="' + link.target + '" rel="noopener noreferrer"' : '') + '>' + link.text + '</a>';
        });
        html += '</div><div class="footer-row">';
        links.slice(3).forEach((link, i) => {
          if (i > 0) html += '<span class="dot-separator">•</span>';
          html += '<a href="' + link.href + '">' + link.text + '</a>';
        });
        html += '</div></div>';
        html += '<div style="margin-top: 24px; text-align: center;">';
        html += '<div style="color: white; font-size: 14px;">Мечтать и действовать → Расти по своим правилам</div>';
        html += '<div style="color: var(--vp-c-text-2); margin-top: 4px; font-size: 14px; text-align: center;">© Orxaos | Михаил Изюмов 2025</div>';
        return html;
      }

      function replaceFooter() {
        let footer = document.querySelector('.VPFooter');
        if (!footer) {
          footer = document.createElement('footer');
          footer.className = 'VPFooter';
          document.body.appendChild(footer);
        }
        footer.innerHTML = createFooterContent();
        if (window.location.pathname !== '/') {
          footer.style.position = 'relative';
          footer.style.bottom = '70px';
          footer.style.zIndex = '10';
          footer.style.marginBottom = '-70px';
        } else {
          footer.style.position = '';
          footer.style.bottom = '';
          footer.style.zIndex = '';
          footer.style.paddingBottom = '30px';
        }
      }

      function updateApplyLinkTarget() {
        const applyLinks = document.querySelectorAll('.VPSocialLink[aria-label="apply-link"]');
        applyLinks.forEach(applyLink => {
          applyLink.href = '/Orxaos/start';
          applyLink.setAttribute('target', '_self');
          applyLink.removeAttribute('rel');

          const newLink = document.createElement('a');
          newLink.href = '/Orxaos/start';
          newLink.className = applyLink.className;
          newLink.setAttribute('aria-label', 'apply-link');
          newLink.setAttribute('target', '_self');

          Array.from(applyLink.attributes).forEach(attr => {
            if (attr.name !== 'href' && attr.name !== 'target' && attr.name !== 'rel') {
              newLink.setAttribute(attr.name, attr.value);
            }
          });

          applyLink.parentNode.replaceChild(newLink, applyLink);
        });
      }

      function runScripts() {
        replaceFooter();
        updateApplyLinkTarget();
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runScripts);
      } else {
        runScripts();
      }

      window.addEventListener('load', runScripts);

      setTimeout(runScripts, 1000);
      setTimeout(runScripts, 2000);

      let lastUrl = location.href;
      new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
          lastUrl = url;
          setTimeout(runScripts, 100);
        }
      }).observe(document, { subtree: true, childList: true });
    })();
  `],
    ['style', {}, `
    /* === СТИЛИ ДЛЯ HERO-СЕКЦИИ === */
    .VPHero .name,
    .VPHero .text,
    .VPHero .tagline {
      color: white !important;
    }
    /* === КОНЕЦ СТИЛЕЙ ДЛЯ HERO-СЕКЦИИ === */

    /* === СТИЛИ ДЛЯ ССЫЛОК И КНОПОК НА ГЛАВНОЙ СТРАНИЦЕ === */
    /* Ссылки в hero-секции (не кнопки) */
    .VPHero .tagline a {
      color: var(--vp-c-brand-2) !important;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .VPHero .tagline a:hover {
      color: var(--vp-c-brand-1) !important;
      text-decoration: underline;
    }

    /* Кнопки действий в hero-секции */
    .VPHero .VPButton {
      background-color: var(--vp-c-brand-1) !important;
      border-color: var(--vp-c-brand-1) !important;
      color: white !important;
      transition: all 0.3s ease;
      text-decoration: none !important;
    }

    .VPHero .VPButton:hover {
      background-color: var(--vp-c-brand-2) !important;
      border-color: var(--vp-c-brand-2) !important;
      color: #000 !important;
      transform: translateY(-2px);
      text-decoration: none !important;
    }

    /* Ссылки в основном контенте главной страницы */
    .VPContent a {
      color: var(--vp-c-brand-2);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.3s ease;
    }

    .VPContent a:hover {
      color: var(--vp-c-brand-1);
      border-bottom-color: var(--vp-c-brand-1);
    }
    
    /* === ✅ ОКОНЧАТЕЛЬНО ИСПРАВЛЕННЫЕ СТИЛИ ДЛЯ КАРТОЧЕК === */
    /* Плавный переход для заголовка */
    .VPFeature .title {
      transition: color 0.25s ease-in-out;
    }
    
    /* При наведении на карточку меняем цвет ТОЛЬКО заголовка */
    .VPFeature:hover .title {
      color: var(--vp-c-brand-2);
    }
    
    /* Стили для ссылки "Получить доступ" и стрелки */
    .VPFeature .link-text {
      color: var(--vp-c-brand-1);
      transition: color 0.25s ease-in-out;
    }
    
    /* При наведении на карточку меняем цвет ссылки и стрелки */
    .VPFeature:hover .link-text {
      color: var(--vp-c-brand-2);
    }

    /* Убеждаемся, что основной текст описания НЕ меняет цвет */
    .VPFeature:hover .details,
    .VPFeature:hover .details p {
        color: var(--vp-c-text-2) !important;
    }
    /* === КОНЕЦ СТИЛЕЙ ДЛЯ ГЛАВНОЙ СТРАНИЦЫ === */

    :root {
      --vp-c-brand-1: #347b6c; /* Новый, более яркий зеленый */
      --vp-c-brand-2: #C5F946;
      --vp-c-brand-3: #347b6c;
      --vp-c-brand-soft: rgba(52, 123, 108, 0.14);
    }
    .VPNavBarTitle .logo {
      height: 32px !important;
      width: auto !important;
    }
    .VPNavBarSocialLinks {
      min-width: 4px !important;
      justify-content: flex-end !important;
      gap: 4px !important;
      margin-left: 0px !important;
    }
    .VPSocialLink .vpi-social-github {
      display: none !important;
    }
    .VPSocialLink {
      width: auto !important;
      height: auto !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .VPSocialLink[aria-label="login-link"]:hover::after {
      background: var(--vp-c-bg-soft);
      border-color: var(--vp-c-brand);
    }
    .VPSocialLink[aria-label="apply-link"]::after {
      content: "Начать";
      font-size: 14px;
      color: white;
      padding: 6px 12px;
      border: 1px solid var(--vp-c-brand);
      border-radius: 6px;
      background: var(--vp-c-brand);
      transition: all 0.3s ease;
      white-space: nowrap;
      margin: 6px;
    }
    .VPSocialLink[aria-label="apply-link"]:hover::after {
      background: var(--vp-c-brand-2) !important; /* Ярко-зеленый фон */
      border-color: var(--vp-c-brand-2) !important;
      color: #000 !important; /* Черный текст для читаемости */
      transform: translateY(-1px);
    }
    .custom-footer-links {
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: center;
    }
    .footer-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .footer-row a {
      color: var(--vp-c-text-2);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .footer-row a:hover {
      color: var(--vp-c-brand);
    }
    .dot-separator {
      color: var(--vp-c-text-3);
      font-weight: bold;
    }
    .VPFooter .copyright {
      margin-top: 2px !important;
    }
    .VPSwitchAppearance {
      display: none !important;
    }
    .VPNavBarSocialLinks::before,
    .VPNavBarSocialLinks .divider {
      display: none !important;
    }
    .VPNavBar .divider {
      display: none !important;
    }
    @media (max-width: 768px) {
      .VPNavBarSocialLinks {
        width: 100% !important;
        min-width: 100% !important;
        flex-direction: column !important;
        gap: 8px !important;
        padding: 0 16px !important;
        box-sizing: border-box !important;
        margin-left: 8 !important;
      }
      .VPSocialLink {
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
        box-sizing: border-box !important;
      }
      .VPSocialLink[aria-label="login-link"]::after,
      .VPSocialLink[aria-label="apply-link"]::after {
        width: 100% !important;
        display: block !important;
        text-align: center;
        padding: 10px 12px !important;
        margin: 10 !important;
        box-sizing: border-box !important;
      }
      .footer-row {
        flex-direction: column;
        gap: 8px;
      }
      .dot-separator {
        display: none;
      }
    }
    `]
  ],
  base: '/Orxaos/',
  cleanUrls: true,
  appearance: 'force-dark',
  outDir: '.vitepress/dist',
  description: 'От хаоса - к силе.',
  themeConfig: {
    siteTitle: "Orxaos",
    
    sidebarMenuLabel: 'Разделы',
    outlineTitle: 'На этой странице',
    returnToTopLabel: 'Наверх',
    
    sidebar: {
      '/projects/diary-guide/keys/': {
        items: sidebarDiaryGuideKeys()
      },
      '/projects/nol/journal': {
        items: sidebarMasterplan()
      },
      '/projects/diary-guide/unlock/': {
        items: sidebarDiaryGuide()
      },
      '/projects/the-creative-act-rick-rubin/': {
        items: sidebarCreativeAct()
      },
      '/projects/': {
        items: sidebarParki()
      },
      '/meet-mikhail/': {
        items: sidebarMasterplan()
      },
      '/ars_orxaos/': {
        items: sidebarWhyPark()
      }
    },

    search: {
      provider: 'local',
      options: {
        placeholder: 'Поиск…',
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
          modal: {
            displayDetails: 'Показать подробные результаты',
            resetButtonTitle: 'Сбросить поиск',
            backButtonTitle: 'Закрыть поиск',
            noResultsText: 'Результаты не найдены для',
            footer: {
              selectText: 'выбрать',
              navigateText: 'навигация',
              closeText: 'закрыть'
            }
          }
        }
      }
    },

    nav: nav(),

    socialLinks: [
      { icon: 'github', link: '/start', ariaLabel: 'apply-link', target: '_self'  }
    ],
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Проекты',
      items: [
        { text: 'Обзор', link: '/projects/overview' },
        { text: 'Ключ к цифровому дневнику - Гид', link: '/projects/diary-guide/unlock/overview' },
        { text: 'Модуль Роста®', link: '/projects/runscale' },
        { text: 'Парк за углом', link: '/projects/prkx' },
        { text: 'Чудесная Гостиная', link: '/projects/nol' },
        { text: 'Гениальная простота', link: '/projects/simple-is-smart' },
        { text: 'The Creative Act: A Way of Being – Саммари', link: '/projects/the-creative-act_a-way-of-being_summary' }
      ]
    },
    {
      text: 'Михаил',
      items: [
        { text: 'Кто я', link: '/meet-mikhail/cv' },
        { text: 'Заметки', link: '/projects/nol/journal' },
        { text: 'Телеграм-канал', link: 'https://t.me/izumov' }
      ]
    },
    {
      text: 'Ars Orxaos',
      items: [
        { text: 'Двигатель Смысла', link: '/ars_orxaos/overview' },
        { text: 'Истории в Цифрах', link: '/ars_orxaos/by-the-numbers' },
        { text: 'Истории в деталях', link: '/ars_orxaos/the-wonderful-stories-we-make' },
        { text: 'Экспресс-аудит бренда', link: '/ars_orxaos/brand-express' },
        { text: 'Вы – креативный профессионал?', link: '/ars_orxaos/creatives-apply' }
      ]
    }
  ]
}

function sidebarParki(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Проекты',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/projects/overview' },
        { text: 'Ключ к Цифровому Дневнику', link: '/projects/diary-guide/unlock/overview' },
        { text: 'Модуль Роста®', link: '/projects/runscale' },
        { text: 'Парк за углом', link: '/projects/prkx' },
        { text: 'Чудесная Гостиная', link: '/projects/nol' },
        { text: 'Гениальная простота', link: '/projects/simple-is-smart' },
        { text: 'The Creative Act: A Way of Being', 
          link: '/projects/the-creative-act_a-way-of-being_summary',
          collapsed: true,
        }
      ]
    }
  ]
}

function sidebarMasterplan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Михаил',
      collapsed: false,
      items: [
        { text: '100 фактов обо мне', link: '/meet-mikhail/cv' },
        { text: 'Заметки', link: '/projects/nol/journal' },
        { text: 'Телеграм-канал', link: 'https://t.me/izumov' }
      ]
    }
  ]
}

function sidebarWhyPark(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Ars Orxaos',
      collapsed: false,
      items: [
        { text: 'Двигатель Смысла', link: '/ars_orxaos/overview' },
        { text: 'Дьявол в Деталях', link: '/ars_orxaos/by-the-numbers' },
        { text: 'Чудесные Истории', link: '/ars_orxaos/the-wonderful-stories-we-make' },
        { text: 'Экспресс-аудит бренда', link: '/ars_orxaos/brand-express' },
        { text: 'Вы – креативный профессионал?', link: '/ars_orxaos/creatives-apply' }
      ]
    }
  ]
}

function sidebarCreativeAct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'The Creative Act: A Way of Being',
      collapsed: false,
      items: [
        { text: 'Содержание', link: '/projects/the-creative-act-rick-rubin/0. Содержание' },
        { text: '1. Природа творчества', link: '/projects/the-creative-act-rick-rubin/1. Природа творчества' },
        { text: '2. Зачем заниматься творчеством', link: '/projects/the-creative-act-rick-rubin/2. Зачем заниматься творчеством' },
        { text: '3. Творчество - советы и практики', link: '/projects/the-creative-act-rick-rubin/3. Творчество - советы и практики' },
        { text: '4. Вдохновение', link: '/projects/the-creative-act-rick-rubin/4. Вдохновение' },
        { text: '5. Творческий процесс', link: '/projects/the-creative-act-rick-rubin/5. Творческий процесс' },
        { text: '6. Что может помешать творчеству', link: '/projects/the-creative-act-rick-rubin/6. Что может помешать творчеству' },
        { text: '7. Совместная работа', link: '/projects/the-creative-act-rick-rubin/7. Совместная работа' },
        { text: 'Варианты перевода заголовка', link: '/projects/the-creative-act-rick-rubin/Варианты перевода заголовка The Creative Act' },
        { text: 'Заключение', link: '/projects/the-creative-act-rick-rubin/Заключение' },
      ]
    }
  ]
}

function sidebarDiaryGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Ключ к Цифровому Дневнику – Гид',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/projects/diary-guide/unlock/overview' },
        { text: 'Что внутри', link: '/projects/diary-guide/unlock/about' },
        { text: 'Получить доступ', link: '/projects/diary-guide/unlock/pay/form' }
      ]
    }
  ]
}

function sidebarDiaryGuideKeys(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Ключ к Цифровому Дневнику – Гид',
      collapsed: false,
      items: [
        { text: 'Начать Здесь', link: '/projects/diary-guide/keys/start-here' },
        { text: 'Содержание', link: '/projects/diary-guide/keys/contents' },
        {
          text: '1. Введение',
          collapsed: true,
          items: [
            { text: '1.1 Писать – значит думать', link: '/projects/diary-guide/keys/1/1.1 Писать – значит думать' },
            { text: '1.2 Основные причины, чтобы НЕ вести дневник', link: '/projects/diary-guide/keys/1/1.2 Основные причины, чтобы НЕ вести дневник' },
            { text: '1.3 Мой дневник – это классное место', link: '/projects/diary-guide/keys/1/1.3 Мой дневник – это классное место' },
            { text: '1.4 Почему цифровой дневник', link: '/projects/diary-guide/keys/1/1.4 Почему цифровой дневник' },
            { text: '1.5 Страх увидеть себя со стороны', link: '/projects/diary-guide/keys/1/1.5 Страх увидеть себя со стороны' },
          ]
        },
        {
          text: '2. Трюки',
          collapsed: true,
          items: [
            { text: '2.1 Я как контекст', link: '/projects/diary-guide/keys/2/2.1 Я как контекст' },
            { text: '2.2 Письмо себе', link: '/projects/diary-guide/keys/2/2.2 Письмо себе' },
            { text: '2.3 Не планируйте', link: '/projects/diary-guide/keys/2/2.3 Не планируйте' },
            { text: '2.4 Не выдумывайте', link: '/projects/diary-guide/keys/2/2.4 Не выдумывайте' },
            { text: '2.5 Ставьте мозг в тупик', link: '/projects/diary-guide/keys/2/2.5 Ставьте мозг в тупик' },
            { text: '2.6 Задавайте вопросы и слушайте ответы', link: '/projects/diary-guide/keys/2/2.6 Задавайте вопросы и слушайте ответы' },
            { text: '2.7 Храните всё в одном месте', link: '/projects/diary-guide/keys/2/2.7 Храните всё в одном месте' },
            { text: '2.8 Отмечайте то, что уже реализовалось', link: '/projects/diary-guide/keys/2/2.8 Отмечайте то, что уже реализовалось' },
            { text: '2.9 Не пишите красиво', link: '/projects/diary-guide/keys/2/2.9 Не пишите красиво' },
            { text: '2.10 Делайте ABC для оценки своих эмоций', link: '/projects/diary-guide/keys/2/2.10 Делайте ABC для оценки своих эмоций' },
          ]
        },
        {
          text: '3. "Страшный" модуль',
          collapsed: true,
          items: [
            { text: '3.1 Карта внутренней территории. Как распознать и назвать свои страхи.', link: '/projects/diary-guide/keys/3/3.1 Карта внутренней территории. Как распознать и назвать свои страхи.' },
            { text: '3.2 Искусство Замечать. Где искать следы ваших страхов.', link: '/projects/diary-guide/keys/3/3.2 Искусство Замечать. Где искать следы ваших страхов.' },
            { text: '3.3 Археология души. Готовая карта для поиска источника страха.', link: '/projects/diary-guide/keys/3/3.3 Археология души. Готовая карта для поиска источника страха.' },
            { text: '3.4 Искусство Решающего Шага. От Понимания к Действию', link: '/projects/diary-guide/keys/3/3.4 Искусство Решающего Шага. От Понимания к Действию' },
            { text: '3.5 Как Настроить Свой Внутренний Компас', link: '/projects/diary-guide/keys/3/3.5 Как Настроить Свой Внутренний Компас' },
            { text: '3.6 Ежедневная Практика', link: '/projects/diary-guide/keys/3/3.6 Ежедневная Практика' },
          ]
        },
        {
          text: 'Шаблоны',
          collapsed: true,
          items: [
            { text: 'Шаблон 1', link: '/projects/diary-guide/keys/templates/Шаблон 1' },
            { text: 'Шаблон 2', link: '/projects/diary-guide/keys/templates/Шаблон 2' },
          ]
        }
      ]
    }
  ]
}
