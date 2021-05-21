import { atom } from "recoil";
import { ALL, ANIMALS, IAnimalState } from "../interfaces";

export const animalState = atom<IAnimalState[]>({
    key: 'animalState',
    default: [
        {
            id: 1,
            name: '바둑이',
            type: ANIMALS.DOG,
        },
        {
            id: 2,
            name: '똥개',
            type: ANIMALS.DOG,
        },
        {
            id: 3,
            name: '나비',
            type: ANIMALS.CAT,
        },
        {
            id: 4,
            name: '핑구',
            type: ANIMALS.PENGUIN,
        },
    ]
});

export const animalFilterState = atom({
    key: 'animalFilterState',
    default: ALL,
})