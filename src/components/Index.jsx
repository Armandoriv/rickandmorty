import { useState, useEffect } from "react";
import { getCharacters } from "../functions/functions";

const Index = () => {

    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1");
    const [next, setNext] = useState(null);
    const [back, setBack] = useState(null);
    const [pages, setPages] = useState(null);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters( url, setNext, setBack, setPages, setCharacters )
    }, [url]);

    const goNext = (url) => {
        setUrl(url)
    }

    const goBack = (url) => {
        setUrl(url)
    }


    return (

        <div className="container">
            {
                back != null ? (
                    <button onClick={() => goBack(back)}className="btn btn-dark" >back</button>
                ) : ('')
            }
            {
                next != null ? (
                    <button onClick={() => goNext(next)} className="btn btn-dark">next</button>
                ) : ('')
            }
            <div className="row mt-5">
            {
                characters.map((char, index) => (
                    <div key={index} className="col">
                        <div className=" mt-4">
                            <a href={`/character/${char.id}`}>
                                <img src={char.image} alt="" />
                            </a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default Index;
