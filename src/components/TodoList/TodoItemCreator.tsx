import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../../store/todoStore/atoms";

const TodoItemCreator: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const setTodoList = useSetRecoilState(todoListState);

    const addTodoItem = (): void => {
        setTodoList(oldList => [
            ...oldList,
            {
                id: getId(),
                text: value,
                isComplete: false,
            },
        ]);
        setValue('');
    };

    const onChange = (e: {target: { value: string }}): void => {
        setValue(e.target.value);
    }

    const onEntered = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            addTodoItem();
            return;
        };
    };

    return (
        <Box>
            <InputBox>
                <Input type='text' value={value} onChange={onChange} onKeyPress={onEntered} />
                <AddButton onClick={addTodoItem} > Add </AddButton>
            </InputBox>
        </Box>
    );
};

let id = 0;

const getId = (): number => {
    return id++;
};

export default TodoItemCreator;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 700px;
`;

const InputBox = styled.div`
    position: relative;
    width: 340px;
    height: 60px;
    color: #FFBC42;
    border: 2px solid #FFBC42;
    border-radius: 30px;
    margin-bottom: 30px;
`;

const Input = styled.input.attrs({
    placeholder: 'todo',
    type: 'text',
})`
    all: unset;
    height: 55px;
    color: #FFBC42;
    padding-left: 30px;
`;

const AddButton = styled.button`
    all: unset;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 60px;
    height: 40px;
    border: 2px solid #FFBC42;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        color: black;
        background-color: #FFBC42;
    };
`;