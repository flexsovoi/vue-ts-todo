import { createRouter, createWebHistory } from 'vue-router';
import CompletedPage from '../../pages/CompletedPage/CompletedPage.vue';
import TaskPage from '../../pages/TaskPage/TaskPage.vue';
import WelcomePage from '../../pages/WelcomePage/WelcomePage.vue';
import MainLayout from '../layouts/ui/MainLayout.vue';
const routes = [
  { path: '/', component: WelcomePage },
  {
    path: '/tasks',
    component: MainLayout,
    children: [
      { path: '', component: TaskPage },
      { path: '/completed', component: CompletedPage },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
