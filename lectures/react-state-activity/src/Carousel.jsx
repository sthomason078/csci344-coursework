import React from "react";
import { useState } from 'react';
import "./Carousel.css";

export default function Carousel({ photos }) {
    const [index, setIndex] = useState(0);

    function next() {
        setIndex(index === photos.length - 1 ? 0 : index + 1);
    }

    function previous() {
        setIndex(index === 0 ? photos.length - 1 : index - 1);
    }

    return (
        <div className="carousel">
            <img src={photos[index]} alt={`Photo ${index + 1}`} />
            <button className="btn btn-right" onClick={next}>{">"}</button>
            <button className="btn btn-left" onClick={previous}>{"<"}</button>
            <p className="progress">Photo {index + 1} of {photos.length}</p>
        </div>
    );
}
