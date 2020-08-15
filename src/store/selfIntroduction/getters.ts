import { IState, Getters } from '@/store/types';
import * as types from './types';

const getters: Getters<types.IState, types.IGetters, IState> = {
    getSelfIntroductionModel: state => (
        {
            clickedButton: state.clickedButton,
        }
    ),
};

export default getters;