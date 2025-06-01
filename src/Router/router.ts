import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '../Layouts/MainLayout.vue'

import Login from '../views/Login.vue'
import Register from '../views/register.vue'
import Dashboard from '../views/Dashboard.vue'
import AddExpense from '../views/AddExpense.vue'
import ExpenseList from '../views/ExpenseList.vue'

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/add', component: AddExpense },
      { path: '/expenseList', component: ExpenseList },      
    ],
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
