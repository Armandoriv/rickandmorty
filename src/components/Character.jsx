import { useParams } from "react-router-dom";
import { getCharacter } from "../functions/functions";
import { useEffect, useState } from "react";

const Character = () => {

    const [character, setCharacter] = useState(null);

    const params = useParams()
    useEffect(() => {
        getCharacter(params.id, setCharacter)
    }, []);


    return (
        <>
        <div className="container mt-5">
            <div className="row">
            {
                character != null ? (
                    <div>
                        <img src={character.image} alt="" />
                        <div>
                            <p>{character.name}</p>
                            <p>{character.status}</p>
                        </div>
                    </div>
                ) : ("no hay na")
            }
            </div>
    
        </div>

        </>
    );
}

export default Character;
