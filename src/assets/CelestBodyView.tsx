import type {celestialBody} from "./CelestialBody.ts";

export function BodyView(body: celestialBody)
{
    console.log(body);
}
// tak ogólnie to jak niciśniesz na coś z listy to ta funkcja jest wywołana
// zmienna body to obiekt który przechowuje dane o naciśniętej planecie (na podstawie interfaceu z CelestialBody.ts)
// sama lista jest w głównym App.tsx i jest przechowana w UseState