import React, {useContext} from 'react';

import {recetasContext} from "../context/RecetasContext"

function Tragos() {

    const {recetas} = useContext(recetasContext);
    console.log(recetas);
    return (

        <div className="grid grid-cols-3 gap-4 p-48" >
            {recetas.map(receta =>(
                        <div className="bg-white border-4">
                            <div className="p-10 grid ">
                                <h1 className="font-semibold p-10 text-3xl text-center">{receta.strDrink}</h1>
                                <img src={receta.strDrinkThumb} alt="" />
                                <button className="bg-red-400 text-xl font-semibold text-white p-10 my-5">Ver receta</button>
                            </div>
                        </div>
                   
                           
                ))}
                
        </div>
        
        
    )
}

export default Tragos
