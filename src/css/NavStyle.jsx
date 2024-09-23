import styled from "styled-components";

export const NavStyle = styled.section`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
}

section nav{
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
}
section nav a{
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
    margin-right: 10px;
    transition:all 0.7s;
}
section nav a:hover{
   font-size: 22px;
   
}
`