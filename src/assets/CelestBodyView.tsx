import type { celestialBody } from "./CelestialBody.ts";

interface Props {
    body: celestialBody | null;
}

export default function BodyView({ body }: Props) {

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
            </div>

        </div>
    );
}
