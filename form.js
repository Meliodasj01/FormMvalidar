document.addEventListener('DOMContentLoaded', function() { 
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nControl = document.getElementById('n-control').value.trim();   
        if (validarNumeroControl(nControl)) {
            this.submit();
        }
    });
    function validarNumeroControl(valor) {
        const regex = /^(1[8-9]|2[0-4])84\d{4}$/;  // Valida que el número comience con 18 a 24, seguido de 84 y 4 dígitos más
        if (!regex.test(valor)) {
            alert('Su Numero De Control No Pertenece a Este Itituto.');
            return false;
        }
        return true;
    }
});





















/*
document.addEventListener('DOMContentLoaded', function() {
    // Se asegura de que el código se ejecute una vez que el documento HTML esté completamente cargado.
    // 'DOMContentLoaded' es un evento que dispara la función justo cuando el DOM ha sido completamente cargado, pero antes de que se carguen las imágenes o estilos externos.

    const form = document.querySelector('form');
    // Selecciona el primer elemento <form> del documento y lo asigna a la variable `form`.
    // 'querySelector' busca el primer formulario en el DOM y lo almacena para manipularlo.

    form.addEventListener('submit', function(event) {
        // Añade un listener al formulario para que cuando se intente enviar ('submit'), se ejecute la función que sigue.
        // 'submit' es el evento que se dispara al intentar enviar el formulario.

        event.preventDefault();
        // Evita el envío automático del formulario. Sin esto, el formulario se enviaría y la página se recargaría.
        // Es necesario para poder hacer las validaciones primero y luego decidir si se envía o no.

        const nControl = document.getElementById('n-control').value.trim();
        // Obtiene el valor ingresado en el campo del número de control (con id="n-control") y elimina los espacios en blanco a los lados con `trim()`.
        // Asigna ese valor a la variable `nControl`.

        if (validarNumeroControl(nControl)) {
            // Si la función `validarNumeroControl` devuelve `true`, se procede a enviar el formulario.
            // 'this.submit()' se refiere al formulario actual en el que está sucediendo el evento.

            this.submit();
        }
    });

    function validarNumeroControl(valor) {
        // Define una función llamada `validarNumeroControl` que recibe un argumento `valor`, que es el número de control que se va a validar.

        const regex = /^(1[8-9]|2[0-4])84\d{4}$/;
        // Define una expresión regular (regex) que verifica que el número de control comience con 18-24, seguido de "84" y termine con 4 dígitos numéricos.
        // Explicación de la regex:
        // ^(1[8-9]|2[0-4]): El número debe comenzar con "18-19" o "20-24".
        // 84: Los siguientes dos caracteres deben ser "84".
        // \d{4}: Después deben venir exactamente 4 dígitos numéricos (cualquier número del 0 al 9).
        // $: Final de la cadena (asegura que no haya caracteres adicionales).

        if (!regex.test(valor)) {
            // Usa el método `test()` para comprobar si el valor cumple con el patrón definido por la regex.
            // Si el valor no coincide con la regex, se ejecuta el bloque de código dentro del `if`.

            alert('su numero de control no pertenece a este tecnologico');
            // Muestra un mensaje de alerta al usuario indicando que el número de control no cumple con el formato esperado.

            return false;
            // Devuelve `false`, indicando que la validación falló.

        }

        return true;
        // Si el valor cumple con la expresión regular, devuelve `true`, indicando que la validación fue exitosa.
    }
});*/
