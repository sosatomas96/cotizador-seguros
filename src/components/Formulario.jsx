import React, {useState} from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display:block;
    width: 100%;
    padding: 1rem;
    border: solid 1px #e1e1e1;
    --webkit-appearance: none;
`

const InputRadio = styled.input`
    margin: 0 1rem;
`
const Boton = styled.button`
    background-color: #93329e;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 3rem;
    transition: background-color .3s ease;

    &:hover{
        background-color: #440a67;
        cursor: pointer;
    }
`

const Formulario = () => {
    const [datos, guardarDatos] = useState({
        marca:'',
        year:'',
        plan:'',
    });

    const [error, guardarError] = useState(false);

    //extraer los valores del state

    const { marca, year, plan } = datos;

    //leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envie el formulario
    const cotizarSeguro = e => {
        e.prevent.default();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
    }

    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            <Campo>
                <Label>Marca</Label>
                    <Select
                        name='marca'
                        value={marca}
                        onChange={obtenerInformacion}
                    >
                        <option value=''>--Seleccione--</option>
                        <option value='americano'>Americano</option>
                        <option value='europeo'>Europeo</option>
                        <option value='asiatico'>Asiatico</option>
                    </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                
                <Select
                    name='year'
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>

                <InputRadio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked={plan === 'basico'}
                    onChange={obtenerInformacion}
                /> Básico

                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked={plan === 'completo'}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>
            
            <Boton type='submit'>Cotizar</Boton>

        </form>
     );
}
 
export default Formulario;