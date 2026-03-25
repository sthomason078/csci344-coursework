import React from "react";
import Profile from  "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";

export default function App() {
    const people = [
        {
            "id": 1,
            "name": "Anita",
            "image_url": "https://picsum.photos/id/216/100/100"
        },
        {
            "id": 2,
            "name": "Ben",
            "image_url": "https://picsum.photos/id/217/100/100"
        },
        {
            "id": 3,
            "name": "Adwaina",
            "image_url": "https://picsum.photos/id/218/100/100"
        },
        {
            "id": 4,
            "name": "Laciesha",
            "image_url": "https://picsum.photos/id/219/100/100"
        }
    ];

    function getProfileComponents() {
        return people.map(person => {
            return <Profile key={person.id} name={person.name} picture={person.image_url} />;
        });
    }

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                {getProfileComponents()}
                <ButtonCount initialValue={5} />
                <ButtonCount initialValue={10} />
                <ButtonCount initialValue={15} />
                <ButtonCount initialValue={20} />
                <ButtonCount initialValue={25} />
                <ButtonCount initialValue={30} />
            </main>
        </>
    );
}