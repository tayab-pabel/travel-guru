import React from 'react';
import './Hotel.css';
import star from '../../images/icon/star.png';

const Hotel = (props) => {
    const {name, specification, condition, ratings, totalReviews, cost, img} = props.hotel;

    return (
        <div className="hotel d-flex align-items-lg-center mt-4 pb-2">
            <div className="mr-4">
				<img className="hotel-img" src={img} alt=""/>
			</div>
            <div className="hotel-info">
                <h4 className="hotel-name">{name}</h4>
                <div className="condition d-flex">
                    <p>{specification.guests} guests</p>
                    <p>{specification.bedrooms} bedrooms</p>
                    <p>{specification.beds} beds</p>
                    <p>{specification.baths} baths</p>
                </div>
                <p className="condition">{condition[0]}</p>
                <p className="condition">{condition[1]}</p>
                <div className="d-flex">
                    <div className="d-flex">
                        <img className="star-icon mt-2 mr-2" src={star} alt=""/>
                        <p className='ratings'>{ratings}({totalReviews})</p>
                    </div>
                    <div className="d-flex">
                        <p className="cost ml-4">${cost}/ <span className="night">night</span></p>
                        <p className="total ml-3">$167 total</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;