import React, {createContext, useEffect, useState} from 'react';

import axios from 'axios';

export const ModalContext = createContext()

const ModalProvider = (props) => {
    
    const [idbusqueda, setidbusqueda] = useState("");
    const [recetaModal, setRecetaModal] = useState("");

    useEffect(() => {
        
        const ModalApi = async() => {

            const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idbusqueda}`;
            const api = await axios(url)

            console.log(api);
            
        }

        ModalApi()
    }, [idbusqueda]);

    return(
        <ModalContext.Provider>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
