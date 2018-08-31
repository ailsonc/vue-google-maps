import Vue from 'vue'
import Router from 'vue-router'
import ContratanteHeat from '@/pages/ContratanteHeat'
import Contratante from '@/pages/Contratante'
import Contratantes from '@/pages/Contratantes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contratantes',
      component: Contratantes
    },
    {
      path: '/contratanteHeat/:data',
      name: 'ContratanteHeat',
      component: ContratanteHeat
    },
    {
      path: '/contratante/:data',
      name: 'Contratante',
      component: Contratante
    }
  ]
})
