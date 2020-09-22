import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceCard.css';

const PlaceCard = (props) => {
    const { name, img, id } = props.placeCard;
    return (
        <div className="col-4">
            <Link className="single-place-card" to={`/booking/${id}`}>
                <div className="place-img">
                    <img src={img} alt=""/>
                    <h3>{name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default PlaceCard;