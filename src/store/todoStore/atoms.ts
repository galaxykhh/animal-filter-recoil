import { atom } from "recoil"
import { ITodoListState, SHOWALL } from "../../interfaces";

export const todoListState = atom<ITodoListState[]>({
    key: 'todoListState',
    default: [],
});

export const todoListFilterState = atom<string>({
    key: 'todoListFilterState',
    default: SHOWALL,
});