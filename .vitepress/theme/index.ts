import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import ArsCards from '../components/ArsCards.vue'
import ArsGalleryImageSlider from '../components/ArsGalleryImageSlider.vue'
import ArsMainAccordion from '../components/ArsMainAccordion.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component('ArsCards', ArsCards)
    app.component('ArsGalleryImageSlider', ArsGalleryImageSlider)
    app.component('ArsMainAccordion', ArsMainAccordion)
    
    
  }
}
