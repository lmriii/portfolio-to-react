import React from "react";
import {Card, CardImg, CardColumns} from 'reactstrap';
import { newborn } from "../resources/photosNewborn";


// The number of columns change by resizing the window
class Newborn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newPhotos: newborn
        }
    }
    render() {
        
        const newbornCard = this.state.newPhotos.map(
            photo => 
            <Card className="col border border-dark m-4">
            <CardImg top width="100%" src={photo.url} alt={photo.name} key={photo.id}/>
            </Card>
        );
        
        return (
            <>
            <CardColumns>
            {newbornCard}
            </CardColumns>
            </>
        )
    }
}

export default Newborn;