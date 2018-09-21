/**
 * Created by superman on 2016/12/2.
 */
import App from  './App.vue'
import Router from 'vue-router'
import Vue from 'vue'
import Login from './login.vue'
import Regist from './regist.vue'

Vue.use(Router)
export default [
  {
    path: '/',
    component: Login,
    name: 'Login'
  },
  {
    path: '/regist',
    component: Regist,
    name: 'Regist'
  },
  {
    path: '/vuex-demo',
    component: App.components.VuexDemo,
    name: 'vuex-demo'
  },
  {
    path: '/movies',
    component: App.components.Movies,
    name: 'movies'
  },
  {
    path: '/movie/list',
    component: App.components.MovieList,
    name: 'movie-list'
  },
  {
    path: '/movie/subject/:id',
    component: App.components.MovieDetail,
    name: 'movie-detail'
  },
  {
    path: '/movie/search',
    component: App.components.SearchList,
    name: 'movie-search'
  }
]

