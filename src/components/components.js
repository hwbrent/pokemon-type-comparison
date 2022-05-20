import React, {useState} from 'react';

const typeEffectiveness = require("../typeEffectiveness.json");

export function TypeTable() {}

export default function TypeComparer() {

    const types = Object.keys(typeEffectiveness);

    const ul = <ul>
        {types.map(type => <li>{type}</li>)}
    </ul>

    return ul;
}
