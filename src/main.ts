import './assets/styles/reset.css'
import './assets/styles/utils/color.css'
import './assets/styles/utils/layout.css'
import './assets/styles/utils/typography.css'
import './assets/styles/utils/decoration.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
