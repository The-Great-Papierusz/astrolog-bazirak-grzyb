//import { useState } from 'react'
import './App.css'
import {useState} from "react";
import type {SpaceObject} from "./assets/SpaceObject.ts";

function App() {
  // const [count, setCount] = useState(0)
    const [spaceObj, setSpaceObj] = useState<SpaceObject[]>([
        {
            id: 1,
            name: 'Mars',
            type: 'Planet',
            image: 'https://en.wikipedia.org/wiki/Mars#/media/File:Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png',
            distance: '225 Mil KM',

        },
        {
            id: 2,
            name: 'Jupiter',
            type: 'Planet',
            image: 'https://en.wikipedia.org/wiki/Jupiter#/media/File:Jupiter_OPAL_2024.png',
            distance: '590 Mil KM',

        }
    ]);

  return (
      <>
        <div id='leftSection'>
            <div className='Bodies'>
                List should be in these kinds of bodies
                And Form Below it
                Use Bodies class name
            </div>
        </div>
        <div id='mainSection'>
          Information About the Stuff goes Here

        </div>
      </>
    )
}

export default App
