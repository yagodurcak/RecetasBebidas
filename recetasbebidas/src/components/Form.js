import React, {useContext, useState} from 'react';

import { CategoryContext } from '../context/CategoryContext';
import { recetasContext } from '../context/RecetasContext';
import styled from '@emotion/styled';

const FormInput = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    /* background-color: blue; */
    justify-content: space-evenly;
    align-items: center;
`
const Inuput = styled.input`
    height: 50px;
    width: 500px;
    padding: 5px;
    border: 1px solid gray;
`
const Select = styled.select`
     position: relative;
  font-family: Arial;
  /* background-color: blue; */
  border: 1px solid gray;
  height: 50px;
    width: 500px;
    padding: 5px;
`

function Form() {

    const {cat} = useContext(CategoryContext);
    const {busquedas, setbusquedas, recetas, setrecetas, setConsultar} = useContext(recetasContext);

    const [busqueda, setBusqueda] = useState({
        nombre:"",
        categoria:""
    });

 

    const guardarBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, categoria} = busqueda;

    const busquedaSubmit = (e) => {
        e.preventDefault();

        setbusquedas(busqueda)
        setConsultar(true)

    }




    return (
        <div >
            <h1 className='text-center text-2xl p-10 font-semibold'>Busqueda de Bebidas por categoria o ingrediente</h1>
            <form action="" onSubmit={busquedaSubmit}>
               <FormInput >
                    <Inuput type="text" placeholder='Busqueda por ingrediente' onChange={guardarBusqueda} name="nombre" value={nombre}/>
               
                    <Select name="" id="" onChange={guardarBusqueda} name="categoria" value={categoria}>
                        <option value="cat" >Seleccione la categoria</option>
                        {cat.map(tipos=> (
                            <option value={tipos.strCategory} key={tipos.strCategory} >{tipos.strCategory}</option>
                        ))}
                   
                    </Select>                
                    <button className='bg-red-400 text-center text-2xl px-10 py-3 font-semibold text-white border-2' type= "submit">Buscar Bebidas</button>   
                </FormInput>                
            </form>
        </div>
    )
}

export default Form
