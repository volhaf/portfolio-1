import React from 'react';
import styled from 'styled-components';
import { LinkTab } from '../../../../components/Link';


type WorkPropsType ={
    title: string
    text: string
    src: string
}


export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src ={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <LinkTab href ={"#"}>demo</LinkTab>
            <LinkTab href ={"#"}>code</LinkTab>
        </StyledWork>
    );
};

const StyledWork = styled.div `
    background-color: #f2d7ae;
    max-width: 540px;
    width: 100%;


    ${LinkTab} {
        padding: 10px 0;
    }
`

const Image = styled.img `
    width: 100%;
    height: 260px;
    object-fit: cover;
`


const Link = styled.a `
    
`


const Title = styled.h3 `
    
`

const Text = styled.p `
    
`