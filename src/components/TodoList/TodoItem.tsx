import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IItem, ITodoListState } from "../../interfaces";
import { todoListState } from "../../store/todoStore/atoms";


const TodoItem: React.FC<IItem>= ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex(listItem => listItem === item);

    const replaceItemAtIndex = (arr: ITodoListState[], index: number, newValue: ITodoListState): ITodoListState[] => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }
    
    const removeItemAtIndex = (arr: ITodoListState[], index: number): ITodoListState[] => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    const editItemText = (e: {target: {value: string}}): void => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: e.target.value,
        });
        setTodoList(newList);
    };

    const toggleItemCompletion = (): void => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });
        setTodoList(newList);
    };

    const deleteItem = (): void => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    return (
        <Container>
            <ListBox>
                <InputBox>
                    <Input type='text' value={item.text} onChange={editItemText} />
                    <CheckBox checked={item.isComplete}
                        onChange={toggleItemCompletion}
                        />
                    <DeleteBtn onClick={deleteItem} > X </DeleteBtn>
                </InputBox>
            </ListBox>
        </Container>

    );
};

export default TodoItem;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 700px;
`;

const ListBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.div`
    position: relative;
    width: 340px;
    height: 60px;
    color: black;
    border: 2px solid black;
    border-radius: 30px;
    margin-bottom: 20px;
`;

const Input = styled.input.attrs({
    placeholder: 'rewrite todo',
    type: 'text',
})`
    all: unset;
    width: 250px;
    height: 55px;
    color: black;
    padding-left: 30px;
`;

const CheckBox = styled.input.attrs({
    type: 'checkbox',
})`
    position: absolute;
    top: 6px;
    right: -50px;
    width: 41px;
    height: 42px;
`;

const DeleteBtn = styled.button`
    all: unset;
    position: absolute;
    right: -100px;
    top: 6px;
    width: 40px;
    height: 40px;
    border: 1px solid grey;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    transition: .3s ease;
    color: white;
    background-color: red;
    font-size: 25px;
    &:hover {
        color: black;
    };
`;