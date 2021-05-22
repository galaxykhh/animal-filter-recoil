import { selector } from "recoil";
import { todoListFilterState, todoListState } from "./atoms";

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'all' :
                return list;
            case 'Completed' :
                return list.filter(item => item.isComplete);
            case 'UnCompleted' :
                return list.filter(item => !item.isComplete);
        };
    },
});