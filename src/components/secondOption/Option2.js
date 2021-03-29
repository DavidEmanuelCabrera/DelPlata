import React from 'react';
import { Anular } from './data/Anular';
import { NPileta } from './data/NPileta';
import { PAplicado } from './data/PAplicado';
import { PGancho } from './data/PGancho';
import { Viento } from './data/Viento';
import { Option1 } from '../Option1';

export const Option2 = () => {

    return (
        <div>
            <div className=" mb-3" style={{ "color": "#0789FC " }}>
                <Option1/>
                <Anular />
                <Viento />
                
                </div>
                <div className=" mb-3" style={{ "color": "#0789FC " }}>
                <PGancho />
                    <PAplicado />
                    <NPileta />
                </div>
            </div>
    )
}