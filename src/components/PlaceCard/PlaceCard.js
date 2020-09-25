import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './PlaceCard.css';

const PlaceCard = (props) => {
    const [placeArea, setPlaceArea] = useContext(UserContext);
    const { name, img, id } = props.placeCard;
    return (
        <div className="col-4">
            <div className="single-place-card" >
                <div onClick={()=> setPlaceArea(props.placeCard)} className="place-img">
                    <img src={img} alt=""/>
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;