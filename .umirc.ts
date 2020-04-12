import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/login' },
    { path: '/login', component: '@/pages/login' },
    { path: '/config', component: '@/pages/config' },
  ],
});
