import React,{createContext, useEffect, useState} from 'react';

import axios from 'axios';

// primero creamos el context 

export const CategoryContext = createContext();

// llamamos al Provider
const CategoryProvider = (props) => {
    
    const [cat, setCat] = useState([]);

    useEffect(() => {

       const catApi = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        const rtdo = await axios(url)

        setCat(rtdo.data.drinks);
       }

       catApi()
        
    }, []);

    return(
        <CategoryContext.Provider value={{cat}}>
            {props.children}
        </CategoryContext.Provider>
    )
}


export default CategoryProvider
