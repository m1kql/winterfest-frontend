import { createStore } from 'vuex'
import authModule from './modules/auth'
import problemsModule from './modules/problems'

export const store = createStore({
  modules: {
    auth: authModule,
    problems: problemsModule,
  }
})