import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { SHOWALL, TODOLIST } from '../../interfaces';
import { todoListFilterState } from '../../store/todoStore/atoms';

const Picker: React.FC = () => {
    const setTodoListFilter = useSetRecoilState(todoListFilterState);
    return (
        <Box>
            <Button onClick={() => setTodoListFilter(SHOWALL)}> ALL </Button>
            <Button onClick={() => setTodoListFilter(TODOLIST.COMPLETE)}> DONE </Button>
            <Button onClick={() => setTodoListFilter(TODOLIST.UNCOMPLETE)}> NOT YET </Button>
        </Box>
    );
};

export default Picker;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;

const Button = styled.button`
    width: 100px;
    height: 60px;
    margin: 20px;
    color: #D81159;
    border: 2px solid #D81159;
    border-radius: 30px;
    font-size: 20px;
    text-align: center;
    transition: 0.4s ease;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #D81159;
        color: white;
    }
`;