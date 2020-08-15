import { Actions, } from '@/store/types';
import * as types from './types'

const acrions: Actions<
types.IState,
types.IActions,
types.IGetters,
types.IMutations
> = {
async commitCrickedButton({ commit }, payload) {
    commit('setCrickedButton', payload)
    },
};

export default actions;