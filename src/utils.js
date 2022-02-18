import {v4 as uuidv4 } from "uuid";

export function obtenerId() {
    return uuidv4();
}

export function blurOnKey(event) {
    const {code} = event;
    if (code === 'Enter' || code === 'Escape' || code ==='Tab') {
        event.target.blur();
    }
}