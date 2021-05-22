import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <Container>
            <Button to='/' > Simple Filter </Button>
            <Button to='/todo' > TodoList </Button>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #FFBC42;
`;

const Button = styled(NavLink)`
    all: unset;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 30px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-left: 30px;
    cursor: pointer;
    color: black;
    transition: .3s ease;
    &:hover {
        background-color: black;
        color: #FFBC42;
    }
`;