import React from "react";
import { useState } from 'react';
import Carousel from "./Carousel";
import "./Gallery.css";

export default function Gallery({ galleries }) {
    const [index, setIndex] = useState(0);

    return (
        <div className="gallery">
            <h1>{galleries[index].name} Photo Carousel</h1>
            <div className="gallery-btns">
                {
                    galleries.map((gallery, i) => {
                        return (
                            <button 
                                className={i === index ? "active" : ""}
                            >
                                {gallery.name}
                            </button>
                        );
                    })
                }
            </div>
            <Carousel photos={galleries[index].photos} />
        </div>
    );
}