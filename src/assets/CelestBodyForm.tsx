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
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <label>Nazwa:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="formRow">
                    <label>Typ:</label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>

                <div className="formRow">
                    <label>URL:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div className="formRow">
                    <label>Odległość:</label>
                    <input
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </div>

                <button type="submit" className="addButton">
                    Dodaj
                </button>
            </form>
        </div>

    );
}
