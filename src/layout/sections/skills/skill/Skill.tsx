import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { theme } from '../../../../styles/Theme';


type SkillPropsType ={
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
       <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <IconImg>
                        <Icon iconId={props.iconId}/>
                    </IconImg>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
            
       </StyledSkill>
            
        
    );
};

const StyledSkill = styled.div`
    width: 380px;
    flex-grow: 1;
    padding: 60px 20px 40px;
    

    @media ${theme.media.mobile} {
        padding: 60px 0px 40px;
    }

`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase; 

`

const SkillText = styled.p`
    text-align: center;
`

const IconImg =styled.div`
    z-index: 0;
    margin: 0 auto; 
`

export const IconWrapper =styled.div`
z-index: 0; 
display: flex; 
    position: relative;


    &::before{
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        transform: rotate(45deg) translate(-50%, -50%);
        background: rgba(96, 107, 132, 0.6);

        position: absolute; 
        left: 50%;
        top: 50%;
        transform-origin: top left;
        z-index: -1; 

    }
`