import React, { useContext } from 'react';
import './Home.css';
import fakeData from "../../fakeData";
import { useHistory } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from '../PlaceCard/PlaceCard';
import { UserContext } from '../../App';

const Home = (props) => {
    const [placeArea, setPlaceArea] = useContext(UserContext);
    const history = useHistory();
    const placeCardData = fakeData.slice(0 , 3);
    const handleBookingRoute = () => {
        history.push(`/booking/${placeCardData[0].id}`);
    };

    return (
        <div className="home d-flex align-items-center">
            <Container>
                <div className="row">
                    <div className="col-md-5">
                        <div className="booking-description mb-md-0 mb-5">
                            <h1>{placeArea.name}</h1>
                            <p>{placeArea.description}</p>
                            <Button className="booking-btn d-flex" onClick={handleBookingRoute}>
                                <p className="ml-3 text-dark">Booking</p>
                                <FontAwesomeIcon className="arrow-icon ml-3" icon={faArrowRight}/>
							</Button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="booking-card">
                            <div className="row">
                                {
                                    placeCardData.map((place) => (
                                    <PlaceCard placeCard={place} key={place.id}></PlaceCard>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;