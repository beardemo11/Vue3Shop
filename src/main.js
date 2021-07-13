import { createApp } from 'vue';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTw }),
  validateOnInput: true
});
setLocale('zh_TW');

const app = createApp(App).use(router);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueAxios, axios);
app.mount('#app');
