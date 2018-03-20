import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedComponent from './../components/FeedComponent.vue'
import CardComponent from './../components/CardComponent.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: FeedComponent,
    },
    {
      path: '/card/:id',
      component: CardComponent,
    }


  ]
})
