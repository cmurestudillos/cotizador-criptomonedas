import React, { useState } from 'react';
// Estilos CSS de componentes
import styled from '@emotion/styled';

//---------------------- componentes styles ---------------------//
const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`;
//---------------------- componentes styles ---------------------//

const useCriptomoneda = (label, stateInicial, opciones) => {

    // console.log(opciones);

    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <>
            <Label htmlFor="criptomoneda">{label}</Label>
            <Select id="criptomoneda" name="criptomoneda" onChange={ e => actualizarState(e.target.value)} value={state} >
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;