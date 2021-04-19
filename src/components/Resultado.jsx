import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
    background-color: #ffe3fe;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const TextoCotizacion = styled.p`
    background-color: #b4aee8;
    padding: 1rem;
    text-align: center;

`

const Resultado = ({cotizacion}) => {

    

    return ( 
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> : 
        
        <TransitionGroup
            component='p'
            className='resultado'
        >
            <CSSTransition
                classNames='resultado'
                key={cotizacion}
                timeout={{enter: 500, exit: 500}}
            >
                <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
            </CSSTransition>
        </TransitionGroup> 
     );
}
 
export default Resultado;