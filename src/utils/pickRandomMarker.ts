import type {Marker} from "../models/Marker";

export function pickRandomMarker(set: Marker[]): Marker {
    console.log("in marker picker")

    const randomIndex = Math.floor(Math.random() * set.length);
    console.log(set[randomIndex]);
    return set[randomIndex];
}