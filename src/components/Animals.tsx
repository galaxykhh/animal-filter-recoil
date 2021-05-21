import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { filteredAnimalState } from '../store/selectors';
import { icon } from '../interfaces';

const Animals: React.FC = () => {
    const animals = useRecoilValue(filteredAnimalState);
    return (
        <Box>
            <h1 style={{ marginBottom: '30px' }} > 동물 리스트 </h1>
            {animals.map(animal => (
                <Animal key={animal.id}>
                    {animal.name}, {animal.type} {icon(animal.type)}
                </Animal>
            ))}
        </Box>
    );
};

export default Animals;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`;

const Animal = styled.div`
    font-size: 20px;
    color: white;
`;