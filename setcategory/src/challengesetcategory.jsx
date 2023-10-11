import React, { useState } from 'react';

const MiAplicacion = () => {

  const [categoria, setCategoria] = useState('');

  
  const [listaCategorias, setListaCategorias] = useState([]);


  const manejarCambioInput = (evento) => {
    setCategoria(evento.target.value);
  };

 
  const añadirCategoria = () => {
    setListaCategorias([...listaCategorias, categoria]);

    
    setCategoria('');
  };

  return (
    <div>
      <h1>Lista de Categorías</h1>

      {/* Input para escribir texto de la categoría */}
      <input
        type="text"
        value={categoria}
        onChange={manejarCambioInput}
        placeholder="Escribe una categoría"
      />

      {/* Botón para añadir categorías */}
      <button onClick={añadirCategoria}>Añadir Categoría</button>

      {/* Mostrar la lista de categorías */}
      <ul>
        {listaCategorias.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default MiAplicacion;
