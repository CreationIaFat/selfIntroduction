import { Mutations } from '@/store/types';
import * as types from './types';

const mutations: Mutations<types.IState, types.IMutations> = {
    setCrickedButton: (state, payload) => {
        state.clickedButton = payload;
    },
};
