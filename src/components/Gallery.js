import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {Card, CardImg, CardText, CardColumns} from 'reactstrap';
import { maternity } from "../resources/photosMaternity";

// The number of columns change by resizing the window
class Maternity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            matPhotos: maternity
        }
    }
    render() {
        const maternityPhotos = this.state.matPhotos.map(
            photo => 
            <img src={photo.url} alt={photo.name} key={photo.id} className="m-1"/>
        );
        const maternityCard = this.state.matPhotos.map(
            photo => 
            <Card className="col border border-dark">
            <CardImg top width="100%" src={photo.url} alt={photo.name} key={photo.id}/>
            </Card>
        );
        console.log(maternityPhotos);
        
        return (
            <>
            <CardColumns style={{margin: "auto"}}>
            {maternityCard}
            </CardColumns>
            </>
        )
    }
}

export default Maternity;