import { selector } from "recoil";
import { ALL } from "../../interfaces";
import { animalFilterState, animalState } from "./atoms";

export const filteredAnimalState = selector({
    key: 'filteredAnimalState',
    get: ({ get }) => {
        const filter = get(animalFilterState);
        const animals = get(animalState);
        if (filter === ALL) {
            return animals;
        } else {
            return animals.filter(animal => animal.type === filter);
        };
    },
});