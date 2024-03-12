import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.png';
import timerImg from '../../../assets/images/proj-2.png';
import { Conteiner } from '../../../components/Conteiner';
import {S} from './Works_Styles';


const worksItems = ['All', 'Landing page', 'React', 'spa',]; 


const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
        title: 'Timer',
        src: timerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    },
]


export const Works: React.FC= () => {
    return (
        <S.Works>
            <Conteiner>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify ={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((w)=> {
                        return <Work title={w.title} 
                                    src={w.src}
                                    text={w.text} 
                        />
                    })}
                </FlexWrapper>
            </Conteiner>
        </S.Works>
    );
};


