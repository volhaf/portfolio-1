
import React from 'react';
import styled from 'styled-components';
import { LinkTab } from '../../../../components/Link';

// type MenuPropsType = {
//     menuItem: Array<string>
// }


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item:string, index: number ) => {
                    return <ListItem key ={index}>
                        <LinkTab href="">{item}</LinkTab>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`

    ul {
        display: flex;
        /* gap: 20px; */
        justify-content: space-between;
         max-width: 352px; 
         width: 100%; 
         margin: 0 auto 40px; 
    }
`
const ListItem = styled.li`

`


