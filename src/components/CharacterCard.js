import React from "react";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";
//import CharacterList from './CharacterList';

export const CharacterCard = (props) => {


    return (
        //<span>todo: character</span>
        <Card className="">
            <CardBody>
                <CardTitle>Name: {props.charInfo.name}</CardTitle>
                <CardText>Status: {props.charInfo.status}</CardText>
                <CardText>Species: {props.charInfo.species}</CardText>
            </CardBody>
        </Card>
    );
};

export default CharacterCard;