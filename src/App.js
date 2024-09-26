import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header.js";
//import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { Container, Row } from "reactstrap";
import { Route } from 'react-router-dom';

export default function App() {
    // const [chars, setChars] = useState([]);

    // useEffect(() => {  
    //     axios.get(`https://rickandmortyapi.com/api/character/`)
    //         .then(res => {
    //             console.log(res.data.results);
    //             const characterInfo = res.data.results;
    //             setChars(characterInfo);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    const [searchState, setSearchState] = useState("");
    console.log(searchState);

    const handleChange = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        setSearchState(event.target.value);
    }

    return (
        <div>
            <div>
                {/* <Header searchState={setSearchState}/> */}
                <Header />

                <input onChange={handleChange} type="text" value={searchState}/>

                <Route exact path="/" component={WelcomePage}/>
                <Route path="/WelcomePage" component={WelcomePage}/>
                {/* <Route path="/Characters" component={CharacterList}/> */}
                <Route path="/CharacterList" render= { props => <CharacterList {...props} searchState={searchState}/>}/>

                {/* <Container>
                    <Row>
                        {chars.map((item,index) => {
                                return (
                                    <CharacterCard 
                                        charInfo={item}
                                        key={index}
                                    />
                                )
                            }
                        )} 
                    </Row>
                </Container> */}
            </div>
               
        </div>
    );
}
