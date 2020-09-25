import React, { useContext } from 'react';
import './Booking.css';
import fakeData from "../../fakeData";
import { useHistory, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';

const Booking = () => {
    const [showPlaceArea] = useContext(UserContext);
    // const [placeArea, setPlaceArea] = useContext(UserContext);
    
    const history = useHistory();
    const handleLoginRoute = () => {
        history.push("/destination");
    };
    const {id} = useParams();
    const bookingData = fakeData.find((place) => place.id === id);
    const {name, description} = bookingData;

    return (
        <div className="booking d-flex align-items-center">
            <Container>
                <div className="row">
                    <div className="col-md-6">
                        <h1>{showPlaceArea.name}</h1>
                        <p>{showPlaceArea.description}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="booking-form">
                        <div className="">
								<div className="form-group">
									<label>Origin</label>
									<input type="text" className="form-control" placeholder="Dhaka" />
								</div>
								<div className="form-group">
									<label>Destination</label>
									<input type="text" className="form-control" placeholder={showPlaceArea.name} />
								</div>
								<div className="form-group row booking-date">
									<div className="col-6">
										<label>From</label>
										<input className="form-control" type="date" defaultValue="2020-09-01"/>
									</div>
									<div className="col-6">
										<label>To</label>
										<input className="form-control" type="date" defaultValue="2020-09-12"/>
									</div>
								</div>
								<button onClick={handleLoginRoute} type="submit" className="btn btn-block start-booking-btn p-3">Start Booking</button>
							</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Booking;