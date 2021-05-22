import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { icon } from '../../interfaces';
import { filteredAnimalState } from '../../store/animalStore/selectors';

const Animals: React.FC = () => {
    const animals = useRecoilValue(filteredAnimalState);
    return (
        <Box>
            <h1 style={{ marginBottom: '30px' }} > Animals </h1>
            <SmallBox>
                {animals.map(animal => (
                    <Animal key={animal.id}>
                        {animal.name}, {animal.type} {icon(animal.type)}
                    </Animal>
                ))}
            </SmallBox>
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

const SmallBox = styled(Box)`
    align-items: flex-start;
    width: 210px;
`;

const Animal = styled.div`
    font-size: 20px;
    color: white;
`;