export const ANIMALS = {
    CAT: '고양이',
    DOG: '개',
    PENGUIN: '펭귄',
};

export const ALL = 'all';

export interface IAnimalState {
    id: number;
    name: string;
    type: string;
};

export const icon = (type: string) => {
    if (type === ANIMALS.DOG) return '🐶';
    if (type === ANIMALS.CAT) return '🐱';
    if (type === ANIMALS.PENGUIN) return '🐧';
};