document.addEventListener("DOMContentLoaded", () => {
    
    if (!localStorage.getItem("sesionActiva")) {
        window.location.href = "login.html";
        return;
    }

    
    const spanUsuario = document.getElementById("nombreUsuario");
    spanUsuario.textContent = localStorage.getItem("usuarioLogueado");

    const btnGuardar = document.querySelector("button");
    const divErrores = document.getElementById("errores");

    btnGuardar.addEventListener("click", () => {
        // Capturar los valores
        const nombre = document.getElementById("nombre").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const especialidad = document.getElementById("especialidad").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const motivo = document.getElementById("motivo").value.trim();

        let errores = [];

        
        if (!nombre || !edad || !especialidad || !fecha || !hora || !motivo) {
            errores.push("Todos los campos son obligatorios.");
        }

        
        if (nombre && (nombre.length < 3 || nombre.length > 100)) {
            errores.push("El nombre del paciente debe tener entre 3 y 100 caracteres.");
        }

        if (edad) {
            const edadNum = parseInt(edad);
            if (isNaN(edadNum) || edadNum < 18 || edadNum > 90) {
                errores.push("La edad debe estar entre 18 y 90 años.");
            }
        }

        
        if (errores.length > 0) {
            
            divErrores.innerHTML = `<ul>${errores.map(error => `<li>${error}</li>`).join('')}</ul>`;
        } else {
            divErrores.innerHTML = "";
            
            
            const reservaMedica = {
                paciente: nombre,
                edad: edad,
                especialidad: especialidad,
                fecha: fecha,
                hora: hora
            };
            
            localStorage.setItem("datosReserva", JSON.stringify(reservaMedica));
            window.location.href = "exito.html";
        }
    });
});