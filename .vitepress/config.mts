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
    /* === ДОБАВЛЕННЫЙ КОД ДЛЯ HERO-СЕКЦИИ === */
    .VPHero .name,
    .VPHero .text,
    .VPHero .tagline {
      color: white !important;
    }
    /* === КОНЕЦ ДОБАВЛЕННОГО КОДА === */

    :root {
      --vp-c-brand-1: #2e6b5e;
      --vp-c-brand-2: #3a7d6e;
      --vp-c-brand-3: #2e6b5e;
      --vp-c-brand-soft: rgba(46, 107, 94, 0.14);
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
      background: var(--vp-c-brand-darker, var(--vp-c-brand));
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
        { text: 'Модуль Роста', link: '/projects/runscale' },
        { text: 'Парк за углом', link: '/projects/prkx' },
        { text: 'Чудесная Гостиная', link: '/projects/nol' },
        { text: 'Гениальная простота', link: '/projects/simple-is-smart' },
        { text: 'The Creative Act: A Way of Being – Саммари', link: '/projects/the-creative-act_a-way-of-being_summary' }
      ]
    },
    {
      text: 'Михаил',
      items: [
        { text: '100 фактов о Михаиле', link: '/meet-mikhail/cv' },
        { text: 'Заметки', link: '/meet-mikhail/not-a-blog' },
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
        { text: 'Проекты',
          collapsed: false, 
          items: [
            { text: 'Обзор', link: '/projects/diary-guide/unlock/overview' },
            { text: 'Что внутри', link: '/projects/diary-guide/unlock/about' },
            { text: 'Получить доступ', link: '/projects/diary-guide/unlock/pay/form' }
          ]
        },
        { text: 'Модуль Роста', link: '/projects/runscale' },
        { text: 'Парк за углом', link: '/projects/prkx' },
        { text: 'Чудесная Гостиная', link: '/projects/nol' },
        { text: 'Гениальная простота', link: '/projects/simple-is-smart' },
        { text: 'The Creative Act: A Way of Being – Саммари', link: '/projects/the-creative-act_a-way-of-being_summary' }
      ]
    }
  ]
}

function sidebarMasterplan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Мастерплан',
      collapsed: false,
      items: [
        { text: '100 фактов о Михаиле', link: '/meet-mikhail/cv' },
        { text: 'Заметки', link: '/meet-mikhail/not-a-blog' },
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
