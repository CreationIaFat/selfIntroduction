import Vue from 'vue';
import Vuex from 'vuex';
import { IState } from '@/store/types';

Vue.use(Vuex);

const state: IState = {
};

export default {
  namespaced: true,
  state,
};




// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
