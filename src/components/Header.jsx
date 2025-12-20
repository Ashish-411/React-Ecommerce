import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
function Header(){
    return(
        <MainHeader>
            <NavLink to="/"><h1 className="logo">Easy Store</h1></NavLink>
            <Nav/>
        </MainHeader>
    );
};
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display:flex;
justify-content: space-between;
aligh-items:center;
position:relative;

.logo{
font-size: 4rem;
}
`;
export default Header;
