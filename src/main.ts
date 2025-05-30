import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './Router/router';

const app = createApp(App);

// Toast options (optional)
const toastOptions = {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
};

app.use(router);
app.use(Toast, toastOptions);
app.mount('#app');
