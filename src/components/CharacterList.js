import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    // TODO: Add useState to track data from useEffect
    const [chars, setChars] = useState([]);
    const [display, setDisplay] = useState([]);
    console.log(props); 
    

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(res => {
                console.log(res.data.results);
                const characterInfo = res.data.results;
                setChars(characterInfo);
                setDisplay(characterInfo);
                //setDisplay(chars);
            })
            .catch((err) => {
                console.log(err);
            });
                
    }, []);
                console.log(display);
    
    useEffect(() => {
        //setDisplay([{name: "start", status: "initial", species: "first"}]);
        console.log(props.searchState);
        setDisplay(chars.filter(char => props.searchState === char.name));
    }, [props.searchState]);

    return (
        <section className="character-list">

            <h2>TODO: `array.map()` over your state here!</h2> */}
            
                <Container>
                    <Row>
                        {display.map((item,index) => {
                                return (
                                    <CharacterCard 
                                        charInfo={item}
                                        key={index}
                                    />
                                )
                            }
                        )}
                    </Row>
                </Container>
 
        </section>
    );
}

export default CharacterList;