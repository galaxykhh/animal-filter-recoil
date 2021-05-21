import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { animalFilterState } from '../store/atoms';
import { ALL, ANIMALS } from '../interfaces';

const Picker: React.FC = () => {
    const setAnimalFilter = useSetRecoilState(animalFilterState);
    return (
        <Box>
            <Button onClick={() => setAnimalFilter(ALL)} > 모든 동물 </Button>
            <Button onClick={() => setAnimalFilter(ANIMALS.DOG)}> 강아지 </Button>
            <Button onClick={() => setAnimalFilter(ANIMALS.CAT)}> 고양이 </Button>
            <Button onClick={() => setAnimalFilter(ANIMALS.PENGUIN)}> 펭귄 </Button>
        </Box>
    );
};

export default Picker;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 100px;
    height: 60px;
    margin: 20px;
    color: palevioletred;
    border: 2px solid palevioletred;
    border-radius: 3px;
    font-size: 20px;
    text-align: center;
    transition: 0.4s ease;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;
