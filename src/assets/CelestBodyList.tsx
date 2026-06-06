import type {celestialBody} from "./CelestialBody.ts";
import {BodyView} from "./CelestBodyView.tsx";

interface CelestialBodyListProps {
    bodyList: celestialBody[]
}

function CelestialBodyList({bodyList}: CelestialBodyListProps) {
    return(
        <div id='celestBodyList'>
            {bodyList.map(
                (body) =>
                    (
                        <div className='Bodies' onClick={() => BodyView(body)}>
                            <img src={body.image} />
                            <h3>{body.name}</h3>
                        </div>
                    )
            )}
        </div>
    )
}

export default CelestialBodyList