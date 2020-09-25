import React, { useContext } from 'react';
import './Destination.css';
import { Container } from 'react-bootstrap';
import {hotelsDetail} from '../../fakeData/hotelsDetail';
import Hotel from '../Hotel/Hotel';
import { UserContext } from '../../App';
import Map from '../Map/Map';

const Destination = () => {
    const [showPlaceArea] = useContext(UserContext);
    return (
        <div className="destination">
            <Container>
                <div className="destination-top text-left mt-3">
                    <p className="guests">252 stays Apr 13-17 3 guests</p>
                    <h3 className="place">Stay in Cox’s  Bazar</h3>
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
                        <Map></Map>
				    </div>
                </div>
            </Container>
        </div>
    );
};

export default Destination;