import React from "react";
import { useState } from "react";
import "./App.css";
import Gallery from "./Gallery";
import Carousel from "./Carousel";

const galleries = [
    {
        id: "nature",
        name: "Nature",
        photos: [
            "https://picsum.photos/id/164/600/430",
            "https://picsum.photos/id/116/600/430",
            "https://picsum.photos/id/182/600/430"
        ]
    },
    {
        id: "city",
        name: "City",
        photos: [
            "https://picsum.photos/id/127/600/430",
            "https://picsum.photos/id/140/600/430",
            "https://picsum.photos/id/141/600/430"
        ]
    },
    {
        id: "animals",
        name: "Animals",
        photos: [
            "https://picsum.photos/id/122/600/430",
            "https://picsum.photos/id/176/600/430",
            "https://picsum.photos/id/196/600/430",
            "https://picsum.photos/id/190/600/430"
        ]
    }
];

export default function App() {
    const [selectedGalleryID, setSelectedGalleryID] = useState(galleries[0].id);

    function getSelectedGallery(selectedGalleryID) {
        for (let i = 0; i < galleries.length; i++) {
            if (galleries[i].id === selectedGalleryID) {
                return galleries[i];
            }
        }
        return galleries[0];
    }

    const selectedGallery = getSelectedGallery(selectedGalleryID);

    return (
        <div className="app">
            <h1>{selectedGallery.name} Photo Carousel</h1>
            <Gallery
                galleries={galleries}
                selectedGalleryID={selectedGalleryID}
                selectGalleryID={setSelectedGalleryID}
            />
            <Carousel photos={selectedGallery.photos} />
        </div>
    );
}
