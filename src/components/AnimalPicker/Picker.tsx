import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { animalFilterState } from '../../store/animalStore/atoms';
import { ALL, ANIMALS } from '../../interfaces';

const Picker: React.FC = () => {
    const setAnimalFilter = useSetRecoilState(animalFilterState);
    return (
        <Box>
            <Button onClick={() => setAnimalFilter(ALL)} > ALL </Button>
            <Button onClick={() => setAnimalFilter(ANIMALS.DOG)}> DOG </Button>
            <Button onClick={() => setAnimalFilter(ANIMALS.CAT)}> CAT </Button>
            <Button onClick={() => setAnimalFilter(ANIMALS.PENGUIN)}> PENGUIN </Button>
            <Button onClick={() => setAnimalFilter(ANIMALS.PANDA)}> PANDA </Button>
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
    margin-bottom: 10px;
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
