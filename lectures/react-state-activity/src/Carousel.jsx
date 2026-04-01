import React from "react";
import { useState, useEffect } from 'react';
import "./Carousel.css";

export default function Carousel({ photos }) {
    const [index, setIndex] = useState(0);

    useEffect(() => setIndex(0), [photos]);

    function next() {
        setIndex(index === photos.length - 1 ? 0 : index + 1);
    }

    function previous() {
        setIndex(index === 0 ? photos.length - 1 : index - 1);
    }

    return (
        <div className="carousel">
            <img src={photos[index]} alt={`Photo ${index + 1}`} />
            <button className="right" onClick={next}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <button className="left" onClick={previous}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <p className="progress">Photo {index + 1} of {photos.length}</p>
        </div>
    );
}
