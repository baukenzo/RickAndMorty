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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';




export function CharactersPage() {
    const [characters, setCharacters] = useState([]);

    const [pageInfo, setpageInfo] = useState({
        page: 1,
        total_pages: 0
    })

    const [status, setStatus] = useState('');

    const [filter, setFilter] = useState('');


    useEffect(() => {
        searchCharacters()
    }, [])


    if (!characters) {
        return (
            <h1 style={{textAlign: 'center'}}>Oopps this name doesnt exist, try correct name</h1>
        )
    }


    function searchCharacters({page = 1, statusik = status} = {}) {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}&status=${statusik}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results)
                setpageInfo({
                    page: page,
                    total_pages: data.info.pages
                })
            })
    }

    console.log(status)
    console.log(filter)
    return (
        <div className="charactersPage" >
            <Container maxWidth="xl">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <h1 style={{
                        color: 'green',
                        margin: '0px',
                        marginBottom: '10px'
                    }} >
                        Characters
                    </h1>
                    <div style={{ marginLeft: 'auto', flexGrow: 1, maxWidth: '400px' }}>
                        <FormControl color="secondary">
                            <FormLabel style={{backgroundColor: 'ActiveCaption'}} id="demo-controlled-radio-buttons-group">Status</FormLabel>
                                <div style={{backgroundColor: 'chocolate'}}>
                                    <RadioGroup color="white"
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={status}
                                        onChange={(e) => {
                                            setStatus(e.target.value)
                                            searchCharacters({statusik: e.target.value})
                                        }}
                                    >   <div style={{display: 'flex' }} className="radiowrapper">
                                            <FormControlLabel color="secondary" value="" control={<Radio />} label="All" />
                                            <FormControlLabel color="secondary" value="alive" control={<Radio />} label="Alive" />
                                            <FormControlLabel color="secondary" value="dead" control={<Radio />} label="Dead" />
                                            <FormControlLabel color="secondary" value="unknown" control={<Radio />} label="Unknown" />
                                        </div>
                                    </RadioGroup>
                                </div>
                            
                            
                        </FormControl>
                    </div>
                    <div style={{ marginLeft: '5px', backgroundColor: 'lawngreen' }}>
                        <TextField value={filter} onChange={(e) => setFilter(e.target.value)} size="small" label="Filter" />
                        <Button onClick={() => searchCharacters()}>rickme</Button>
                    </div>
                </div>
                
                
                <Grid container spacing={3} >
                    {characters.map((character) => (
                        <Grid item xs={12 / 4}>
                            <CharacterItem key={character.id} character={character} />
                        </Grid>
                    ))}
                </Grid>

                <div className="pagination">
                    <Pagination  
                        count={pageInfo.total_pages} 
                        page={pageInfo.page} 
                        onChange={(e, value) => {searchCharacters({page: value})}}
                        style={{margin: '0 auto'}} 
                        size="large" 
                          
                        color="secondary" variant="outlined" shape="rounded" />
                </div>
                
            </Container>
        </div>

    )
}

