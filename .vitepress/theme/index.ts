import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import ArsCards from '../components/ArsCards.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component('ArsCards', ArsCards)
  }
}
