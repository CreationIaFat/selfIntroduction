interface SelfIntroductionModel {
    clickedButton: string;
}

export interface IState {
    clickedButton: string;
}

export interface IActions {
    commitCrickedButton: string;
}

export interface IGetters {
getSelfIntroductionModel: SelfIntroductionModel;
}

export interface IMutations {
    setCrickedButton: string;
}
