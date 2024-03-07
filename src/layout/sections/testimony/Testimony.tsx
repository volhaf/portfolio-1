
import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Conteiner } from '../../../components/Conteiner';
import { IconWrapper } from '../skills/skill/Skill';
import { theme } from '../../../styles/Theme';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Conteiner>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId ={'test'}/>
                </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Conteiner>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    


    ${IconWrapper} {
        margin-bottom: 60px;
        
    }

`
