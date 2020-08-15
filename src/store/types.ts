export interface IState {
    
}

// getter関数の引数は固定のため、インデックスシグニチャを利用して全てのgetter関数にState型とgetter関数の型参照を定義
type Getters<S, G, RS = {}, RG = {}> = {
    // [K in keyof G]: 定義されている関数名を取得
    // G[K]取得した戻り型を付与
    // RS,RG : 第３引数、第四引数については保留
    [K in keyof G]: (state:S, getters: G, rootState: RS, rootGetters: RG) => G[K]
}

type Mutations<S, M> = {
    [K in keyof M]: (state: S, payload: M[K]) => void
}

// Mで渡ってくるIMurarionのkeyofで定義されている関数名を特定する
// keyof Mは Mで定義されているプロパティ
// 関数型直前に　<T extends keyof M> と付与することでTはkeyof Mで定義されているプロパティのいずれかしか入力できなくなる
// 第一引数に、これらいずれかが入力された時、第二引数の型がM[T]として確定する
// Lookup Tyoesを利用して引数同士の関連付けを行っている
type Commit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void;
type Dispatch<A> = <T extends keyof A>(type: T, payload?: A[T], option?: any) => any;
type Context<S, A, G, M, RS, RG, RA> = {
    commit: Commit<M>;
    dispatch: Dispatch<A & RA>;
    state: S;
    getters: G;
    rootState: RS;
    rootGetters: RG;
}

type Actions<S, A, G = {}, M = {}, RS = {}, RG = {}, RA = {}> = {
    [K in keyof A]: (ctx: Context<S, A, G, M, RS, RG, RA>, payload: A[K]) => any
}

export { Actions, Mutations, Getters };