import React, {useContext} from 'react';

import {ModalContext} from"../context/Modal"
import {recetasContext} from "../context/RecetasContext"

function Tragos() {

    const {recetas} = useContext(recetasContext);
    const {setidbusqueda, recetaModal} = useContext(ModalContext)

    console.log(recetaModal);

    const mostrarCantidades = (recetaModal) => {

        let ingrediente = [];

        for (let i = 1; i < 16; i++) {
            
            if (recetaModal[`strIngredient${i}`]) {
                ingrediente.push(
                    <li>{recetaModal[`strIngredient${i}`]} {recetaModal[`strMeasure${i}`]} </li>
                )
            }
            
        }
        return ingrediente;
    }
 
    return (

        <div className="grid grid-cols-3 gap-4 p-48" >
            {recetas.map(receta => (
                <div className="bg-white border-4" key={receta.idDrink}>
                    <div className="p-10 grid ">
                        <h1 className="font-semibold p-10 text-3xl text-center">{receta.strDrink}</h1>
                        <img src={receta.strDrinkThumb} alt="" />

                        <button type="button" className="bg-red-400 text-xl font-semibold text-white p-10 my-5" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                        onClick= {() => {setidbusqueda(receta.idDrink)}}>
                            Ver receta
                        </button>



                    </div>
                </div>


            ))}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 className="modal-title text-4xl text-center font-bold" id="exampleModalLabel">{recetaModal.strDrink}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <h3 className="font-semibold text-2xl">Ingredientes y cantidades</h3>
                           <ul>
                               {mostrarCantidades(recetaModal)}
            
                           </ul>
                           <img src={recetaModal.strDrinkThumb} alt="" />
                            <h3 className="font-semibold text-2xl">Instrucciones</h3>
                           <p>{recetaModal.strInstructions}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


    )
}

export default Tragos
