import styled from "styled-components";
import TechStackModel from "../models/tech-stack";


const Container = styled.div`
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 50%;
    display: flex;
    margin: 5px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
`;

const TechStack = ({ name, icon }: TechStackModel): JSX.Element => {

    return <Container>
        <Image src={icon} />
    </Container>
}

export default TechStack;