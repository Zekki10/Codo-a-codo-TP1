//Eventos de click en los botones de abrir y cerrar menu 
document.querySelector("#btn-menu--open").addEventListener("click", mostrar_menu);
document.querySelector("#btn-menu").addEventListener("click", ocultar_menu);

// Cerrar el menu l hacer click en alguno de las opciones //

document.querySelector("#Inicio_menu").addEventListener("click", ocultar_menu);
document.querySelector("#Portfolio_menu").addEventListener("click", ocultar_menu);
document.querySelector("#Sobre_mi_menu").addEventListener("click", ocultar_menu);
document.querySelector("#Contacto_menu").addEventListener("click", ocultar_menu);

// Guardo en variables los elementos a los que le voy a dar estilos
nav = document.querySelector("#nav");
btn_menu_op = document.querySelector("#btn-menu--open");
background_menu = document.querySelector("#back_menu");

// declaro las funciones de mostrar y ocultar el menu

function mostrar_menu(){
    nav.style.display = "flex";
    background_menu.style.display = "flex";
    btn_menu_op.style.display = "none";
}

function ocultar_menu(){
    //Con el if me aseguro que solo se ejecute si el menu esta disponible
    if (window.innerWidth <= 720)
     {
        nav.style.display = "none";
        background_menu.style.display = "none";
        btn_menu_op.style.display = "flex";
    }
}


//la funcion resize "lee" los cambios del tamaño de la ventana

$(window).resize( function() {

    if (window.innerWidth > 720) {
        nav.style.display = "block";
        btn_menu_op.style.display = "none";
    } else {
        nav.style.display = "none";   
    } if (btn_menu_op.style.display == "none" && window.innerWidth < 720) { 
        //evita que desaparezca el boton si redimensiono la ventana de un tamaño pequeño a uno grande y vuelvo al tamaño pequeño
        btn_menu_op.style.display = "flex";
        } 

});

