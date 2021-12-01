import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Maternity from "./MaternityGallery";
import Family from "./FamilyGallery";
import Newborn from "./NewbornGallery";

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs style={{
                                    marginTop: '50px'
                                }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Maternity Gallery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Family Gallery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Newborn Gallery
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row style={{
                                    marginTop: '50px'
                                }} className='justify-content-center'>
                            <Col lg='8'>
                                <h1>Maternity Photos</h1>
                                <blockquote className="blockquote">
                                <p className="mt-5 mb-0">Everything grows rounder and wider and weirder, and I sit here in the middle of it all and wonder who in the world you will turn out to be.</p>
                                <footer className="blockquote-footer">Carrie Fisher</footer>
                                </blockquote>
                                <blockquote className="blockquote">
                                <p className="mt-5 mb-0">A baby will make love stronger, days shorter, nights longer, bankroll smaller, home happier, clothes shabbier, the past forgotten and the future worth living for.</p>
                                <footer className="blockquote-footer">Author Unknown</footer>
                                </blockquote>
                            </Col>
                        </Row>
                        <Row style={{
                                    marginTop: '50px'
                                }} className='justify-content-center'>  
                            <Col lg='11'>
                                <div><Maternity /></div>
                            </Col>    
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row style={{
                                    marginTop: '50px'
                                }} className='justify-content-center'>
                            <Col lg='8'>
                                <h1>Family Photos</h1>
                                <blockquote className="blockquote">
                                <p className="mt-5 mb-0">Being a family means you are part of something very wonderful. It means you will love and be loved for the rest of your life.</p>
                                <footer className="blockquote-footer">Author Unknown</footer>
                                </blockquote>
                                <blockquote className="blockquote">
                                <p className="mt-5 mb-0">the love in our family runs strong and deep, leaving us memories to treasure and keep.</p>
                                <footer className="blockquote-footer">Author Unknown</footer>
                                </blockquote>
                            </Col>
                        </Row>
                        <Row style={{
                                    marginTop: '50px'
                                }} className='justify-content-center'>  
                            <Col lg='11'>
                                <div><Family /></div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row style={{
                                    marginTop: '50px'
                                }} className='justify-content-center'>
                            <Col lg='8'>
                                <h1>Newborn Photos</h1>
                                <blockquote className="blockquote">
                                <p className="mt-5 mb-0">A new baby is like the beginning of all things - wonder, hope, a dream of possibilities.</p>
                                <footer className="blockquote-footer">Eda LaShan</footer>
                                </blockquote>
                                <blockquote className="blockquote">
                                <p className="mt-5 mb-0">You are going to get advice from a lot of people, and you can take bits and pieces, but you know innately what your child needs. You should trust that.</p>
                                <footer className="blockquote-footer">Lucy Liu</footer>
                                </blockquote>
                            </Col>
                        </Row>
                        <Row style={{
                                    marginTop: '50px'
                                }} className='justify-content-center'>  
                            <Col lg='11'>
                                <div><Newborn /></div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Gallery;