import React, {createContext, useEffect, useState} from 'react'

import axios from 'axios';

export const recetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, setrecetas] = useState([]);
    const [busquedas, setbusquedas] = useState({});
    const [consultar, setConsultar] = useState(false);





    const {categoria, nombre}= busquedas


    useEffect(() => {

        if (consultar) {
            const RecetasApi = async () => {
            
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const recApi = await axios(url)
                setrecetas(recApi.data.drinks);
            }
    
            RecetasApi()
        }
        
        
    }, [busquedas]);

    return(
        <recetasContext.Provider value={{busquedas, setbusquedas, recetas, setrecetas, setConsultar}}>
            {props.children}
        </recetasContext.Provider>
    )
}




export default RecetasProvider
