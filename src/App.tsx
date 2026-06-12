//import { useState } from 'react'
import './App.css'
import {useState} from "react";
import type {celestialBody} from "./assets/CelestialBody.ts";
import CelestialBodyList from "./assets/CelestBodyList.tsx";
import CelestBodyForm from "./assets/CelestBodyForm";
import BodyView from "./assets/CelestBodyView.tsx";


function App() {
  // const [count, setCount] = useState(0)
    const addBody = (body: celestialBody) => {
        setCelestBody([...celestBody, body]);
    };
    const delBody = (body: celestialBody) => {
        setCelestBody(celestBody.filter(b => b !== body));
        setSelectedBody(null);
    };
    const [selectedBody, setSelectedBody] = useState<celestialBody | null>(null);
    const [celestBody, setCelestBody] = useState<celestialBody[]>([
        {
            id: 1,
            name: 'Mars',
            type: 'Planet',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/960px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png',
            distance: '225 Mil KM',

        },
        {
            id: 2,
            name: 'Jupiter',
            type: 'Planet',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter_OPAL_2024.png/960px-Jupiter_OPAL_2024.png',
            distance: '590 Mil KM',

        }
    ]);

  return (
      <>
          <div id='leftSection'>

              <CelestialBodyList
                  bodyList={celestBody}
                  onSelect={setSelectedBody}
              />
          </div>
        <div id='mainSection'>
            <h1>ASTROLOG</h1>

            <BodyView body={selectedBody} onDel={delBody} />
            <div id='coolerFormContainer'>
                <CelestBodyForm onAdd={addBody} />
            </div>
            
        </div>
      </>
    )
}

export default App
