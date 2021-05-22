import { atom } from "recoil";
import { ALL, ANIMALS, IAnimalState } from "../../interfaces";

export const animalState = atom<IAnimalState[]>({
    key: 'animalState',
    default: [
        {
            id: 1,
            name: 'Liam',
            type: ANIMALS.DOG,
        },
        {
            id: 2,
            name: 'Elijah',
            type: ANIMALS.PANDA,
        },
        {
            id: 3,
            name: 'Olivia',
            type: ANIMALS.CAT,
        },
        {
            id: 4,
            name: 'Isabella',
            type: ANIMALS.PENGUIN,
        },
        {
            id: 5,
            name: 'Emma',
            type: ANIMALS.DOG,
        },
        {
            id: 6,
            name: 'Sebastian',
            type: ANIMALS.PANDA,
        },
        {
            id: 7,
            name: 'Ava',
            type: ANIMALS.CAT,
        },
    ]
});

export const animalFilterState = atom<string>({
    key: 'animalFilterState',
    default: ALL,
})