import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { filteredTodoListState } from "../../store/todoStore/selectors";
import Picker from "./Picker";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const TodoList: React.FC = () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <Flex>
            <Picker />
            <TodoItemCreator />
            {todoList?.map(item => (
                <TodoItem key={item.id} item={item}  />
            ))}
        </Flex>
    );
};

export default TodoList;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;