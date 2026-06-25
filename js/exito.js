document.addEventListener("DOMContentLoaded", () => {

    if (!localStorage.getItem("sesionActiva")) {
        window.location.href = "login.html";
        return;
    }


    const datosGuardados = localStorage.getItem("datosReserva");
    
    if (datosGuardados) {
        const reserva = JSON.parse(datosGuardados);
        

        document.getElementById("dato1").textContent = reserva.paciente;
        document.getElementById("dato2").textContent = reserva.edad + " años";
        document.getElementById("dato3").textContent = reserva.especialidad;
        document.getElementById("dato4").textContent = reserva.fecha;
        document.getElementById("dato5").textContent = reserva.hora;
    }

    //boton cerrar sesion
    const btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.addEventListener("click", () => {
        // Eliminar toda la información almacenada
        localStorage.clear();
        // Redirigir al login
        window.location.href = "login.html";
    });
});