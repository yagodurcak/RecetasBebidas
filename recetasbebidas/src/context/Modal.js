import React, {createContext, useEffect, useState} from 'react';

import axios from 'axios';

export const ModalContext = createContext()

const ModalProvider = (props) => {
    
    const [idbusqueda, setidbusqueda] = useState(null);
    const [recetaModal, setRecetaModal] = useState({});

    useEffect(() => {
        
        const ModalApi = async() => {

            const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idbusqueda}`;
            const api = await axios.get(url)

            setRecetaModal(api.data.drinks[0]);
            
        }

        ModalApi()
    }, [idbusqueda]);

    return(
        <ModalContext.Provider value={{setidbusqueda, recetaModal}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
