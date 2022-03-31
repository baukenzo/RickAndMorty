import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

export function CharPage({}) {
    const params = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [params.id]);

    if (!data) {
        return (
            <div styele={{
                color: 'red',
                fontSize: '80px'
            }}>loading...</div>
        )
    }

    return (
        <div className="char__wrapper">
            <div className="char__info">
                <div className="char__basics">
                    <img src={data.image} alt={data.name}/>
                    <div>
                        <div className="char__info-name">{data.name}</div>
                        <div style={{
                            color: `${data.status !== 'Alive' ? 'red' : 'green'}`
                        }} className="char__info-status">{data.status}</div>
                        <div style={{color: 'darkgray'}} className="char__info-species">species: <span style={{color: 'blueviolet'}} >{data.species}</span></div>
                        <div style={{color: 'darkgray'}} className="char__info-gender">gender: <span style={{color: 'lightsalmon'}} >{data.gender}</span></div>
                        <div style={{color: 'darkgray'}} className="char__info-from">from: <span style={{color: 'darkmagenta'}} >{data.origin.name}</span></div>
                    </div>
                </div>
                <div className="char__episode">Episodes:</div>
                <ul className="char__episode-list">
                    {
                        data.episode.map((item, index) => (
                            <li key={index} className="char__episode-item" >{item.substring(40)}</li>
                        ))
                    }
                </ul>    
            </div>
        </div>

    )
}