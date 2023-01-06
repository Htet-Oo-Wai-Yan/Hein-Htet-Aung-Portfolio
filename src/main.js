import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'

import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons'//FACEBOOK icon
import {faLinkedin} from '@fortawesome/free-brands-svg-icons' //linkedin icon
import {faDribbble} from '@fortawesome/free-brands-svg-icons'//dribbble icon
import {faPhone} from '@fortawesome/free-solid-svg-icons'//phone icon
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'//mail icon
import {faBehance} from '@fortawesome/free-brands-svg-icons'

library.add(faSquareFacebook,faLinkedin,faDribbble,faPhone,faEnvelope,faBehance);

createApp(App)
.component('fa',FontAwesomeIcon)
.use(router)
.mount('#app')