import React from 'react';

function NewComponent(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    );
}

export default NewComponent;