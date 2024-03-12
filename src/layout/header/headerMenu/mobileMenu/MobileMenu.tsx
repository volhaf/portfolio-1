
import React from 'react';
import {S} from './../HeaderMenu_Styles'
import { Menu } from '../menu/Menu';


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={true}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={true}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

