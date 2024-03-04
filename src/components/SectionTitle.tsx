import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle =styled.h2 `
    color: ${theme.color.accentSecondary};
    text-align:center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    margin-bottom: 90px;

    position: relative; 

    &::before {
        content: "";
        display: inline-block; 
        width: 55px;
        height: 2px;
        background-color: ${theme.color.accentColor}; 


        position: absolute;
        left: 50%;
        bottom: -20px;
        transform: translateX(-50%);
        }
`