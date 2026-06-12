import type { celestialBody } from "./CelestialBody.ts";

interface CelestialBodyListProps {
    body: celestialBody | null;
    onDel: (body: celestialBody) => void;
}

export default function BodyView({ body,onDel }: CelestialBodyListProps) {

    if (!body) {
        return <h2>Wybierz planetę z listy</h2>;
    }

    return (
        <div className="bodyView">

            <div className="bodyImage">
                <img src={body.image} alt={body.name} />
            </div>

            <div className="bodyInfo">
                <h2>{body.name}</h2>

                <p>Typ: {body.type}</p>

                <p>Odległość: {body.distance}</p>

                <button onClick={() => onDel(body)} id="delButt"> Delete </button>
            </div>

        </div>
    );
}
