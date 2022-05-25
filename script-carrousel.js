    'use strict'

    const contenedor    = document.querySelector('.carrousel_container')
    const boton         = document.querySelectorAll('.selector_carrousel')
    
    // Cuando CLICK en boton
        // Saber la posición de ese boton
        // Aplicar un transform translateX al contenedor
        // QUITAR la clase .activo de todos los botones
        // AÑADIR la clase .activo al punto que hemos hecho Click
    
    // Recorrer TODOS los punto
    boton.forEach( ( botonSeleccionado , i )=> {
        // Asignamos un CLICK a cadaPunto
        boton[i].addEventListener('click',()=>{
    
            // Guardar la posición de ese boton
            let posicion  = i
            // Calcula el espacio que debe desplazar el contenedor
            let operacion = posicion * -33
    

            contenedor.style.transform = `translateX(${ operacion }%)`
    
            // Recorremos los botones
            boton.forEach( ( cadaPunto , i )=>{
                // Quitamos la clase .activo a todos los botones
                boton[i].classList.remove('activo')
            })
            // Añadir la clase activo en el boton que hemos hecho CLICK
            boton[i].classList.add('activo')
    
        })
    })




