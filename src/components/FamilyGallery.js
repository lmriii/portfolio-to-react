import React from "react";
import {Card, CardImg, CardColumns} from 'reactstrap';
import { family } from "../resources/photosFamily";

// The number of columns change by resizing the window
class Family extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            famPhotos: family
        }
    }
    render() {
        const familyCard = this.state.famPhotos.map(
            photo => 
            <Card className="col border border-dark m-0 p-0 mb-3">
            <CardImg top width="100%" src={photo.url} alt={photo.name} key={photo.id}/>
            </Card>
        );
        return (
            <>
            <CardColumns style={{margin: "auto"}}>
            {familyCard}
            </CardColumns>
            </>
        )
    }
}

export default Family;