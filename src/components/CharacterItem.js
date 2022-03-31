import {styled} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Box = styled('div')`
    width: 90%;
    height: 300px;
    border-radius: 40%;
    background-image: ${(props) => `url("${props.imageUrl}");`}
    background-size: contain;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    padding: 0 0 40px 15%;
    box-sizing: border-box;
    font-family: Arvo;

    text-shadow:
    -3px -3px 0 #222,
    3px -3px 0 #222,
    -3px 3px 0 #222,
    3px 3px 0 #222,
    4px 4px 0 #fff,
    5px 5px 0 #fff,
    6px 6px 0 #fff,
    7px 7px 0 #fff;
    cursor: pointer;
    &:before {
        content: '';
        display: block;
        border-radius: 40%;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
    }
    color: white;
`;

const Title = styled('span')`
  font-weight: 500;
  font-size: 24px;
  z-index: 1;
`

export function CharacterItem({character}) {
    const navigate = useNavigate();
    return (
        <Box imageUrl={character.image} onClick={() => navigate('/characters/' + character.id)} >
            <Title>{character.name}</Title>
        </Box>
    )
}