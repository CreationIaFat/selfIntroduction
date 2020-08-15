import Vue from 'vue';
import Vuex from 'vuex';
import { IState } from '@/store/types';
import actions from './actions'

Vue.use(Vuex);

const state: IState = {
  // clickedButton: "",
};

export default new Vuex.Store({
  state: state as any,
  actions,
  },
);




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
