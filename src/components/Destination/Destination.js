import React from 'react';
import './Destination.css';
import { Container } from 'react-bootstrap';
import {hotelsDetail} from '../../fakeData/hotelsDetail';
import Hotel from '../Hotel/Hotel';

const Destination = () => {
    return (
        <div className="destination">
            <Container>
                <div className="destination-top text-left mt-3">
                    <p className="guests">252 stays Apr 13-17 3 guests</p>
                    <h3 className="place">Stay in Cox’s Bazar</h3>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="destination-hotel">
                            {hotelsDetail.map((hotel) => (
                                <Hotel hotel={hotel}></Hotel>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h1>Map</h1>
				    </div>
                </div>
            </Container>
        </div>
    );
};

export default Destination;