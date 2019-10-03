import Vue from 'vue';
import Router from 'vue-router';
import Upload from './views/Upload.vue';
import Download from './views/Download.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'upload',
      component: Upload
    },
    {
      path: '/download/:fileUrl',
      name: 'download',
      component: Download
    },
    {
      path: '*',
      name: 'pagenotfound',
      component: PageNotFound
    }
  ]
})
