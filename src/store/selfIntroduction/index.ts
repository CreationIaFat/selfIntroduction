import { IState } from "./types";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state: IState = {
    clickedButton: "",
};

export default {
    namespaced: true, state, actions, getters, mutations,
};