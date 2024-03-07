import React from 'react';
import styled from 'styled-components';
import { LinkTab } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/button/Button';


type WorkPropsType ={
    title: string
    text: string
    src: string
}


export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src ={props.src} alt="" />
                <Button>view project</Button>
            </ImageWrapper>
            
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <LinkTab href ={"#"}>demo</LinkTab>
                <LinkTab href ={"#"}>code</LinkTab>
            </Description>
            
        </StyledWork>
    );
};

const StyledWork = styled.div `
    background-color: ${theme.color.secondaryBg};
    width: 330px;
    flex-grow: 1; 


    ${LinkTab} {
        padding: 10px 0;

        & + ${LinkTab} {
            margin-left: 10px;
        }
    }


    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`
const ImageWrapper = styled.div`
    position: relative; 

    &:hover {
        /* ${Button} {
            opacity: 1;
            color: ${theme.color.fontColorHeder};
        }

        &::before {
            opacity: 1;
        } */
    }


    ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); 

    &::before {
        width: 100%;
        height: 100%;
    }
}
    

&::before {
        content: "";
        position: absolute; 
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }


    @media ${theme.media.tablet} {
        ${Button} {
            opacity: 1;
            color: ${theme.color.fontColorHeder};
        }

        &::before {
            opacity: 1;
        }
    }
`


const Image = styled.img `
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Description = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3 `
    color: ${theme.color.accentColor};
    text-transform: uppercase; 
    
`

const Text = styled.p `
    margin: 15px 0 10px;
`