import { IState } from "./types";
import actions from "./actions";

const state: IState = {
    clickedButton: "",
};

export default {
    namespaced: true, state, actions,
};