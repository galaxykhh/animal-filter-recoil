export const ANIMALS = {
    CAT: 'cat',
    DOG: 'dog',
    PENGUIN: 'penguin',
    PANDA: 'panda'
};

export const ALL = 'all';
export const SHOWALL = 'all';

export interface IAnimalState {
    id: number;
    name: string;
    type: string;
};

export const icon = (type: string) => {
    if (type === ANIMALS.DOG) return '🐶';
    if (type === ANIMALS.CAT) return '🐱';
    if (type === ANIMALS.PENGUIN) return '🐧';
    if (type === ANIMALS.PANDA) return '🐼'
};

export interface ITodoListState {
    id: number;
    text: string;
    isComplete: boolean;
};

export interface IItem {
    item: ITodoListState;
};

export const TODOLIST = {
    COMPLETE: 'Completed',
    UNCOMPLETE: 'UnCompleted',
};