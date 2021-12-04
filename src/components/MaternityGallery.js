import React from "react";
import {Card, CardImg, CardColumns} from 'reactstrap';
import { maternity } from "../resources/photosMaternity";


// Simple card element displaying images
class Maternity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            matPhotos: maternity
        }
    }
    render() {
        const maternityCard = this.state.matPhotos.map(
            photo => 
            <Card className="col border border-dark m-0 p-0 mb-3">
            <CardImg top width="100%" src={photo.url} alt={photo.name} key={photo.id}/>
            </Card>
        );
        
        return (
            <>
            <CardColumns>
            {maternityCard}
            </CardColumns>
            </>
        )
    }
}

export default Maternity;