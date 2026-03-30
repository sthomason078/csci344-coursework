import React from "react";
import { Image, TimePicker, Collapse } from 'antd';
import Card from "./components/Card";
import AntCard from "./components/AntCard";
import "./App.css";

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
];

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

export default function App() {
    return (
        <main>
            <div className="flex">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        name={card.name}
                        image_url={card.image_url}
                        description={card.description}
                    />
                ))}
            </div>
            <div className="flex">
                {cards.map(card => (
                    <AntCard
                        key={card.id}
                        name={card.name}
                        image_url={card.image_url}
                        description={card.description}
                    />
                ))}
            </div>
            <div>
                <Image
                    width={200}
                    alt="basic"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
            <div>
                <Collapse items={items} defaultActiveKey={['1']} onChange={key => console.log(key)} />
            </div>
            <div>
                <TimePicker onChange={(time, timeString) => console.log(time, timeString)} needConfirm />
            </div>
        </main>
    );
}