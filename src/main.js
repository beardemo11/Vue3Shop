import { createApp } from 'vue';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { currency, date } from './methods/filters';
import $httpMsgState from './methods/pushMsgState';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTw }),
  validateOnInput: true
});
setLocale('zh_TW');

const app = createApp(App).use(router);
// 金額千分位、時間換算
app.config.globalProperties.$filters = { currency, date };
// 彈跳訊息
app.config.globalProperties.$httpMsgState = $httpMsgState;

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', VueLoading);
app.use(VueAxios, axios);
app.mount('#app');
