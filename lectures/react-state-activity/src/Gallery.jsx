import React from "react";
import "./Gallery.css";

export default function Gallery({ galleries, selectedGalleryID, selectGalleryID }) {
    return (
        <div className="gallery">
            {galleries.map((gallery) => {
                return (
                    <button 
                        key={gallery.id}
                        className={gallery.id === selectedGalleryID ? "selected" : ""}
                        onClick={() => selectGalleryID(gallery.id)}
                    >
                        {gallery.name}
                    </button>
                );
            })}
        </div>
    );
}