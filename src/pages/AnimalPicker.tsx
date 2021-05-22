import React from "react";
import styled from "styled-components";
import Animals from "../components/AnimalPicker/Animals";
import Picker from "../components/AnimalPicker/Picker";

const AnimalPicker: React.FC = () => {
    return (
        <FlexBox>
            <Picker />
            <Animals />
        </FlexBox>
    );
};

export default AnimalPicker;

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;