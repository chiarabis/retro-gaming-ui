import styled, {keyframes} from "styled-components";

const moovePacman = keyframes`
    0% { transform: translateX(0) }
    50% { transform: translateX(50%) }
    100% { transform: translateX(100%) }
}`;

const eat = keyframes`
    0% {
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
    }
    25% {
        clip-path: polygon(100% 60%, 44% 48%, 100% 40%);
    }
    50% {
        clip-path: polygon(100% 50%, 44% 48%, 100% 50%);
    }
    75% {
        clip-path: polygon(100% 59%, 44% 48%, 100% 35%);
    }
    100% {
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
    }
`;


const food = keyframes`
   0% { 
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-50px);
        opacity: 0;
    }
`;

export const PacmanContainer = styled.div<{ backgroundColor?: string }>`
    .pacman{
    position: absolute;
    top: 20%;
    left: 10%;
    width: 40px;
    height: 40px;
    background-color: ${({ backgroundColor = "#F8FF2A" }) => backgroundColor};
    border-radius: 100%;
    animation: moovePacman 2.1s infinite;
}
.pacman .mounth{
    clip-path: polygon(150% 20%, 150% 80%, 50% 50%);
    background-color: #fab9dd;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: eat 0.8s infinite;
}
.pacman .eye{
    position: absolute;
    top: 7px;
    left: 19px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: #0f172b;
}
.food{
    position: absolute;
    background-color: #fff;
    top: 40%;
    right: 12%;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    animation: food 2.3s infinite;
}
`;
