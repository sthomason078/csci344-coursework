import React from "react";
import { Image } from 'antd';
import Card from "./components/Card";
import "./App.css";

export default function App() {
    const cards = [
        {
            id: 1,
            name: "Forks",
            image_url: "https://picsum.photos/id/23/400/300",
            description: "A collection of forks."
        },
        {
            id: 2,
            name: "Puppy",
            image_url: "https://picsum.photos/id/237/400/300",
            description: "A cute puppy sitting on the floor."
        },
        {
            id: 3,
            name: "Book",
            image_url: "https://picsum.photos/id/24/400/300",
            description: "An open book siting on a table."
        }
    ]

    return (
        <main>
            <div class="cards">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        name={card.name}
                        image_url={card.image_url}
                        description={card.description}
                    />
                ))}
            </div>
            <Image
                width={200}
                alt="basic"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </main>
    );
}