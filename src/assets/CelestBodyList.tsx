import type {celestialBody} from "./CelestialBody.ts";

interface CelestialBodyListProps {
    bodyList: celestialBody[];
    onSelect: (body: celestialBody) => void;
}

function CelestialBodyList({bodyList,onSelect}: CelestialBodyListProps) {
    return(
        <div id='celestBodyList'>
            {bodyList.map(
                (body) =>
                    (
                        <div
                            className='Bodies'
                            onClick={() => onSelect(body)}
                        >
                            <img src={body.image} />
                            <h3>{body.name}</h3>
                        </div>
                    )
            )}
        </div>
    )
}

export default CelestialBodyList
