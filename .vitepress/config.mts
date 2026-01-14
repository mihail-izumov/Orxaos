import { defineConfig, DefaultTheme } from 'vitepress'
import pkg from '../package.json' with { type: 'json' }
const { version } = pkg

export default defineConfig({
  appearance: {
    initialValue: 'force-dark' as any
  },
  ignoreDeadLinks: true,
  title: 'Orxaos',
  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'Orxaos',
      description: 'От хаоса - к силе',
    },
  },

  transformPageData(pageData) {
    return pageData
  },

  buildEnd(siteConfig) {
  },

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/orxaos-icon.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/orxaos-icon.svg' }],
    ['script', {}, `
    (function() {
      function createFooterContent() {
        const links = [
          { text: 'Контакт', href: '/start' },
          { text: 'Телеграм-канал', href: 'https://t.me/izumov', target: '_blank' },
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
        html += '<div style="color: white; font-size: 14px;"><a href="https://runscale.ru" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Модуль Роста®</a> – <a href="https://cffx.ru" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Сигнал</a> – <a href="/ars_orxaos/overview" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Ars Orxaos</a></div>';
        html += '<div style="color: var(--vp-c-text-2); margin-top: 4px; font-size: 14px; text-align: center;">© Orxaos 2025</div>';
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
          applyLink.href = '/start';
          applyLink.setAttribute('target', '_self');
          applyLink.removeAttribute('rel');

          const newLink = document.createElement('a');
          newLink.href = '/start';
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
    .VPSwitchAppearance{display:none!important}
    .VPHero .name,.VPHero .text,.VPHero .tagline{color:white!important}
    .VPHero .tagline a{color:var(--vp-c-brand-2)!important;text-decoration:none;transition:all .3s ease}
    .VPHero .tagline a:hover{color:var(--vp-c-brand-1)!important;text-decoration:underline}
    .VPHero .VPButton{background-color:var(--vp-c-brand-1)!important;border-color:var(--vp-c-brand-1)!important;color:white!important;transition:all .3s ease;text-decoration:none!important}
    .VPHero .VPButton:hover{background-color:var(--vp-c-brand-2)!important;border-color:var(--vp-c-brand-2)!important;color:#000!important;transform:translateY(-2px);text-decoration:none!important}
    .VPContent a{color:var(--vp-c-brand-2);text-decoration:none;border-bottom:1px solid transparent;transition:all .3s ease}
    .VPContent a:hover{color:var(--vp-c-brand-1);border-bottom-color:var(--vp-c-brand-1)}
    .VPFeature .title,.VPFeature .link-text{transition:color .25s ease-in-out}
    .VPFeature .link-text{color:var(--vp-c-brand-1)}
    a.VPFeature.link:hover .title,a.VPFeature.link:hover .link-text{color:var(--vp-c-brand-2)}
    html:not(.dark) .VPFeature{background-color:#202124!important;border-color:#3c3c3c!important}
    html:not(.dark) .VPFeature .title{color:#C5F946!important}
    html:not(.dark) .VPFeature .details{color:rgba(235,235,245,.6)!important}
    html:not(.dark) .VPFeature .link-text{color:#347b6c!important}
    html:not(.dark) .VPFeature .link-text .icon{fill:#347b6c!important}
    html:not(.dark) a.VPFeature.link:hover{background-color:#2f2f2f!important;border-color:#555!important}
    
    :root{
      --vp-c-brand-1:#347b6c;
      --vp-c-brand-2:#C5F946;
      --vp-c-brand-3:#347b6c;
      --vp-c-brand-soft:rgba(52,123,108,.14);
      --vp-c-bg-mute:rgba(52,123,108,.1);
      --vp-c-bg-soft:rgba(52,123,108,.1);
      --vp-c-divider:rgba(52,123,108,.2);
      --vp-c-gutter:rgba(52,123,108,.1);
      --vp-c-text-2:#b3b3b3;
    }
    
    .VPNavBarTitle .logo{height:32px!important;width:auto!important}
    .VPNavBarSocialLinks{min-width:auto!important;justify-content:flex-end!important;gap:16px!important;margin-left:0!important;flex-shrink:0!important}
    
    @media (min-width:961px){
      .VPNavBar .content{gap:0!important}
      .VPNavBarMenu{margin-right:0!important}
      .VPSocialLink:not(:last-child){margin-right:4px!important}
    }
    
    @media (max-width:960px) and (min-width:769px){
      .VPNavBar .content{gap:0!important}
      .VPNavBarMenu{margin-right:0!important}
      .VPNavBarSocialLinks{margin-left:4px!important;gap:12px!important}
      .VPSocialLink:not(:last-child){margin-right:2px!important}
    }
    
    @media (max-width:768px){
      .VPNavBar .VPNavBarSocialLinks{display:none!important}
      .VPNavScreen{overflow-y:auto!important}
      .VPNavScreen .VPNavScreenMenu{padding-bottom:16px!important}
      .VPNavScreen .VPNavScreenSocialLinks,.VPNavScreen .VPNavScreenAppearance{margin:16px!important;padding:16px!important;border:1px solid var(--vp-c-divider)!important;border-radius:8px!important;background:var(--vp-c-bg-soft)!important}
      .VPNavScreen .VPNavScreenAppearance{display:none!important}
      .VPNavScreen .VPNavScreenSocialLinks{display:flex!important;flex-direction:column!important;gap:12px!important}
      .VPNavScreen .VPSocialLink{display:flex!important;align-items:center!important;justify-content:center!important;padding:0!important;background:transparent!important;border-radius:0!important;border:none!important;transition:all .3s ease!important;text-decoration:none!important}
      .VPNavScreen .VPSocialLink:hover{background:transparent!important;border-color:transparent!important}
      .VPNavScreen .VPSocialLink[aria-label="apply-link"]::after{
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        width:100%!important;
        content:"Получить ответ"!important;
        background-image:linear-gradient(-45deg, #c5f946, #85a931, #c5f946, #85a931);
        background-size:400% 400%;
        animation:liquid-fluid 6s ease infinite;
        color:#000!important;
        border:none!important;
        font-size:18px!important;
        font-weight:600!important;
        border-radius:12px!important;
        padding:18px!important;
        margin:0!important;
        height:52px!important;
        min-height:52px!important;
      }
      .footer-row{flex-direction:column!important;gap:8px!important}
      .dot-separator{display:none!important}
    }
    
    @keyframes liquid-fluid {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .VPSocialLink .vpi-social-github{display:none!important}
    .VPSocialLink{width:auto!important;height:auto!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;flex-shrink:0!important}
    .VPSocialLink[aria-label="apply-link"]::after{
      content:"Получить ответ";
      font-size:14px;
      color:#000;
      padding:8px 16px;
      border-radius:12px;
      background-image:linear-gradient(-45deg, #c5f946, #85a931, #c5f946, #85a931);
      background-size:400% 400%;
      animation:liquid-fluid 6s ease infinite;
      transition:all 0.3s ease;
      white-space:nowrap;
      margin:0;
      flex-shrink:0;
      font-weight:600;
      border:none;
    }
    .VPSocialLink[aria-label="apply-link"]:hover::after{
      background-image:linear-gradient(-45deg, #85a931, #c5f946, #85a931, #c5f946);
      color:#000;
      transform:translateY(-2px);
    }
    
    .custom-footer-links{display:flex;flex-direction:column;gap:3px;align-items:center}
    .footer-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center}
    .footer-row a{color:var(--vp-c-text-2);text-decoration:none;transition:color .3s ease}
    .footer-row a:hover{color:var(--vp-c-brand)}
    .dot-separator{color:var(--vp-c-text-3);font-weight:bold}
    .VPFooter .copyright{margin-top:2px!important}
    `]
  ],
  base: '/',
  cleanUrls: true,
  appearance: 'force-dark',
  outDir: '.vitepress/dist',
  description: 'Мечтать и действовать → Расти по своим правилам',
  themeConfig: {
    logo: '/orxaos-icon.svg',
    siteTitle: "Orxaos",
    
    sidebarMenuLabel: 'Разделы',
    outlineTitle: 'На этой странице',
    returnToTopLabel: 'Наверх',
    
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    
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
        items: sidebarGuidues()
      },
      '/meet-mikhail/': {
        items: sidebarMikhail()
      },
      '/ars/': {
        items: sidebarArs()
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
  { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/></svg>' }, link: 'https://t.me/izumov' },
  { icon: 'github', link: '/start', ariaLabel: 'apply-link', target: '_self' }
],
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Гиды',
      items: [
        { text: 'Обзор', link: '/projects/overview' },
        { text: 'Ключ к Цифровому Дневнику', link: '/projects/diary-guide/unlock/overview' },
        { text: 'Гениальная простота', link: '/projects/simple-is-smart' },
        { text: 'Rick Rubin – «The Creative Act...»', link: '/projects/the-creative-act_a-way-of-being_summary' }
      ]
    },
    {
      text: 'Дизайн',
      items: [
        { text: 'Ars Orxaos', link: '/ars/index' },
        { text: 'Проекты', link: '/ars/by-the-numbers' },
        { text: 'Галерея', link: '/ars/the-wonderful-stories-we-make' },
        { text: 'Экспресс-аудит бренда', link: '/ars/brand-express' },
        { text: 'Креативным профессионалам', link: '/ars/creatives-apply' }
      ]
    },
    {
          text: 'Компании',
          items: [
            { text: 'Модуль Роста®', link: '/runscale' },
            { text: 'Сигнал', link: '/cffx' }
          ]
        },
    {
      text: 'Михаил',
      items: [
        { text: '100 фактов обо мне', link: '/meet-mikhail/cv' },
        { text: 'Заметки', link: '/projects/nol/journal' },
        { text: 'Телеграм-канал', link: '/projects/nol' }
      ]
    }
  ]
}

function sidebarGuides(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Гиды',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/projects/overview' },
        { text: 'Ключ к Цифровому Дневнику', link: '/projects/diary-guide/unlock/overview' },
        { text: 'Гениальная простота', link: '/projects/simple-is-smart' },
        { text: '«The Creative Act: A Way of Being, Rick Rubin»', link: '/projects/the-creative-act_a-way-of-being_summary' }
      ]
    }
  ]
}

function sidebarMikhail(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Михаил',
      collapsed: false,
      items: [
        { text: '100 фактов обо мне', link: '/meet-mikhail/cv' },
        { text: 'Заметки', link: '/projects/nol/journal' },
        { text: 'Чудесная Гостиная', link: '/projects/nol' }
      ]
    }
  ]
}

function sidebarArs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Дизайн',
      collapsed: false,
      items: [
        { text: 'Ars Orxaos', link: '/ars/index' },
        { text: 'Проекты', link: '/ars/by-the-numbers' },
        { text: 'Галерея', link: '/ars/the-wonderful-stories-we-make' },
        { text: 'Экспресс-аудит бренда', link: '/ars/brand-express' },
        { text: 'Креативным профессионалам', link: '/ars/creatives-apply' }
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
        { text: 'Варианты перевода заголовка', link: '/projects/the-creative-act-rick-rubin/the-creative-act-translation' },
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
            { text: '3.1 Карта внутренней территории. Как распознать и назвать свои страхи.', link: '/projects/diary-guide/keys/3/3.1%20Карта%20внутренней%20территории%20–%20Как%20распознать%20и%20назвать%20свои%20страхи' },
            { text: '3.2 Искусство Замечать. Где искать следы ваших страхов.', link: '/projects/diary-guide/keys/3/3.2%20Искусство%20Замечать.%20Где%20искать%20следы%20ваших%20страхов.' },
            { text: '3.3 Археология души. Готовая карта для поиска источника страха.', link: '/projects/diary-guide/keys/3/3.3%20Археология%20души.%20Готовая%20карта%20для%20поиска%20источника%20страха.' },
            { text: '3.4 Искусство Решающего Шага. От Понимания к Действию', link: '/projects/diary-guide/keys/3/3.4%20Искусство%20Решающего%20Шага.%20От%20Понимания%20к%20Действию' },
            { text: '3.5 Как Настроить Свой Внутренний Компас', link: '/projects/diary-guide/keys/3/3.5%20Как%20Настроить%20Свой%20Внутренний%20Компас' }
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
