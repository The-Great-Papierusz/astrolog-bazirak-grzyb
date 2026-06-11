
import { useState } from "react";
import type {celestialBody} from "./CelestialBody.ts";

interface Props {
    onAdd: (body: celestialBody) => void;
}

export default function CelestBodyForm({ onAdd }: Props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [distance, setDistance] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onAdd({
            id: Date.now(),
            name,
            type,
            image,
            distance
        });

        setName("");
        setType("");
        setImage("");
        setDistance("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Typ"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <input
                type="text"
                placeholder="URL obrazka"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <input
                type="number"
                placeholder="Odległość od Słońca"
                value={distance}
                onChange={(e) => setDistance(String(e.target.value))}
            />

            <button type="submit">Dodaj</button>
        </form>
    );
}
