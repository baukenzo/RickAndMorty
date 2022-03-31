import { useState,  useEffect} from "react";
import Gifka from '../images/gifka.gif'
import {
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    TextField
} from "@mui/material";
import { CharacterItem } from "../components/CharacterItem";

export function CharactersPage() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results)
            })
    }, [])

    return (
        <div className="charactersPage" >
            <Container maxWidth="xl">
                <h1 style={{
                    color: 'green',
                    margin: '0px',
                    marginBottom: '10px'
                            }} >Characters</h1>
                <Grid container spacing={3} >
                    {characters.map((character) => (
                        <Grid item xs={12 / 4}>
                            <CharacterItem key={character.id} character={character} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>

    )
}

