import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';

// Объявим новую директиву

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.mount('#app');