import React, { useState } from 'react';

const MiAplicacion = () => {
   
    const [marcador, actualizarMarcador] = useState(0);

    
    const disminuirMarcador = () => {
        actualizarMarcador(marcador - 1);
    };

    
    const reiniciarMarcador = () => {
        actualizarMarcador(0);
    };

    const AumentarMarcador  = () => {
        actualizarMarcador(marcador + 1);
    };

    return (
        <div>
            <h1>Marcador: {marcador}</h1>
            <button onClick={disminuirMarcador}>Disminuir</button>
            <button onClick={reiniciarMarcador}>Reiniciar</button>
            <button onClick={AumentarMarcador}>Aumentar</button>
        </div>
    );
};

export default MiAplicacion;
